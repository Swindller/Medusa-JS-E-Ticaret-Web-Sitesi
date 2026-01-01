"use client"

import { useRouter, useParams } from "next/navigation"
import { useState, FormEvent } from "react"
import { Search } from "lucide-react"

const SearchInput = () => {
  const router = useRouter()
  const params = useParams()
  const [query, setQuery] = useState("")

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()

    // Eğer kutu boş değilse yönlendir
    if (query.trim()) {
      const countryCode = params?.countryCode || "tr"
      // Örnek: /tr/store?q=pompa
      router.push(`/${countryCode}/store?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form 
      onSubmit={handleSearch}
      className="flex bg-white/10 border border-gray-600 focus-within:border-ptm-orange transition-colors p-1"
    >
      <input 
        type="text" 
        placeholder="Parça kodu veya ürün adı..." 
        className="w-full bg-transparent border-none text-white placeholder-gray-400 px-4 focus:ring-0 text-sm focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-ptm-orange text-white p-3 hover:bg-orange-600 transition-colors font-bold uppercase text-xs tracking-wider flex items-center gap-2"
      >
        <Search size={16} /> <span className="hidden sm:block">Bul</span>
      </button>
    </form>
  )
}

export default SearchInput