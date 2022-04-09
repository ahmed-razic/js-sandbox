const today = new Date();

console.log(today);
console.log(today.getDate()); //month
console.log(today.getDay()); //day
console.log(today.getFullYear()); //year
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime());

let birthday = new Date('1-6-1976');
birthday = new Date('2/18/1955');
birthday = new Date('november-10-1978 15:48:55');
birthday = new Date('november-10-1979 15:48:55');

console.log(birthday);

const myDate = new Date();
myDate.setDate(11);
myDate.setMonth(11);
myDate.setFullYear(2222);
myDate.setHours(22);
myDate.setTime(1556545456654);

console.log(myDate);
