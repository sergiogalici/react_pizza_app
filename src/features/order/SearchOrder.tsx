import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder() {
  const [query, setQuery] = React.useState('')
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!query) return

    navigate(`/order/${query}`)
    setQuery('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Sarch order #"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  )
}
