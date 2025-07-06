import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="">
      <div className="flex items-start border-b pb-10 border-[#f2f2f2] justify-between">
        <div className="left">
          <h1 className="font-medium text-[40px] text-[#fff]">
            Etiam et id tincidunt <br /> faucibus mollis a <br /> sociis pretium{" "}
            <br />
            fermentum quis <br /> magna faucibus <br /> lacus.
          </h1>
        </div>
        <div className="right flex items-start gap-10">
          <div className="Marketplace">
            <h1 className="font-normal text-[40px] text-[#fff]">Marketplace</h1>
            <div className="links flex flex-col gap-4 mt-10">
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Home
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Activity
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Discover
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="Company">
            <h1 className="font-normal text-[40px] text-[#fff]">Company</h1>
            <div className="links flex flex-col gap-4 mt-10">
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                About Us
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Services
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Portfolio
              </a>
            </div>
          </div>
          <div className="Contact">
            <h1 className="font-normal text-[40px] text-[#fff]">Contact</h1>
            <div className="links flex flex-col gap-4 mt-10">
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Facebook
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Instagram
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Twitter
              </a>
              <a
                className=" hover:underline font-normal text-[24px] tracking-[0.03em] text-[#d7d7d7]"
                href=""
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex items-end justify-between">
        <div className="flex items-center gap-6">
          <FaInstagram className="text-4xl text-gray-600" />
          <FaFacebook className="text-4xl text-gray-600" />
          <TbBrandTwitter className="text-4xl text-gray-600" />
        </div>
        <p className="font-normal text-[24px] text-[#828282]">
          Copyright 2021 Gaslur
        </p>
      </div>
    </div>
  );
};

export default Footer;
