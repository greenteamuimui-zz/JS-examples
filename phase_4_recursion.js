//RECURSION WITH JAVASCRIPT

// RANGE
// function range (start, end) {
//   if (start === end) {
//     return [start];
//   } else {
//     console.log(range(start, end - 1))
//     return range(start, end - 1).concat([end]);
//   }
// }
//
//
// console.log(range(6, 9))

//SUMREC
// function sumRec (arr) {
//   if (arr.length === 1) {
//     return arr[0];
//   } else {
//     console.log(arr.slice(0, arr.length - 1));
//     return sumRec(arr.slice(0, arr.length - 1)) + arr[arr.length - 1];
//   }
// }
//
// console.log(sumRec([1, 2, 3, 4]))


// EXPONENT1
// function exponent1(base, exp) {
//   if (exp === 0){
//     return 1;
//   } else {
//     return (base * exponent1(base, exp - 1));
//   }
// }
//
// console.log(exponent1(3, 2))


//EXPONENT2
// function exponent2(base, exp) {
//   if (exp === 0){
//     return 1;
//   } else if (exp % 2 === 0) {
//     return (Math.pow(exponent2(base, exp / 2), 2));
//   } else {
//     return base * (Math.pow(exponent2(base, (exp - 1) / 2), 2));
//   }
// }
//
// console.log(exponent2(3, 2))


//FIBONACCI
// function fibonacci(n) {
//   if (n === 1) {
//     return [1];
//   } else if (n === 2) {
//     return [1, 1];
//   } else {
//     let prev = fibonacci(n-1);
//     return prev.concat(prev.slice(-1)[0] + prev.slice(-2)[0]);
//   }
// }
//
// console.log(fibonacci(7))



// function bsearch(arr, target) {
//   let mid = Math.floor((arr.length / 2));
//
//   if (arr.length === 0) {
//     return -1;
//   } else if (target < arr[mid]) {
//     return bsearch(arr.slice(0, mid), target);
//   } else if (target === arr[mid]) {
//     return mid;
//   } else {
//     let result = bsearch(arr.slice(mid + 1), target);
//     return !result ? -1 : (result + mid + 1);
//   }
// }
//
// console.log(bsearch([1, 4, 7, 9, 11, 204, 9000], 4))
// console.log(bsearch([1, 4, 7, 9, 11, 204, 9000], 204))
// console.log(bsearch([1, 4, 7, 9, 11, 204, 9000], 8))


function mergesort(arr, callback) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  let sorted_left = mergesort(left);
  let sorted_right = mergesort(right);
  console.log(callback)
  return callback(sorted_left, sorted_right);
}

const merge = function(m_left, m_right) {
  let ans = [];
  console.log(m_left)
  while (m_left.length > 0 && m_right.legnth > 0) {
    ans.concat(m_left[0] < m_right[0] ? m_left.shift : m_right.shift );
  }
  return (ans + m_left + m_right);
}

console.log(mergesort([5, 2, 6, 1, 2], merge()))
