import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Phone, User, Search } from "lucide-react"
import CategoryMenu from "@modules/layout/components/category-menu"
import Image from "next/image"
import SearchInput from "@modules/layout/components/search-input"
import { retrieveCustomer } from "@lib/data/customer" 

export default async function Nav() {
  const customer = await retrieveCustomer().catch(() => null)

  return (
    <div className="flex flex-col w-full font-sans group relative z-[100]">
      
      {/* 1. ÜST ŞERİT */}
      <div className="bg-ptm-orange text-white text-[10px] md:text-xs font-bold py-1 px-4 text-center tracking-[0.2em] uppercase relative z-[101]">
        /// Stoktan Hızlı Teslimat /// Türkiye'nin Her Yerine Kargo ///
      </div>

      {/* 2. HEADER KISMI (LOGO & ARAMA) */}
      <header className="bg-ptm-dark text-white py-6 border-b-4 border-ptm-orange relative z-[100]">
        <div className="content-container flex flex-col md:flex-row items-center justify-between gap-6 relative">
          
          {/* LOGO */}
          <LocalizedClientLink href="/" className="flex-shrink-0 group">
             <div className="flex flex-col">
              <Image
                  src="/logo.png" 
                  alt="Pompa Teknik Market"
                  width={140}
                  height={70}
                  priority
                />
             </div>
          </LocalizedClientLink>

          {/* ARAMA ÇUBUĞU */}
          <div className="flex-1 w-full max-w-xl mx-4 relative">
            <SearchInput />
          </div>

          <div className="flex items-center gap-8">
            
            {/* HESAP / GİRİŞ YAP KISMI */}
            <LocalizedClientLink href="/account" className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity">
              <div className="p-2 border border-gray-600 group-hover:border-ptm-orange rounded-none transition-colors">
                <User size={20} className="text-gray-300 group-hover:text-white" />
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-xs text-ptm-orange font-bold uppercase">Bayi / Üye</span>
                <span className="text-xs text-gray-400 font-medium">
                  {customer ? `Selam, ${customer.first_name}` : "Giriş Yap"}
                </span>
              </div>
            </LocalizedClientLink>
            
            {/* SEPET BUTONU - RENK AYARI YAPILDI */}
            <Suspense fallback={<div className="text-white">...</div>}>
              <div className="flex items-center gap-3 cursor-pointer relative z-[200]">
                 {/* DÜZELTME: 
                    1. bg-ptm-orange text-white -> Normalde Turuncu, Yazı Beyaz.
                    2. hover:bg-white hover:text-ptm-orange -> Üstüne gelince Beyaz Kutu, Turuncu Yazı.
                    3. group-hover SİLİNDİ -> Navbar'ın genelinden etkilenmez.
                 */}
                 <div className="p-2 bg-ptm-orange text-white hover:bg-white hover:text-ptm-orange transition-colors duration-200">
                    <CartButton />
                 </div>
              </div>
            </Suspense>

          </div>
        </div>
      </header>

      {/* 3. MENÜ ŞERİDİ */}
      <nav className="bg-gray-200 border-b border-gray-300 shadow-inner relative z-[90]">
        <div className="content-container flex items-center gap-0 py-0 pl-0">
          
          {/* KATEGORİ MENÜSÜ */}
          <div className="mr-4">
             <CategoryMenu />
          </div>

          {/* LİNKLER */}
          <div className="flex items-center gap-6 text-sm font-bold text-gray-700 uppercase tracking-tight overflow-x-auto whitespace-nowrap scrollbar-hide w-full h-full py-3">
            
            <LocalizedClientLink 
                href="/#yeni-gelenler" 
                className="hover:text-ptm-orange transition-colors"
            >
                Yeni Gelenler
            </LocalizedClientLink>
            
            <span className="text-gray-300">|</span>
            
            <LocalizedClientLink 
                href="/#cok-satanlar" 
                className="hover:text-ptm-orange transition-colors"
            >
                Çok Satanlar
            </LocalizedClientLink>
            
            <span className="text-gray-300">|</span>
            
            <LocalizedClientLink href="/servis-talep" className="hover:text-ptm-orange transition-colors">
                Servis Talebi
            </LocalizedClientLink>
            
            <LocalizedClientLink href="/contact" className="ml-auto text-ptm-orange hover:text-ptm-dark transition-colors flex items-center gap-2 border-l border-gray-300 pl-6 h-full">
                <Phone size={16} /> <span className="hidden md:inline">Teknik Destek</span>
            </LocalizedClientLink>
          </div>
        </div>
      </nav>
    </div>
  )
}