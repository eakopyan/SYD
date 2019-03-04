const crypto = require('crypto');
const { BlockchainTool } = require('./tools');

module.exports = class Blockchain extends BlockchainTool {
  constructor() {
    super()
    this.chain = [];
  }

  add(block) {
    this.chain.push(block);
  }

  last() {
    if (this.chain.length > 0) {
      return this.chain[this.chain.length - 1];
    } else {
      throw new Error("La blockchain est vide");
    }
  }

  isValid() {
    for (var i = 0; i < this.chain.length; i++){
      if (!this.chain[i].isValid()) {
        return false;
      }
    }
    return true;
  }
}
