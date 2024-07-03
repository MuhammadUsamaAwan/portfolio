import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';

import { siteConfig } from '~/config/site';
import { cn } from '~/lib/utils';
import { Background } from '~/components/layouts/background';
import { SiteHeader } from '~/components/layouts/site-header';
import { ThemeProvider } from '~/components/layouts/theme-provider';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('flex min-h-[200dvh] flex-col font-sans antialiased', GeistSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main className='flex-1'>{children}</main>
          <Background />
        </ThemeProvider>
      </body>
    </html>
  );
}
