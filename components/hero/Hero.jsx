"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";
import { products } from "@/utils/links";

const Hero = () => {
  return <HeroParallax products={products} />;
};

export default Hero;
