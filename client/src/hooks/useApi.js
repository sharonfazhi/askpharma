import { useAuth } from '../context/AuthContext';

const BASE = import.meta.env.VITE_API_URL ?? '';

export function useApi() {
  const { token } = useAuth();

  const post = async (path, body) => {
    const res = await fetch(`${BASE}/api${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
  };

  return { post };
}