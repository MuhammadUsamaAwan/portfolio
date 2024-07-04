import { content } from '~/content';

export function SiteFooter() {
  return (
    <footer className='border-t bg-background py-4'>
      <div className='container'>
        <p className='text-center text-sm text-muted-foreground'>
          Copyright &copy; {new Date().getFullYear()} {content.site.title}
        </p>
      </div>
    </footer>
  );
}
