import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"
import { Heading } from "@medusajs/ui"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="py-12 bg-gray-50 min-h-[calc(100vh-64px)]">
      <div className="content-container" data-testid="cart-container">
        {cart?.items?.length ? (
          <div className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-12">
            
            {/* SOL TARAF: ÜRÜNLER */}
            <div className="flex flex-col bg-white p-8 rounded-xl border border-gray-200 shadow-sm gap-y-6">
              
              {/* BAŞLIK BURADA - ARTIK "CART" YAZMAYACAK */}
              <div className="pb-4 border-b border-gray-100 flex items-center justify-between">
                <Heading level="h1" className="text-3xl font-black text-[#0f172a]">
                  Alışveriş Sepeti
                </Heading>
                <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                   {cart.items.length} Ürün
                </span>
              </div>

              {!customer && (
                <>
                  <SignInPrompt />
                  <Divider />
                </>
              )}
              <ItemsTemplate cart={cart} />
            </div>

            {/* SAĞ TARAF: ÖZET */}
            <div className="relative">
              <div className="flex flex-col gap-y-8 sticky top-24">
                {cart && cart.region && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg border-t-4 border-t-orange-500">
                    <Summary cart={cart as any} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* SEPET BOŞSA GÖSTERİLECEK ALAN */
          <div className="flex justify-center">
            <EmptyCartMessage />
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTemplate