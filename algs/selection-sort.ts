const arr: Array<number> = [14, 129, 63, 90, 1, 28, 27, 19, 20];

const selectionSort = (array: Array<number>) => {
  for (let i = 0; i < array.length; i++) {
    let indexMin = 1;
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[indexMin])  {
        indexMin = j; 
      }
    }
    
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  return array;
}

console.log(selectionSort(items));
