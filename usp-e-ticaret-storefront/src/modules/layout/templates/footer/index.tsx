import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@medusajs/ui"
import { Truck, ShieldCheck, Headset, CreditCard } from "lucide-react"
// 👇 YENİ EKLEDİĞİMİZ BİLEŞENİ ÇAĞIRIYORUZ
import NewsletterForm from "@modules/layout/components/newsletter-form" 

export default async function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white w-full">
      
      {/* 1. GÜVEN BANT (İKONLAR) */}
      <div className="content-container py-12 border-b border-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 group">
            <Headset size={48} className="text-gray-300 group-hover:text-ptm-orange transition-colors" />
            <div>
              <h3 className="font-bold text-ptm-dark">Müşteri Hizmetleri</h3>
              <p className="text-xs text-gray-500">0312 394 37 52</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <Truck size={48} className="text-gray-300 group-hover:text-ptm-orange transition-colors" />
            <div>
              <h3 className="font-bold text-ptm-dark">Hızlı Kargo</h3>
              <p className="text-xs text-gray-500">Stoktan aynı gün teslim</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <ShieldCheck size={48} className="text-gray-300 group-hover:text-ptm-orange transition-colors" />
            <div>
              <h3 className="font-bold text-ptm-dark">Güvenli Alışveriş</h3>
              <p className="text-xs text-gray-500">256 Bit SSL Sertifikası</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <CreditCard size={48} className="text-gray-300 group-hover:text-ptm-orange transition-colors" />
            <div>
              <h3 className="font-bold text-ptm-dark">Kolay Ödeme</h3>
              <p className="text-xs text-gray-500">Taksit imkanları</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. LİNKLER ve E-BÜLTEN */}
      <div className="content-container py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sütun 1: Üyelik */}
        <div className="flex flex-col gap-4">
          <span className="text-ptm-orange font-bold uppercase tracking-wide">KURUMSAL</span>
          <ul className="grid gap-2 text-sm text-gray-600">
            <li><LocalizedClientLink href="/about" className="hover:text-ptm-orange transition-colors">Hakkımızda</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/stores" className="hover:text-ptm-orange transition-colors">Adresimiz</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/contact" className="hover:text-ptm-orange transition-colors">İletişim</LocalizedClientLink></li>
          </ul>
        </div>

        {/* Sütun 2: Alışveriş */}
        <div className="flex flex-col gap-4">
          <span className="text-ptm-orange font-bold uppercase tracking-wide">ALIŞVERİŞ</span>
          <ul className="grid gap-2 text-sm text-gray-600">
            <li><LocalizedClientLink href="/mesafeli-satis-sozlesmesi" className="hover:text-ptm-orange transition-colors">Mesafeli Satış Sözleşmesi</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/iptal-iade-kosullari" className="hover:text-ptm-orange transition-colors">İptal ve İade Şartları</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/gizlilik-ve-guvenlik" className="hover:text-ptm-orange transition-colors">Gizlilik ve Güvenlik</LocalizedClientLink></li>
            <li><LocalizedClientLink href="/kvkk-aydinlatma-metni" className="hover:text-ptm-orange transition-colors">KVKK Aydınlatma Metni</LocalizedClientLink></li>
          </ul>
        </div>

        {/* Sütun 3: Yardım */}
        <div className="flex flex-col gap-4">
          <span className="text-ptm-orange font-bold uppercase tracking-wide">YARDIM</span>
          <ul className="grid gap-2 text-sm text-gray-600">
            {/* Sipariş Takibi */}
            <li>
              <LocalizedClientLink href="/account/orders" className="hover:text-ptm-orange transition-colors">
                Sipariş Takibi
              </LocalizedClientLink>
            </li>
            
            {/* Kargo Takibi (Link daha sonra eklenecek) */}
            <li>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-ptm-orange transition-colors"
              >
                Kargo Takibi
              </a>
            </li>

            {/* SSS */}
            <li>
              <LocalizedClientLink href="/sikca-sorulan-sorular" className="hover:text-ptm-orange transition-colors">
                Sıkça Sorulan Sorular
              </LocalizedClientLink>
            </li>
          </ul>
        </div>

        {/* Sütun 4: E-Bülten (GÜNCELLENDİ) */}
        <div className="flex flex-col gap-4">
          <span className="text-ptm-orange font-bold uppercase tracking-wide">E-BÜLTEN</span>
          <p className="text-sm text-gray-500">Kampanyalardan ve indirimlerden haberdar olmak için kayıt olun.</p>
          
          {/* 👇 ESKİ HTML INPUT YERİNE ARTIK BU ÇALIŞIYOR */}
          <NewsletterForm />
          
        </div>
      </div>

      {/* 3. ALT COPYRIGHT */}
      <div className="bg-ptm-dark py-4 text-center">
        <Text className="text-gray-400 text-xs">
          © {new Date().getFullYear()} PompaTeknikMarket. Tüm hakları saklıdır.
        </Text>
      </div>
    </footer>
  )
}