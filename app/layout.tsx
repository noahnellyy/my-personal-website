import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noah Nelson\'s Portfolio',
  description: 'Mobile app developer showcasing projects and experience',
  openGraph: {
    title: "Noah Nelson's Portfolio",
    description: "Mobile app developer showcasing projects and experience",
    siteName: "Noah Nelson's Portfolio",
    images: [
      {
        url: "/images/me2.jpg",
      },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
