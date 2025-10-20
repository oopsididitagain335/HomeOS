export const suspendDevice = async (deviceId, adminId, reason, evidenceRef) => {
  const device = await db.devices.findById(deviceId);
  if (!device.enrolled) throw new Error('Device not enrolled');
  await db.devices.updateById(deviceId, { suspended: true, suspensionReason: reason });
  await logAudit('DEVICE_SUSPENDED', adminId, { deviceId, reason, evidenceRef });
  sendEncryptedCommand(deviceId, { type: 'SUSPEND', reason, timestamp: Date.now(), signature: sign(adminId) });
};
