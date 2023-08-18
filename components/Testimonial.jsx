import nib from "@/Assets/images/clients/nib.png";
import Image from "next/image";
const Testimonial = () => {
  return (
    <section className="max-w-[1100px] mx-auto px-12 mb-24">
      <div className="flex-1 flex flex-col gap-y-2 mb-10">
        <h2 className="font-poppins">Testimonials</h2>
        <div className="bg-green w-20 h-1 "></div>
        <h1 className="max-w-[350px] text-3xl text-lightgray font-roboto font-bold">
          What our clients are saying about us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:gap-y-0 gap-y-6 md:gap-x-10">
        <div className=" flex-1 border-l-4 border-blue-400 pl-4">
          <p className="max-w-xs md:max-w-full">
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cumque nemo modi?
          </p>
          <Image src={nib} width={200} />
        </div>
        <div className=" flex-1 border-l-4 border-blue-400 pl-4">
          <p className="max-w-xs md:max-w-full">
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cumque nemo modi?
          </p>
          <Image src={nib} width={200} />
        </div>
        <div className=" flex-1 border-l-4 border-blue-400 pl-4 hidden lg:flex lg:flex-col ">
          <p className="max-w-xs md:max-w-full">
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cumque nemo modi?
          </p>
          <Image src={nib} width={200} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
