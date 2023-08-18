import React from "react";

import Image from "next/image";
import ussd from "@/Assets/images/products/ussd.png";

const USSD = () => {
  return (
    <div className="flex flex-col items-start mt-24">
      <div className="flex-1 flex flex-col gap-y-3 ">
        <h2 className="text-green font-bold text-3xl">
          Unstructured Supplementary Service Data (USSD)
        </h2>
        <p className="text-justify">
          USSD is one of the few truly inclusive mobile technologies available.
          USSD allows faster communication between the user and the client
          application, is not device dependent and can be operated without any
          form of activation taking place.
        </p>
        <p className="text-justify">
          For a long time, USSD has been used only for applications such as
          checking airtime balance. This has changed over the years as
          application developers have gone far beyond the original use cases and
          are now using USSD to place various applications in the hands of
          customers.{" "}
        </p>
      </div>
      <div className="flex-1">
        <Image src={ussd} width={300} />
      </div>
    </div>
  );
};

export default USSD;
