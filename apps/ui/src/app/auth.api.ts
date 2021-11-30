export interface AuthFetchStatusDto {
  username: string;
  password: string;
}

export const fetchStatus = async (payload: AuthFetchStatusDto) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch('/api/auth/login', options);
  return await response.json();
};
