function wordsUppercase(input) {
    let result = input.match(/\w+/gim)
        .map(x => x.toUpperCase())
        .join(', ');
    console.log(result);
}