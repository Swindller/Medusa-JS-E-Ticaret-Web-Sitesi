import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductPrice } from "@lib/util/get-product-price"

// --- MANUEL TİP TANIMLAMALARI ---
type Region = {
  id: string
  currency_code: string
  [key: string]: any
}

type ProductPreviewType = {
  id: string
  title: string
  handle: string
  thumbnail: string | null
  price?: {
    calculated_price: string
    original_price: string
    difference: string
    price_type: "default" | "sale"
  }
  collection?: {
    title: string
  }
  [key: string]: any
}
// --------------------------------

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType | any
  isFeatured?: boolean
  region: Region | any
}) {
  
  // 1. GÜVENLİK KİLİDİ: Eğer ürün verisi boşsa veya ID'si yoksa hiç uğraşma, boş dön.
  // BU SATIR HATAYI ÇÖZER
  if (!productPreview || !productPreview.id) {
    return null
  }

  // 2. Fiyat Hesaplama
  const priceResult = getProductPrice({
    product: productPreview,
    region: region,
  } as any)

  const cheapestPrice = priceResult?.cheapestPrice

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group block h-full bg-white border border-gray-200 hover:border-ptm-orange hover:shadow-lg transition-all duration-300 relative overflow-hidden"
    >
      {/* Stok Durumu Rozeti */}
      <div className="absolute top-2 right-2 z-10 bg-green-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
        Stokta
      </div>

      {/* Resim Alanı */}
      <div className="relative w-full aspect-[4/5] bg-gray-50 border-b border-gray-100 group-hover:opacity-90 transition-opacity p-4">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
          className="object-contain w-full h-full mix-blend-multiply" 
        />
      </div>

      {/* Bilgi Alanı */}
      <div className="p-4 flex flex-col gap-2">
        <Text className="text-xs text-gray-400 font-mono uppercase tracking-widest">
          {productPreview.collection?.title || "Endüstriyel Parça"}
        </Text>
        
        <Text className="text-sm font-bold text-ptm-dark leading-tight group-hover:text-ptm-orange transition-colors line-clamp-2 uppercase">
          {productPreview.title}
        </Text>

        <div className="mt-2 pt-2 border-t border-dashed border-gray-200 flex items-center justify-between">
           <div className="flex flex-col">
             <span className="text-[10px] text-gray-400">Birim Fiyat</span>
             {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
           </div>
           <div className="bg-ptm-dark text-white p-1.5 group-hover:bg-ptm-orange transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="bevel"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
           </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}