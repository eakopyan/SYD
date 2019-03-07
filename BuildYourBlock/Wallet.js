const NodeRSA = require('node-rsa');

module.exports = class Wallet {

  // https://github.com/rzcoder/node-rsa#load-key-from-pem-string
  constructor(key = new NodeRSA({b:2048})) {
    this.key = new NodeRSA(key);
  }

  // Retourne un booléen à true si l'on a la clé privée
  // https://github.com/rzcoder/node-rsa#properties
  hasPrivate() {
    return !!this.key.isPrivate();
  }

  // Retourne la clé publique
  // https://github.com/rzcoder/node-rsa#importexport-keys
  getPublicKey() {
    return this.key.exportKey('public');
  }

  // Retourne la signature
  // https://github.com/rzcoder/node-rsa#signingverifying
  sign(msg) {
    return this.key.sign(msg); 
  }

  // Vérifie la signature
  // Retourne un booléen à true si la signature est bonne
  // https://github.com/rzcoder/node-rsa#signingverifying
  verify(msg, signature) {
    return this.key.verify(msg, signature);
  }
}
