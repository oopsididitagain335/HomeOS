export const verifyAdminCommand = (command, localPolicy) => {
  if (!command.signature || !command.nonce || !command.timestamp) return false;
  if (Date.now() - command.timestamp > 300000) return false;
  const allowed = localPolicy.enrolled && localPolicy.adminActionsAllowed;
  if (!allowed && !command.userConsentRequired) return false;
  return true;
};
