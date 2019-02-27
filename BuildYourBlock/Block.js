const crypto = require('crypto');

function generateId() {
  return Math.floor(Math.random()*1000000000);
}

function getHash(data){
	return crypto.createHash('sha256').update(data,'utf8').digest('hex');
}

module.exports = class Block {
  // Complétez le constructeur
  constructor(previous, data) {
		this.previous = previous
		this.data = data
		this.id = generateId()
		this.date = new Date()
	}
}

