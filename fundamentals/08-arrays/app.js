const nums = [23, 24, 225, 45, 489, 678, 9, -89];
const nums2 = new Array(2, 3, 4, 6, 78);
const fruit = ['apple', 'peach', 'banana', 'plumb'];
const mixed = [
  'car',
  true,
  function hi() {
    console.log('Hi');
  },
  { a: 1, b: 2, c: 3 },
];

val = nums;
val = nums.concat(nums2);
val = nums.length;
val = Array.isArray(nums2);
val = nums[3];
val = nums.indexOf(-89);

//Mutating arrays

nums.push(250);
nums.unshift(1);

//console.log(val);
//console.log(nums);

nums.pop();
nums.shift();

//console.log(nums);

val2 = nums2.splice(1, 2);
//console.log(val2);
//console.log(nums2);

val = nums.sort();
val = fruit.sort();

val = nums.sort(function (x, y) {
  console.log(x, y, x - y);
  return x - y;
});

val = nums.sort(function (x, y) {
  console.log(x, y, x - y);
  return y - x;
});

console.log(val);

const nums3 = [34, 56, 78, 13, 9, 76];

val = nums3.find((num) => {
  return num > 70;
});
console.log(val);

console.log(mixed[mixed.length - 2]);

//push(), pop(), unshift(), shift(), splice(), sort((x,y)=>return x-y), find((num)=>{return num>50})
