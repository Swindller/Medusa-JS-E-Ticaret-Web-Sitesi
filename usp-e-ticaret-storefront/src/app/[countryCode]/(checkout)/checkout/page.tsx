import { retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import PaymentWrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Ödeme", // "Checkout" yazısını "Ödeme" yaptık
}

export default async function Checkout() {
  const cart = await retrieveCart()

  if (!cart) {
    return notFound()
  }

  const customer = await retrieveCustomer()

  return (
    // Arka planı gri yaptık, grid yapısını düzenledik
    <div className="bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-12 py-12">
        <PaymentWrapper cart={cart}>
          <CheckoutForm cart={cart} customer={customer} />
        </PaymentWrapper>
        
        {/* Sağ taraf (Özet) */}
        <div className="relative">
             <CheckoutSummary cart={cart} />
        </div>
      </div>
    </div>
  )
}