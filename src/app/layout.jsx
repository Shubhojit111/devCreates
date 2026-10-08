import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const SITE_URL = 'https://devcreates.example.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'dev.creates — Websites & SaaS Development Agency for Businesses',
    template: '%s | dev.creates',
  },
  description:
    'dev.creates designs & builds portfolio sites (from ₹9,999), SEO-ready business websites (from ₹14,999), e-commerce & booking systems (from ₹29,999) and scalable SaaS products (from ₹59,999). Fixed quotes, launch in weeks.',
  keywords: [
    'web development agency India',
    'business website design',
    'SaaS product development',
    'Next.js development agency',
    'ecommerce website cost India',
    'booking website for business',
    'local SEO websites',
    'dev.creates',
  ],
  authors: [{ name: 'dev.creates' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'dev.creates — Websites & SaaS products that win customers',
    description:
      'Business websites from ₹14,999. Stores & bookings from ₹29,999. SaaS builds from ₹59,999. See live work + transparent pricing.',
    url: SITE_URL,
    siteName: 'dev.creates',
    type: 'website',
    images: [{ url: '/hero-poster.png', width: 1200, height: 630, alt: 'dev.creates agency work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dev.creates — Websites & SaaS for businesses',
    description: 'SEO-ready websites, stores, bookings & SaaS products. Live work, fixed pricing, 2–8 week launches.',
    images: ['/hero-poster.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#151513',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'dev.creates',
      url: SITE_URL,
      description: 'Agency building business websites, e-commerce, booking systems and SaaS products.',
      areaServed: 'IN',
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Portfolio Websites' }, priceSpecification: { '@type': 'PriceSpecification', price: '9999', priceCurrency: 'INR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Websites' }, priceSpecification: { '@type': 'PriceSpecification', price: '14999', priceCurrency: 'INR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce & Bookings' }, priceSpecification: { '@type': 'PriceSpecification', price: '29999', priceCurrency: 'INR' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Product Development' }, priceSpecification: { '@type': 'PriceSpecification', price: '59999', priceCurrency: 'INR' } },
      ],
    },
    {
      '@type': 'WebSite',
      name: 'dev.creates',
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="min-h-screen bg-cream font-sans text-ink antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
