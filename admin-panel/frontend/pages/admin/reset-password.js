import { useState } from 'react';
export default function ResetPassword() {
  const [userId, setUserId] = useState('');
  const [reason, setReason] = useState('');
  const handleSubmit = async () => {
    const res = await fetch('/api/users/reset_password', {
      method: 'POST',
      body: JSON.stringify({ userId, reason })
    });
    if (res.ok) alert('Reset initiated. User will receive prompt.');
  };
  return (
    <div>
      <input value={userId} onChange={e => setUserId(e.target.value)} placeholder="User ID" />
      <input value={reason} onChange={e => setReason(e.target.value)} placeholder="Reason" />
      <button onClick={handleSubmit}>Initiate Reset</button>
    </div>
  );
}
