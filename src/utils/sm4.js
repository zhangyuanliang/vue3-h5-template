import { sm4 } from 'sm-crypto';
const sm4Key = '51d95b1dc43a9faaad0570f81c755fcc';

// sm4加密
export const sm4Encrypt = (content) => {
  if (content) {
    return sm4.encrypt(content, sm4Key);
  }
  return content;
};

// sm4解密
export const sm4Decrypt = (content) => {
  if (content) {
    return sm4.decrypt(content, sm4Key);
  }
  return content;
};

// 身份证加密
export const idNumSM4Encrypt = (content) => {
  if (content) {
    return sm4.encrypt(content.replace(/x/, 'X'), sm4Key);
  }
  return content;
};
