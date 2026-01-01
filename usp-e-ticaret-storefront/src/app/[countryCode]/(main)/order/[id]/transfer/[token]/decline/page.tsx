import { declineTransferRequest } from "@lib/data/orders"
import { Heading, Text } from "@medusajs/ui"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  const { success, error } = await declineTransferRequest(id, token)

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        
        {/* BAŞARILI ŞEKİLDE REDDEDİLİRSE */}
        {success && (
          <>
            <Heading level="h1" className="text-xl text-zinc-900">
              Sipariş Transferi Reddedildi!
            </Heading>
            <Text className="text-zinc-600">
              {id} numaralı siparişin transfer işlemi başarıyla iptal edildi.
            </Text>
          </>
        )}

        {/* BİR HATA OLURSA */}
        {!success && (
          <>
            <Text className="text-zinc-600">
              Transfer reddedilirken bir hata oluştu. Lütfen tekrar deneyin.
            </Text>
            {error && (
              <Text className="text-red-500">Hata mesajı: {error}</Text>
            )}
          </>
        )}
      </div>
    </div>
  )
}