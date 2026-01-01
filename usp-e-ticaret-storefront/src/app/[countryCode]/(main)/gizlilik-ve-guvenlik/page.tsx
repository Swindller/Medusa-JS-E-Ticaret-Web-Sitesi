import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gizlilik ve Güvenlik Politikası",
  description: "Kişisel verilerinizin güvenliği, gizlilik politikamız ve KVKK aydınlatma metni.",
}

export default function PrivacySecurityPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="content-container max-w-4xl mx-auto">
        
        {/* Başlık */}
        <h1 className="text-3xl font-black uppercase mb-2 text-ptm-dark">Gizlilik ve Güvenlik Politikası</h1>
        <p className="text-gray-500 mb-8 text-sm">Son Güncelleme: 12 Mayıs 2025</p>

        {/* Metin İçeriği */}
        <div className="text-gray-700 space-y-8 leading-relaxed text-sm md:text-base">
          
          {/* Giriş */}
          <section>
            <p>
              [FİRMA ADINIZ] olarak, müşterilerimizin kişisel verilerinin güvenliğine büyük önem veriyoruz. Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>
          </section>

          {/* Madde 1 - Kredi Kartı Güvenliği */}
          <section className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="font-bold text-green-900 text-lg mb-3 flex items-center gap-2">
              🔒 1. KREDİ KARTI GÜVENLİĞİ (SSL)
            </h3>
            <p className="text-green-800">
              Sitemiz üzerinden yapacağınız alışverişlerde kredi kartı bilgileriniz <strong>256 bit SSL (Secure Sockets Layer)</strong> protokolü ile şifrelenerek doğrudan bankaya iletilir. Kart bilgileriniz hiçbir şekilde sistemimizde veya veritabanımızda <strong>SAKLANMAZ</strong>. Ödeme sırasında görülen kilit simgesi, bağlantınızın güvenli olduğunu gösterir.
            </p>
          </section>

          {/* Madde 2 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">2. HANGİ VERİLERİ TOPLUYORUZ?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (fatura zorunluluğu gereği).</li>
              <li><strong>İletişim Bilgileri:</strong> Adres, telefon numarası, e-posta adresi.</li>
              <li><strong>İşlem Bilgileri:</strong> Sipariş geçmişi, fatura bilgileri.</li>
              <li><strong>Dijital İzler:</strong> IP adresi, tarayıcı bilgileri (yasal zorunluluk gereği log kayıtları).</li>
            </ul>
          </section>

          {/* Madde 3 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">3. VERİLERİN KULLANIM AMACI</h3>
            <p>
              Toplanan kişisel verileriniz; siparişlerin teslim edilmesi, faturanın düzenlenmesi, kargo firmasına teslimat bilgisinin iletilmesi ve satış sonrası destek hizmetlerinin verilmesi amacıyla kullanılır. Bilgileriniz, yasal zorunluluklar (savcılık vb.) dışında üçüncü şahıslarla asla paylaşılmaz.
            </p>
          </section>

          {/* Madde 4 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">4. ÇEREZ (COOKIE) POLİTİKASI</h3>
            <p>
              Sitemizde kullanıcı deneyimini iyileştirmek, sepetinizdeki ürünleri hatırlamak ve oturumunuzu açık tutmak için çerezler kullanılmaktadır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz, ancak bu durumda sitenin bazı fonksiyonları çalışmayabilir.
            </p>
          </section>

          {/* Madde 5 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">5. KVKK KAPSAMINDAKİ HAKLARINIZ</h3>
            <p className="mb-2">Kanunun 11. maddesi uyarınca firmamıza başvurarak;</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>Verilerinizin silinmesini veya yok edilmesini isteme hakkına sahipsiniz.</li>
            </ul>
          </section>

          {/* İletişim */}
          <section className="pt-6 border-t border-gray-200">
            <p>
              Gizlilik politikamızla ilgili her türlü sorunuz için <strong>info@siteniz.com</strong> adresinden bize ulaşabilirsiniz.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}