import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { Background } from '~/components/layouts/background';
import { SiteFooter } from '~/components/layouts/site-footer';
import { SiteHeader } from '~/components/layouts/site-header';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('flex min-h-dvh flex-col font-sans antialiased', GeistSans.variable)}>
        <SiteHeader />
        <main className='flex-1'>{children}</main>
        <SiteFooter />
        <Background />
      </body>
    </html>
  );
}
