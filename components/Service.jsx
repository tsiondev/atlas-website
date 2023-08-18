import Link from "next/link";
import { BiChevronsRight } from "react-icons/bi";

const Services = () => {
  return (
    <section
      id="service"
      className="max-w-[1100px] mx-auto mb-24 lg:h-screen px-12"
    >
      <div className="flex justify-between item-top md:flex-row flex-col items-start  gap-x-10">
        <div className="flex-1 flex flex-col gap-y-2 mb-10">
          <h2 className="font-poppins">Our service</h2>
          <div className="bg-green w-20 h-1 "></div>
          <h1 className="max-w-[350px] md:text-3xl text-2xl text-lightgray font-roboto font-bold">
            Our services are as vast as the ocean. Whatever you need, we can
            provide.
          </h1>
        </div>
        <div className="flex-1 flex flex-col gap-y-7 md:mb-0 mb-6">
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold font-roboto text-lightgray">
              System Engineering
            </h3>
            <p>
              Enable your company to leverage the wide technology stack for
              delivering the best possible enterprise efficiency, speed,
              geographical coverage and experience for your customers.
            </p>
            <Link
              className="text-blue flex gap-x-2 items-center hover:gap-x-3 transition"
              href="/"
            >
              Visit official website <BiChevronsRight />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold font-roboto text-lightgray">
              Training and Consulting
            </h3>
            <p>
              Are you looking for IT team that advises, plans, designs and
              installs , and train information technology systems for your
              Business. Well, Look no further.{" "}
            </p>
            <Link
              className="text-blue flex gap-x-2 items-center hover:gap-x-3 transition"
              href="/"
            >
              Visit official website <BiChevronsRight />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold font-roboto text-lightgray">
              Data Analytics
            </h3>
            <p>
              The rich variety of data that enterprises generate contains
              valuable insights, and data analytics is the way to unlock them.{" "}
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold font-roboto text-lightgray">
              Software Development
            </h3>
            <p>
              Enhance your client’s experience, Modernize and optimize your
              system and business process for optimal performance, maximum
              profit and competitive edge.
            </p>
            <Link
              className="text-blue flex gap-x-2 items-center hover:gap-x-3 transition"
              href="/"
            >
              Visit Official website <BiChevronsRight />
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-bold font-roboto text-lightgray">
              Hosted Service
            </h3>
            <p>
              ACTs hosted services is your go to solution if you are looking to
              Integrate your solutions on a secure server, whether you're an
              individual who's looking for a server space or whether you're an
              enterprise that wants to add more computing power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
