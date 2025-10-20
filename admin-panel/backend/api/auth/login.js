export const login = async (username, password, mfaToken) => {
  const admin = await db.admins.findOne({ username });
  if (!admin || !verifyHash(password, admin.passwordHash)) throw new Error('Invalid credentials');
  if (!verifyMFA(mfaToken, admin.mfaSecret)) throw new Error('Invalid MFA');
  const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '15m' });
  await logAudit('ADMIN_LOGIN', admin._id, {});
  return token;
};
