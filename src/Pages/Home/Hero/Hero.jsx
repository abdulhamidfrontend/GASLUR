import HeroImg from "../../../assets/heroimg.png";
import purpleblur from "../../../assets/purpleblur.svg";
import blueblur from "../../../assets/blueblur.svg";
import avatar from "../../../assets/avatar.png";
import { FaRegHeart } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="left flex flex-col gap-6">
        <h1 className="font-semibold text-[72px] leading-[114%] tracking-[-0.03em] text-[#fff]">
          Discover, collect, <br /> and charity in <br /> extraordinary NFT{" "}
          <br />
          marketplace
        </h1>
        <p className="font-normal text-[24px] leading-[150%] tracking-[0.02em] text-[#e2e2e2]">
          In aenean posuere lorem risus nec. Tempor <br /> tincidunt aenean
          purus purus vestibulum nibh mi <br /> venenatis
        </p>
        <div className="btns flex items-center gap-10">
          <button className="py-3 px-15 border border-transparent font-semibold text-[20px] leading-[150%] rounded-2xl hover:scale-105 duration-200 transition active:scale-100 text-[#d7d7d7] bg-gradient-to-br from-[#9B51E0] to-[#3081ED]">
            Explore
          </button>
          <button className="py-3 px-15 border rounded-2xl border-[#d7d7d7] font-semibold text-[20px] hover: leading-[150%] text-[#d7d7d7] hover:scale-105 duration-200 transition active:scale-100">
            Create
          </button>
        </div>
      </div>

      <div className="right ">
        <div className="card shadow-2xl relative rounded-4xl   w-125 py-6 px-7  h-145 ">
          <div className="img w-full   ">
            <img
              className="absolute  left-[-120px] w-80 top-[-130px]  z-50"
              src={purpleblur}
              alt=""
            />
            <img src={HeroImg} alt="" />
            <img
              className="absolute  right-[-50px] w-80 bottom-[-150px]  z-50"
              src={blueblur}
              alt=""
            />
          </div>
          <div className="data mt-7 flex items-center justify-between">
            <div className="left">
              <div className="flex gap-3 items-center">
                <div className="ava">
                  <img className="w-12" src={avatar} alt="" />
                </div>
                <div>
                  <h1>Laura</h1>
                  <p>0.21 Weth</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="flex flex-col items-end">
                <h1 className="uppercase">We are here</h1>
                <p className="flex items-center gap-1">
                  <FaRegHeart />
                  25
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
