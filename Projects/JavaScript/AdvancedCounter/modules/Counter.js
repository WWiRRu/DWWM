export default class Counter {
  constructor(defaultCount, element, number) {
    this.defaultCount = defaultCount;
    this.count = defaultCount;
    this.element = element;
    this.number = number;
    let amount;
    if (number <= 1) {
      amount = number + " er";
    } else {
      amount = number + " ème";
    }
    this.element.innerHTML = `
      <h2>${amount} Compteur</h2>
      <span class="value">0</span>
      <div class="button-container">
        <button class="btn decrease">décrémenter</button>
        <button class="btn reset">reset</button>
        <button class="btn increase">incrémenter</button>
      </div>`;
    this.counter = this.element.querySelector(".value");
    this.increase = this.element.querySelector(".increase");
    this.decrease = this.element.querySelector(".decrease");
    this.resetBtn = this.element.querySelector(".reset");

    this.increaseCount = this.increaseCount.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
    this.reset = this.reset.bind(this);

    this.updateCount();
    this.increase.addEventListener("click", this.increaseCount);
    this.decrease.addEventListener("click", () => this.reduceCount(1));
    this.resetBtn.addEventListener("click", this.reset);
  }

  reduceCount(amountToReduce) {
    this.count -= amountToReduce;
    this.updateCount();
  }

  increaseCount() {
    this.count++;
    this.updateCount();
  }

  reset() {
    this.count = this.defaultCount;
    this.updateCount();
  }

  updateCount() {
    this.counter.textContent = this.count;
  }
}
