const arr: Array<number> = [4, 6, 11, 12, 109, 1331, 13, 10, 12, 10, 74];

const linearSearch = (array: Array<number>, item: number): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) continue;
    return i;
  }

  return -1;
}

console.log(linearSearch(arr, 6));
