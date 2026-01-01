import { Metadata } from "next"

export const metadata: Metadata = {
  title: "İptal ve İade Koşulları",
  description: "Ürün iptal, iade süreçleri ve geri ödeme şartları.",
}

export default function RefundPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="content-container max-w-4xl mx-auto">
        
        {/* Başlık */}
        <h1 className="text-3xl font-black uppercase mb-2 text-ptm-dark">İptal ve İade Şartları</h1>
        <p className="text-gray-500 mb-8 text-sm">Son Güncelleme: 12 Mayıs 2025</p>

        {/* Metin İçeriği */}
        <div className="text-gray-700 space-y-8 leading-relaxed text-sm md:text-base">
          
          {/* Bölüm 1 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">1. CAYMA HAKKI VE SÜRESİ</h3>
            <p>
              Müşterilerimiz, 6502 sayılı Tüketicinin Korunması Hakkında Kanun gereği, ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren <strong>14 (on dört) gün</strong> içinde hiçbir gerekçe göstermeksizin ve cezai şart ödemeksizin cayma hakkını kullanabilir.
            </p>
          </section>

          {/* Bölüm 2 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">2. İADE ŞARTLARI</h3>
            <p className="mb-2">İade edilecek ürünlerin aşağıdaki şartları taşıması gerekmektedir:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-orange-500">
              <li>Ürün, orijinal kutusu/ambalajı bozulmamış halde olmalıdır.</li>
              <li>Ürün faturası (tüm kopyaları ile birlikte) ürünle beraber gönderilmelidir.</li>
              <li>Ürünün tüm aksesuarları eksiksiz olmalıdır.</li>
              <li>Varsa hediye olarak verilen promosyon ürünleri de iade edilmelidir.</li>
              <li><strong>ÖNEMLİ:</strong> Orijinal kutusu üzerine kargo etiketi yapıştırılmış, koli bandı ile bantlanmış veya kutusu yırtılmış ürünlerin iadesi kabul edilmemektedir. Bu nedenle ürünü koruyucu bir dış koli ile göndermeniz gerekmektedir.</li>
            </ul>
          </section>

          {/* Bölüm 3 - TEKNİK ÜRÜNLER İÇİN KRİTİK KISIM */}
          <section className="bg-orange-50 p-6 rounded-lg border border-orange-100">
            <h3 className="font-bold text-orange-800 text-lg mb-3">3. İADE KABUL EDİLMEYEN DURUMLAR</h3>
            <p className="text-gray-800 mb-2">Aşağıdaki durumlarda cayma hakkı kullanılamaz ve ürün iadesi kabul edilmez:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-orange-800">
              <li>Müşterinin isteği doğrultusunda özel olarak üretilen veya değişiklik yapılan ürünler.</li>
              <li><strong>Montajı yapılmış, denenmiş, su veya elektrik bağlantısı kurulmuş pompalar ve hidroforlar.</strong> (Bu ürünler kullanılmış sayılır ve ikinci el statüsüne düşer.)</li>
              <li>Teknik servis raporu olmadan "arızalı" olduğu iddia edilen, ancak kullanıcı hatası sonucu bozulan ürünler.</li>
              <li>Paketi açılmış yedek parçalar (conta, salmastra vb.) hijyen ve tekrar satılabilirlik ilkesi gereği iade alınmaz.</li>
            </ul>
          </section>

          {/* Bölüm 4 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">4. İADE SÜRECİ NASIL İŞLER?</h3>
            <p className="mb-4">
              İade talebinizi <strong>info@siteniz.com</strong> adresine e-posta göndererek veya <strong>0212 XXX XX XX</strong> numaralı telefonu arayarak oluşturabilirsiniz. Talebiniz onaylandıktan sonra size verilecek "Anlaşmalı Kargo Kodu" ile ürünü ücretsiz olarak tarafımıza gönderebilirsiniz.
            </p>
            <p>
              Anlaşmalı kargo firmamız dışında yapılan gönderimlerde kargo ücreti ALICI'ya aittir.
            </p>
          </section>

          {/* Bölüm 5 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">5. ÜCRET İADESİ</h3>
            <p>
              İade edilen ürün depomuza ulaşıp, teknik ekibimiz tarafından "iade şartlarına uygunluk" onayı verildikten sonra, ürün bedeli <strong>3 ile 10 iş günü</strong> içerisinde ödeme yaptığınız karta/hesaba iade edilir. Bankanızın süreçlerine bağlı olarak bu tutarın hesabınıza yansıması birkaç gün sürebilir.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}