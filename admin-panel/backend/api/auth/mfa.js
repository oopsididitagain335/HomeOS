import { authenticator } from 'otplib';
export const verifyMFA = (token, secret) => {
  return authenticator.check(token, secret);
};
