function carFactory(input){
    let result={};
    result.model=input.model;
    if(input.power<=90){
        result.engine={power:90,volume:1800};
    }
    else if(input.power<=120){
        result.engine={power:120,volume:2400};
    }
    else{
        result.engine={power:200,volume:3500};
    }
    if(input.carriage==='hatchback'){
        result.carriage={type:'hatchback',color:input.color};
    }
    else{
        result.carriage={type:'coupe',color:input.color};
    }
    if(input.wheelsize%2===0){
        input.wheelsize--;
    }
    result.wheels=[input.wheelsize,input.wheelsize,input.wheelsize,input.wheelsize];
    return result;



}
