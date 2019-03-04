const NodeRSA = require('node-rsa');

module.exports = class Wallet {
  constructor(publicKey, montant = 0) {
    this.publicKey = publicKey
    this.montant = montant
    this.privateKey = null
  }

  setPrivateKey(key) {
    this.privateKey = key;
  }

  sign(msg) {
    return this.privateKey.sign(msg);
  }

  verify(msg, signature) {
    return this.publicKey.verify(msg, signature);
  }
}
