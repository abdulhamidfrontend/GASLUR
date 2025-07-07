import { useEffect, useState } from "react";
import { HiMiniBarsArrowUp } from "react-icons/hi2";
import { HiOutlineFilter } from "react-icons/hi";
import { Pagination } from "antd";

import discover1 from "../../../assets/discover1.png";
import discover2 from "../../../assets/discover2.png";
import discover3 from "../../../assets/discover3.png";
import discover4 from "../../../assets/discover4.png";
import discover5 from "../../../assets/discover5.png";
import discover6 from "../../../assets/discover6.png";
import discover7 from "../../../assets/discover7.png";
import discover8 from "../../../assets/discover8.png";

const allCards = [
  { img: discover1, title: "Lorem ipsum", price: "1.20 Weth" },
  { img: discover2, title: "Dolor sit amet", price: "0.21 Weth" },
  { img: discover3, title: "Dignissim curabitu..", price: "0.01 Weth" },
  { img: discover4, title: "Amet pellentesq..", price: "0.55 Weth" },
  { img: discover5, title: "Lorem ipsum", price: "1.20 Weth" },
  { img: discover6, title: "Dolor sit amet", price: "0.21 Weth" },
  { img: discover7, title: "Dignissim curabitu..", price: "0.01 Weth" },
  { img: discover8, title: "Amet pellentesq..", price: "0.55 Weth" },
];

const Discover = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = isMobile ? 2 : allCards.length;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="title  flex items-center max-[830px]:flex-col justify-between">
        <h1 className="font-medium max-[550px]:text-3xl text-[48px] text-white">
          Discover
        </h1>
        <div className="flex max-[550px]:flex-wrap max-[550px]:justify-center max-[550px]:py-5 items-center gap-10 max-[960px]:gap-5">
          <p className="flex items-center gap-2 max-[1055px]:text-[16px] max-[550px]:text-xs max-[960px]:px-1 text-[24px] font-medium text-white">
            <HiMiniBarsArrowUp /> Category
          </p>
          <select className="bg-[#1f1d2b] text-white px-3 max-[1055px]:text-[16px] max-[550px]:text-xs max-[960px]:px-1 text-[24px]">
            <option>Cheapest</option>
            <option>High To Low</option>
            <option>Low to High</option>
          </select>
          <select className="bg-[#1f1d2b] text-white px-3 max-[1055px]:text-[16px] max-[550px]:text-xs max-[960px]:px-1 text-[24px]">
            <option>Newest</option>
          </select>
          <button className="py-2 px-10 max-[550px]:px-7 max-[550px]:text-[14px] rounded-2xl text-white bg-gradient-to-br from-[#9B51E0] to-[#3081ED] flex items-center gap-2">
            <HiOutlineFilter /> Filter
          </button>
        </div>
      </div>

      <div
        className={`cardstop py-10 gap-5 ${
          isMobile
            ? "grid grid-cols-1"
            : "grid grid-cols-4 max-[1350px]:grid-cols-3 max-[1005px]:grid-cols-2"
        } w-fit mx-auto`}
      >
        {currentCards.map((card, i) => (
          <div
            key={i}
            className="card w-[300px] hover:scale-102 transition duration-300"
          >
            <img src={card.img} alt="" />
            <div className="flex justify-between py-5 border-b border-[#c4c4c4]">
              <p className="font-semibold text-[16px] text-white">
                {card.title}
              </p>
              <p className="font-semibold text-[16px] text-white">
                {card.price}
              </p>
            </div>
            <div className="pt-5 flex justify-between">
              <p className="text-[#bcbcbc] text-[16px]">
                Ends in <span className="text-white">01.34.45</span>
              </p>
              <button className="py-1 px-6 border rounded-[8px] hover:scale-105 active:scale-100 transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="flex justify-center py-10">
          <Pagination
            current={currentPage}
            pageSize={cardsPerPage}
            total={allCards.length}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
            className="custom-pagination"
          />
        </div>
      )}
    </div>
  );
};

export default Discover;
