// declaration/definition de fonction
function addvalues(num1, num2) {
    return num1 + num2;
}

const firstValue = addvalues(3, 4);
const secondValue = addvalues(12, 34);


console.log(firstValue);
console.log(secondValue);

// expression d'une fonction

const add = function (num1, num2) {
    return num1 + num2;
};

const thirdValue = add(5, 6);
console.log(thirdValue);

// fonction flechée
// const multiply = (num1, num2) =>{
// return num1 * num2;
// };

//* raccourci
const multiply = (num1, num2) => (num1 * num2);

const values = [firstValue, secondValue, multiply(5, 6)];
console.log(values);
