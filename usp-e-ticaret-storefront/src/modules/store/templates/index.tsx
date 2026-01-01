"use client"

import { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type StoreTemplateProps = {
  sortBy?: SortOptions
  page?: string
  countryCode: string
  region: HttpTypes.StoreRegion
  products?: HttpTypes.StoreProduct[]
  count?: number
}

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
  region,
  products = [], // Veri yoksa boş dizi kabul et
  count = 0,
}: StoreTemplateProps) => {
  const pageNumber = page ? parseInt(page) : 1
  const limit = 12
  const totalPages = Math.ceil(count / limit)

  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <RefinementList sortBy={sortBy || "created_at"} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi flex justify-between items-center">
          <h1 className="text-3xl font-black uppercase text-ptm-dark">
            {count > 0 ? "Ürünler" : "Sonuç Bulunamadı"}
          </h1>
          <span className="text-gray-500 text-sm">
            Toplam {count} ürün bulundu
          </span>
        </div>

        <Suspense fallback={<SkeletonProductGrid />}>
          {/* GÜVENLİK KONTROLÜ: products var mı diye bakıyoruz */}
          {products && products.length > 0 ? (
            <>
              <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
                {products.map((p) => (
                  <li key={p.id}>
                    <ProductPreview productPreview={p} region={region} />
                  </li>
                ))}
              </ul>

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <span className="text-sm font-medium">
                    Sayfa {pageNumber} / {totalPages}
                  </span>
                </div>
              )}
            </>
          ) : (
            <div className="py-20 text-center">
              <p className="text-gray-500">
                Aradığınız kriterlere uygun ürün bulunamadı.
              </p>
              <LocalizedClientLink href="/store" className="text-ptm-orange font-bold mt-4 inline-block">
                Filtreleri Temizle
              </LocalizedClientLink>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate