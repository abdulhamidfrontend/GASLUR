import { FaArrowRight } from "react-icons/fa6";
import Card1img from "../../../assets/card1.png";
import Card2img from "../../../assets/card2.png";
import Card3img from "../../../assets/card3.png";
import Card4img from "../../../assets/card4.png";

const Auctions = () => {
  return (
    <div>
      <div className="title flex items-end justify-between">
        <h1 className="font-medium text-[48px] max-[380px]:text-[24px] max-[600px]:text-[32px] leading-[150%] tracking-[-0.02em] text-[#fff]">
          Hot auctions
        </h1>
        <p className="flex items-center gap-3 font-semibold max-[380px]:text-[16px] max-[600px]:text-[20px] text-[24px] leading-[150%] tracking-[-0.04em] text-[#d7d7d7]">
          View all
          <FaArrowRight className="text-[20px]" />
        </p>
      </div>
      <div className="cards py-10 grid grid-cols-4 gap-5 mx-auto w-fit max-[1375px]:grid-cols-3 max-[1005px]:grid-cols-2 max-[665px]:grid-cols-1">
        <div className="card hover:scale-102 max-[400px]:w-[90%] mx-auto  transition duration-300 w-[300px]">
          <img src={Card1img} alt="" />
          <div className="flex items-center justify-between py-5  border-b border-[#c4c4c4]">
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              Lorem ipsum
            </p>
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              1.20 Weth
            </p>
          </div>
          <div className="pt-5 flex items-center justify-between ">
            <h1 className="font-normal text-[16px] leading-[150%] text-[#bcbcbc]">
              Ends in <span className="text-white">01.34.45</span>
            </h1>
            <button className="btn transition duration-200 ">bid</button>
          </div>
        </div>
        <div className="card hover:scale-102 max-[400px]:w-[90%] mx-auto  transition duration-300 w-[300px]">
          <img src={Card2img} alt="" />
          <div className="flex items-center justify-between py-5  border-b border-[#c4c4c4]">
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              Dolor sit amet
            </p>
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              0.21 Weth
            </p>
          </div>
          <div className="pt-5 flex items-center justify-between ">
            <h1 className="font-normal text-[16px] leading-[150%] text-[#bcbcbc]">
              Ends in <span className="text-white">01.34.45</span>
            </h1>
            <button className="btn transition duration-200 ">bid</button>
          </div>
        </div>
        <div className="card hover:scale-102 max-[400px]:w-[90%] mx-auto  transition duration-300 w-[300px]">
          <img src={Card3img} alt="" />
          <div className="flex items-center justify-between py-5  border-b border-[#c4c4c4]">
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              Dignissim curabitu..
            </p>
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              0.01 Weth
            </p>
          </div>
          <div className="pt-5 flex items-center justify-between ">
            <h1 className="font-normal text-[16px] leading-[150%] text-[#bcbcbc]">
              Ends in <span className="text-white">01.34.45</span>
            </h1>
            <button className="btn transition duration-200 ">bid</button>
          </div>
        </div>
        <div className="card hover:scale-102 max-[400px]:w-[90%] mx-auto  transition duration-300 w-[300px]">
          <img src={Card4img} alt="" />
          <div className="flex items-center justify-between py-5  border-b border-[#c4c4c4]">
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              Amet pellentesq..
            </p>
            <p className="font-semibold text-[16px] leading-[150%] text-[#fff]">
              0.55 Weth
            </p>
          </div>
          <div className="pt-5 flex items-center justify-between ">
            <h1 className="font-normal text-[16px] leading-[150%] text-[#bcbcbc]">
              Ends in <span className="text-white">01.34.45</span>
            </h1>
            <button className="btn transition duration-200 ">bid</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
