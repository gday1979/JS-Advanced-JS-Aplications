function townsToJson(input){
    let result=[];
    for(let i=1;i<input.length;i++){
        let [empty,town,lat,long]=input[i].split(/\s*\|\s*/);
        let obj={Town:town,Latitude:Number(lat).toFixed(2),Longitude:Number(long).toFixed(2)};
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
townsToJson(['| Town | Latitude | Longitude |','| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |'])