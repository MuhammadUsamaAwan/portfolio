'use client';

import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

import { cn } from '~/lib/utils';

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame(time => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, val => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, val => pathRef.current?.getPointAtLength(val).y);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        className='absolute size-full'
        width='100%'
        height='100%'
        {...otherProps}
      >
        <rect fill='none' width='100%' height='100%' rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export function MagicButton({
  borderRadius = '1.75rem',
  as: Component = 'button',
  children,
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn('relative h-12 w-44 overflow-hidden bg-transparent p-px text-xl', containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div className='absolute inset-0' style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx='30%' ry='30%'>
          <div
            className={cn('size-20 bg-[radial-gradient(#6363ee_40%,transparent_60%)] opacity-80', borderClassName)}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          'relative flex size-full items-center justify-center border bg-background text-sm backdrop-blur-xl',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
