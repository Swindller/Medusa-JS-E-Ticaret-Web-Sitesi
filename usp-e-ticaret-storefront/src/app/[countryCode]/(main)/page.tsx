import { Metadata } from "next"
import { getCollectionByHandle } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "Pompa Teknik Market",
  description: "Endüstriyel pompa ve mekanik sistemler.",
}

export default async function Home({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const { countryCode } = await params
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // DÜZELTME BURADA YAPILDI:
  // getCollectionByHandle direkt koleksiyon objesini döndürüyor.
  // İçinden tekrar .collections seçmemize gerek yok.

  // 1. Yeni Gelenler
  const newArrivals = await getCollectionByHandle("yeni-gelenler").catch(() => null)

  // 2. Çok Satanlar
  const bestSellers = await getCollectionByHandle("cok-satanlar").catch(() => null)

  return (
    <>
      {/* 1. HERO (BANNER) */}
      <Hero />

      {/* 2. YENİ GELENLER BÖLÜMÜ (ID: yeni-gelenler) */}
      <div id="yeni-gelenler" className="py-12 border-b border-gray-200">
        <div className="content-container">
            <div className="mb-8 flex flex-col items-center text-center">
                <span className="text-sm font-bold text-ptm-orange tracking-wider uppercase mb-2">Keşfet</span>
                <h2 className="text-3xl font-black text-ptm-dark uppercase">Yeni Gelenler</h2>
            </div>
            
            {newArrivals ? (
                <FeaturedProducts collections={[newArrivals]} region={region} />
            ) : (
                <p className="text-center text-gray-500 text-sm">
                  Admin panelinde <strong>yeni-gelenler</strong> handle'ına sahip koleksiyon bulunamadı.
                </p>
            )}
        </div>
      </div>

      {/* 3. ÇOK SATANLAR BÖLÜMÜ (ID: cok-satanlar) */}
      <div id="cok-satanlar" className="py-12 bg-gray-50">
        <div className="content-container">
            <div className="mb-8 flex flex-col items-center text-center">
                <span className="text-sm font-bold text-ptm-orange tracking-wider uppercase mb-2">Favoriler</span>
                <h2 className="text-3xl font-black text-ptm-dark uppercase">Çok Satanlar</h2>
            </div>

            {bestSellers ? (
                <FeaturedProducts collections={[bestSellers]} region={region} />
            ) : (
                <p className="text-center text-gray-500 text-sm">
                  Admin panelinde <strong>cok-satanlar</strong> handle'ına sahip koleksiyon bulunamadı.
                </p>
            )}
        </div>
      </div>
    </>
  )
}