class Account {
  bank = "caisse d'épargne";
  constructor(name, initialBal) {
    console.log("Instanciation");
    this.name = name;
    this.balance = initialBal;
  }
}
const john = new Account("John", 0);
console.log(john);
