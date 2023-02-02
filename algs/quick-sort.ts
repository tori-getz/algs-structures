const arr: Array<number> = [14, 129, 63, 90, 1, 28, 27, 19, 20];

const quickSort = (array: Array<number>) => {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex: number = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less: Array<number> = [];
  let greater: Array<number> = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue; 

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [ ...quickSort(less), pivot, ...quickSort(greater) ];
}

console.log(quickSort(arr))
