class Storage{
  #items;
  constructor(arrayNew){
    this.#items = arrayNew;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem){
    this.#items.push(newItem);
  }
  removeItem(itemToRemove){
    const numb = this.#items.indexOf(itemToRemove);
    if (numb !== -1) {
      this.#items.splice(numb,1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]