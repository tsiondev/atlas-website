"use client";
import { hero } from "@/constant/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const { title, subtitle, cta, image } = hero;
  return (
    <section className="max-w-[1100px]  px-12 mx-auto bg-hero bg-cover md:my-0 md:h-screen flex mt-24 my-24 lg:mb-0 md:mt-0">
      <div className="flex md:flex-row flex-col items-center md:justify-between gap-x-10 md:text-left text-center text-lightgray gap-y-10 ">
        {/* text */}
        <div className="flex md:items-start flex-1 flex-col items-center md:gap-y-3 gap-y-4">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
            viewport={{ once: true }}
            className="lg:text-4xl md:text-3xl text-3xl font-roboto font-bold leading-normal"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className=" md:text-xl md:max-w-md text-base max-w-sm "
          >
            {subtitle}
          </motion.p>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="bg-green px-6 py-2 text-white rounded-lg lg:mt-3"
          >
            {cta}
          </motion.button>
        </div>

        {/* image */}
        <motion.div
          initial={{ y: -30, opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image src={image} width={800} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
