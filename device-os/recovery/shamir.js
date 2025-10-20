import { shamir } from 'shamir-secret-sharing';
export const reconstructKey = (shares) => {
  return shamir.combine(shares);
};
