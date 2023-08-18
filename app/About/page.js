import React from "react";
import Image from "next/image";
import about from "@/Assets/images/about/about.png";
import Vision from "@/components/Vision";
import Mission from "@/components/Mission";
import Principles from "@/components/Principles";
import CTA from "@/components/CTA";
const page = () => {
  return (
    <section className="max-w-[1100px] px-12 mt-32 mx-auto md:mb-36 mb-20">
      <div className="flex flex-col md:flex-row gap-x-10 justify-between items-center mb-32">
        <div className="flex-1 flex flex-col gap-y-3 ">
          <h2 className="text-3xl font-bold font-roboto text-lightgray">
            About Us
          </h2>
          <p className="text-lightgray text-justify">
            Atlas Computer Technologies (ACT) is a legally registered IT company
            operating in the Ethiopian market, head quartered in Addis Ababa,
            Ethiopia. The company was established by professionals with diverse
            expertise in the IT industry and an average experience of 15 years.
            The company is also well known in providing enterprise Linux/UNIX
            solutions and supports in the country.
          </p>
          <p className="text-lightgray text-justify">
            Atlas Computer Technology is generally a service-based company and
            closely working in cooperation with international IT companies in
            providing IT solutions and support services primarily for different
            financial institutions. In additional to this Atlas has a dedicated
            system developers team that work in different technologies and well
            organized.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end justify-center">
          <Image src={about} />
          <h4 className="py-3 px-14 bg-green font-bold rounded-md">
            20+ years of experiance
          </h4>
        </div>
      </div>
      <Vision />
      <Mission />
      <Principles />
      <CTA />
    </section>
  );
};

export default page;
