export const initiatePasswordReset = async (userId, adminId, reason) => {
  const user = await db.users.findById(userId);
  if (!user) throw new Error('User not found');
  const resetToken = crypto.randomBytes(32).toString('hex');
  await db.resetRequests.insert({ userId, adminId, token: resetToken, reason, createdAt: Date.now() });
  await logAudit('PASSWORD_RESET_INITIATED', adminId, { userId, reason });
  return resetToken;
};
