import logo from "@/Assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { BiChevronsRight } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="max-w-[1100px] mx-auto mb-10 px-12">
      <div className=" flex md:flex-row justify-between flex-col gap-y-10  md:gap-y-0 items-start">
        <div className="flex-1 ">
          <Image src={logo} width={100} />
        </div>
        <div className="flex-1 ">
          <form className="flex flex-col items-start gap-y-3" action="">
            <label className="text-base" htmlFor="email">
              Email:
            </label>
            <input
              className="border border-green rounded-lg py-2 placeholder:pl-3 w-full"
              type="email"
              name="email"
              id="email"
              placeholder="your email"
            />
            <label className="text-base" htmlFor="message">
              Message:
            </label>
            <textarea
              className="border border-green rounded-lg placeholder:pl-3 placeholder:pt-3"
              name="message"
              id="message"
              cols="40"
              rows="5"
              placeholder="your message"
            ></textarea>
            <input type="submit" value="Send" className="btn_md bg-green" />
          </form>
        </div>
        <div className="flex-1 flex flex-col gap-y-4 items-end  ">
          <Link
            className="text-blue flex gap-x-2 hover:gap-x-3 transition items-center"
            href="/"
          >
            Atlas Software Development <BiChevronsRight />
          </Link>
          <Link
            className="text-blue flex gap-x-2 hover:gap-x-3 transition items-center"
            href="/"
          >
            Atlas System Engineering <BiChevronsRight />
          </Link>
          <Link
            className="text-blue flex gap-x-2 hover:gap-x-3 transition items-center"
            href="/"
          >
            Atlas Training and Consulting <BiChevronsRight />
          </Link>
        </div>
      </div>
    </footer>
  );
};
// className="flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between items-start"
export default Footer;
