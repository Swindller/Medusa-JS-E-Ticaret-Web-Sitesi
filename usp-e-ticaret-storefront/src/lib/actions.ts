"use server"

import nodemailer from "nodemailer"

// 1. Mail Taşıyıcısını (Transporter) Kuruyoruz
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,     // .env dosyasındaki mail
    pass: process.env.SMTP_PASSWORD,  // .env dosyasındaki şifre
  },
})

// İLETİŞİM FORMU
export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      adSoyad: formData.get("adSoyad") as string,
      telefon: formData.get("telefon") as string,
      email: formData.get("email") as string,
      konu: formData.get("konu") as string,
      mesaj: formData.get("mesaj") as string,
    }

    // Mail İçeriği (HTML)
    const mailOptions = {
      from: `"Pompa Teknik Web" <${process.env.SMTP_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // Kime gidecek?
      subject: `📩 Yeni İletişim Mesajı: ${rawData.konu}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #ea580c;">Yeni Bir Mesajınız Var!</h2>
          <p><strong>Gönderen:</strong> ${rawData.adSoyad}</p>
          <p><strong>Telefon:</strong> ${rawData.telefon}</p>
          <p><strong>Email:</strong> ${rawData.email}</p>
          <p><strong>Konu:</strong> ${rawData.konu}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <h3 style="color: #333;">Mesaj İçeriği:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${rawData.mesaj}</p>
        </div>
      `,
    }

    // Maili Gönder
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Mesajınız başarıyla iletildi." }

  } catch (error) {
    console.error("Mail gönderme hatası:", error)
    return { success: false, message: "Bir hata oluştu, lütfen daha sonra tekrar deneyin." }
  }
}

// SERVİS TALEP FORMU
export async function submitServiceForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      adSoyad: formData.get("adSoyad") as string,
      telefon: formData.get("telefon") as string,
      hizmetTuru: formData.get("hizmetTuru") as string,
      marka: formData.get("marka") as string,
      adres: formData.get("adres") as string,
      detay: formData.get("detay") as string,
    }

    const mailOptions = {
      from: `"Pompa Teknik Servis" <${process.env.SMTP_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🛠️ ACİL: Yeni Servis Talebi - ${rawData.adSoyad}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #ea580c; border-radius: 10px;">
          <h2 style="color: #ea580c; text-transform: uppercase;">Yeni Servis Kaydı</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 10px; font-weight: bold;">Müşteri:</td>
              <td style="padding: 10px;">${rawData.adSoyad}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px;">${rawData.telefon}</td>
            </tr>
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 10px; font-weight: bold;">Hizmet Türü:</td>
              <td style="padding: 10px;">${rawData.hizmetTuru}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Cihaz Markası:</td>
              <td style="padding: 10px;">${rawData.marka}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <h3 style="color: #333;">📍 Adres Bilgisi:</h3>
            <p style="background-color: #fff; border: 1px solid #ddd; padding: 10px;">${rawData.adres}</p>
          </div>

          <div style="margin-top: 20px;">
            <h3 style="color: #333;">📝 Arıza Detayı:</h3>
            <p style="background-color: #fff; border: 1px solid #ddd; padding: 10px;">${rawData.detay}</p>
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return { success: true, message: "Servis kaydınız oluşturuldu." }

  } catch (error) {
    console.error("Mail gönderme hatası:", error)
    return { success: false, message: "Bir hata oluştu." }
  }
}