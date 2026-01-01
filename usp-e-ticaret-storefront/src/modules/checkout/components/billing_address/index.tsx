"use client"

import React, { useState, useEffect } from "react"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"
import { HttpTypes } from "@medusajs/types"

const BillingAddress = ({
  cart,
  countryCode,
}: {
  cart: HttpTypes.StoreCart | null
  countryCode: string
}) => {
  // BAŞLANGIÇ AYARLARI (Hata burada çözülüyor)
  // cart?.X ifadesi undefined dönebilir, o yüzden ?? "" kullanıyoruz.
  const [formData, setFormData] = useState<any>({
    "billing_address.first_name": cart?.billing_address?.first_name ?? "",
    "billing_address.last_name": cart?.billing_address?.last_name ?? "",
    "billing_address.address_1": cart?.billing_address?.address_1 ?? "",
    "billing_address.company": cart?.billing_address?.company ?? "",
    "billing_address.postal_code": cart?.billing_address?.postal_code ?? "",
    "billing_address.city": cart?.billing_address?.city ?? "",
    "billing_address.country_code": cart?.billing_address?.country_code ?? countryCode ?? "",
    "billing_address.province": cart?.billing_address?.province ?? "",
    "billing_address.phone": cart?.billing_address?.phone ?? "",
    "billing_address.metadata.identity_number": cart?.billing_address?.metadata?.identity_number ?? "",
    "billing_address.metadata.tax_id": cart?.billing_address?.metadata?.tax_id ?? "",
    "billing_address.metadata.tax_office": cart?.billing_address?.metadata?.tax_office ?? "",
  })

  const [addressType, setAddressType] = useState<"individual" | "corporate">("individual")

  // Cart veya CountryCode sonradan yüklenirse formu güncelle
  useEffect(() => {
    setFormData((prev: any) => ({
      ...prev,
      "billing_address.country_code": countryCode,
      "billing_address.first_name": cart?.billing_address?.first_name ?? prev["billing_address.first_name"],
      "billing_address.last_name": cart?.billing_address?.last_name ?? prev["billing_address.last_name"],
    }))
  }, [countryCode, cart])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="flex gap-4 mb-4 p-4 bg-gray-50 rounded-md border border-gray-200">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="address_type"
            value="individual"
            checked={addressType === "individual"}
            onChange={() => setAddressType("individual")}
            className="accent-orange-600"
          />
          <span className="text-sm font-medium">Bireysel (T.C. Kimlik)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="address_type"
            value="corporate"
            checked={addressType === "corporate"}
            onChange={() => setAddressType("corporate")}
            className="accent-orange-600"
          />
          <span className="text-sm font-medium">Kurumsal (Firma)</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Ad"
          name="billing_address.first_name"
          autoComplete="given-name"
          value={formData["billing_address.first_name"]}
          onChange={handleChange}
          required
        />
        <Input
          label="Soyad"
          name="billing_address.last_name"
          autoComplete="family-name"
          value={formData["billing_address.last_name"]}
          onChange={handleChange}
          required
        />
        
        <div className="col-span-2">
           <Input
            label="Adres"
            name="billing_address.address_1"
            autoComplete="address-line1"
            value={formData["billing_address.address_1"]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-span-2 p-4 bg-orange-50 border border-orange-100 rounded-md">
            {addressType === "individual" ? (
                <Input
                    label="T.C. Kimlik Numarası"
                    name="billing_address.metadata.identity_number"
                    value={formData["billing_address.metadata.identity_number"]}
                    onChange={handleChange}
                    required
                    maxLength={11}
                />
            ) : (
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Firma Adı (Ünvanı)"
                        name="billing_address.company"
                        value={formData["billing_address.company"]}
                        onChange={handleChange}
                        required
                        className="col-span-2"
                    />
                    <Input
                        label="Vergi Dairesi"
                        name="billing_address.metadata.tax_office"
                        value={formData["billing_address.metadata.tax_office"]}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        label="Vergi Numarası"
                        name="billing_address.metadata.tax_id"
                        value={formData["billing_address.metadata.tax_id"]}
                        onChange={handleChange}
                        required
                    />
                </div>
            )}
        </div>

        <Input
          label="Posta Kodu"
          name="billing_address.postal_code"
          autoComplete="postal-code"
          value={formData["billing_address.postal_code"]}
          onChange={handleChange}
          required
        />
        <Input
          label="Şehir"
          name="billing_address.city"
          autoComplete="address-level2"
          value={formData["billing_address.city"]}
          onChange={handleChange}
          required
        />
        
        <div className="col-span-2">
            <CountrySelect
            name="billing_address.country_code"
            autoComplete="country"
            region={cart?.region}
            value={formData["billing_address.country_code"]}
            onChange={handleChange}
            required
            />
        </div>
        
        <div className="col-span-2">
            <Input
            label="Telefon"
            name="billing_address.phone"
            autoComplete="tel"
            value={formData["billing_address.phone"]}
            onChange={handleChange}
            required
            />
        </div>
      </div>
    </>
  )
}

export default BillingAddress