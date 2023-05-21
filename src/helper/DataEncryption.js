var CryptoJS = require("crypto-js");

const key = process.env.REACT_APP_HMAC_KEY;

const encryptData = (data) => {
  var encryptCode = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  return encryptCode
}

const decryptData = (data) => {
  var decrypted = CryptoJS.AES.decrypt(data, key)
  // var decryptedPword = decrypted.toString(CryptoJS.enc.Utf8);
  var decryptedData = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
  return decryptedData
}

module.exports = {
  encryptData,
  decryptData
}