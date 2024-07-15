//function fullName(firstName, lastName) {
//    return (`FirstName: ${firstName.toUpperCase()}\nLastName: ${lastName.toUpperCase()}`);
//}
//console.log(fullName('John', 'Doe'));
function fullNameObject(person){
    return (`FirstName: ${person.firstName.toUpperCase()}\nLastName: ${person.lastName.toUpperCase()}`);
}
const guy = [{firstName: 'John', lastName: 'Doe'}, {firstName: 'Jane', lastName: 'Doe'}];

guy.forEach((person) => {
   console.log(fullNameObject(person));
});
console.log(fullNameObject(guy[0]));