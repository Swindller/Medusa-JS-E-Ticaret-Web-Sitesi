import { Heading, Text } from "@medusajs/ui"
import TransferActions from "@modules/order/components/transfer-actions"
import TransferImage from "@modules/order/components/transfer-image"

export default async function TransferPage({
  params,
}: {
  params: { id: string; token: string }
}) {
  const { id, token } = params

  return (
    <div className="flex flex-col gap-y-4 items-start w-2/5 mx-auto mt-10 mb-20">
      <TransferImage />
      <div className="flex flex-col gap-y-6">
        <Heading level="h1" className="text-xl text-zinc-900">
          {id} Numaralı Sipariş Transfer Talebi
        </Heading>
        <Text className="text-zinc-600">
          ({id}) numaralı siparişinizin sahipliğini devretmek için bir talep aldınız. 
          Eğer bu işlemi onaylıyorsanız, aşağıdaki butona tıklayarak transferi gerçekleştirebilirsiniz.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <Text className="text-zinc-600">
          Kabul etmeniz durumunda, yeni hesap sahibi bu siparişle ilgili tüm sorumlulukları ve yetkileri devralacaktır.
        </Text>
        <Text className="text-zinc-600">
          Eğer bu talebi siz oluşturmadıysanız veya siparişin sahipliğinin sizde kalmasını istiyorsanız, herhangi bir işlem yapmanıza gerek yoktur.
        </Text>
        <div className="w-full h-px bg-zinc-200" />
        <TransferActions id={id} token={token} />
      </div>
    </div>
  )
}