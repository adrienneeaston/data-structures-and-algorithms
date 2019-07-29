'use strict';

const mergeLists = (listA, listB) => {

  if(arguments.length !==2) {
    return 'Enter two lists please!';
  }

  if(!listA.head) {return listB.head;}
  if(!listB.head) {return listA.head;}

  let currentA = listA.head;
  let currentB = listB.head;

  while(currentA.next && currentB.next) {
    // breaks links
    let nodeTempA = currentA.next;
    let nodeTempB = currentB.next;
    //connects
    // currentA.next = currentB;
    // currentA = currentA.next;
    // currentA.next = nodeTempA; 
    // currentA = currentA.next;
    // currentB = nodeTempB;
    currentA.next = currentB;
    currentB.next = nodeTempA;
    currentA = nodeTempA;
    currentB = nodeTempB; 
  };

  currentA.next = currentB;
  if(currentA.next) {
    currentA.next = currentB;
  }

  // If(!currentA.next && !currentB.next) {
  //   currentA.next = currentB;
  //   currentA = currentB;
  //   currentA.next = null;
  // };

  return listA.head;
};

// add edge cases for lists different sizes, lists empty, one list is empty