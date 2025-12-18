import './globals.css'
import { ReactNode } from 'react'
import ClientPageWrapper from '../components/ClientPageWrapper'

export const metadata = {
  title: 'ElvaThrift — Preloved Marketplace',
  description: 'Vantage-Modern preloved marketplace by Muthia Elvazira'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <ClientPageWrapper>
          {children}
        </ClientPageWrapper>
      </body>
    </html>
  )
}
