import { Metadata } from "next"
import { listOrders } from "@lib/data/orders"
import { notFound } from "next/navigation"
import OrderOverview from "@modules/account/components/order-overview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Siparişlerim",
  description: "Geçmiş siparişlerinizi görüntüleyin.",
}

export default async function Orders() {
  const orders = await listOrders()

  if (!orders) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="orders-page-content">
      {/* BAŞLIK */}
      <div className="mb-8 border-b border-gray-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0f172a]">Sipariş Geçmişi</h1>
          <p className="text-sm text-gray-500 mt-1">
            Önceki siparişlerinizi ve durumlarını buradan takip edebilirsiniz.
          </p>
        </div>
        
        <LocalizedClientLink 
            href="/store" 
            className="px-4 py-2 bg-orange-600 text-white text-sm font-bold rounded hover:bg-orange-700 transition-colors shadow-sm text-center"
        >
            Alışverişe Devam Et
        </LocalizedClientLink>
      </div>

      <div>
        {orders && orders.length > 0 ? (
          <div className="flex flex-col gap-y-4">
             {/* Sipariş Listesi */}
             <OrderOverview orders={orders} />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center p-12 bg-gray-50 border border-gray-200 border-dashed rounded-xl text-center">
            <span className="text-4xl mb-4">📦</span>
            <h2 className="text-lg font-semibold text-gray-900">Henüz Siparişiniz Yok</h2>
            <p className="text-gray-500 text-sm mt-2 mb-6">
              Mekanik sistemleriniz için ihtiyacınız olan her şey bir tık uzağınızda.
            </p>
            <LocalizedClientLink
              href="/store"
              className="px-6 py-3 bg-[#0f172a] text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Ürünleri İncele
            </LocalizedClientLink>
          </div>
        )}
      </div>
    </div>
  )
}