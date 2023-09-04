function storeCatalogue(input) {
    let catalogue = {};

    input.forEach(line => {
        let [name, price] = line.split(' : ');
        price = Number(price);
        let initial = name[0];

        if (!catalogue.hasOwnProperty(initial)) {
            catalogue[initial] = {};
        }

        let products = catalogue[initial];
        products[name] = price;
    });

    let sortedInitials = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (let initial of sortedInitials) {
        console.log(initial);

        let products = catalogue[initial];
        let sortedProducts = Object.keys(products).sort((a, b) => a.localeCompare(b));

        for (let product of sortedProducts) {
            console.log(`  ${product}: ${products[product]}`);
        }
    }
}