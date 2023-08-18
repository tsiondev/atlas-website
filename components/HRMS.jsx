import React from "react";
import Image from "next/image";
import hrms from "@/Assets/images/products/hrms.png";

const HRMS = () => {
  return (
    <div className="flex flex-col items-start mt-24">
      <div className="flex-1 flex flex-col gap-y-3 mb-20">
        <h2 className="text-green font-bold text-3xl mb-5">
          Human resources management system (HRMS)
        </h2>
        <p className="text-justify">
          A human resource management system (HRMS) is a software application
          that organizations use to manage internal HR functions. From employee
          data management to payroll, recruitment, benefits, training, talent
          management, employee engagement, and employee attendance, HRMS
          software helps HR professionals manage the modern workforce.
        </p>
        <Image src={hrms} width={400} alt="hrms" />
      </div>
    </div>
  );
};

export default HRMS;
