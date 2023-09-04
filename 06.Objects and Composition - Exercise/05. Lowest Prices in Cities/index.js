function lowestPriceInCity(input){
    let result={};
    for(let i=0;i<input.length;i++){
        let [town,product,price]=input[i].split(` | `);
        price=Number(price);
        if(!result[product]){
            result[product]={};
        }
        result[product][town]=price;
    }
    for(let product in result){
        let sorted=Object.entries(result[product]).sort((a,b)=>a[1]-b[1]);
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }

    
}