//* Strutures de contrôle

// 1
function checkNumber() {
    const input = prompt("Veuillez saisir un nombre");

    if (input % 2 === 0) {
        console.log("Le nombre est pair");
    } else {
        console.log("Le nombre est impair");
    }
}

// 2
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        const isMultipleOf3 = i % 3 === 0;
        const isMultipleOf5 = i % 5 === 0;

        if (isMultipleOf3 && isMultipleOf5) {
            console.log("FizzBuzz");
        } else if (isMultipleOf3) {
            console.log("Fizz");
        } else if (isMultipleOf5) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// 2
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

// 3
function factorial(n) {
    let result = 1;

    for (let i = n; i > 1; i--) {
        result *= i;
    }

    return result;
}

// const factorial = (n) => {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// };

// 3
function arraySum(array) {
    let result = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result += element;
    }

    return result;
}

// const arraySum = (array) =>
//   array.reduce((result, num) => result + num, 0);

//* Tableaux

const array = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    array[i] = randomNumber;
    // pareil
    // array.push(randomNumber);
}

function highAndLowNumber(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return {min, max};
}

// const highAndLowNumber = (arr) => ({
//   min: Math.min(...arr),
//   max: Math.max(...arr),
// });

function reverseArray(arr) {
    const reversedArray = [];
    let j = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        reversedArray[j] = element;
        j++;
    }

    return reversedArray;
}

// console.log(array);
// const reverseArray = (arr) => arr.toReversed();

// console.log(reverseArray(array));
// console.log(array);

function includes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }

    return false;
}

// console.log(array);
// console.log(includes(array, 42));

function concat(arr1, arr2) {
    const newArr = [];
    let j = 0;

    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];

        if (!includes(newArr, element)) {
            newArr[j] = element;
            j++;
        }
    }

    for (let k = 0; k < arr2.length; k++) {
        const element = arr2[k];

        if (!includes(newArr, element)) {
            newArr[j] = element;
            j++;
        }
    }

    return newArr;
}

// const concat = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

// console.log(array);
// console.log([1, 2, 3, 4, 5]);
// console.log(concat(array, [1, 2, 3, 4, 5]));

//* Objets

const person = {
    name: "John Doe",
    age: 25,
    city: "Paris",
    sayHi() {
        console.log(
            `${this.name}, ${this.age} ans, habite à ${this.city}`
        );
    },
};

person.sayHi();

const book = {
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    publicationDate: 1943,
    displayInfo() {
        console.log(
            `${this.title}, écrit par ${this.author}, publié en ${this.publicationDate}`
        );
    },
};

book.displayInfo();

const circle = {
    radius: 5,
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
    getArea() {
        return Math.PI * this.radius ** 2;
    },
};

console.log(circle.getPerimeter());
console.log(circle.getArea());
