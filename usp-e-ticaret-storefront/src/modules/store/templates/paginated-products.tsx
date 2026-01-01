// 👇 İSİM DÜZELTİLDİ: 'getProductsList' yerine 'listProducts' yaptık
import { listProducts, getRegion } from "@lib/data/products" 
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsProps = {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: PaginatedProductsProps) {
  
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const queryParams: any = {
    limit: PRODUCT_LIMIT,
  }

  if (collectionId) {
    queryParams.collection_id = [collectionId]
  }

  // Kategori ID Array formatı
  if (categoryId) {
    queryParams.category_id = [categoryId]
  }

  if (productsIds) {
    queryParams.id = productsIds
  }

  if (sortBy === "created_at") {
    queryParams.order = "created_at"
  } else if (sortBy === "price_asc") {
    queryParams.order = "price"
  } else if (sortBy === "price_desc") {
    queryParams.order = "-price"
  }

  const pageParam = page || 1
  const offset = (pageParam - 1) * PRODUCT_LIMIT
  
  // 👇 FONKSİYON İSMİ BURADA DA DEĞİŞTİ: 'listProducts' oldu
  const { response: { products, count } } = await listProducts({
    pageParam,
    queryParams: {
        ...queryParams,
        offset: offset, 
    },
    countryCode,
  })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <>
      <ul 
        className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8" 
        data-testid="products-list"
      >
        {products.map((p: any) => (
          <li key={p.id}>
            <ProductPreview productPreview={p} region={region} />
          </li>
        ))}
      </ul>
      
      {products.length === 0 && (
        <div className="py-10 text-center text-gray-500">
            <p>Bu kategoride henüz ürün bulunmuyor.</p>
        </div>
      )}

      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={pageParam}
          totalPages={totalPages}
        />
      )}
    </>
  )
}