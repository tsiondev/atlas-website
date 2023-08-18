import React from "react";
import Image from "next/image";
import mission from "@/Assets/images/about/goal.png";

const Mission = () => {
  return (
    <section className="flex flex-col md:items-end items-start gap-y-3 mb-20">
      <Image src={mission} width={100} alt="mission" />
      <h3 className="text-2xl text-green font-bold">Our purposes</h3>
      <ul className="flex flex-col gap-y-3  text-justify max-w-md list-disc marker:text-green marker:text-xl">
        <li>
          Positively contribute to the advancement of ICT application and usage
          in our market{" "}
        </li>
        <li>
          Serve customers to fully utilize ICT for betterment of their services{" "}
        </li>
        <li>
          Manufacture internationally competitive software Adopt and customize
          technology for customers’ need and requirement
        </li>
      </ul>
    </section>
  );
};

export default Mission;
