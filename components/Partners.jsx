import {
  lenovo,
  redhat,
  oracle,
  mahindra,
  ibm,
} from "@/Assets/images/partners";
import Image from "next/image";
const Partners = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-12 ">
      <div className="flex flex-col gap-y-5">
        <div className="flex-1 flex flex-col gap-y-2 mb-10">
          <h2 className="font-poppins">Partners we work with</h2>
          <div className="bg-green w-20 h-1 "></div>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-10 justify-between">
          <div>
            <Image src={lenovo} height={50} />
          </div>
          <div>
            <Image src={redhat} height={50} />
          </div>
          <div>
            <Image src={oracle} height={50} />
          </div>
          <div>
            <Image src={mahindra} height={50} />
          </div>
          <div>
            <Image src={ibm} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
