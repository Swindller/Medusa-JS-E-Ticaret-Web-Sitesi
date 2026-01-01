"use client"

import React, { useState, useEffect, useMemo } from "react"
import { HttpTypes } from "@medusajs/types"

import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const ShippingAddress = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({})

  const countriesInRegion = useMemo(
    () => cart?.region?.countries?.map((c) => c.iso_2).join(","),
    [cart?.region]
  )

  // Form verilerini doldurma
  useEffect(() => {
    setFormData({
      "shipping_address.first_name":
        cart?.shipping_address?.first_name || customer?.first_name || "",
      "shipping_address.last_name":
        cart?.shipping_address?.last_name || customer?.last_name || "",
      "shipping_address.address_1":
        cart?.shipping_address?.address_1 ||
        customer?.addresses?.[0]?.address_1 ||
        "",
      "shipping_address.company":
        cart?.shipping_address?.company ||
        customer?.addresses?.[0]?.company ||
        "",
      "shipping_address.postal_code":
        cart?.shipping_address?.postal_code ||
        customer?.addresses?.[0]?.postal_code ||
        "",
      "shipping_address.city":
        cart?.shipping_address?.city || customer?.addresses?.[0]?.city || "",
      "shipping_address.country_code":
        cart?.shipping_address?.country_code ||
        customer?.addresses?.[0]?.country_code ||
        cart?.region?.countries?.[0]?.iso_2 ||
        "",
      "shipping_address.province":
        cart?.shipping_address?.province ||
        customer?.addresses?.[0]?.province ||
        "",
      "email": cart?.email || customer?.email || "",
      "shipping_address.phone":
        cart?.shipping_address?.phone || customer?.phone || "",
    })
  }, [customer, cart])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Ad"
          name="shipping_address.first_name"
          autoComplete="given-name"
          // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
          value={formData["shipping_address.first_name"] || ""}
          onChange={handleChange}
          required
        />
        <Input
          label="Soyad"
          name="shipping_address.last_name"
          autoComplete="family-name"
          // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
          value={formData["shipping_address.last_name"] || ""}
          onChange={handleChange}
          required
        />
        
        {/* Adres Kutusu - Tam Satır */}
        <div className="col-span-2">
           <Input
            label="Adres"
            name="shipping_address.address_1"
            autoComplete="address-line1"
            // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
            value={formData["shipping_address.address_1"] || ""}
            onChange={handleChange}
            required
          />
        </div>

        <Input
          label="Posta Kodu"
          name="shipping_address.postal_code"
          autoComplete="postal-code"
          // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
          value={formData["shipping_address.postal_code"] || ""}
          onChange={handleChange}
          required
        />
        <Input
          label="Şehir"
          name="shipping_address.city"
          autoComplete="address-level2"
          // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
          value={formData["shipping_address.city"] || ""}
          onChange={handleChange}
          required
        />

        {/* Ülke Seçimi - Tam Satır */}
        <div className="col-span-2">
           <CountrySelect
            name="shipping_address.country_code"
            autoComplete="country"
            region={cart?.region}
            // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
            value={formData["shipping_address.country_code"] || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* İletişim Bilgileri Başlığı */}
        <div className="col-span-2 mt-4">
            <h3 className="text-sm font-bold text-gray-700 mb-2">İletişim Bilgileri</h3>
        </div>
        
        {/* E-posta */}
        <div className="col-span-2">
            <Input
              label="E-posta"
              name="email"
              type="email"
              title="E-posta adresiniz"
              autoComplete="email"
              // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
              value={formData.email || ""}
              onChange={handleChange}
              required
            />
        </div>

        {/* Telefon */}
        <div className="col-span-2">
            <Input
              label="Telefon"
              name="shipping_address.phone"
              autoComplete="tel"
              // HATA ÇÖZÜMÜ: Sonuna || "" ekledik
              value={formData["shipping_address.phone"] || ""}
              onChange={handleChange}
              required
            />
        </div>
      </div>
    </>
  )
}

export default ShippingAddress