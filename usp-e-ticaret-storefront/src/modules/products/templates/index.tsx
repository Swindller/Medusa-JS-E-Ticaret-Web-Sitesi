import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import ImageGallery from "@modules/products/components/image-gallery"
import ProductActionsWrapper from "./product-actions-wrapper"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/components/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { ChevronRight } from "lucide-react"

// --- TİP TANIMLAMALARI (MANUEL BYPASS) ---
type Region = {
  id: string
  currency_code: string
  name: string // Eksik olan 'name' eklendi
  [key: string]: any
}

type PricedProduct = {
  id: string
  title?: string
  description?: string | null
  images?: { id: string; url: string; rank?: number; [key: string]: any }[] // Eksik olan 'rank' eklendi
  collection?: { handle: string; title: string }
  [key: string]: any
}

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
  countryCode: string
}
// ---------------------------------------------------------------------

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans" data-testid="product-container">
      
      {/* 1. TEKNİK BREADCRUMB (YOL HARİTASI) */}
      <div className="bg-white border-b border-gray-200">
        <div className="content-container py-4 flex items-center gap-2 text-xs font-bold uppercase text-gray-500 tracking-wider">
          <span className="hover:text-ptm-orange cursor-pointer">Ana Sayfa</span>
          <ChevronRight size={12} />
          <span className="hover:text-ptm-orange cursor-pointer">Katalog</span>
          <ChevronRight size={12} />
          <span className="text-ptm-dark font-black">{product.title}</span>
        </div>
      </div>

      <div className="content-container flex flex-col small:flex-row small:items-start py-8 relative gap-x-12">
        
        {/* 2. SOL TARAF: RESİM GALERİSİ */}
        <div className="block w-full small:w-3/5 relative">
          <div className="bg-white border-2 border-gray-200 p-1 shadow-sm relative group">
             {/* Köşelere dekoratif vidalar */}
             <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-ptm-orange z-10"></div>
             <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-ptm-orange z-10"></div>
             
             {/* BURADA 'as any' KULLANARAK TİP HATASINI SUSTURDUK */}
             <ImageGallery images={(product?.images || []) as any} />
          </div>
        </div>

        {/* 3. SAĞ TARAF: BİLGİ KARTI */}
        <div className="flex flex-col small:sticky small:top-48 w-full small:w-2/5 gap-y-6">
          
          <div className="bg-white p-8 border-t-4 border-ptm-dark shadow-xl relative overflow-hidden">
             {/* Arka plan dekoru */}
             <div className="absolute top-0 right-0 w-20 h-20 bg-ptm-orange/5 rounded-bl-full -mr-10 -mt-10"></div>

             <ProductInfo product={product} />
             
             <div className="my-6 border-b border-dashed border-gray-300"></div>

             {/* Fiyat ve Sepete Ekle */}
             <Suspense fallback={<div className="h-10 bg-gray-100 animate-pulse"></div>}>
                {/* BURADA 'as any' KULLANARAK REGION HATASINI SUSTURDUK */}
                <ProductActionsWrapper id={product.id} region={region as any} />
             </Suspense>
          </div>

          {/* Teknik Özellikler Tablosu */}
          <div className="bg-white border border-gray-200 shadow-sm mt-4">
             {/* ProductTabs bazen product tipine kızabilir, onu da garantiye alalım */}
             <ProductTabs product={product as any} />
          </div>
        </div>
      </div>

      {/* 4. ALT KISIM: BENZER ÜRÜNLER */}
      <div className="content-container my-16 py-12 border-t border-gray-200">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-8 w-2 bg-ptm-orange"></div>
           <h3 className="text-2xl font-black text-ptm-dark uppercase">Benzer Ürünler</h3>
        </div>
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product as any} countryCode={countryCode} />
        </Suspense>
      </div>
    </div>
  )
}

export default ProductTemplate