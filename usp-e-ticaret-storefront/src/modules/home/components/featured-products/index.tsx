import { HttpTypes } from "@medusajs/types"
import ProductRail from "./product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  return (
    <div className="py-12">
      <ul className="flex flex-col gap-x-6 gap-y-8">
        {collections.map((collection) => (
          <li key={collection.id}>
            {/* Region bilgisini ProductRail'e iletiyoruz */}
            <ProductRail collection={collection} region={region} />
          </li>
        ))}
      </ul>
    </div>
  )
}