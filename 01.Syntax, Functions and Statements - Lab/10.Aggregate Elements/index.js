function aggregateElements(elements){
    let sum=elements.reduce((a,b)=>a+b,0);
    let inverseSum=elements.reduce((a,b)=>a+1/b,0);
    let concat=elements.reduce((a,b)=>a+b,' ');
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);

}
aggregateElements([1,2,3]);