export const logAudit = async (action, adminId, details) => {
  const entry = {
    action,
    adminId,
    timestamp: Date.now(),
    details,
    signature: sign(JSON.stringify({ action, adminId, timestamp: Date.now() }))
  };
  await db.audit.insert(entry);
  return entry;
};
