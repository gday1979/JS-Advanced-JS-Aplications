function createFormatter(separator, symbol, symbolFirst, formatter) {
  return function (value) {
    return formatter(separator, symbol, symbolFirst, value);
  };
}
