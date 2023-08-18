"use client";
import React, { useState, useEffect } from "react";
import USSD from "@/components/USSD";
import Unicash from "@/components/Unicash";
import SMFI from "@/components/SMFI";
import ERP from "@/components/ERP";
import HRMS from "@/components/HRMS";
import { BiChevronsRight } from "react-icons/bi";

const page = () => {
  const [mainContent, setMainContent] = useState("Home");
  // const [isComponentVisible, setComponentVisible] = useState(false);

  // useEffect(() => {
  //   setComponentVisible(true);
  // }, []);

  const handleClick = (content) => {
    setMainContent(content);
  };
  return (
    <section className="max-w-[1100px] px-12  mx-auto md:mb-36 mb-20">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-64 md:mt-32 hidden bg-white z-10 md:flex flex-row gap-x-3 font-bold  md:flex-col  gap-y-6 md:items-start text-lightgray fixed md:h-full">
          <button
            className="flex flex-row items-center hover:gap-x-4 transition-all"
            onClick={() => handleClick("ussd")}
          >
            USSD <BiChevronsRight />
          </button>
          <button
            className="flex flex-row items-center hover:gap-x-4 transition-all"
            onClick={() => handleClick("SMFI")}
          >
            SMFI <BiChevronsRight />
          </button>
          <button
            className="flex flex-row items-center hover:gap-x-4 transition-all"
            onClick={() => handleClick("Unicash")}
          >
            Unicash <BiChevronsRight />
          </button>
          <button
            className="flex flex-row items-center hover:gap-x-4 transition-all"
            onClick={() => handleClick("HRMS")}
          >
            HRMS <BiChevronsRight />
          </button>
          <button
            className="flex flex-row items-center hover:gap-x-4 transition-all"
            onClick={() => handleClick("ERP")}
          >
            ERP <BiChevronsRight />
          </button>
        </div>
        <div className="flex-1 md:ml-64 md:p-6">
          {isComponentVisible && <USSD />}
          {mainContent === "ussd" && <USSD />}
          {mainContent === "SMFI" && <SMFI />}
          {mainContent === "Unicash" && <Unicash />}
          {mainContent === "ERP" && <ERP />}
          {mainContent === "HRMS" && <HRMS />}
        </div>
      </div>
    </section>
  );
};

export default page;
