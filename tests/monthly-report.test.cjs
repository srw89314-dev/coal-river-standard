'use strict';
const assert=require('node:assert/strict');const {render,compare}=require('../reporting/monthly-report.cjs');
const d={site:'Fictional Test',period:'October 2026',source:'Manual fictional test only',current:{visitors:0,sessions:20,pageviews:35,inquiries:null,phoneClicks:2,emailClicks:0},previous:{visitors:0,sessions:10,pageviews:0,inquiries:3,phoneClicks:0,emailClicks:0}};
const out=render(d);
assert.match(out,/Not available/);assert.match(out,/Comparison unavailable/);assert.match(out,/New activity; percentage change undefined/);assert.match(out,/\+100\.0%/);assert.match(out,/DRAFT — OWNER REVIEW REQUIRED/);assert.match(out,/Clicks are not verified leads/);
assert.equal(compare(0,0),'No change (both periods zero)');
assert.throws(()=>render({...d,current:{visitors:-1}}));
assert.throws(()=>render({...d,reviewStatus:'APPROVED'}));
console.log('Report draft tests passed');
