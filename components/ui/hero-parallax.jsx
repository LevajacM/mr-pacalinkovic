"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "./text-generate-effect";

const words1 = `Mr Pačalinković 👑`;
const words2 = `Najbolje palačinke u solarnom sistemu ☀️`;

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className='h-[305vh]  pt-40 pb-20 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=''
      >
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-10 mb-10  md:space-x-15   md:mb-20'>
          {firstRow.map((product, i) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              className={i === 0 && "gap-x-8"}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row mb-10  md:mb-20 space-x-10 md:space-x-15 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-reverse space-x-10 md:space-x-15'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className='max-w-7xl relative mx-auto py-40 px-4 w-full  left-0 top-0 '>
      <div className='text-2xl md:text-7xl font-bold dark:text-white '>
        <TextGenerateEffect
          words={words1}
          trajanje={2}
          klase='text-3xl sm:text-4xl lg:text-5xl'
        />
      </div>
      <div className='max-w-2xl text-base md:text-xl lg:text-2xl mt-8 dark:text-neutral-200 '>
        <TextGenerateEffect
          words={words2}
          trajanje={8}
          klase='text-3xl sm:text-4xl lg:text-5xl'
          textColor='text-emerald-800'
        />
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className='group/product h-24 w-[8rem] sm:h-48 sm:w-[17rem] relative flex-shrink-0'
    >
      <Link
        href={product.link}
        className='block group-hover/product:shadow-2xl '
      >
        {/* <Image
          src={product.thumbnail}
          height='300'
          width='300'
          className='object-cover object-center  absolute h-full w-full inset-0 rounded-xl'
          alt={product.title}
        /> */}
        <img
          src={product.thumbnail}
          height='300'
          width='300'
          className='object-cover object-center  absolute h-full w-full inset-0 rounded-xl'
          alt={product.title}
        />
      </Link>
      <div className='absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-50 bg-emerald-900 pointer-events-none rounded-xl'></div>
      <h2 className='absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white'>
        {product.title}
      </h2>
    </motion.div>
  );
};
