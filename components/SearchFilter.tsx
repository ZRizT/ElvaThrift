"use client"
import { Dispatch, SetStateAction } from 'react'

export default function SearchFilter({ query, setQuery, category, setCategory }: { query: string, setQuery: Dispatch<SetStateAction<string>>, category: string, setCategory: Dispatch<SetStateAction<string>> }) {
  const categories = ['All', 'Baju', 'Celana', 'Aksesoris']

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-3">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Cari produk..." className="px-4 py-2 rounded border w-full sm:w-72" />
        <select value={category} onChange={e => setCategory(e.target.value)} className="px-3 py-2 rounded border">
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="text-sage-600">Menampilkan hasil untuk: <strong className="text-dark-brown">{category}</strong></div>
    </div>
  )
}
