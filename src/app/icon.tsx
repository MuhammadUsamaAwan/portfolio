import { ImageResponse } from 'next/og';

import { content } from '~/content';

export const runtime = 'edge';

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      // eslint-disable-next-line tailwindcss/enforces-shorthand
      <div tw='flex h-full w-full items-center justify-center bg-black text-[17px] leading-8 text-white'>
        {content.site.title
          .split(' ')
          .map(i => i[0])
          .join('')}
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
