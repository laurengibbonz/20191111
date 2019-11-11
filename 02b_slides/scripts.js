const items = document.querySelectorAll('.item'),
      controls = document.querySelectorAll('.control'),
      headerItems = document.querySelectorAll('.item-header'),
      descriptionItems = document.querySelectorAll('.item-description'),
      activeDelay = .76,
      interval = 5000;

let current = 0;

function init() {

}

function nextSlide() {

}

function clickedControl(e) {

}

function reset() {
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
}

//Challenge advance the slide when keyboard (32) pressed

init();