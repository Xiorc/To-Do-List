const gretForm = document.querySelector('.js-gretForm'),
  gretInput = gretForm.querySelector('input'),
  greetings = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
  SHOWING_CN = 'showing';

function saveName(user) {
  localStorage.setItem(USER_LS, user);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = gretInput.value;
  showingGreetings(currentValue);
  saveName(currentValue);
}

function askForName() {
  gretForm.classList.add(SHOWING_CN);
  gretForm.addEventListener('submit', handleSubmit);
}

function showingGreetings(user) {
  gretForm.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerText = `Hello ${user}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    showingGreetings(currentUser);
  }
}

function init() {
  loadName();
}

init();
