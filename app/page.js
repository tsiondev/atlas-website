"use client";
import {
  Clients,
  Hero,
  Contact,
  Header,
  Proud,
  Services,
  Testimonial,
  Partners,
  Footer,
} from "@/components";
// import { motion, useInView, useAnimation } from "framer-motion";
export default function Home() {
  return (
    <>
      <Hero />
      {/* <Proud /> */}
      <Clients />
      <Services />
      <Testimonial />
      <Partners />
      <Contact />
      {/* <div className="mb-[1000px]"></div> */}
    </>
  );
}
