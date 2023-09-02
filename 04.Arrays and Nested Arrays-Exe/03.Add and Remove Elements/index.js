function addAndRemoveElements(input){
    let result=[];
    let number=1;
    for(let i=0;i<input.length;i++){
        if(input[i]===`add`){
            result.push(number);
            number++;
        }
        else if(input[i]===`remove`){
            result.pop();
            number++;
        }

    }
    if(result.length===0){
        console.log(`Empty`);
    }
    else{
        console.log(result.join(`\n`));
    }

}
addAndRemoveElements(['add','add','add','add'])