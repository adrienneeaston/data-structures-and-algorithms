'use strict';

// pseudocode

// InsertionSort(int[] arr)
  
// FOR i = 1 to arr.length

//   int j <-- i - 1
//   int temp <-- arr[i]
  
//   WHILE j >= 0 AND temp < arr[j]
//     arr[j + 1] <-- arr[j]
//     j <-- j - 1
    
//   arr[j + 1] <-- temp



function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1; 

    while(j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }
  return arr;
}

module.exports = insertionSort;