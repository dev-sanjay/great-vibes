import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import strings from '@/locales/en.json';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: strings.metaTitle,
  description: strings.metaDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} bg-lightSilver`}>{children}</body>
    </html>
  );
}
