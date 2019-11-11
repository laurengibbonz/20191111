
const items = document.querySelectorAll('.item'),
      controls = document.querySelectorAll('.control'),
      headerItems = document.querySelectorAll('.item-header'),
      descriptionItems = document.querySelectorAll('.item-description'),
      activeDelay = .76,
      interval = 5000;

let current = 0;

//Add click functionality to controls; set current slides
function init() {
    controls.forEach(function(control) {control.addEventListener('click', clickedControl)});
    controls[current].classList.add('active');
    items[current].classList.add('active');
}

function nextSlide() { // Increment current slide and add active class
    reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
}

function clickedControl(e) { // Add active class to clicked control and corresponding slide
    reset();

    const control = e.target,
          dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach(function(item, index) { 
        if (index === dataIndex) { // Add active class to corresponding slide
            item.classList.add('active');
        }
    })
    current = dataIndex; // Update current slide
}

function reset(){ // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
}

init();
