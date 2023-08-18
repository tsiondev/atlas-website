import React from "react";

const Unicash = () => {
  return (
    <div className="flex flex-col items-start mt-24">
      <div className="flex-1 flex flex-col gap-y-3 mb-20">
        <h2 className="text-green font-bold text-3xl">Unicash</h2>
        <p className="text-justify">
          Atlas’s Pay @Bank solution - Uni Cash strives to provide a reliable
          and secure communication channel between enterprises and their banks
          for sending payment request as well as getting status information on
          payments. Uni Cash also communicates with customers of enterprises and
          banks for timely and efficient payments.
        </p>
      </div>
      <h4 className="text-2xl pl-3 font-bold text-lightgray mb-3">
        Unicash Solutions
      </h4>
      <ul className="flex flex-col gap-y-3 pl-10 text-justify max-w-md list-disc marker:text-green marker:text-xl">
        <li>Unicash Bank</li>
        <li>UniCash School</li>
        <li>UniCash College</li>
        <li>UniCash TVET</li>
        <li>UniCash Utility</li>
        <li>UniCash Hospitality</li>
      </ul>
    </div>
  );
};

export default Unicash;
