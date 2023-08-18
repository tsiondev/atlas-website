"use client";
import { header } from "@/constant/data";
import Image from "next/image";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { logoImg, btnText } = header;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white top-0 shadow-sm" : "top-0"
      } fixed w-full z-10 px-12`}
    >
      <div className="max-w-[1100px] mx-auto flex justify-between items-center py-4">
        <motion.div
          initial={{ top: 500, opacity: 0 }}
          whileInView={{ top: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
        >
          {/* logo */}
          <Image src={logoImg} width={60} />
        </motion.div>
        <div className="hidden md:flex">
          <Nav />
        </div>
        {/* button */}
        <div className="hidden md:flex">
          <button className="btn_md bg-green">{btnText}</button>
        </div>
        {/* burger menu */}
        <button className="md:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-accent" />
          ) : (
            <HiMenuAlt1 className="text-3xl text-accent" />
          )}
        </button>
        {/* mobile nav */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vh] lg:hidden transition-all]`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
