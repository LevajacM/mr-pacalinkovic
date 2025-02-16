"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCard({ naziv, slika, cena, desc }) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-900/[0.1] dark:bg-black  border-emerald-900/[0.1]  w-[300px]  sm:w-[21rem] h-auto rounded-xl px-6 pt-6 pb-3 border  '>
        <CardItem
          translateZ='50'
          className='text-xs sm:text-xl font-bold text-emerald-600 dark:text-white capitalize'
        >
          {naziv}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-emerald-500  text-xs  sm:text-sm md:text-md max-w-sm mt-2 
           sm:max-w-xs'
        >
          {cena} Din
        </CardItem>
        <CardItem translateZ='100' className='w-full mt-4'>
          <Image
            src={slika}
            height='500'
            width='500'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
            unoptimized
          />
        </CardItem>
        <div className='flex justify-between items-center mt-4 h-20'>
          <CardItem
            translateZ={20}
            as='div'
            className='px-4  rounded-xl text-xs font-normal text-emerald-700'
          >
            {desc.length !== 0 && (
              <>
                <ul className='list-none capitalize'>
                  {desc.map((item) => {
                    return (
                      <li key={item} className='mb-1'>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
