function magicMatrices(matrix){
    let sum=matrix[0].reduce((a,b)=>a+b,0);
    let isMagic=true;
    for(let i=0;i<matrix.length;i++){
        let currentSum=matrix[i].reduce((a,b)=>a+b,0);
        if(currentSum!==sum){
            isMagic=false;
        }

    }
    for(let col=0;col<matrix[0].length;col++){
        let currentSum=0;
        for(let row=0;row<matrix.length;row++){
            currentSum+=matrix[row][col];
        }
        if(currentSum!==sum){
            isMagic=false;
        }
    }
    console.log(isMagic);


}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
    )