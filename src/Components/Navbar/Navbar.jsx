import LogoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center py-5 justify-between">
      <div className="logo">
        <img className="w-35" src={LogoImg} alt="" />
      </div>
      <div className="links uppercase flex items-center gap-8 font-medium text-xs  text-gray-500">
        <h1 className="border-b-white  cursor-pointer pb-1  text-white border border-transparent  ">
          Home
        </h1>
        <h1 className="hover:border-b-white border border-transparent cursor-pointer pb-1 transition duration-200 hover:text-white  border-b-transparent">
          My profile
        </h1>
        <h1 className="hover:border-b-white border border-transparent cursor-pointer pb-1 transition duration-200 hover:text-white  border-b-transparent">
          activity
        </h1>
        <h1 className="hover:border-b-white border border-transparent cursor-pointer pb-1 transition duration-200 hover:text-white  border-b-transparent">
          how it works
        </h1>
      </div>
      <div className="actions flex items-center gap-8">
        <button className="uppercase btn  duration-200 transition">
          Create
        </button>
        <button className="uppercase  hover:text-white hover:scale-105 transition duration-200 active:scale-100  font-medium text-xs  text-gray-500">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
