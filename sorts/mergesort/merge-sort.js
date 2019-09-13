'use strict';

// pseudocode

// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
           
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0

//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
            
//         k <-- k + 1

//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left

// function mergeSort(arr) {
//   let n = arr.length;
//   if (n > 1) {
//     let mid = n/2;
//     let left = arr[0, ...mid];
//     let right = arr[mid;...n];
//     mergeSort(left);
//     mergeSort(right);
//     mergeSort(left, right, arr);
//   } 
// }

// function merge(left, right, arr) {
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while(i < left.length && j < right.length) {
//     i++;
//   } else { 
//     arr[k] = right[j];
//     j++;
//   }
//   k++;

//   if(i = left.length) {
//     arr = right[mid...n];
//   } else {
//     arr = left[0...mid];
//   };
// };

function mergeSort(arr){
  var len = arr.length;
  if(len <2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right =arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  return result.concat(left.slice(l)).concat(right.slice(r));
}

module.exports = mergeSort;