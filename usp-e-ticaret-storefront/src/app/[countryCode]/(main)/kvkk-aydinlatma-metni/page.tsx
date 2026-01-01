import { Metadata } from "next"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.",
}

export default function KvkkPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="content-container max-w-4xl mx-auto">
        
        {/* Başlık */}
        <h1 className="text-3xl font-black uppercase mb-2 text-ptm-dark">KVKK Aydınlatma Metni</h1>
        <p className="text-gray-500 mb-8 text-sm">Son Güncelleme: 12 Mayıs 2025</p>

        {/* Metin İçeriği */}
        <div className="text-gray-700 space-y-8 leading-relaxed text-sm md:text-base">
          
          {/* Giriş */}
          <section>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, <strong>[FİRMA RESMİ ÜNVANINIZ]</strong> ("Şirket") olarak, Veri Sorumlusu sıfatıyla, kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında; hukuka ve dürüstlük kurallarına uygun bir şekilde işleyebilecek, kaydedebilecek, saklayabilecek, sınıflandırabilecek, güncelleyebilecek ve mevzuatın izin verdiği hallerde üçüncü kişilere açıklayabilecek/devredebileceğiz.
            </p>
          </section>

          {/* Madde 1 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">1. KİŞİSEL VERİLERİN İŞLENME AMACI</h3>
            <p className="mb-2">Toplanan kişisel verileriniz (Ad, soyad, iletişim bilgileri, fatura detayları vb.);</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ürün ve hizmetlerin sizlere sunulabilmesi,</li>
              <li>Sipariş süreçlerinin yürütülmesi ve kargo operasyonlarının sağlanması,</li>
              <li>Satış sonrası teknik destek hizmetlerinin verilmesi,</li>
              <li>Fatura düzenlenmesi ve finansal/muhasebe süreçlerinin yürütülmesi,</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi (Örn: Yetkili makamlara bilgi verilmesi),</li>
            </ul>
            <p className="mt-2">amaçlarıyla KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde işlenecektir.</p>
          </section>

          {/* Madde 2 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">2. KİŞİSEL VERİLERİN AKTARILMASI</h3>
            <p>
              Kişisel verileriniz; yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda; iş ortaklarımıza (kargo firmaları, ödeme altyapısı sağlayıcıları), kanunen yetkili kamu kurumlarına ve özel kişilere, KVKK’nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilecektir.
            </p>
          </section>

          {/* Madde 3 */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">3. VERİ TOPLAMA YÖNTEMİ VE HUKUKİ SEBEBİ</h3>
            <p>
              Kişisel verileriniz, internet sitemiz, mobil uygulamalarımız, çağrı merkezimiz veya e-posta kanalları aracılığıyla elektronik ortamda toplanmaktadır. Bu veriler, "sözleşmenin kurulması ve ifası" ile "veri sorumlusunun meşru menfaati" hukuki sebeplerine dayanılarak işlenmektedir.
            </p>
          </section>

          {/* Madde 4 */}
          <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 text-lg mb-3">4. VERİ SAHİBİNİN HAKLARI (MADDE 11)</h3>
            <p className="mb-3">KVKK’nın 11. maddesi uyarınca firmamıza başvurarak aşağıdaki haklarınızı kullanabilirsiniz:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme.</li>
            </ul>
          </section>

          {/* Başvuru Yolu */}
          <section>
            <h3 className="font-bold text-gray-900 text-lg mb-3">BAŞVURU YÖNTEMİ</h3>
            <p>
              Yukarıda belirtilen haklarınızı kullanmak için talebinizi yazılı olarak veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik imza, mobil imza ya da bize daha önce bildirdiğiniz e-posta adresini kullanmak suretiyle <strong>info@siteniz.com</strong> adresine iletebilirsiniz.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}