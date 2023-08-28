function cookingByNumbers(...input){
    let number = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');