import Gettingstarted1 from "../../../assets/gettingstarted1.png";
import Gettingstarted2 from "../../../assets/gettingstarted2.png";
import Gettingstarted3 from "../../../assets/gettingstarted3.png";
import Gettingstarted4 from "../../../assets/gettingstarted4.png";
import GettingstartedBg from "../../../assets/gettingstartedbg.png";

const GettingStarted = () => {
  return (
    <div>
      <div className="title text-center">
        <h1 className="font-medium text-[48px] leading-[150%] tracking-[-0.02em] text-[#fff]">
          Getting started
        </h1>
        <p className="font-normal pt-6 text-[24px] leading-[150%] tracking-[0.02em] text-[#e2e2e2]">
          Eu, molestie commodo, enim pellentesque turpis integer sagittis
        </p>
      </div>
      <div className="">
        <div
          className="cards py-20 min-h-[400px] flex items-start justify-evenly bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${GettingstartedBg})` }}
        >
          <div className="card flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted1} alt="" />
            <h1 className="text-center font-normal text-[16px] leading-[150%] text-[#fff]">
              Connect your wallet
            </h1>
          </div>
          <div className="card flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted2} alt="" />
            <h1 className="text-center font-normal text-[16px] leading-[150%] text-[#fff]">
              Posuere urna, sit amet <br /> molestie leo
            </h1>
          </div>
          <div className="card flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted3} alt="" />
            <h1 className="text-center font-normal text-[16px] leading-[150%] text-[#fff]">
              Semper pretium <br /> libero sed quam ac <br /> integer ut
            </h1>
          </div>
          <div className="card flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted4} alt="" />
            <h1 className="text-center font-normal text-[16px] leading-[150%] text-[#fff]">
              Lectus volutpat <br /> magna vitae in arcu
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
