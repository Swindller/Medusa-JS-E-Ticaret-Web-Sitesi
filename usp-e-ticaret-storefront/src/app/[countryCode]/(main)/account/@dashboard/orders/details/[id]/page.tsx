import { Metadata } from "next"
import { notFound } from "next/navigation"
import { retrieveOrder } from "@lib/data/orders"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"

// --- DÜZELTME BURADA ---
// Bu satır Next.js'e "Bu sayfayı sakın önbelleğe alma, her girişte taze veri çek" der.
export const dynamic = "force-dynamic"
export const revalidate = 0 

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Metadata için de taze veri çekelim
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    return {
      title: "Sipariş Bulunamadı",
      description: "İstediğiniz siparişe ulaşılamıyor.",
    }
  }

  return {
    title: `Sipariş #${order.display_id}`,
    description: "Sipariş detaylarınızı görüntüleyin.",
  }
}

export default async function OrderDetailsPage({ params }: Props) {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  return <OrderDetailsTemplate order={order} />
}