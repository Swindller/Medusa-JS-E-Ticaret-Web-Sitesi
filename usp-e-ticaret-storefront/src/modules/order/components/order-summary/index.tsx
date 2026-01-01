import { HttpTypes } from "@medusajs/types"
import { convertToLocale } from "@lib/util/money"

type OrderSummaryProps = {
  order: HttpTypes.StoreOrder
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  const getAmount = (amount?: number | null) => {
    if (!amount) {
      return 0
    }
    return convertToLocale({ amount, currency_code: order.currency_code })
  }

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-lg font-bold text-[#0f172a] mb-2">Sipariş Özeti</h2>
      <div className="text-sm text-gray-600 flex flex-col gap-y-1">
        
        {/* Subtotal -> Ara Toplam */}
        <div className="flex items-center justify-between">
          <span>Ara Toplam</span>
          <span>{getAmount(order.subtotal)}</span>
        </div>

        {/* Shipping -> Kargo */}
        <div className="flex items-center justify-between">
          <span>Kargo</span>
          <span>{getAmount(order.shipping_total)}</span>
        </div>

        {/* Taxes -> Vergiler */}
        <div className="flex items-center justify-between">
          <span>Vergiler</span>
          <span>{getAmount(order.tax_total)}</span>
        </div>
        
      </div>
      <div className="h-px w-full border-b border-gray-200 border-dashed my-2" />
      <div className="flex items-center justify-between text-base font-bold text-[#0f172a]">
        <span>Genel Toplam</span>
        <span className="text-orange-600">{getAmount(order.total)}</span>
      </div>
    </div>
  )
}

export default OrderSummary