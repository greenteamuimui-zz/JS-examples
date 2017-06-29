// Array.prototype.bubblesort = function() {
//
//   for (i = 0; i < this.length - 1; i++) {
//     for (j = 0; j < this.length - 1 - i;
//       j++) {
//
//
//       if (this[j] > this[j + 1]) {
//         let x = this[j];
//         let y = this[j + 1];
//         this[j] = y;
//         this[j + 1] = x;
//       }
//
//     }
//   }
//   return this;
// }
//
// console.log([4, 2, 1, 3].bubblesort())


String.prototype.substring = function() {
  let ans = [];
  for (i = 0; i < this.length; i++) {
    for (j = i +1 ; j <= this.length; j++) {
      ans.push([this.slice(i, j)])
    }
  }
  return ans;
}

console.log("hello world".substring())






// Array.prototype.myReduce = function(callback, initialValue) {
//   let arr = this;
//   if (!initialValue) {
//     initialValue = arr[0];
//     arr = arr.slice(1);
//   }
//
//   let result = initialValue;
//   arr.myEach((el) => (
//     result = callback(result, el)
//   ))
//
//   return result;
// };
//
// let myCrazyArray = [1,2,3];
//
// const catFunction = (x, el) => {
//   return (x + el);
// };
//
// console.log(myCrazyArray.myReduce(catFunction)) //6
// console.log(myCrazyArray.myReduce(catFunction, 3)) //9
