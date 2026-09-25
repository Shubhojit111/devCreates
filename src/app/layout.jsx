import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata = {
  title: { default: 'Dev Creates | Creative Studio', template: '%s | Dev Creates' },
  description: 'Dev Creates is an independent creative studio for brand identities, digital experiences and ideas made real.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Dev Creates | Creative Studio',
    description: 'Creative direction, branding, websites, apps and social content from concept to reality.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F7F2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-cream font-sans text-ink antialiased">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
