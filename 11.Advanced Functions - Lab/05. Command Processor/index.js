function commandProcessor() {
    let result = '';
    return {
        append: (str) => result += str,
        removeStart: (n) => result = result.slice(n),
        removeEnd: (n) => result = result.slice(0, -n),
        print: () => console.log(result)
    }
}