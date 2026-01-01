import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    // TEK BİR HTML ETİKETİ OLMALI
    <html lang="tr" data-mode="light" className="scroll-smooth">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}