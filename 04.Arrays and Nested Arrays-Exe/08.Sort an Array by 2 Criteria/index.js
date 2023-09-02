function sortArrayByTwoCriteria(arr) {
  arr.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b, undefined, { sensitivity: 'base' });
    }
    return a.length - b.length;
  });
  console.log(arr.join('\n'));
}
console.log(sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']))