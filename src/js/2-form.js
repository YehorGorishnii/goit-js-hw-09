const Key = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function infoForm(form) {
  const email = form.email.value;
  const message = form.message.value;
  return {
    email,
    message,
  };
}

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(infoForm(form));
  localStorage.removeItem(Key);
  form.reset();
});

form.addEventListener('input', event => {
  event.preventDefault();
  const formData = infoForm(event.currentTarget);
  localStorage.setItem(Key, JSON.stringify(formData));
});

function setInfo() {
  const userInfo = localStorage.getItem(Key);
  if (userInfo) {
    const data = JSON.parse(userInfo);
    form.email.value = data.email;
    form.message.value = data.message;
  }
}

setInfo();
