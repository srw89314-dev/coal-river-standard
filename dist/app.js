document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("lead-form");
const status = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Sending…";
  status.textContent = "";

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    });

    if (!response.ok) throw new Error("Submission failed");

    form.reset();
    status.textContent = "Thanks—your request is in. We’ll reply after reviewing your business.";
  } catch {
    status.textContent = "We couldn’t send that yet. Please try again in a moment.";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Request my free preview";
  }
});
