import { notFound } from "next/navigation"
import { Suspense } from "react"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// --- TİP TANIMLAMALARI ---
type Category = {
  id: string
  name: string
  handle: string
  description?: string
  category_children?: Category[] 
  [key: string]: any
}

type CategoryTemplateProps = {
  category: Category | null | undefined
  sortBy?: SortOptions
  page?: string
  countryCode: string
}

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: CategoryTemplateProps) {
  
  // --- 🛠️ DEBUG BÖLGESİ (TERMİNALE BAK) ---
  if (process.env.NODE_ENV !== 'production') {
    console.log("========================================")
    console.log("🚀 DEBUG: CategoryTemplate Render Ediliyor")
    console.log("📂 Kategori Adı   :", category?.name)
    console.log("🔗 Kategori Handle:", category?.handle)
    console.log("🆔 Kategori ID    :", category?.id) // <-- BURASI 'undefined' GELİRSE SORUN BURADA
    console.log("========================================")
  }
  // ------------------------------------------

  // Kategori yoksa veya handle eksikse 404
  if (!category || !category.handle) {
    return notFound()
  }

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container bg-gray-50 min-h-screen"
      data-testid="category-container"
    >
      {/* SOL TARAFTA FİLTRE (Kenar Çubuğu) */}
      <div className="w-full small:w-[250px] flex-shrink-0 small:mr-8 mb-8 small:mb-0">
         <div className="bg-white p-6 border border-gray-200 shadow-sm sticky top-24">
            <h3 className="font-black text-ptm-dark uppercase mb-4 border-b-2 border-ptm-orange pb-2">
              Filtrele
            </h3>
            <RefinementList sortBy={sortBy || "created_at"} />
            
            {/* Kategori Ağacı Gösterimi (Varsa alt kategoriler) */}
            {category.category_children && category.category_children.length > 0 && (
              <div className="mt-8">
                 <h4 className="font-bold text-sm text-gray-500 uppercase mb-3">Alt Kategoriler</h4>
                 <ul className="space-y-2">
                    {category.category_children.map((child) => (
                      <li key={child.id}>
                        <LocalizedClientLink 
                           href={`/categories/${child.handle}`}
                           className="text-sm text-ptm-dark hover:text-ptm-orange hover:underline block"
                        >
                           › {child.name}
                        </LocalizedClientLink>
                      </li>
                    ))}
                 </ul>
              </div>
            )}
         </div>
      </div>

      {/* SAĞ TARAF: ÜRÜNLER */}
      <div className="w-full">
        
        {/* Kategori Başlığı ve Açıklaması */}
        <div className="mb-8 p-8 bg-ptm-dark text-white border-l-8 border-ptm-orange relative overflow-hidden">
          {/* Arka plan dekoru */}
          <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl leading-none select-none pointer-events-none">
             CAT
          </div>

          <div className="flex flex-row mb-4 text-xs font-bold text-gray-400 uppercase gap-2">
            <LocalizedClientLink href="/" className="hover:text-white">Ana Sayfa</LocalizedClientLink>
            <span>/</span>
            <LocalizedClientLink href="/store" className="hover:text-white">Katalog</LocalizedClientLink>
            <span>/</span>
            <span className="text-ptm-orange">{category.name}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight z-10 relative" data-testid="category-page-title">
            {category.name}
          </h1>

          {category.description && (
            <p className="text-gray-300 mt-4 text-lg font-light max-w-2xl z-10 relative border-l border-gray-600 pl-4">
              {category.description}
            </p>
          )}
        </div>

        {/* Ürün Izgarası (Grid) */}
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={page ? parseInt(page) : 1}
            categoryId={category.id} // ID'nin buraya dolu geldiğinden emin oluyoruz
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}