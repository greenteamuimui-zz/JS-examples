
//ARRAY UNIQ
// Array.prototype.uniq = function () {
//   let ans = [];
//   for (let i = 0; i < this.length; i++ ) {
//     if (!ans.includes(this[i])) {
//       ans.push(this[i]);
//     }
//   }
//   return ans
// }
//
// ar = [1,1,2,3,3]
// console.log(ar.uniq())


// Array.prototype.twosum = function () {
//   let ans = [];
//   for (let i = 0; i < this.length - 1; i++ ) {
//     for (let j = i+1; j < this.length; j++ ) {
//       if (this[i] + this[j] === 0) {
//         ans.push([i,j]);
//       }
//     }
//   }
//   return ans
// }
//
// ar = [1,-1,2,3,-3]
// console.log(ar.twosum())


Array.prototype.transpose = function () {
  let ans = [];
  for (let i = 0; i < this.length; i++ ) {
    let ans_2 = []
    for (let j = 0; j < this[i].length; j++ ) {
      ans_2.push(this[j][i])
    }
    ans.push(ans_2)
  }
  return ans
}

// ar = [[1, 2, 3],[3, 4, 5]]
ar = [[1, 2],[3, 4]]
console.log(ar.transpose())
