export const revokeEnrollment = async (deviceId, adminId) => {
  await db.devices.updateById(deviceId, { enrolled: false, enrollmentRevokedAt: Date.now() });
  await logAudit('ENROLLMENT_REVOKED', adminId, { deviceId });
  sendEncryptedCommand(deviceId, { type: 'ENROLLMENT_REVOKED', timestamp: Date.now() });
};
