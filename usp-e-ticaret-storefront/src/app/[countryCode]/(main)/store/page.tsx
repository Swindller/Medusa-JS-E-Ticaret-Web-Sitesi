import { Metadata } from "next"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Mağaza",
  description: "Tüm ürünlerimizi inceleyin.",
}

type Params = {
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
    q?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params
  const searchParams = await props.searchParams
  const { sortBy, page, q } = searchParams
  
  const region = await getRegion(params.countryCode)

  if (!region) {
    return null
  }

  const pageNumber = page ? parseInt(page) : 1
  const limit = 12
  const offset = (pageNumber - 1) * limit

  // Veriyi güvenli çekiyoruz
  const productData = await listProducts({
    countryCode: params.countryCode,
    queryParams: {
      limit,
      offset,
      order: sortBy,
      q: q, 
    },
  })

  // Eğer veri gelmezse boş dizi [] olsun ki patlamasın
  const products = productData?.response?.products || []
  const count = productData?.response?.count || 0

  return (
    <StoreTemplate
      products={products}
      count={count}
      page={page}
      sortBy={sortBy}
      countryCode={params.countryCode}
      region={region}
    />
  )
}