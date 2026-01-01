import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// Tipi elle tanımlıyoruz, import derdinden kurtuluyoruz
type ProductInfoProps = {
  product: {
    id: string
    title?: string
    description?: string | null
    collection?: { handle: string; title: string }
    [key: string]: any
  }
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="flex flex-col gap-y-3">
      {/* Marka / Kategori Bilgisi */}
      {product.collection && (
        <LocalizedClientLink
          href={`/collections/${product.collection.handle}`}
          className="text-xs font-bold text-ptm-orange uppercase tracking-[0.2em] hover:text-ptm-dark transition-colors"
        >
          {product.collection.title}
        </LocalizedClientLink>
      )}

      {/* Ürün Başlığı */}
      <Heading level="h1" className="text-3xl md:text-4xl leading-tight text-ptm-dark font-black uppercase tracking-tight">
        {product.title}
      </Heading>

      {/* Stok Kodu (SKU) */}
      <div className="flex items-center gap-4 mt-2 mb-4">
         <div className="bg-gray-100 px-3 py-1 text-xs font-mono text-gray-600 border border-gray-300">
            <span className="font-bold">SKU:</span> {product.id.split("_")[1] || "TR-STD"}
         </div>
         <div className="flex items-center gap-1 text-xs font-bold text-green-600 uppercase">
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
            Stokta Mevcut
         </div>
      </div>

      {/* Açıklama */}
      <Text className="text-sm text-gray-600 leading-relaxed font-medium">
        {product.description}
      </Text>
    </div>
  )
}

export default ProductInfo