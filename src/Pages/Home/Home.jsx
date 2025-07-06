import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Auctions from "./Auctions/Auctions";
import GettingStarted from "./GettingStarted/GettingStarted";
import Discover from "./Discover/Discover";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="max-w-full m-auto ">
      <div className="w-full fixed m-auto bg-[#1f1d2b]  shadow-xl z-100 right-0 top-0 left-0">
        <div className="navbar m-auto w-[90%]">
          <Navbar />
        </div>
      </div>
      <div className="w-[90%] m-auto">
        <div data-aos="fade-down" data-aos-duration="3000">
          <div className="Hero py-50">
            <Hero />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="auctions">
            <Auctions />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="getting started py-20">
            <GettingStarted />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <div className="Discover">
            <Discover />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <footer className="pt-40">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
