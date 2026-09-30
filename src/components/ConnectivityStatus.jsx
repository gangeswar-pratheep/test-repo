import { useEffect, useState } from 'react'
import { checkHealth } from '../api/client.js'

export default function ConnectivityStatus() {
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    let cancelled = false

    checkHealth()
      .then(() => {
        if (!cancelled) setStatus('success')
      })
      .catch(() => {
        if (!cancelled) setStatus('failure')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="connectivity-status">
      <h2>Backend connectivity</h2>
      {status === 'checking' && (
        <p className="connectivity-indicator connectivity-checking">
          Checking backend...
        </p>
      )}
      {status === 'success' && (
        <p className="connectivity-indicator connectivity-success">
          ✓ Backend reachable
        </p>
      )}
      {status === 'failure' && (
        <p className="connectivity-indicator connectivity-failure">
          ✗ Backend unreachable
        </p>
      )}
    </div>
  )
}
