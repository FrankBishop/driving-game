var carIcon = document.querySelector('img');
var i = 0;

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.code === 'ArrowLeft') {
    carIcon.className = 'left car';
  } else if (event.code === 'ArrowRight') {
    carIcon.className = 'right car';
  } else if (event.code === 'ArrowDown') {
    carIcon.className = 'down car';
  } else if (event.code === 'ArrowUp') {
    carIcon.className = 'up car';
  } else if (event.code === 'Space') {
    carIcon.style.position = 'absolute';
    carIcon.style.left = 'px';
    setInterval(moveAcross, 16);
  }
}

function moveAcross() {
  i += 3;
  var increment = i + 'px';
  carIcon.style.left = increment;
}
