import { Metadata } from "next"
import { retrieveCustomer } from "@lib/data/customer"
import { listRegions } from "@lib/data/regions" // EKLENDİ
import { notFound } from "next/navigation"
import ProfileName from "@modules/account/components/profile-name"
import ProfileEmail from "@modules/account/components/profile-email"
import ProfilePhone from "@modules/account/components/profile-phone"
import ProfilePassword from "@modules/account/components/profile-password"
import ProfileBillingAddress from "@modules/account/components/profile-billing-address"

export const metadata: Metadata = {
  title: "Profilim",
  description: "Profil bilgilerinizi görüntüleyin ve güncelleyin.",
}

export default async function Profile() {
  const customer = await retrieveCustomer()
  const regions = await listRegions() // EKLENDİ: Bölgeleri çekiyoruz

  if (!customer || !regions) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="profile-page-content">
      {/* BAŞLIK */}
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-[#0f172a]">Profil Bilgilerim</h1>
        <p className="text-sm text-gray-500 mt-1">
          Hesap bilgilerinizi, şifrenizi ve fatura adresinizi buradan yönetebilirsiniz.
        </p>
      </div>

      <div className="flex flex-col gap-y-8 w-full">
        {/* İSİM */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:border-orange-200 transition-colors">
            <ProfileName customer={customer} />
        </div>

        {/* E-POSTA */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:border-orange-200 transition-colors">
            <ProfileEmail customer={customer} />
        </div>

        {/* TELEFON */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:border-orange-200 transition-colors">
            <ProfilePhone customer={customer} />
        </div>

        {/* ŞİFRE */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:border-orange-200 transition-colors">
            <ProfilePassword customer={customer} />
        </div>

        {/* FATURA ADRESİ (DÜZELTME BURADA) */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm hover:border-orange-200 transition-colors">
            {/* regions prop'unu ekledik, hata gidecek */}
            <ProfileBillingAddress customer={customer} regions={regions} />
        </div>
      </div>
    </div>
  )
}