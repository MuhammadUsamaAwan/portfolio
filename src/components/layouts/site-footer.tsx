import { siteConfig } from '~/config/site';

export function SiteFooter() {
  return (
    <footer className='border-t bg-background py-4'>
      <div className='container'>
        <p className='text-center text-sm text-muted-foreground'>
          Copyright &copy; {new Date().getFullYear()} {siteConfig.title}
        </p>
      </div>
    </footer>
  );
}
