"use client"

import { useState } from "react"
import { Check, Loader2, Send } from "lucide-react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    // --- BURASI KRİTİK NOKTA ---
    // İleride Mailchimp, Brevo veya kendi API'nı bağlayacağın yer burası.
    // Şimdilik "mış gibi" yapıp 1.5 saniye sonra onay veriyoruz.
    
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1500)

    // GERÇEK ENTEGRASYON İÇİN ÖRNEK:
    /*
    try {
      await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) })
      setStatus("success")
    } catch (err) {
      setStatus("error")
    }
    */
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded p-4 flex items-center gap-3 animate-in fade-in zoom-in duration-300">
        <div className="bg-green-500 rounded-full p-1 text-white">
          <Check size={16} />
        </div>
        <div>
          <p className="text-green-800 font-bold text-sm">Kaydınız Alındı!</p>
          <p className="text-green-600 text-xs">Aramıza hoş geldiniz.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="relative flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresiniz"
          required
          disabled={status === "loading"}
          className="w-full bg-gray-100 border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-ptm-orange focus:ring-1 focus:ring-ptm-orange transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="absolute right-1 top-1 bottom-1 bg-ptm-orange text-white px-4 rounded text-sm font-bold uppercase hover:bg-orange-600 transition-colors disabled:bg-gray-400 flex items-center justify-center min-w-[80px]"
        >
          {status === "loading" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            "KAYDOL"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-1">Bir hata oluştu, lütfen tekrar deneyin.</p>
      )}
    </form>
  )
}