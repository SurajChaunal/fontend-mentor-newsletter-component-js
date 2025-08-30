const subscriptionEl = document.querySelector(".subscribe-section");
const successEl = document.querySelector(".success-section");
const userFormEl = document.getElementById("user-form");
const errorEl = document.querySelector(".error");
const dismissBtnEl = document.querySelector(".action-btn--dismiss");
const userEmailEl = document.querySelector(".user-email");
// const emailInputEl = document.querySelector(".email");
userFormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const userEmail = new FormData(this).get(`user-email`);
  // console.log(userEmail);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(userEmail)) {
    subscriptionEl.style.display = `none`;
    successEl.style.display = "flex";
    userEmailEl.textContent = userEmail;
    this.reset();
  } else {
    errorEl.textContent = `valid email required`;
  }
});

dismissBtnEl.addEventListener("click", () => {
  subscriptionEl.style.display = `grid`;
  successEl.style.display = "none";
});
