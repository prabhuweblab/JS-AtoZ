var colors = ["red", "blue", "orange", "green"];
var nums = [1, 2, 3, 4, 5, 6];

let d = 0,
  sum = 0;

//-------------------------------- old way
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i] + i);
}
//-------------------------------- eeg1
colors.forEach(function (color) {
  console.log(color + d);
  d++;
});

//-------------------------------- eg2

function add(num) {
  sum += num;
}

nums.forEach(add);

console.log(sum);
