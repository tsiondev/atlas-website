import React from "react";

import Image from "next/image";
import erp from "@/Assets/images/products/erp.png";
const ERP = () => {
  return (
    <div className="flex flex-col items-start mt-24">
      <div className="flex-1 flex flex-col gap-y-3 mb-20">
        <h2 className="text-green font-bold text-3xl mb-5">
          Enterprise resource planning (ERP)
        </h2>
        <p>
          Enterprise resource planning (ERP) is a type of software system that
          helps organizations automate and manage core business processes for
          optimal performance. ERP software coordinates the flow of data between
          a company’s business processes, providing a single source of truth and
          streamlining operations across the enterprise. It’s capable of linking
          a company’s financials, supply chain, operations, commerce, reporting,
          manufacturing, and human resources activities on one platform.
        </p>
        <Image src={erp} width={400} />
      </div>
    </div>
  );
};

export default ERP;
