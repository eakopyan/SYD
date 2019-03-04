const { BlockTool } = require('./tools');
const crypto = require('crypto');

// Je mets ça là ... au cas où ...
function generateId() {
  return Math.floor(Math.random()*1000000000);
}

function getHash(unMotDoux) {
  return crypto.createHash('sha256').update(unMotDoux, 'utf8').digest('hex');
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
    if (previous == null) {
  		this.id = getHash(this.data)
    } else {
    	this.id = getHash(previous.id+this.data)
    }
		this.date = new Date()

  }

  isValid() {
    if (this.previous != null){
      //if(this.id < getHash(this.previous.id+this.data))||(this.id > getHash(this.previous.id+this.data)){
      if (this.id == getHash(this.previous.id+this.data)){
        return true;
      } else {
        return false;
      }
    } else {
      if (this.id == getHash(this.data)){
        return true;
      } else {
        return false;
      }
    }
  }
}
