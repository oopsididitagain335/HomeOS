import { pbkdf2 } from 'crypto';
export const resetPasswordLocally = (newPass, salt) => {
  return pbkdf2(newPass, salt, 100000, 64, 'sha512');
};
