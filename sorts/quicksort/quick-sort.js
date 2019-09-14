'use strict';

function quickSort(arr, left, right) {
  var len = arr.length, 
  pivot,
  position;

 if(left < right) {
   pivot = right;
   position = partition(arr, pivot, left, right);
   
  quickSort(arr, left, position - 1);
  quickSort(arr, position + 1, right);
 }
 return arr;
};

function partition(arr, pivot, left, right) {
  var pivotValue = arr[pivot],
      position = left;

  for(var i = left; i < right; i++) {
   if(arr[i] < pivotValue) {
     swap(arr, i, position);
     position++;
   }
 }
 swap(arr, right, position);
 return position;
};
       
function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
   
module.exports = quickSort;