import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.riftviewspecialistcentre.co.ke'),
  title: {
    default:
      'RiftView Specialist Centre | Specialist Healthcare in Naivasha, Nakuru County',
    template: '%s | RiftView Specialist Centre',
  },
  description:
    'RiftView Specialist Centre offers comprehensive specialist healthcare in Naivasha, Nakuru County, Kenya. Book appointments with experienced consultants across cardiology, paediatrics, surgery, diagnostics and more.',
  keywords: [
    'specialist hospital Naivasha',
    'healthcare Nakuru County',
    'RiftView Specialist Centre',
    'doctors Naivasha',
    'medical centre Kenya',
    'book appointment Naivasha hospital',
  ],
  authors: [{ name: 'RiftView Specialist Centre' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'RiftView Specialist Centre',
    title: 'RiftView Specialist Centre | Specialist Healthcare in Naivasha',
    description:
      'Comprehensive specialist medical care in Naivasha, Nakuru County. Advanced technology with compassionate care.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiftView Specialist Centre',
    description:
      'Comprehensive specialist medical care in Naivasha, Nakuru County, Kenya.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f5495',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActions />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalOrganization',
              name: 'RiftView Specialist Centre',
              url: 'https://www.riftviewspecialistcentre.co.ke',
              logo: 'https://www.riftviewspecialistcentre.co.ke/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+254-719-225227',
                contactType: 'customer service',
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Opp. DRIC, Along Kenyatta Avenue',
                addressLocality: 'Naivasha Town',
                addressRegion: 'Nakuru County',
                addressCountry: 'KE',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
