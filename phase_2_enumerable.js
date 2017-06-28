// Array.prototype.myEach = function(fxn) {
//   for (let i = 0; i < this.length; i++) {
//     fxn(this[i])
//   }
// }
//
// const cherrysFunction = function(n) {
//   console.log(`this is ${n}`)
// }
//
//
// arr = [1, 6, 7]
// arr.myEach(cherrysFunction)


// function myEach(arr, fxn) {
//   for (let i = 0; i < arr.length; i++) {
//       fxn(arr[i])
//   }
// }

// const cherrysFunction = function(n) {
//   console.log(`this is ${n}`)
// }


// arr = [1, 6, 7];
// myEach(arr, cherrysFunction)

// Array.prototype.myMap = function(fxn) {
//   let ans = [];
//   this.myEach(fxn);
//
//   for (let i = 0; i < this.length; i++) {
//     ans.push(fxn(this[i]))
//   }
//   return ans;
// }
// Array.prototype.myMap = function(fxn) {
//   let ans = [];
//   this.myEach(function (el) {
//     ans.push(fxn(el));
//   })
//   // this.myEach(el => ans.push(fxn(el)));
//   return ans;
// }
//
// arr = [1,2,3];
// const chrisFunction = function(n) {
//   return (n * 2);
// };
//
// console.log(arr.myMap(chrisFunction));

Array.prototype.myEach = function(fxn) {
  for (let i = 0; i < this.length; i++) {
    fxn(this[i])
  };
};

Array.prototype.myReduce = function(callback, initialValue) {
  let arr = this;
  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;
  arr.myEach((el) => (
    result = callback(result, el)
  ))

  return result;
};

let myCrazyArray = [1,2,3];

const catFunction = (x, el) => {
  return (x + el);
};

console.log(myCrazyArray.myReduce(catFunction)) //6
console.log(myCrazyArray.myReduce(catFunction, 3)) //9
