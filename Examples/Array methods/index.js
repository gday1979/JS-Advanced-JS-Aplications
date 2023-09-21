//01.REDUCE
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10
//examples
const array=[1,2,3,4,5,6,7,8,9,10];
const sum=array.reduce((acc,curr)=>acc+curr,0);

//02.MAP
const array10 = [1, 4, 9, 16];
const map1 = array10.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
//examples
const array2=[1,8,19,25 ,36];
const map=array2.map(x=>x*4);
console.log(map);

//03.Filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

//04.Pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

//05.Push
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
//examples
const names=['pesho','gosho','ivan'];
const count1=names.push('misho','tisho');
console.log(count1);
console.log(names);

//06.Shift
const array3 = [1, 2, 3];
const firstElement = array3.shift();
console.log(array3);
// expected output: Array [2, 3]

console.log(firstElement);

//07.Unshift
const array4 = [1, 2, 3];
console.log(array4.unshift(4, 5));
// expected output: 5

console.log(array4);

//08.Slice
const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals1.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals1.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals1.slice(1, 5));


//09.Splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//10.Sort
const months1 = ['March', 'Jan', 'Feb', 'Dec'];
months1.sort();
console.log(months1);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array5 = [1, 30, 4, 21, 100000];
array5.sort();
console.log(array5);
// expected output: Array [1, 100000, 21, 30, 4]

//11.Reverse
const array6 = ['one', 'two', 'three'];

console.log('array6:', array6);
// expected output: "array6:" Array ["one", "two", "three"]

const reversed = array6.reverse();



