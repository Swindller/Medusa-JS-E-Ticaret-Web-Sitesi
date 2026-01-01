import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description: "Mesafeli Satış Sözleşmesi ve cayma hakkı detayları.",
}

export default function DistanceSalesAgreementPage() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="content-container max-w-4xl mx-auto">
        
        {/* Başlık */}
        <h1 className="text-3xl font-black uppercase mb-2 text-ptm-dark">Mesafeli Satış Sözleşmesi</h1>
        <p className="text-gray-500 mb-8 text-sm">Son Güncelleme: 12 Mayıs 2025</p>

        {/* Sözleşme Metni */}
        <div className="text-gray-700 space-y-6 leading-relaxed text-sm md:text-base">
          
          {/* MADDE 1 */}
          <section>
            <h3 className="font-bold text-gray-900 mb-2">MADDE 1 - TARAFLAR</h3>
            <div className="pl-4 border-l-2 border-gray-200">
              <p className="mb-4">
                <strong>1.1. SATICI:</strong><br />
                <strong>Ünvanı:</strong> [FİRMA RESMİ ÜNVANI BURAYA]<br />
                <strong>Adresi:</strong> [AÇIK ADRESİNİZ BURAYA]<br />
                <strong>Telefon:</strong> [TELEFON NUMARASI]<br />
                <strong>E-Posta:</strong> info@siteniz.com<br />
                <strong>Mersis No:</strong> [VARSA MERSİS NO]
              </p>
              <p>
                <strong>1.2. ALICI:</strong><br />
                Bu sözleşme kapsamında "ALICI", [SİTE ADI] internet sitesinden sipariş veren kişidir. Fatura ve iletişim bilgileri sipariş formunda belirtildiği gibidir.
              </p>
            </div>
          </section>

          {/* MADDE 2 */}
          <section>
            <h3 className="font-bold text-gray-900 mb-2">MADDE 2 - KONU</h3>
            <p>
              İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait internet sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.
            </p>
          </section>

          {/* MADDE 3 */}
          <section>
            <h3 className="font-bold text-gray-900 mb-2">MADDE 3 - SÖZLEŞME KONUSU ÜRÜN</h3>
            <p>
              Ürünlerin cinsi, türü, miktarı, marka/modeli, rengi, satış bedeli, ödeme şekli ve teslimat bilgileri, siparişin sonlandığı andaki bilgilerden oluşmaktadır.
            </p>
          </section>

          {/* MADDE 4 */}
          <section>
            <h3 className="font-bold text-gray-900 mb-2">MADDE 4 - GENEL HÜKÜMLER</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>ALICI, internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</li>
              <li>Sözleşme konusu ürün, yasal 30 günlük süreyi aşmamak koşulu ile her bir ürün için ALICI'nın yerleşim yerinin uzaklığına bağlı olarak internet sitesinde ön bilgiler içinde açıklanan süre içinde ALICI veya gösterdiği adresteki kişi/kuruluşa teslim edilir.</li>
              <li>Ürünün teslimatı sırasında kargo firmasından kaynaklanan sorunlardan dolayı ürünün ALICI'ya teslim edilememesinden SATICI sorumlu tutulamaz.</li>
              <li>SATICI, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</li>
            </ul>
          </section>

          {/* MADDE 5 - CAYMA HAKKI */}
          <section>
            <h3 className="font-bold text-gray-900 mb-2">MADDE 5 - CAYMA HAKKI</h3>
            <p className="mb-2">
              ALICI; mal satışına ilişkin mesafeli sözleşmelerde, ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren <strong>14 (on dört) gün</strong> içerisinde hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe göstermeksizin malı reddederek sözleşmeden cayma hakkına sahiptir.
            </p>
            <p>
              Cayma hakkının kullanılması için bu süre içinde SATICI'ya iadeli taahhütlü posta, faks veya e-posta ile bildirimde bulunulması ve ürünün 6. madde hükümleri çerçevesinde kullanılmamış olması şarttır.
            </p>
          </section>

          {/* MADDE 6 - CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER */}
          <section>
            <h3 className="font-bold text-gray-900 mb-2">MADDE 6 - CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</h3>
            <p>
              ALICI'nın istekleri veya açıkça onun kişisel ihtiyaçları doğrultusunda hazırlanan, niteliği itibarıyla geri gönderilmeye elverişli olmayan ve çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali olan malların satışına ilişkin sözleşmelerde cayma hakkı kullanılamaz. Ayrıca montajı yapılmış, kullanılmış veya kutusu hasar görmüş ürünlerde iade kabul edilmemektedir.
            </p>
          </section>

          {/* MADDE 7 - YETKİLİ MAHKEME */}
          <section>
            <h3 className="font-bold text-gray-900 mb-2">MADDE 7 - YETKİLİ MAHKEME</h3>
            <p>
              İşbu sözleşmenin uygulanmasında, Sanayi ve Ticaret Bakanlığınca ilan edilen değere kadar Tüketici Hakem Heyetleri ile ALICI'nın veya SATICI'nın yerleşim yerindeki Tüketici Mahkemeleri yetkilidir.
            </p>
          </section>

        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>Siparişin gerçekleşmesi durumunda ALICI işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.</p>
        </div>

      </div>
    </div>
  )
}