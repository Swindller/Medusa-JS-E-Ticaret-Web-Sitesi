"use client" 

import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react"
// GÜNCELLEME BURADA
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { submitContactForm } from "@lib/actions"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button 
      type="submit"
      disabled={pending}
      className="w-full md:w-auto bg-[#0f172a] text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
    >
      {pending ? "GÖNDERİLİYOR..." : "MESAJI GÖNDER"} <Send size={18} />
    </button>
  )
}

export default function ContactPage() {
  // GÜNCELLEME BURADA
  const [state, formAction] = useActionState(submitContactForm, { success: false, message: "" })

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* ÜST BANNER */}
      <div className="bg-[#0f172a] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="content-container text-center relative z-10">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3 block">7/24 Destek</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-6">Bize Ulaşın</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Mekanik sistemleriniz için en doğru çözümü mü arıyorsunuz? <br/>Uzman mühendislerimiz bir telefon uzağınızda.</p>
        </div>
      </div>

      <div className="content-container mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* SOL: İLETİŞİM FORMU */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <MessageSquare className="text-orange-600" /> Mesaj Gönderin
            </h3>
            <p className="text-gray-500 mb-8 text-sm">Formu doldurun, proje ekibimiz en geç 24 saat içinde size dönüş yapsın.</p>

            {state?.success ? (
               <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-lg text-center animate-in fade-in zoom-in duration-300">
                 <div className="text-5xl mb-4 mx-auto w-fit">✅</div>
                 <h3 className="font-bold text-xl mb-2">Mesajınız İletildi!</h3>
                 <p>İletişime geçtiğiniz için teşekkürler. İlgili departmanımız en kısa sürede size dönüş yapacaktır.</p>
                 <button onClick={() => window.location.reload()} className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">Yeni Mesaj</button>
               </div>
            ) : (
              <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                    <input name="adSoyad" type="text" placeholder="Örn: Ahmet Yılmaz" required className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon Numaranız</label>
                    <input name="telefon" type="tel" placeholder="05XX XXX XX XX" required className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresi</label>
                  <input name="email" type="email" placeholder="ornek@sirketiniz.com" required className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                  <select name="konu" className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-600">
                    <option value="Bilgi">Genel Bilgi Almak İstiyorum</option>
                    <option value="Teklif">Teklif İsteği (Proje)</option>
                    <option value="Servis">Teknik Servis / Arıza</option>
                    <option value="Parca">Yedek Parça Sorgulama</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                  <textarea name="mesaj" rows={4} required placeholder="Projenizden veya ihtiyacınızdan kısaca bahsedin..." className="w-full bg-gray-50 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"></textarea>
                </div>
                <SubmitButton />
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600 hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-lg mb-1">Satış Departmanı</h4>
              <p className="text-gray-500 text-sm mb-4">Proje teklifleri ve ürün bilgisi için.</p>
              <div className="space-y-2">
                <a href="tel:+903123943752" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium"><Phone size={18} /> 0312 394 37 52</a>
                <a href="mailto:satis@ugursupompalari.com" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium"><Mail size={18} /> satis@ugursupompalari.com</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gray-800 hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-lg mb-1">Teknik Servis</h4>
              <p className="text-gray-500 text-sm mb-4">Arıza kaydı ve bakım talepleri.</p>
              <div className="space-y-2">
                <a href="tel:+903123943752" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium"><Phone size={18} /> 0312 394 37 52</a>
                <a href="mailto:servis@ugursupompalari.com" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-medium"><Mail size={18} /> servis@ugursupompalari.com</a>
              </div>
            </div>
            <div className="bg-[#0f172a] text-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><MapPin className="text-orange-500" /> Adresimiz</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">Altay Mahallesi Söğüt Caddesi<br/>No: 8/DAA, Etimesgut / ANKARA</p>
              <a href="/stores" className="text-orange-500 text-sm font-bold hover:underline flex items-center gap-1">Haritada Gör →</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}