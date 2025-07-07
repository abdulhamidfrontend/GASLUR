import HeroImg from "../../../assets/heroimg.png";
import purpleblur from "../../../assets/purpleblur.svg";
import blueblur from "../../../assets/blueblur.svg";
import avatar from "../../../assets/avatar.png";
import { FaRegHeart } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex items-center  max-[1239px]:flex-col justify-between">
      <div className="left flex flex-col gap-6 max-[420px]:flex max-[420px]:flex-col max-[420px]:items-center max-[420px]:justify-center">
        <h1 className="font-semibold text-[72px] leading-[114%] max-[800px]:text-[50px] max-[390px]:text-[24px] max-[420px]:max-w-[90%] max-[500px]:max-w-[350px] max-[500px]:text-[28px] max-[650px]:max-w-[400px]  max-[650px]:text-[35px] max-[1239px]:text-center max-w-[637px] tracking-[-0.03em] text-[#fff]">
          Discover, collect, and charity in extraordinary NFT marketplace
        </h1>
        <p className="font-normal max-[390px]:text-[14px]  max-w-[637px] max-[800px]:text-[20px] text-[24px] max-[420px]:max-w-[90%]  max-[500px]:max-w-[350px] max-[650px]:max-w-[400px] max-[500px]:text-[16px]  leading-[150%] max-[1239px]:text-center tracking-[0.02em] text-[#e2e2e2]">
          In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus
          vestibulum nibh mi venenatis
        </p>
        <div className="btns flex items-center  max-[650px]:gap-5 max-[1239px]:justify-center gap-10">
          <button className="py-3 px-15 max-[500px]:py-2.5 max-[500px]:px-7 max-[500px]:text-[16px]  border border-transparent font-semibold text-[20px] leading-[150%] rounded-2xl hover:scale-105 duration-200 transition active:scale-100 text-[#d7d7d7] bg-gradient-to-br from-[#9B51E0] to-[#3081ED]">
            Explore
          </button>
          <button className="py-3 px-15 max-[500px]:py-2.5 max-[500px]:px-7 max-[500px]:text-[16px]  border rounded-2xl border-[#d7d7d7] font-semibold text-[20px] hover: leading-[150%] text-[#d7d7d7] hover:scale-105 duration-200 transition active:scale-100">
            Create
          </button>
        </div>
      </div>

      <div className="right max-[500px]:w-[90%] max-[500px]:flex max-[500px]:items-center max-[500px]:flex-col max-[500px]:justify-center max-[500px]:py-5">
        <div className="card shadow-2xl relative max-[500px]:w-[100%]   rounded-4xl max-[650px]:w-100 max-[650px]:h-120 max-[500px]:h-fit   w-125 py-6 px-7  h-145 ">
          <div className="img w-full   ">
            <img
              className="absolute max-[500px]:hidden  left-[-120px] w-80 top-[-130px]  z-50"
              src={purpleblur}
              alt=""
            />
            <img src={HeroImg} alt="" />
            <img
              className="absolute max-[500px]:hidden  right-[-50px] w-80 bottom-[-150px]  z-50"
              src={blueblur}
              alt=""
            />
          </div>
          <div className="data mt-7 flex items-center justify-between">
            <div className="left">
              <div className="flex gap-3 items-center">
                <div className="ava">
                  <img className="w-12 " src={avatar} alt="" />
                </div>
                <div>
                  <h1 className="max-[450px]:text-[14px]">Laura</h1>
                  <p className="max-[450px]:text-[12px]">0.21 Weth</p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="flex flex-col items-end">
                <h1 className="uppercase max-[450px]:text-[12px]">
                  We are here
                </h1>
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
