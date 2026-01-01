import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Gririş Yap",
  description: "Pompa Teknik Market Hesabınıza Giriş Yapın.",
}

export default function Login() {
  return <LoginTemplate />
}
