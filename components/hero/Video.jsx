"use client";

import React, { useRef, useEffect } from "react";

const LazyVideo = ({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Konfiguriši Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
            observer.unobserve(video);
          }
        });
      },
      {
        threshold: 0.5, // 50% vidljiv
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <div className=' w-full h-[50vh] grid items-end justify-center '>
      <div className='relative'>
        <video
          ref={videoRef}
          preload='none'
          poster={poster}
          muted
          loop
          style={{ height: "40vh" }}
          className='rounded-3xl'
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='absolute inset-0 bg-emerald-700 bg-opacity-50 rounded-3xl'></div>
      </div>
    </div>
  );
};

export default LazyVideo;
