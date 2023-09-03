function objectFactory(library, orders) {
    return orders.map(compose);

    function compose(order) {
        const result = Object.assign({}, order.template);
        for (let part of order.parts) {
            result[part] = library[part];
        }
        return result;
    }
}
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {

        console.log(`${this.name} is scanning a document`);
    }
};