import { HttpTypes } from "@medusajs/types"
import Link from "next/link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="mb-6">
        <h3 className="text-2xl-semi">{collection.title}</h3>
      </div>
      
      <ul className="grid grid-cols-2 small:grid-cols-5 gap-x-4 gap-y-6 items-stretch">
        
        {products.map((product) => (
          <li key={product.id}>
            {/* DÜZELTME: 'isFeatured' sildik. Artık standart kart gibi davranıp fiyatı gösterecek. */}
            <ProductPreview productPreview={product} region={region} />
          </li>
        ))}

        {/* TÜMÜNÜ GÖR KARTI (Aynen duruyor) */}
        <li className="h-full"> 
            <Link 
              href={`/collections/${collection.handle}`} 
              className="group flex flex-col items-center justify-center w-full h-full border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 hover:shadow-md transition-all min-h-[250px]"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-all duration-300 border-2 border-gray-400 bg-white shadow-sm group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:scale-110">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-orange-600 transition-colors">
                Tümünü Gör
              </span>
            </Link>
        </li>

      </ul>
    </div>
  )
}