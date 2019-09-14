'use strict';

function mergeSort(arr) {
  if(arr.length < 2) return arr;
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  let result = [];
  let l = 0;
  let r = 0;
  while(l < left.length && r < right.length) {
    if(left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }  
  return result.concat(left.slice(l)).concat(right.slice(r));
}

module.exports = mergeSort;