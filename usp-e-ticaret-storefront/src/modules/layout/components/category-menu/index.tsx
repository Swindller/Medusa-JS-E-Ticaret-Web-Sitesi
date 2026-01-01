"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Menu, X, ArrowRight } from "lucide-react"
import { clx } from "@medusajs/ui"

const mockCategories = [
  {
    id: "dalgic",
    title: "DALGIÇ POMPA GRUPLARI",
    handle: "dalgic-pompa-gruplari",
    subcategories: [
      { name: "Tüm Dalgıç Pompalar", handle: "dalgic-pompa-gruplari" }, // YENİ EKLENDİ
      { name: "Drenaj Pompaları", handle: "drenaj-pompalari" },
      { name: "Kirli Su Dalgıç", handle: "kirli-su-pompalari" },
      { name: "Derin Kuyu Pompaları", handle: "derin-kuyu-pompalari" },
      { name: "Foseptik Pompaları", handle: "foseptik-pompalari" },
      { name: "Kesoni Kuyu Pompaları", handle: "kesoni-kuyu-pompalari" }
    ]
  },
  {
    id: "pompa",
    title: "POMPA GRUPLARI",
    handle: "pompa-gruplari",
    subcategories: [
      { name: "Tüm Pompa Grupları", handle: "pompa-gruplari" }, // YENİ EKLENDİ
      { name: "12V - 24V Diyaframlı Pompalar", handle: "12v-24v-diyaframli-pompalar" },
      { name: "Dişli Yağ Transfer Pompaları", handle: "disli-yag-transfer-pompalari" },
      { name: "Dozaj Pompaları", handle: "dozaj-pompalari" },
      { name: "Rejeneratif Pompa", handle: "rejeneratif-pompa" },
      { name: "Güneş Enerjisi Pompaları", handle: "gunes-enerjisi-pompalari" },
      { name: "Havuz Pompaları", handle: "havuz-pompalari" },
      { name: "Inline Pompalar", handle: "inline-pompalari" },
      { name: "Jakuzi Pompaları", handle: "jakuzi-pompalari" },
      { name: "Jet Pompalar", handle: "jet-pompalar" },
      { name: "Kademeli Pompalar", handle: "kademeli-pompalar" },
      { name: "Kendinden Emişli Pompalar", handle: "kendinden-emisli-pompalar" },
      { name: "Kuyruk Mili Pompalar", handle: "kuyruk-mili-pompalari" },
      { name: "Marin Pompalar", handle: "marin-pompalar" },
      { name: "Santrifüj Pompalar", handle: "santrifuj-pompalar" }
    ]
  },
  {
    id: "hidrofor",
    title: "HİDROFOR GRUPLARI",
    handle: "hidrofor-gruplari",
    subcategories: [
      { name: "Tüm Hidrofor Grupları", handle: "hidrofor-gruplari" }, // YENİ EKLENDİ
      { name: "Paket Hidroforlar", handle: "paket-hidroforlar" },
      { name: "Dikey Milli Hidroforlar", handle: "dikey-milli-hidroforlar" },
      { name: "Frekans Kontrollü Hidroforlar", handle: "frekans-kontrollu-hidroforlar" },
      { name: "Paslanmaz Hidroforlar", handle: "paslanmaz-hidroforlar" }
    ]
  },
  {
    id: "genlesme",
    title: "GENLEŞME TANKLARI",
    handle: "genlesme-tanklari",
    subcategories: [
      { name: "Tüm Genleşme Tankları", handle: "genlesme-tanklari" }, // YENİ EKLENDİ
      { name: "Değiştirilebilir Membranlı Tanklar", handle: "degistirilebilir-membranli-tanklar" },
      { name: "Sabit Membranlı Tanklar", handle: "sabit-membranli-tanklar" },
      { name: "Paslanmaz Tanklar", handle: "paslanmaz-tanklar" },
      { name: "Solar Tanklar", handle: "solar-tanklar" }
    ]
  },
  {
    id: "wc",
    title: "WC ÖĞÜTÜCÜ ATIK SU",
    handle: "wc-ogutucu-atik-su",
    subcategories: [
      { name: "Tüm WC Öğütücü Atık Su Pompaları", handle: "wc-ogutucu-atik-su" }, // YENİ EKLENDİ
      { name: "Bıçaklı Pompalar", handle: "bicakli-pompalar" },
      { name: "Evsel Atık Üniteleri", handle: "evsel-atik-uniteleri" },
      { name: "Sanayi Tipi Öğütücüler", handle: "sanayi-tipi-ogutuculer" }
    ]
  },
  {
    id: "yangin",
    title: "YANGIN GRUPLARI",
    handle: "yangin-gruplari",
    subcategories: [
      { name: "Tüm Yangın Grupları", handle: "yangin-gruplari" }, // YENİ EKLENDİ
      { name: "Dizel Yangın Pompaları", handle: "dizel-yangin-pompalari" },
      { name: "Elektrikli Yangın Pompaları", handle: "elektrikli-yangin-pompalari" },
      { name: "Jokey Pompalar", handle: "jokey-pompalar" },
      { name: "Yangın Hidroforları", handle: "yangin-hidroforlari" }
    ]
  },
  {
    id: "yedek-parca",
    title: "YEDEK PARÇA VE AKSESUAR",
    handle: "yedek-parca",
    subcategories: [
      { name: "Tüm Yedek Parçalar ve Aksesuarlar", handle: "yedek-parca" }, // ZATEN EKLEMİŞTİK
      { name: "Mekanik Salmastralar", handle: "mekanik-salmastralar" },
      { name: "Pompa Çarkları ve Fanlar", handle: "pompa-carklari-ve-fanlar" },
      { name: "Difüzörler ve Gövdeler", handle: "difuzorler-ve-govdeler" },
      { name: "Kondansatör ve Elektrik", handle: "kondansator-ve-elektrik" },
      { name: "Basınç Şalteri ve Manometre", handle: "basinc-salteri-ve-manometre" },
      { name: "Flatör ve Seviye Kontrol", handle: "flator-ve-seviye-kontrol" },
      { name: "Bağlantı Parçaları", handle: "baglanti-parcalari" },
      { name: "Motor Yedek Parçaları", handle: "motor-yedek-parcalari" }
    ]
  }
]

export default function CategoryMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(mockCategories[0])

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* TRIGGER BUTON */}
      <button 
        className={clx(
          "h-full px-6 py-3 font-bold uppercase text-sm flex items-center gap-2 transition-all border-r border-white/10",
          isOpen 
            ? "bg-ptm-orange text-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]" 
            : "bg-ptm-dark text-white hover:bg-ptm-orange"
        )}
      >
        <Menu size={18} /> 
        <span>ÜRÜN KATALOĞU</span>
        {isOpen ? <X size={14} className="ml-2 opacity-70"/> : <ChevronRight size={14} className="ml-2 rotate-90 opacity-70"/>}
      </button>

      {/* MEGA MENÜ GÖVDESİ */}
      {isOpen && (
        <div className="absolute top-full left-0 w-[950px] min-h-[500px] bg-white shadow-2xl z-[999] flex border-t-4 border-ptm-orange animate-in fade-in slide-in-from-top-1 duration-200">
          
          {/* SOL: KATEGORİLER */}
          <div className="w-[300px] bg-gray-50 flex flex-col border-r border-gray-200 py-2 overflow-y-auto max-h-[600px]">
            {mockCategories.map((category) => (
              <div
                key={category.id}
                onMouseEnter={() => setActiveCategory(category)}
                className={clx(
                  "px-6 py-3.5 cursor-pointer flex items-center justify-between text-sm font-bold transition-all border-l-4",
                  activeCategory.id === category.id
                    ? "bg-white text-ptm-orange border-ptm-orange shadow-sm z-10 -mr-[1px]" 
                    : "text-gray-600 border-transparent hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {category.title}
                {activeCategory.id === category.id && <ChevronRight size={16} />}
              </div>
            ))}
          </div>

          {/* SAĞ: ALT KATEGORİLER */}
          <div className="flex-1 bg-ptm-dark p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Menu size={200} className="text-white" />
             </div>

            <div className="relative z-10">
              {/* Başlığa tıklayınca ana kategoriye gitsin */}
              <Link href={`/categories/${activeCategory.handle}`} className="hover:opacity-80 transition-opacity">
                <h3 className="text-2xl font-black text-white mb-6 pb-4 border-b border-gray-700 flex items-center gap-3">
                  <span className="text-ptm-orange text-4xl">/</span> {activeCategory.title}
                </h3>
              </Link>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {activeCategory.subcategories.map((sub, index) => (
                  <Link 
                    key={index} 
                    // BURASI ÇOK ÖNEMLİ: Artık /store?... değil, doğrudan kategori sayfasına gidiyor
                    href={`/categories/${sub.handle}`}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-2 text-sm font-medium border-b border-gray-800 hover:border-ptm-orange/50"
                  >
                    <ArrowRight size={14} className="text-ptm-orange opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}