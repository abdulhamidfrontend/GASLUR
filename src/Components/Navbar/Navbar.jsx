import LogoImg from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center py-5 justify-between">
      <div className="logo">
        <img className="w-35" src={LogoImg} alt="" />
      </div>

      <div className="links uppercase max-[792px]:hidden flex items-center gap-8 font-medium text-xs text-gray-500">
        <h1 className="border-b-white cursor-pointer pb-1 text-white border border-transparent">
          Home
        </h1>
        <h1 className="hover:border-b-white border border-transparent cursor-pointer pb-1 transition duration-200 hover:text-white border-b-transparent">
          My profile
        </h1>
        <h1 className="hover:border-b-white border border-transparent cursor-pointer pb-1 transition duration-200 hover:text-white border-b-transparent">
          Activity
        </h1>
        <h1 className="hover:border-b-white border border-transparent cursor-pointer pb-1 transition duration-200 hover:text-white border-b-transparent">
          How it works
        </h1>
      </div>

      <div className="actions max-[792px]:hidden flex items-center gap-8">
        <button className="uppercase btn duration-200 transition">
          Create
        </button>
        <button className="uppercase hover:text-white hover:scale-105 transition duration-200 active:scale-100 font-medium text-xs text-gray-500">
          Sign in
        </button>
      </div>

      <div className="hidden max-[792px]:block">
        <button
          onClick={toggleMenu}
          className="active:scale-100 hover:scale-105 duration-200 transition"
        >
          <IoMenu className="text-2xl" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[90%] max-w-sm bg-[#1f1d2b] text-white  shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose className="text-2xl" />
        </button>
        <div className="uppercase flex flex-col items-center gap-5 justify-center h-full">
          <Link to="/">
            <h1>Home</h1>
          </Link>
          <Link to="/">
            <h1>My profile</h1>
          </Link>
          <Link to="/">
            <h1>Activity</h1>
          </Link>
          <Link to="/">
            <h1>How it works</h1>
          </Link>
          <button className="uppercase btn duration-200 transition">
            Create
          </button>
          <button className="uppercase hover:text-white hover:scale-105 transition duration-200 active:scale-100 font-medium text-xs text-gray-500">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
