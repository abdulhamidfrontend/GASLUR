import Gettingstarted1 from "../../../assets/gettingstarted1.png";
import Gettingstarted2 from "../../../assets/gettingstarted2.png";
import Gettingstarted3 from "../../../assets/gettingstarted3.png";
import Gettingstarted4 from "../../../assets/gettingstarted4.png";
import GettingstartedBg from "../../../assets/gettingstartedbg.png";

const GettingStarted = () => {
  return (
    <div>
      <div className="title text-center">
        <h1 className="font-medium text-[48px] max-[420px]:text-3xl max-[600px]:text-4xl leading-[150%] tracking-[-0.02em] text-[#fff]">
          Getting started
        </h1>
        <p className="font-normal pt-6 text-[24px] max-[420px]:text-[16px] max-[600px]:text-xl leading-[150%] tracking-[0.02em] text-[#e2e2e2]">
          Eu, molestie commodo, enim pellentesque turpis integer sagittis
        </p>
      </div>

      <div className="relative mt-10">
        <div
          className="hidden min-[1001px]:block absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${GettingstartedBg})` }}
        />

        <div className="cards py-20 max-[500px]:py-10 min-h-[400px] flex flex-wrap gap-10 items-start justify-center relative z-10">
          <div className="card max-[422px]:w-[120px] flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted1} alt="" />
            <h1 className="text-center max-[422px]:text-xs font-normal text-[16px] leading-[150%] text-[#fff]">
              Connect your wallet
            </h1>
          </div>

          <div className="card max-[422px]:w-[120px] flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted2} alt="" />
            <h1 className="text-center max-[422px]:text-xs font-normal text-[16px] leading-[150%] text-[#fff]">
              Posuere urna, sit amet molestie leo
            </h1>
          </div>

          <div className="card max-[422px]:w-[120px] flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted3} alt="" />
            <h1 className="text-center max-[422px]:text-xs font-normal text-[16px] leading-[150%] text-[#fff]">
              Semper pretium libero sed quam ac integer ut
            </h1>
          </div>

          <div className="card max-[422px]:w-[120px] flex flex-col gap-6 w-[170px]">
            <img className="w-full" src={Gettingstarted4} alt="" />
            <h1 className="text-center max-[422px]:text-xs font-normal text-[16px] leading-[150%] text-[#fff]">
              Lectus volutpat magna vitae in arcu
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
