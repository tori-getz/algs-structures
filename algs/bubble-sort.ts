const arr: Array<number> = [14, 129, 63, 90, 1, 28, 27, 19, 20];

const bubbleSort = (array: Array<number>) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
}

console.log(bubbleSort(arr));
