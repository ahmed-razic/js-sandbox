const color = 'green';

switch (color) {
  case 'yellow':
    console.log(`color is ${color}`);
    break;
  case 'red':
    console.log(`color is ${color}`);
    break;
  case 'green':
    console.log(`color is ${color}`);
    break;
  case 'blue':
    console.log(`color is ${color}`);
    break;
  default:
    console.log('There is no color');
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'sun';
    break;
  case 1:
    day = 'mon';
    break;
  case 2:
    day = 'tue';
    break;
  case 3:
    day = 'wed';
    break;
  case 4:
    day = 'thu';
    break;
  case 5:
    day = 'fri';
    break;
  case 6:
    day = 'sat';
    break;
  default:
    console.log('Day is not defined');
    break;
}

console.log(day);
