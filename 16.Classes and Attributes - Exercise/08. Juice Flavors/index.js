function juiceFlavours(arr){
    let juices = {};
    let bottles = {};
    arr.forEach(element => {
        let [juice, quantity] = element.split(' => ');
        quantity = Number(quantity);
        if(!juices.hasOwnProperty(juice)){
            juices[juice] = 0;
        }
        juices[juice] += quantity;
        if(juices[juice] >= 1000){
            bottles[juice] = Math.floor(juices[juice] / 1000);
        }
    });
    for (const key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
juiceFlavours(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);