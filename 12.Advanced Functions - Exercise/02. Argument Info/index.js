function argumentInfo() {
  const types = {};
  for (const arg of arguments) {
    const type = typeof arg;
    console.log(`${type}: ${arg}`);
    if (!types[type]) {
      types[type] = 0;
    }
    types[type]++;
  }
  const sortedTypes = Object.keys(types).sort((a, b) => types[b] - types[a]);
  for (const type of sortedTypes) {
    console.log(`${type} = ${types[type]}`);
  }
}