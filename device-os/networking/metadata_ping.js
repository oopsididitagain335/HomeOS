const pingInterval = localStorage.getItem('metadataPingInterval') || 300000;
const optIn = localStorage.getItem('metadataPingOptIn') === 'true';
if (optIn) {
  setInterval(() => {
    const payload = {
      deviceId: sha256(deviceId).substring(0,16),
      osVersion: 'HomeOS-1.0',
      timestamp: Date.now()
    };
    fetch('https://admin.homeos.local/api/v1/ping', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: encryptWithAdminKey(JSON.stringify(payload))
    });
  }, pingInterval);
}
