const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../dist/app.js'),'utf8');
function field(value=''){
 return {value,textContent:'',error:'',maxLength:3000,events:{},children:[],setCustomValidity(s){this.error=s;},addEventListener(n,fn){this.events[n]=fn;},replaceChildren(){this.children=[];},appendChild(x){this.children.push(x);},focus(){this.focused=true;}};
}
function setup(ok=true){
 const nodes={year:field(),'form-status':field(),'inquiry-category':field(),'inquiry-message':field(),'template-prompts':field(),'template-intro':field(),'insert-template':field(),'template-status':field()};
 const subject=field();const name=field('Example');const email=field('client@example.com');const button=field();button.textContent='Send my message';
 const message=nodes['inquiry-message'],category=nodes['inquiry-category'];
 const form=field();let posts=[];
 form.querySelector=s=>s.includes('subject')?subject:button;
 form.querySelectorAll=s=>s.includes('textarea')?[name,email,message]:[name,email];
 form.checkValidity=()=>![name,email,message,category].some(x=>x.error)&&message.value.trim().length>=20;
 form.reportValidity=()=>form.reported=true;
 form.reset=()=>{message.value='';category.value='';};
 nodes['lead-form']=form;
 class Data{constructor(){this.entries=[['category',category.value],['goal',message.value],['subject',subject.value],['email',email.value]];}[Symbol.iterator](){return this.entries[Symbol.iterator]();}}
 vm.runInNewContext(source,{document:{getElementById:id=>nodes[id],createElement:()=>field()},Date,URLSearchParams,FormData:Data,fetch:async(url,options)=>{posts.push({url,body:new URLSearchParams(options.body)});return {ok};}});
 return {nodes,form,posts,subject,name,button,message,category};
}
const submit=s=>s.form.events.submit({preventDefault(){}});
test('shared script runs safely on other pages',()=>{
 vm.runInNewContext(source,{document:{getElementById:()=>null},Date});
});
test('category prompts preserve a written draft and avoid duplicate insertion',()=>{
 const s=setup();s.message.value='My existing business introduction.';s.category.value='booking';s.category.events.change();
 assert.equal(s.nodes['template-prompts'].children.length,5);
 assert.match(s.subject.value,/Online booking/);
 s.nodes['insert-template'].events.click();const once=s.message.value;
 assert.ok(once.startsWith('My existing business introduction.'));
 s.nodes['insert-template'].events.click();assert.equal(s.message.value,once);
});
test('blank, unknown category and unanswered prompts cannot send through handler',async()=>{
 const s=setup();s.message.value='A sufficiently detailed project question.';
 await submit(s);assert.equal(s.posts.length,0);
 s.category.value='store';s.category.events.change();s.nodes['insert-template'].events.click();
 await submit(s);assert.equal(s.posts.length,0);assert.match(s.message.error,/replace or remove/);
 s.message.value='A sufficiently detailed project question.';s.message.events.input();s.name.value='   ';
 await submit(s);assert.equal(s.posts.length,0);
});
test('valid inquiry posts its category and categorized subject',async()=>{
 const s=setup();s.category.value='general';s.category.events.change();s.message.value='I would like to understand the five-page business package.';
 await submit(s);assert.equal(s.posts.length,1);assert.equal(s.posts[0].url,'/');
 assert.equal(s.posts[0].body.get('category'),'general');assert.match(s.posts[0].body.get('subject'),/general question/);
 assert.equal(s.message.value,'');assert.equal(s.button.disabled,false);assert.match(s.nodes['form-status'].textContent,/submitted/);
});
test('failed submission keeps the written message for retry',async()=>{
 const s=setup(false);s.category.value='redesign';s.category.events.change();s.message.value='Please help replace my existing business website.';const draft=s.message.value;
 await submit(s);assert.equal(s.message.value,draft);assert.equal(s.category.value,'redesign');assert.equal(s.button.disabled,false);assert.match(s.nodes['form-status'].textContent,/draft is still here/);
});
