import { Metadata } from "next"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Adresimiz & İletişim",
  description: "Adresimizi ziyaret edin veya bizimle iletişime geçin.",
}

export default function StoresPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* --- ÜST BAŞLIK ALANI --- */}
      <div className="bg-ptm-dark text-white py-16">
        <div className="content-container text-center">
          <h1 className="text-4xl font-black uppercase tracking-wide mb-4">
            Adresimiz
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Türkiye'nin dört bir yanına hizmet veriyoruz. Adresimizi ziyaret edebilir veya iletişim kanallarımızdan bize ulaşabilirsiniz.
          </p>
        </div>
      </div>

      {/* --- İÇERİK: İLETİŞİM & HARİTA --- */}
      <div className="content-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* SOL: İLETİŞİM BİLGİLERİ */}
          <div className="flex flex-col gap-10">
            
            {/* Adres Kutusu */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="text-orange-600" /> Merkez Ofis / Depo
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {/* BURASI GEÇİCİ ADRES */}
                Altay Mahallesi Söğüt Caddesi No:8/DAA<br />
                Etimesgut / Ankara
              </p>
              
              <div className="space-y-4 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4 text-gray-700">
                  <Phone className="text-orange-600 w-5 h-5" />
                  <span className="font-medium">+90 (312) 394 37 52</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Mail className="text-orange-600 w-5 h-5" />
                  <span className="font-medium">info@ugursupompalari.com</span>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Clock className="text-orange-600" /> Çalışma Saatleri
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Hafta İçi</span>
                  <span className="font-bold text-gray-900">08:30 - 18:30</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Cumartesi</span>
                  <span className="font-bold text-gray-900">09:00 - 14:00</span>
                </li>
                <li className="flex justify-between text-gray-400">
                  <span>Pazar</span>
                  <span>Kapalı</span>
                </li>
              </ul>
            </div>

          </div>

          {/* SAĞ: HARİTA (GOOGLE MAPS EMBED) */}
          <div className="h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg border border-gray-300 relative">
             {/* HARİTA DEĞİŞTİRME NOTU:
                Gerçek adres belli olunca Google Maps'e gir > "Paylaş" > "Harita Yerleştir" de.
                Oradaki "src" linkini alıp aşağıdaki iframe'in src kısmına yapıştır.
             */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.8315792049593!2d32.63621347655459!3d39.96751808285677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33b4aec782f39%3A0xdda3045696aaeee8!2zVcSfdXIgU3UgUG9tcGFsYXLEsSBFbGVrLiDEsG7Fny4gVGFyxLFtIEhheXYuIFNhbi4gVmUgVGljLiBMVEQuxZ5UxLA!5e0!3m2!1str!2str!4v1765903198013!5m2!1str!2str" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 w-full h-full hover:grayscale-0 transition-all duration-500"
             ></iframe>
             
             {/* Harita Yüklenmezse diye placeholder yazı */}
             <div className="absolute inset-0 flex items-center justify-center -z-10">
                <span className="text-gray-500">Harita Yükleniyor...</span>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}