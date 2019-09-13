'use strict';

function mergeSort(arr){
  var len = arr.length;
  if(len < 2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, len);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var result = [],
      lenL = left.length,
      lenR = right.length,
      l = 0,
      r = 0;
  while(l < lenL && r < lenR){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  return result.concat(left.slice(l)).concat(right.slice(r));
}

module.exports = mergeSort;