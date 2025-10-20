export const publishUpdate = async (version, url, adminId, forceForEnrolled = false) => {
  await db.updates.insert({ version, url, forceForEnrolled, publishedBy: adminId, timestamp: Date.now() });
  await logAudit('UPDATE_PUBLISHED', adminId, { version, forceForEnrolled });
  if (forceForEnrolled) {
    const enrolledDevices = await db.devices.find({ enrolled: true });
    enrolledDevices.forEach(d => sendEncryptedCommand(d.id, { type: 'UPDATE_REQUIRED', version, url }));
  }
};
