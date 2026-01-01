import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const statusMap: Record<string, string> = {
      // Ödeme Durumları
      not_paid: "Ödeme Bekleniyor",
      awaiting: "Bekliyor",
      captured: "Ödeme Alındı",
      partially_refunded: "Kısmen İade",
      refunded: "İade Edildi",
      canceled: "İptal Edildi",
      requires_action: "İşlem Gerekiyor",
      authorized: "Ödeme Onaylandı",
      
      // Sipariş/Kargo Durumları
      not_fulfilled: "Hazırlanıyor",
      fulfilled: "Paketlendi",
      partially_shipped: "Kısmen Gönderildi",
      shipped: "Kargolandı",
      partially_returned: "Kısmen İade",
      returned: "İade Alındı",
      delivered: "Teslim Edildi", // İŞTE BU EKSİKTİ, EKLENDİ ✅
    }

    if (statusMap[str]) {
        return statusMap[str]
    }

    // Listede yoksa (örn: bilinmeyen bir durum), baş harfini büyütüp göster
    const formatted = str.split("_").join(" ")
    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <Text>
        Sipariş onayı şu adrese gönderildi:{" "}
        <span className="text-ui-fg-medium-plus font-semibold" data-testid="order-email">
          {order.email}
        </span>
      </Text>
      
      <Text className="mt-2">
        Sipariş tarihi:{" "}
        <span data-testid="order-date" className="font-medium">
          {new Date(order.created_at).toLocaleDateString("tr-TR", {
             day: "numeric",
             month: "long",
             year: "numeric",
             weekday: "long"
          })}
        </span>
      </Text>

      <Text className="mt-2 text-ui-fg-interactive">
        Sipariş numarası: <span data-testid="order-id" className="font-bold">#{order.display_id}</span>
      </Text>

      <div className="flex flex-col sm:flex-row sm:items-center text-compact-small gap-y-2 gap-x-4 mt-4">
        {showStatus && (
          <>
            <div className="flex flex-col">
                <Text>
                Sipariş durumu:{" "}
                <span className="text-orange-600 font-bold" data-testid="order-status">
                    {formatStatus(order.fulfillment_status)}
                </span>
                </Text>
            </div>
            
            <div className="flex flex-col">
                <Text>
                Ödeme durumu:{" "}
                <span className="text-orange-600 font-bold" data-testid="order-payment-status">
                    {formatStatus(order.payment_status)}
                </span>
                </Text>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails