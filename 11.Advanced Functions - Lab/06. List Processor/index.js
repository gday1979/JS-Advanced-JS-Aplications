function listProcessor(input){
    let commandExecutor = (function () {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list = list.filter(x => x != item),
            print: () => console.log(list)
        }
    })();

    for (let command of input) {
        let [commandName, arg] = command.split(' ');
        commandExecutor[commandName](arg);
    }
}