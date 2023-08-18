import React from "react";
import Image from "next/image";
import vision from "@/Assets/images/about/vision.png";
const Vision = () => {
  return (
    <section className="flex flex-col md:justify-start items-start gap-y-3 mb-20">
      <Image src={vision} width={100} />
      <h3 className="text-2xl font-bold text-green">Our long term goal</h3>
      <p className="max-w-sm text-justify">
        To become a reliable one stop ICT Service, Software and Equipment source
        for enterprises in Ethiopia and beyond.
      </p>
    </section>
  );
};

export default Vision;
