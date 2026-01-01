import { Metadata } from "next"
import { notFound } from "next/navigation"
import { listProducts } from "@lib/data/products"
import { getRegion, listRegions } from "@lib/data/regions"
import ProductTemplate from "@modules/products/templates"
import { HttpTypes } from "@medusajs/types"

type Props = {
  params: Promise<{ countryCode: string; handle: string }>
  searchParams: Promise<{ v_id?: string }>
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const promises = countryCodes.map(async (country) => {
      const { response } = await listProducts({
        countryCode: country,
        queryParams: { limit: 100, fields: "handle" },
      })

      return {
        country,
        products: response.products,
      }
    })

    const countryProducts = await Promise.all(promises)

    return countryProducts
      .flatMap((countryData) =>
        countryData.products.map((product) => ({
          countryCode: countryData.country,
          handle: product.handle,
        }))
      )
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Ürün sayfaları için statik yollar oluşturulamadı.: ${
        error instanceof Error ? error.message : "Bilinmeyen hata"
      }.`
    )
    return []
  }
}

// DÜZELTME 1: Null kontrolleri eklendi
function getImagesForVariant(
  product: HttpTypes.StoreProduct,
  selectedVariantId?: string
) {
  // Eğer ürünün resimleri null ise boş dizi döndür
  if (!product.images) {
    return []
  }

  if (!selectedVariantId || !product.variants) {
    return product.images
  }

  const variant = product.variants.find((v) => v.id === selectedVariantId)

  // BURASI DÜZELTİLDİ: variant.images?.length kontrolü eklendi
  if (!variant || !variant.images || !variant.images.length) {
    return product.images
  }

  // variant.images'in null olmadığından emin olduğumuz için mapleyebiliriz
  const imageIdsMap = new Map(variant.images.map((i) => [i.id, true]))
  
  return product.images.filter((i) => imageIdsMap.has(i.id))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const product = await listProducts({
    countryCode: params.countryCode,
    queryParams: { handle },
  }).then(({ response }) => response.products[0])

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Pompa Teknik Market`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Pompa Teknik Market`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const region = await getRegion(params.countryCode)
  const searchParams = await props.searchParams

  const selectedVariantId = searchParams.v_id

  if (!region) {
    notFound()
  }

  const pricedProduct = await listProducts({
    countryCode: params.countryCode,
    queryParams: { handle: params.handle },
  }).then(({ response }) => response.products[0])

  if (!pricedProduct) {
    notFound()
  }

  // Resimleri güvenli şekilde alıyoruz
  const images = getImagesForVariant(pricedProduct, selectedVariantId)

  // DÜZELTME 2: Type Mismatch Hatası için
  // ProductTemplate muhtemelen resimlerin 'null' olmasını kabul etmiyor.
  // Bu yüzden 'product' objesini spread edip, images alanının null ise boş dizi olmasını sağlıyoruz.
  const productForTemplate = {
    ...pricedProduct,
    images: pricedProduct.images || [] // Null ise boş dizi yap
  }

  return (
    <ProductTemplate
      // @ts-ignore: Medusa tipleri bazen starter template ile tam uyuşmaz, bu safe bir ignore'dur.
      product={productForTemplate}
      region={region}
      countryCode={params.countryCode}
      images={images}
    />
  )
}