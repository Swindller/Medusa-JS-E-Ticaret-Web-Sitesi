import { Metadata } from "next"
import { HelpCircle, ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (S.S.S)",
  description: "Kargo, iade, garanti ve ürünler hakkında merak edilenler.",
}

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="content-container max-w-3xl mx-auto">
        
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black uppercase text-ptm-dark mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-gray-500">Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.</p>
        </div>

        <div className="space-y-4">
          
          {/* SORU 1 */}
          <details className="group border border-gray-200 rounded-lg bg-gray-50 open:bg-white open:ring-1 open:ring-ptm-orange transition-all">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 group-open:text-ptm-orange">
              Hangi kargo firmalarıyla çalışıyorsunuz?
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              Türkiye genelinde anlaşmalı olduğumuz kargo firmaları (Yurtiçi Kargo / Aras Kargo) ile gönderim sağlamaktayız. Ağır sanayi tipi ürünler (büyük hidroforlar vb.) için ambar veya lojistik firmalarıyla özel gönderim yapıyoruz.
            </div>
          </details>

          {/* SORU 2 */}
          <details className="group border border-gray-200 rounded-lg bg-gray-50 open:bg-white open:ring-1 open:ring-ptm-orange transition-all">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 group-open:text-ptm-orange">
              Siparişim ne zaman kargoya verilir?
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              Stokta olan ürünler, hafta içi saat 15:00'e kadar verilen siparişlerde <strong>aynı gün</strong> kargoya teslim edilir. Cumartesi günleri saat 11:00'e kadar olan siparişler aynı gün çıkar. Pazar günü kargo çıkışı yapılmamaktadır.
            </div>
          </details>

          {/* SORU 3 */}
          <details className="group border border-gray-200 rounded-lg bg-gray-50 open:bg-white open:ring-1 open:ring-ptm-orange transition-all">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 group-open:text-ptm-orange">
              Montaj hizmetiniz var mı?
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              İnternet sitemiz üzerinden satılan ürünlerde standart olarak montaj hizmeti dahil değildir. Ancak İstanbul içi projelerde teknik servis ekibimizden ayrıca teklif alabilirsiniz. Diğer iller için yetkili servis ağımıza yönlendirme yapmaktayız.
            </div>
          </details>

          {/* SORU 4 */}
          <details className="group border border-gray-200 rounded-lg bg-gray-50 open:bg-white open:ring-1 open:ring-ptm-orange transition-all">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 group-open:text-ptm-orange">
              Garanti süresi ne kadar?
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              Sattığımız tüm pompa ve hidrofor grupları, üretim hatalarına karşı aksi belirtilmedikçe <strong>2 yıl (24 ay)</strong> üretici garantisi altındadır. Garanti, kullanım hatası (susuz çalıştırma, voltaj dalgalanması vb.) durumlarını kapsamaz.
            </div>
          </details>

           {/* SORU 5 */}
           <details className="group border border-gray-200 rounded-lg bg-gray-50 open:bg-white open:ring-1 open:ring-ptm-orange transition-all">
            <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-gray-900 group-open:text-ptm-orange">
              İade işlemlerini nasıl yapabilirim?
              <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              Ürünü teslim aldıktan sonra 14 gün içinde, kullanılmamış ve orijinal kutusu bozulmamış olmak kaydıyla iade edebilirsiniz. Detaylı bilgi için "İptal ve İade Koşulları" sayfamızı inceleyebilirsiniz.
            </div>
          </details>

        </div>
      </div>
    </div>
  )
}