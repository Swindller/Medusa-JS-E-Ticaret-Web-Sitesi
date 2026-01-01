"use client"

import { defineWidgetConfig } from "@medusajs/admin-sdk"
// DÜZELTME: clx silindi, sadece kullanılanlar kaldı
import { Container, Heading, Text } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import { BuildingTax, User } from "@medusajs/icons"

// Tip tanımlaması
type OrderWidgetProps = {
  data: HttpTypes.AdminOrder
}

const OrderBillingWidget = ({ data: order }: OrderWidgetProps) => {
  
  if (!order || !order.billing_address) {
    return null
  }

  const billing = order.billing_address
  const metadata = billing.metadata || {}

  const taxOffice = (metadata.tax_office as string) || null
  const taxId = (metadata.tax_id as string) || null
  const identityNumber = (metadata.identity_number as string) || null
  const companyName = billing.company || null

  const hasBillingInfo = identityNumber || (taxOffice && taxId)

  if (!hasBillingInfo) {
    return null
  }

  const isCorporate = !!taxId

  return (
    <Container className="p-0 overflow-hidden bg-ui-bg-base shadow-elevation-card-rest border border-ui-border-base mb-4 rounded-lg">
      <div className="px-6 py-4 border-b border-ui-border-base bg-ui-bg-subtle flex items-center gap-2">
        {isCorporate ? (
           <BuildingTax className="text-ui-fg-base" />
        ) : (
           <User className="text-ui-fg-base" />
        )}
        <Heading level="h2" className="text-[18px] font-semibold text-ui-fg-base">
          {isCorporate ? "Kurumsal Fatura Bilgileri" : "Bireysel Fatura Bilgileri"}
        </Heading>
      </div>
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
        {isCorporate && (
          <>
             <div className="flex flex-col gap-1">
              <Text className="text-ui-fg-subtle text-xs uppercase tracking-wider font-medium">
                Vergi Dairesi
              </Text>
              <Text className="text-ui-fg-base text-sm font-medium">
                {taxOffice}
              </Text>
            </div>
            <div className="flex flex-col gap-1">
              <Text className="text-ui-fg-subtle text-xs uppercase tracking-wider font-medium">
                Vergi Numarası (VKN)
              </Text>
              <Text className="text-ui-fg-base text-sm font-mono bg-ui-bg-subtle w-fit px-2 py-0.5 rounded">
                {taxId}
              </Text>
            </div>
          </>
        )}

        {!isCorporate && identityNumber && (
          <div className="flex flex-col gap-1">
            <Text className="text-ui-fg-subtle text-xs uppercase tracking-wider font-medium">
              T.C. Kimlik Numarası
            </Text>
            <Text className="text-ui-fg-base text-sm font-mono bg-ui-bg-subtle w-fit px-2 py-0.5 rounded">
              {identityNumber}
            </Text>
          </div>
        )}
        
         {companyName && (
          <div className="flex flex-col gap-1 md:col-span-2">
            <Text className="text-ui-fg-subtle text-xs uppercase tracking-wider font-medium">
              Firma Ünvanı
            </Text>
            <Text className="text-ui-fg-base text-sm font-medium">
              {companyName}
            </Text>
          </div>
        )}
      </div>
    </Container>
  )
}

export const config = defineWidgetConfig({
  zone: "order.details.before",
})

export default OrderBillingWidget