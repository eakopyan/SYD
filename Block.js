const { BlockTool } = require('./tools');
const crypto = require('crypto');

// Je mets ça là ... au cas où ...
function generateId() {
  return Math.floor(Math.random()*1000000000);
}

function getHash(unMotDoux, nonce) {
  return crypto.createHash('sha256').update(unMotDoux+nonce, 'utf8').digest('hex');
}

// Vous n'avez pas à comprendre BlockTool.
// Cette class vient en support du sujet.
// Si vous avez besoin de débugguer,
// vous pouvez commenter le `extends BlockTool`.
module.exports = class Block extends BlockTool {

  // Complétez le constructeur
  constructor(previous, data) {
    super()
    this.previous = previous
		this.data = data
    this.nonce = 0
    this.id = this.miner()
		this.date = new Date()
  }

  isValid() {
    if (this.previous != null){
      if (this.id == getHash(this.previous.id+this.data, this.nonce)){
        return true;
      } else {
        return false;
      }
    } else {
      if (this.id == getHash(this.data, this.nonce)){
        return true;
      } else {
        return false;
      }
    }
  }

  miner() {
    const zero = '0';
    var done = false;
    var hash;

    while (!done){
      if (this.previous == null) {
    		hash = getHash(this.data, this.nonce)
      } else {
      	hash = getHash(this.previous.id+this.data, this.nonce)
      }

      if (!hash.startsWith(zero.repeat(5))) {
        this.nonce += 1;
      } else {
        done = true;
      }
    }
    return hash;
  }

}
