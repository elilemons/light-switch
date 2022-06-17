let on = false;
const body = document.getElementsByTagName('body')[0];
const switchContainer = document.getElementsByClassName('switch-container')[0];
const switchTop = document.getElementsByClassName('switch-top')[0];
const switchBottom = document.getElementsByClassName('switch-bottom')[0];
const onColor = '#ffffff';
const offColor = '#000000';

function handleSwitch() {
  if (on) {
    switchTop.style.backgroundColor = onColor;
    switchBottom.style.backgroundColor = offColor;
    body.style.backgroundColor = onColor;
  } else {
    switchTop.style.backgroundColor = offColor;
    switchBottom.style.backgroundColor = onColor;
    body.style.backgroundColor = offColor;
  }
  on = !on;
}

// Make sure we start with the light off
(() => {
  console.log('On load', { switchTop });
  if (!on) {
    switchTop.style.backgroundColor = onColor;
    switchBottom.style.backgroundColor = offColor;
  }
})();
