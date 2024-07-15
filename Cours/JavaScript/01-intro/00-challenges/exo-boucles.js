for (let index = 1; index <= 10; index++) {
    console.log(`${index}`);

}


const numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {

    console.log(numbers[index]);
    index++;
}


for (let porte = 0; porte < 10; porte++) {
    if (porte % 2 == 0) {
        console.log("ouverture de la porte");
    } else {
        console.log("fermeture de la porte");
    }

}

let total = 0;
for (let index = 0; index <= 10; index += 2) {

    total += index;


}
console.log(total);


console.log("*****", "\n*****", "\n*****", "\n*****", "\n*****");


const size = 5;
for (let i = 0; i < size; i++) {


    let trait = "";
    for (let i = 0; i < size; i++) {


        trait += "*";

    }
    console.log(trait);

}

const number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${number} = ${number * i}`);

}

