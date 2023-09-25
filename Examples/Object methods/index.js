//01.Object.assign()

const target={a:1,b:2};
const source={b:4,c:5};

const returnedTarget=Object.assign(target,source);
console.log(target);
// expected output: Object {a:1,b:4,c:5}

console.log(returnedTarget);

//02.object.hasownproperty()
const object1 = {};
object1.property1 = 42;
