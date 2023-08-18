import React from "react";
import Image from "next/image";
import principles from "@/Assets/images/about/principles.png";

const Principles = () => {
  return (
    <section className="flex flex-col items-start gap-y-3 mb-20">
      <Image src={principles} width={100} alt="principles" />
      <h3 className="text-2xl font-bold text-green">Our core principles</h3>
      <ul className="flex flex-col gap-y-3  text-justify max-w-md list-disc marker:text-green marker:text-xl">
        <li>
          Serve our customers honestly, dependably and with excelling expert
          services{" "}
        </li>
        <li>Customers’ problems are our problems</li>
        <li>
          Information technology is the key technology for betterment of human
          life in our times and the main driver for growth and prosperity{" "}
        </li>
        <li>
          Human capital is the main capital that counts Long term sustainable
          business profit is better than short term large gains{" "}
        </li>
        <li>Research, knowledge and skill are our main assets </li>
        <li>
          Our processes are significant assets and building blocks of our future
        </li>
      </ul>
    </section>
  );
};

export default Principles;
