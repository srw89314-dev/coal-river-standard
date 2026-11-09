const CONTACT_EMAIL = "";

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("lead-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!CONTACT_EMAIL) {
    status.textContent = "Almost ready—contact delivery will be connected before public launch.";
    return;
  }

  const data = new FormData(form);
  const subject = encodeURIComponent(`Website inquiry from ${data.get("business")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nBusiness: ${data.get("business")}\nEmail: ${data.get("email")}\nCurrent site: ${data.get("currentSite") || "None provided"}\n\nGoal:\n${data.get("goal")}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = "Opening your email app…";
});
