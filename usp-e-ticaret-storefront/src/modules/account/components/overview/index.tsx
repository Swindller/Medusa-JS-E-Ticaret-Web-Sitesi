"use client"

import { Container, Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import { HttpTypes } from "@medusajs/types"
import ChevronDown from "@modules/common/icons/chevron-down"
// Sadece kesin olan ikonları kullanıyoruz, hata riskini sıfırladık:
import { MapPin, User, BuildingStorefront, CreditCard } from "@medusajs/icons"

type OverviewProps = {
  customer: HttpTypes.StoreCustomer | null
  orders: HttpTypes.StoreOrder[] | null
}

const Overview = ({ customer, orders }: OverviewProps) => {
  
  if (!customer) {
    return null
  }

  // Fiyat Formatlama
  const formatPrice = (amount: number, currency_code: string) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: currency_code,
    }).format(amount)
  }

  // Tarih Formatlama
  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("tr-TR", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
  }

  return (
    <div data-testid="overview-page-wrapper" className="w-full">
      
      {/* 1. ÜST PANEL (HEADER) - Logolu ve Renkli */}
      <div className="bg-[#0f172a] rounded-xl p-8 mb-8 text-white relative overflow-hidden shadow-lg border-b-4 border-orange-600">
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
               <User className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Hoş Geldiniz, {customer.first_name} 👋
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                {customer.email} • Müşteri Paneli
              </p>
            </div>
          </div>
          
          <div className="hidden md:block opacity-90">
             <span className="text-xl font-black tracking-tighter text-white">
                POMPA <span className="text-orange-500">TEKNİK</span>
             </span>
          </div>
        </div>
      </div>

      {/* 2. İSTATİSTİK KARTLARI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Profil Kartı */}
        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Profil Durumu</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">%100</span>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Tamamlandı</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors">
            <User className="w-6 h-6 text-orange-600" />
          </div>
        </div>

        {/* Adres Kartı */}
        <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Kayıtlı Adresler</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{customer.addresses?.length || 0}</span>
              <span className="text-xs font-medium text-gray-500">Adet Adres</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      {/* 3. SON SİPARİŞLER */}
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <BuildingStorefront className="text-gray-400" />
            <h3 className="text-lg font-bold text-gray-900">Son Siparişler</h3>
          </div>
          <Link href="/account/orders" className="text-orange-600 hover:text-orange-700 text-sm font-semibold hover:underline decoration-2 underline-offset-4 transition-all">
              Tüm Siparişleri Gör
          </Link>
        </div>

        <ul className="flex flex-col gap-y-3" data-testid="orders-wrapper">
          {orders && orders.length > 0 ? (
            orders.slice(0, 5).map((order) => (
              <li key={order.id} data-testid="order-wrapper">
                <Link href={`/account/orders/details/${order.id}`}>
                  <div className="bg-white flex flex-col md:flex-row items-start md:items-center p-5 border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all cursor-pointer group gap-4 md:gap-0">
                    
                    {/* Sol Kısım: ID ve Tarih */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Sipariş No</span>
                         <span className="font-mono font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">#{order.display_id}</span>
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tarih</span>
                         <span className="font-medium text-gray-700 text-sm">{formatDate(order.created_at)}</span>
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Durum</span>
                         <span className="font-medium text-sm text-blue-600 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            İşleniyor
                         </span>
                      </div>
                       <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Tutar</span>
                         <span className="font-bold text-gray-900">{formatPrice(order.total, order.currency_code)}</span>
                      </div>
                    </div>

                    {/* Sağ Kısım: Ok */}
                    <div className="hidden md:flex items-center justify-end pl-4 border-l border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                           <ChevronDown className="-rotate-90 w-4 h-4" />
                        </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <div className="p-12 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300 flex flex-col items-center gap-3">
              <CreditCard className="w-12 h-12 text-gray-300" />
              <div className="flex flex-col">
                <span className="text-gray-900 font-medium">Henüz bir siparişiniz yok.</span>
                <span className="text-gray-500 text-sm">İhtiyacınız olan ürünleri sepetinize ekleyerek başlayabilirsiniz.</span>
              </div>
              <Link href="/store" className="mt-2 px-6 py-2 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors">
                Alışverişe Başla
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Overview