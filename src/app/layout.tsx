import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { content } from '~/content';
import { cn } from '~/lib/utils';
import { TooltipProvider } from '~/components/ui/tooltip';
import { Background } from '~/components/layouts/background';
import { SiteFooter } from '~/components/layouts/site-footer';
import { SiteHeader } from '~/components/layouts/site-header';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: content.site.title,
    template: `%s - ${content.site.title}`,
  },
  description: content.site.description,
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
        <TooltipProvider delayDuration={500}>
          <main className='flex-1'>{children}</main>
        </TooltipProvider>
        <SiteFooter />
        <Background />
      </body>
    </html>
  );
}
