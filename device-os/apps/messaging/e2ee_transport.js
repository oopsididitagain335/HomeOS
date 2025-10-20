import { X25519 } from '@stablelib/x25519';
import { chacha20poly1305 } from '@stablelib/chacha20poly1305';
export const encryptMessage = (plaintext, peerPubKey, ownPrivKey) => {
  const shared = X25519.sharedKey(ownPrivKey, peerPubKey);
  const nonce = crypto.getRandomValues(new Uint8Array(12));
  const ciphertext = chacha20poly1305.encrypt(shared, nonce, plaintext, null);
  return { nonce, ciphertext };
};
