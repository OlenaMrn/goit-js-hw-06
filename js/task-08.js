const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  if (Array.from(formData.values()).some((value) => value === "")) {
    alert("Всі поля повинні бути заповнені");
    return;
  }

  formData.forEach((value, name) => {
    console.log(name, value);
  });

  event.target.reset();
}
