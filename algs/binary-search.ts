const arr: Array<number> = [4, 6, 11, 12, 109, 1331, 13, 10, 12, 10, 74];

const binarySearch = (array: Array<number>, item: number): number => {
  let start: number = 0;
  let end: number = array.length;
  let middle: number;
  let found: boolean = false;
  let position: number = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    if (item < array[middle]) {
      end = middle - 1;
    } else {
      end = middle + 1;
    }
  }

  return position;
}

const recursiveBinarySearch = (array: Array<number>, item: number, start: number, end: number) => {
  let middle = Math.floor((start + end) / 2);

  if (item === array[middle]) {
    return middle;
  }

  if (array.length < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1);
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(binarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 6, 0, arr.length));
