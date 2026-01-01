"use client"

import { Heading, Text, Button, Label } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { MapPin } from "@medusajs/icons"
// GÜNCELLEME BURADA: useActionState 'react'tan geliyor, useFormStatus 'react-dom'da kalıyor
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { submitServiceForm } from "@lib/actions"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button 
      type="submit"
      isLoading={pending}
      className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 mt-2 rounded-lg transition-all shadow-lg hover:shadow-orange-500/30"
    >
      {pending ? "GÖNDERİLİYOR..." : "SERVİS TALEBİ GÖNDER"}
    </Button>
  )
}

export default function ServicePage() {
  // GÜNCELLEME BURADA: useFormState -> useActionState oldu
  const [state, formAction] = useActionState(submitServiceForm, { success: false, message: "" })

  return (
    <div className="bg-gray-50 min-h-screen pb-0">
      
      {/* 1. HERO BÖLÜMÜ */}
      <div className="bg-[#0f172a] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="content-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="pt-4">
            <div className="mb-6 inline-block">
              <div className="bg-white p-3 rounded-lg shadow-lg shadow-orange-500/20">
                <img src="/usplogo.png" alt="Uğur Su Pompaları" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">UĞUR SU POMPALARI GÜVENCESİYLE</span>
            <Heading level="h1" className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Mekanik Sistemlerinizin <br/><span className="text-orange-500">Kalbi Bizimle Güvende</span>
            </Heading>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="bg-white p-2 rounded-lg h-16 w-36 flex items-center justify-center shrink-0">
                    <img src="/grundfos.jpg" alt="Grundfos Logo" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                    <div className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">RESMİ YETKİLİ SERVİS NOKTASI</div>
                    <div className="text-white font-bold text-lg leading-tight">Grundfos İç Anadolu Bölge Yetkili Servisi</div>
                </div>
            </div>
            <Text className="text-gray-300 text-lg mb-6 max-w-lg">Endüstriyel ve evsel pompa gruplarında 20 yılı aşkın tecrübe. Arıza tespiti, periyodik bakım ve orijinal yedek parça değişimi için yanınızdayız.</Text>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <LocalizedClientLink href="/stores" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-orange-600/20 hover:scale-105">
                <MapPin /> Mağazalarımız ve Konum
              </LocalizedClientLink>
            </div>
          </div>

          <div className="bg-white text-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl border-t-4 border-orange-600">
            <Heading level="h2" className="text-2xl font-bold mb-6 text-[#0f172a]">Hızlı Servis Talebi</Heading>
            
            {state?.success ? (
               <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center animate-in fade-in zoom-in duration-300">
                 <div className="text-4xl mb-2">✅</div>
                 <h3 className="font-bold text-lg">Talebiniz Alındı!</h3>
                 <p className="text-sm">Servis kaydınız başarıyla oluşturuldu. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
                 <button onClick={() => window.location.reload()} className="mt-4 text-sm text-green-800 underline hover:text-green-900">Yeni Talep Oluştur</button>
               </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label size="small" className="font-semibold text-gray-600">Ad Soyad / Firma</Label>
                    <input name="adSoyad" className="px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 outline-none transition-colors" placeholder="Firma veya Kişi Adı" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label size="small" className="font-semibold text-gray-600">Telefon</Label>
                    <input name="telefon" className="px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 outline-none transition-colors" placeholder="05XX XXX XX XX" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label size="small" className="font-semibold text-gray-600">Hizmet Türü</Label>
                    <select name="hizmetTuru" className="px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 outline-none bg-white">
                      <option value="Ariza">Arıza Onarım</option>
                      <option value="Bakim">Periyodik Bakım</option>
                      <option value="Montaj">Devreye Alma (Start-Up)</option>
                      <option value="Parca">Yedek Parça</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label size="small" className="font-semibold text-gray-600">Marka / Ürün</Label>
                    <select name="marka" className="px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 outline-none bg-white">
                      <option value="Grundfos">Grundfos</option>
                      <option value="Wilo">Wilo</option>
                      <option value="Etna">Etna</option>
                      <option value="Standart">Standart Pompa</option>
                      <option value="Diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label size="small" className="font-semibold text-gray-600">Adres</Label>
                  <textarea name="adres" className="px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 outline-none transition-colors min-h-[60px]" placeholder="Açık adres bilgisi..." required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label size="small" className="font-semibold text-gray-600">Arıza Detayı</Label>
                  <textarea name="detay" className="px-3 py-2 border border-gray-300 rounded-md focus:border-orange-500 outline-none transition-colors min-h-[80px]" placeholder="Şikayetinizi kısaca belirtiniz..." />
                </div>

                <SubmitButton />
              </form>
            )}
          </div>
        </div>
      </div>
      
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all text-center group">
            <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">🛠️</div>
            <Heading level="h3" className="text-xl font-bold mb-3 text-[#0f172a]">Yetkili Servis</Heading>
            <Text className="text-gray-500">Grundfos başta olmak üzere tüm markalara yetkili servis standartlarında hizmet.</Text>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all text-center group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">⚙️</div>
            <Heading level="h3" className="text-xl font-bold mb-3 text-[#0f172a]">Orijinal Yedek Parça</Heading>
            <Text className="text-gray-500">Cihazınızın ömrünü uzatan %100 orijinal yedek parça garantisi.</Text>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-all text-center group">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">⚡</div>
            <Heading level="h3" className="text-xl font-bold mb-3 text-[#0f172a]">Hızlı Müdahale</Heading>
            <Text className="text-gray-500">Geniş servis ağımız ve mobil ekiplerimizle arızalara anında çözüm.</Text>
          </div>
        </div>
      </div>
      <div className="w-full bg-white border-t border-gray-200 py-16">
        <div className="content-container text-center">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">GÜÇLÜ İŞ ORTAKLARIMIZ</span>
            <Heading level="h2" className="text-3xl md:text-4xl font-black text-[#0f172a] mb-12 mt-2">Referanslarımız</Heading>
            <div className="relative w-full flex justify-center transition-all duration-500">
                <img src="/referanslar.jpg" alt="Uğur Su Pompaları Referanslar" className="w-full max-w-5xl h-auto object-contain" />
            </div>
        </div>
      </div>
    </div>
  )
}