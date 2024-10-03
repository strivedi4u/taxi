import CryptoJS from 'crypto-js';

// Encrypt function
export const encryptData = (data) => {
  const key = process.env.REACT_APP_AES_KEY; // Get the encryption key from .env
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  return ciphertext;
};

// Decrypt function
export const decryptData = (ciphertext) => {
  const key = process.env.REACT_APP_AES_KEY; // Get the encryption key from .env
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
