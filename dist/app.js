const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const inquiryCategories = {
  "new-website": {
    "label": "New informational website",
    "prompts": [
      "What does your business do?",
      "Which pages or information do you need?",
      "What should visitors do next: call, email, or request a quote?",
      "Do you have text, photos, or a domain ready?",
      "What is your target timing and approximate build budget?"
    ]
  },
  "redesign": {
    "label": "Redesign an existing website",
    "prompts": [
      "What is your current website address?",
      "What works, and what needs to change?",
      "Which pages or features should stay?",
      "Do you control the domain and website accounts?",
      "What is your target timing and approximate budget?"
    ]
  },
  "booking": {
    "label": "Online booking or appointments",
    "prompts": [
      "What services will customers book?",
      "How many staff members or calendars are involved?",
      "Do you already use a booking platform?",
      "Will customers pay when booking?",
      "What is your target timing and approximate budget?"
    ]
  },
  "store": {
    "label": "Online store or product sales",
    "prompts": [
      "What products do you sell: physical, digital, or both?",
      "About how many products and variations are there?",
      "Do you already use a store or payment platform?",
      "How will products be delivered or shipped?",
      "What is your target timing and approximate budget?"
    ]
  },
  "custom": {
    "label": "Custom features or customer accounts",
    "prompts": [
      "What should customers or staff be able to do?",
      "Are accounts, dashboards, or integrations needed?",
      "What tools do you already use?",
      "What types of information are involved? Please do not send actual private records.",
      "What is your target timing and approximate budget?"
    ]
  },
  "existing-project": {
    "label": "An existing project or website help",
    "prompts": [
      "What is your project reference or website address?",
      "What change or problem do you need help with?",
      "If something is broken, what steps lead to the problem?",
      "When did it start, and which device or browser are you using?",
      "Is there a specific deadline? Please do not include passwords."
    ]
  },
  "general": {
    "label": "A general question",
    "prompts": [
      "What would you like to know?",
      "Which service or package are you considering, if any?",
      "What information would help us give you a useful answer?"
    ]
  }
};
const form = document.getElementById("lead-form");
if (form) {
  const status = document.getElementById("form-status");
  const submitButton = form.querySelector('button[type="submit"]');
  const category = document.getElementById("inquiry-category");
  const message = document.getElementById("inquiry-message");
  const prompts = document.getElementById("template-prompts");
  const intro = document.getElementById("template-intro");
  const insert = document.getElementById("insert-template");
  const templateStatus = document.getElementById("template-status");
  const subject = form.querySelector('[name="subject"]');
  const submitLabel = submitButton.textContent;
  const promptText = () => {
    const item = inquiryCategories[category.value];
    return item ? item.prompts.map(prompt => prompt + "\n[Your answer]").join("\n\n") : "";
  };
  const updateCategory = () => {
    const item = inquiryCategories[category.value];
    prompts.replaceChildren();
    intro.textContent = item ? "Helpful questions for: " + item.label : "Select a category above to see the questions for your message.";
    for (const prompt of item ? item.prompts : []) {
      const li = document.createElement("li");
      li.textContent = prompt;
      prompts.appendChild(li);
    }
    insert.disabled = !item;
    subject.value = item ? "Coal River Standard — " + item.label + " (%{submissionId})" : "Coal River Standard website inquiry (%{submissionId})";
    templateStatus.textContent = "";
    category.setCustomValidity("");
    message.setCustomValidity("");
  };
  category.addEventListener("change", updateCategory);
  message.addEventListener("input", () => message.setCustomValidity(""));
  insert.addEventListener("click", () => {
    const text = promptText();
    if (!text) return;
    if (message.value.includes(text)) {
      templateStatus.textContent = "These prompts are already in your message. Replace [Your answer] with your details.";
      return;
    }
    const next = message.value.trim() ? message.value + "\n\n" + text : text;
    if (next.length > message.maxLength) {
      templateStatus.textContent = "Your message is too long to add all the prompts. Keep your draft and use the questions above.";
      return;
    }
    message.value = next;
    message.setCustomValidity("");
    templateStatus.textContent = "Prompts added. Replace [Your answer] with your details; your existing text has been kept.";
    message.focus();
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    status.textContent = "";
    category.setCustomValidity(inquiryCategories[category.value] ? "" : "Choose a message category.");
    for (const field of form.querySelectorAll('input[required], textarea[required]')) {
      field.setCustomValidity(field.value.trim() ? "" : "Please complete this field.");
    }
    if (message.value.trim().length < 20 || /\[Your answer\]/.test(message.value)) {
      message.setCustomValidity("Add your details and replace or remove every [Your answer] prompt before sending.");
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      updateCategory();
      status.textContent = "Thanks—your message was submitted. We’ll review it and reply using the email you provided.";
    } catch {
      status.textContent = "We couldn’t submit your message. Your draft is still here; please try again.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = submitLabel;
    }
  });
  for (const field of form.querySelectorAll('input[required]')) {
    field.addEventListener("input", () => field.setCustomValidity(""));
  }
  updateCategory();
}
