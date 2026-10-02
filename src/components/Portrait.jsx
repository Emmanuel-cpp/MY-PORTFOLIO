import { useState } from 'react'
export default function Portrait({ className = '' }) {
  const [failed, setFailed] = useState(false)
  return failed ? (
    <div className={`portrait fallback ${className}`}>ES</div>
  ) : (
    <img className={`portrait ${className}`} src="image/emmanuel.jpeg" alt="Emmanuel Siamoonga" onError={() => setFailed(true)} />
  )
}
