export const enableDeveloperMode = (authToken, deviceKey) => {
  if (authToken !== deviceKey) return false;
  localStorage.setItem('devMode', 'true');
  return true;
};
