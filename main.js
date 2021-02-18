var carIcon = document.querySelector('img');

// var carDirection = [
//   {
//     direction: 'left'
//   },
//   {
//     direction: 'right'
//   },
//   {
//     direction: 'up'
//   },
//   {
//     direction: 'down'
//   }
// ];

document.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.code === 'ArrowLeft') {
    carIcon.className = 'left car';
  } else if (event.code === 'ArrowRight') {
    carIcon.className = 'left right car';
  } else if (event.code === 'ArrowDown') {
    carIcon.className = 'down car';
  } else if (event.code === 'ArrowUp') {
    carIcon.className = 'up car';
  }
}
