function townPopulation(input){
    let result={};
    for(let i=0;i<input.length;i++){
        let [town,population]=input[i].split(' <-> ');
        if(result[town]!==undefined){
            result[town]+=Number(population);
        }
        else{
            result[town]=Number(population);
        }
    }
    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }


}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
