import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { TbBrandTwitter } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="px-4">
      <div className="flex items-start border-b pb-10 border-[#f2f2f2] justify-between flex-wrap max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center gap-10">
        <div className="left max-w-[455px] max-[768px]:max-w-full">
          <h1 className="font-medium text-[40px] max-[1230px]:text-[32px] max-[500px]:text-[24px] text-[#fff]">
            Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
            quis magna faucibus lacus.
          </h1>
        </div>

        <div className="right flex items-start gap-10 max-[768px]:flex-col max-[768px]:items-center">
          <div className="Marketplace">
            <h1 className="font-normal text-[40px] max-[500px]:text-[24px] text-[#fff]">
              Marketplace
            </h1>
            <div className="links flex flex-col gap-4 mt-6">
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Home
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Activity
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Discover
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Learn more
              </a>
            </div>
          </div>

          <div className="Company">
            <h1 className="font-normal text-[40px] max-[500px]:text-[24px] text-[#fff]">
              Company
            </h1>
            <div className="links flex flex-col gap-4 mt-6">
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                About Us
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Services
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Portfolio
              </a>
            </div>
          </div>

          <div className="Contact">
            <h1 className="font-normal text-[40px] max-[500px]:text-[24px] text-[#fff]">
              Contact
            </h1>
            <div className="links flex flex-col gap-4 mt-6">
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Facebook
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Instagram
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Twitter
              </a>
              <a className="hover:underline text-[24px] max-[500px]:text-[18px] text-[#d7d7d7]">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 flex items-center justify-between max-[500px]:flex-col max-[500px]:gap-5 max-[500px]:text-center">
        <div className="flex items-center gap-6 max-[500px]:justify-center">
          <FaInstagram className="text-4xl text-white" />
          <FaFacebook className="text-4xl text-white" />
          <TbBrandTwitter className="text-4xl text-white" />
        </div>
        <p className="text-[20px] max-[500px]:text-[16px] text-[#828282]">
          Copyright 2021 Gaslur
        </p>
      </div>
    </div>
  );
};

export default Footer;
