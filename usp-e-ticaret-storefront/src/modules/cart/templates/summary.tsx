"use client"

import { Button, Heading } from "@medusajs/ui"

import CartTotals from "@modules/common/components/cart-totals"
import Divider from "@modules/common/components/divider"
import DiscountCode from "@modules/checkout/components/discount-code"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

type SummaryProps = {
  cart: HttpTypes.StoreCart & {
    promotions: HttpTypes.StorePromotion[]
  }
}

function getCheckoutStep(cart: HttpTypes.StoreCart) {
  if (!cart?.shipping_address?.address_1 || !cart.email) {
    return "address"
  } else if (cart?.shipping_methods?.length === 0) {
    return "delivery"
  } else {
    return "payment"
  }
}

const Summary = ({ cart }: SummaryProps) => {
  const step = getCheckoutStep(cart)

  return (
    <div className="flex flex-col gap-y-4">
      {/* Başlık Düzenlendi */}
      <Heading level="h2" className="text-[2rem] leading-[2.75rem] text-ptm-dark font-bold">
        SİPARİŞ ÖZETİ
      </Heading>
      
      <DiscountCode cart={cart} />
      <Divider />
      
      {/* Ara toplamlar buradan geliyor */}
      <CartTotals totals={cart} />
      
      <LocalizedClientLink
        href={"/checkout?step=" + step}
        data-testid="checkout-button"
      >
        {/* Buton Stili ve Metni Düzenlendi */}
        <Button className="w-full h-12 bg-ptm-orange hover:bg-orange-600 text-white font-bold uppercase tracking-wider text-base">
          ÖDEMEYE GEÇ
        </Button>
      </LocalizedClientLink>
    </div>
  )
}

export default Summary