const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000'
const HEALTH_PATH = import.meta.env.VITE_API_HEALTH_PATH ?? '/health'

export async function checkHealth() {
  const response = await fetch(`${BASE_URL}${HEALTH_PATH}`)
  if (!response.ok) {
    throw new Error(`Health check failed with status ${response.status}`)
  }
  return response
}
