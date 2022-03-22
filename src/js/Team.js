export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('character is already exist');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const iteratorsValues = this.members.values();
    for (let i = 0; i < this.members.size; i++) {
      yield iteratorsValues.next().value;
    }
  }
}
