"use client"

import { Heading, Text, clx } from "@medusajs/ui"
import PaymentButton from "../payment-button"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const Review = ({ cart }: { cart: any }) => {
  const searchParams = useSearchParams()
  // Checkbox'ın seçili olup olmadığını takip eden state
  const [isAgreed, setIsAgreed] = useState(false)

  const isOpen = searchParams.get("step") === "review"

  const paidByGiftcard =
    cart?.gift_cards && cart?.gift_cards?.length > 0 && cart?.total === 0

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    (cart.payment_collection || paidByGiftcard)

  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-6">
        <Heading
          level="h2"
          className={clx(
            "flex flex-row text-3xl-regular gap-x-2 items-baseline",
            {
              "opacity-50 pointer-events-none select-none": !isOpen,
            }
          )}
        >
          Gözden Geçirme ve Siparişi Onaylama
        </Heading>
      </div>
      
      {isOpen && previousStepsCompleted && (
        <>
          {/* YASAL ONAY KUTUSU (CHECKBOX) ALANI */}
          <div className="flex items-start gap-x-3 w-full mb-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
            <div className="flex items-center h-6">
              <input
                id="agreements"
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500 cursor-pointer accent-orange-600"
              />
            </div>
            <div className="text-small-regular text-ui-fg-base leading-snug">
              <label htmlFor="agreements" className="cursor-pointer select-none">
                Siparişimi onaylayarak;{" "}
              </label>
              
              {/* LİNKLER: href kısımlarını kendi sayfa adreslerine göre düzeltebilirsin */}
              <Link 
                href="/content/kvkk" 
                target="_blank" 
                className="text-ui-fg-interactive hover:text-orange-600 hover:underline font-medium transition-colors"
              >
                KVKK Aydınlatma Metni
              </Link>
              {", "}
              <Link 
                href="/content/mesafeli-satis-sozlesmesi" 
                target="_blank" 
                className="text-ui-fg-interactive hover:text-orange-600 hover:underline font-medium transition-colors"
              >
                Mesafeli Satış Sözleşmesi
              </Link>
              {" ve "}
              <Link 
                href="/content/iade-kosullari" 
                target="_blank" 
                className="text-ui-fg-interactive hover:text-orange-600 hover:underline font-medium transition-colors"
              >
                İptal & İade Koşulları
              </Link>
              <label htmlFor="agreements" className="cursor-pointer select-none">
                'nı okuduğumu, anladığımı ve kabul ettiğimi beyan ederim.
              </label>
            </div>
          </div>

          {/* BUTON ALANI (Onaylanmazsa tıklanamaz) */}
          <div className={isAgreed ? "" : "opacity-50 pointer-events-none grayscale"}>
             <PaymentButton cart={cart} data-testid="submit-order-button" />
          </div>
          
          {!isAgreed && (
            <Text className="text-ui-fg-subtle text-xs mt-2 text-center w-full">
              Siparişi tamamlamak için lütfen yukarıdaki kutucuğu onaylayınız.
            </Text>
          )}
        </>
      )}
    </div>
  )
}

export default Review