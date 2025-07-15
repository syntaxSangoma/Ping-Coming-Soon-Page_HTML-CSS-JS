const form = document.querySelector("#subscribeForm");
const input = form.querySelector("input[type='email']");
const submitButton = form.querySelector(".submit-button");
const message = form.querySelector(".message");

if (form && input && submitButton && message) {
  function setError(msg) {
    input.classList.add("invalid");
    message.textContent = msg;
    message.style.display = "block";
    message.classList.add("error-message");
    message.classList.remove("success-message");
    submitButton.disabled = true;

    form.style.gap = window.matchMedia("(min-width: 992px)").matches
      ? "0px"
      : "20px";
  }

  function setSuccess(msg) {
    input.classList.add("valid");
    message.textContent = msg;
    message.style.display = "block";
    message.classList.add("success-message");
    message.classList.remove("error-message");
    submitButton.disabled = false;

    form.style.gap = window.matchMedia("(min-width: 992px)").matches
      ? "0px"
      : "20px";
  }

  function resetFormUI() {
    input.classList.remove("valid", "invalid");
    message.classList.remove("error-message", "success-message");
    message.textContent = "";
    message.style.display = "none";
    submitButton.disabled = false;
    input.value = "";

    form.style.gap = window.matchMedia("(min-width: 992px)").matches
      ? "0px"
      : "10px";
  }

  input.addEventListener("input", () => {
    const value = input.value.trim();
    const isEmpty = value === "";
    const isValueValid = input.validity.valid;

    input.classList.remove("valid", "invalid");
    input.classList.remove("error-message", "success-message");

    if (isEmpty) {
      setError("Empty field");
    } else if (!isValueValid) {
      setError("Please provide a valid email address");
    } else {
      setSuccess("Looks good!");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    resetFormUI();
  });
}
