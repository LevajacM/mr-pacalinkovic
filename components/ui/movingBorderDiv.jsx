import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'motion/react';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export function MovingBorderDiv({
  borderRadius = '1.2rem',
  children,
  as: Component = 'div',
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        'relative w-full h-[652px] overflow-hidden bg-black-100 p-[0.6px] text-7xl mb-8',
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className='absolute inset-0'
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx='10%' ry='10%'>
          <div
            className={cn(
              'h-[1600px] w-[1600px] bg-[radial-gradient(#f97316_40%,transparent_60%)] opacity-[0.8]',
              borderClassName
            )}
          />
        </MovingBorder>
      </div>
      <div
        className={cn(
          'relative flex h-full w-full items-center justify-center border border-transparent bg-black-100 text-2xl sm:text-3xl md:text-4xl text-orange-500 font-semibold antialiased backdrop-blur-xl px-[1px]   py-[1px]',
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

export const MovingBorder = ({
  children,
  duration = 10000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        className='absolute h-full w-full'
        width='100%'
        height='100%'
        {...otherProps}
      >
        <rect
          fill='none'
          width='100%'
          height='100%'
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
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
