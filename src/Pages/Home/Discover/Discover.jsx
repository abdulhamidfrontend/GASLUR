import { HiMiniBarsArrowUp } from "react-icons/hi2";
import { HiOutlineFilter } from "react-icons/hi";
import discover1 from "../../../assets/discover1.png";
import discover2 from "../../../assets/discover2.png";
import discover3 from "../../../assets/discover3.png";
import discover4 from "../../../assets/discover4.png";
import discover5 from "../../../assets/discover5.png";
import discover6 from "../../../assets/discover6.png";
import discover7 from "../../../assets/discover7.png";
import discover8 from "../../../assets/discover8.png";

const Discover = () => {
  return (
    <div>
      <div className="title flex items-center justify-between">
        <div className="left">
          <h1 className="font-medium text-[48px] leading-[150%] tracking-[-0.02em] text-[#fff]">
            Discover
          </h1>
        </div>
        <div className="right flex items-center gap-10">
          <p className="flex font-medium text-[24px]  text-[#fff]  items-center gap-2">
            <HiMiniBarsArrowUp />
            Category
          </p>
          <select
            className="border-none font-medium text-[24px] leading-[150%] tracking-[-0.04em] text-[#fff] px-3 w-fit"
            name=""
            id=""
          >
            <option className="bg-[#1f1d2b]" value="Cheapest">
              Cheapest
            </option>
            <option className="bg-[#1f1d2b]" value="hightolow">
              High To Low
            </option>
            <option className="bg-[#1f1d2b]" value="lowtohigh">
              Low to High
            </option>
          </select>
          <select
            className="border-none font-medium text-[24px] leading-[150%] tracking-[-0.04em] text-[#fff] w-fit px-3"
            name=""
            id=""
          >
            <option className="bg-[#1f1d2b]" value="newest">
              Newest
            </option>
          </select>
          <button className="py-2 px-10 border border-transparent font-semibold text-[20px] leading-[150%] rounded-2xl hover:scale-105 duration-200 transition active:scale-100 text-[#d7d7d7] bg-gradient-to-br from-[#9B51E0] to-[#3081ED] flex items-center gap-2">
            <HiOutlineFilter />
            Filter
          </button>
        </div>
      </div>
      <div className="cardstop py-10 flex items-center justify-between">
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover1} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover2} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover3} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover4} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="cardsbottom py-10 flex items-center justify-between">
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover5} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover6} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover7} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
        <div className="card hover:scale-102  transition duration-300 w-[300px]">
          <img src={discover8} alt="" />
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
            <button className=" transition duration-200 py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100">
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <button className="btn uppercase transition duration-200">
          load more
        </button>
      </div>
    </div>
  );
};

export default Discover;
