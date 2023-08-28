function lastKNumbersSequence(n, k) {
  const sequence = [1];
  
  for (let i = 1; i < n; i++) {
    const sum = sequence.slice(-k).reduce((acc, val) => acc + val, 0);
    sequence.push(sum);
  }
  
  return sequence;
}
lastNumbersKSequence(8,2);