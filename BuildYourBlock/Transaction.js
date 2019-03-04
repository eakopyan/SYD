const NodeRSA = require('node-rsa');

module.exports = class Transaction {
  constructor(
    sourcePublicKey,
    destinationPublicKey,
    montant,
    signature = null
  ) {
    this.sourcePublicKey = sourcePublicKey;
    this.destinationPublicKey = destinationPublicKey;
    this.montant = montant;
    this.signature = signature;
  }

  sign(privateKey) {
    return privateKey.sign(this.sourcePublicKey+this.destinationPublicKey+this.montant);
  }

  setSignature(signature) {
    this.signature = signature;
  }

  verify() {
    return this.sourcePublicKey.verify(this.sourcePublicKey+this.destinationPublicKey+this.montant, this.signature);
  }
}
