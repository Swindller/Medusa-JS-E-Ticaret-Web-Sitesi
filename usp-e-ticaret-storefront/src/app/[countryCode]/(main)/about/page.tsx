import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda | Mekanik Sistemlerin Öncüsü",
  description: "Endüstriyel pompa ve mekanik sistemlerde 20 yılı aşkın tecrübe.",
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ÜST BANNER (HERO) */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase">
            Gücümüzü <span className="text-orange-600">Tecrübemizden</span> Alıyoruz
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Endüstriyel pompa grupları, hidrofor sistemleri ve mekanik çözümlerde Türkiye'nin en güvenilir tedarikçisi olma yolunda emin adımlarla ilerliyoruz.
          </p>
        </div>
      </div>

      {/* İÇERİK BÖLÜMÜ */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Sol Taraf: Yazı */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Biz Kimiz?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Sektördeki köklü geçmişimizle, su teknolojileri ve mekanik tesisat alanında müşterilerimize en doğru mühendislik çözümlerini sunuyoruz. Sadece ürün satmıyor, projelerinizin kalbine can veriyoruz.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Geniş stok ağımız, uzman teknik ekibimiz ve 7/24 satış sonrası destek hizmetimizle, sanayiden tarıma, konuttan ağır endüstriye kadar her alanda yanınızdayız.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="block text-2xl font-bold text-gray-900">%100</span>
              <span className="text-sm text-gray-500">Müşteri Memnuniyeti</span>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="block text-2xl font-bold text-gray-900">5000+</span>
              <span className="text-sm text-gray-500">Başarılı Proje</span>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: Resim Alanı (Gri Kutu) */}
        <div className="relative pl-6 pt-6 bg-gray-100 rounded-xl lg:h-[400px] flex items-center justify-center border border-gray-200">
           <div className="text-center">
             <span className="text-6xl mb-4 block">🏭</span>
             <p className="text-gray-400 font-medium">Ofis / Depo Görseli Gelecek</p>
             <p className="text-xs text-gray-400 mt-2">(Buraya firmanın fotoğrafını koyarız)</p>
           </div>
        </div>
      </div>

      {/* MİSYON VİZYON KUTULARI */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kutu 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Misyonumuz</h3>
            <p className="text-gray-600">Enerji verimliliği yüksek, doğa dostu ve uzun ömürlü pompa sistemlerini en ulaşılabilir şartlarda sunmak.</p>
          </div>

          {/* Kutu 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vizyonumuz</h3>
            <p className="text-gray-600">Türkiye'nin mekanik market alanında dijitalleşen yüzü olarak global pazarda söz sahibi olmak.</p>
          </div>

          {/* Kutu 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:border-orange-500 transition-colors">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Değerlerimiz</h3>
            <p className="text-gray-600">Şeffaflık, teknik uzmanlık, hızlı tedarik ve satış sonrası kesintisiz güven ilişkisi.</p>
          </div>

        </div>
      </div>
    </div>
  )
}