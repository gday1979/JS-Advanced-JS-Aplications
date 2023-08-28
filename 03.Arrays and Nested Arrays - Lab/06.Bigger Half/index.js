function biggerHalf(numbers) {
  return numbers
  .sort((a, b) => a - b)
  .slice(Math.floor(numbers.length / 2));
  
  
}
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])