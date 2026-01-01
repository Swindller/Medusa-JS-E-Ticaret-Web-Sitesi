import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import { ReactNode } from "react"

export default function CheckoutLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="w-full bg-gray-50 relative min-h-screen">
      
      {/* --- ÖZEL HEADER (Navigasyon) --- */}
      <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-50 shadow-sm">
        
        {/* Sol: Sepete Dön */}
        <LocalizedClientLink
          href="/cart"
          className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-orange-600 transition-colors uppercase group"
        >
          <ChevronDown className="rotate-90 text-gray-400 group-hover:text-orange-600" />
          Sepete Dön
        </LocalizedClientLink>

        {/* Orta: İKON + METİN LOGO */}
        <LocalizedClientLink href="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
           {/* İkon (Favicon) */}
           <div className="p-1.5 bg-gray-50 border border-gray-200 rounded-md group-hover:border-orange-200 transition-colors">
             <img 
                src="/favicon.ico" 
                alt="Pompa Teknik İkon" 
                className="h-6 w-6 object-contain"
             />
           </div>
           
           {/* Metin (Kurumsal Renkler) */}
           <span className="text-xl font-black tracking-tight text-[#0f172a] uppercase">
              POMPA <span className="text-orange-600">TEKNİK</span> MARKET
           </span>
        </LocalizedClientLink>

        {/* Sağ: Boşluk (Hizalama için) */}
        <div className="w-24 hidden small:block" /> 
      </div>

      {/* --- SAYFA İÇERİĞİ --- */}
      <div className="relative">
        {children}
      </div>

      {/* --- BASİT FOOTER --- */}
      <div className="py-6 w-full flex items-center justify-center text-xs text-gray-400 border-t border-gray-200 bg-white mt-auto">
        © 2025 Pompa Teknik Market. Güvenli Ödeme Altyapısı.
      </div>
    </div>
  )
}