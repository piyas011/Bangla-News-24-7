import Image from "next/image";
import Date from "./Date";

import NavLink from "./NavLink";
import Buttons from "./Buttons";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex justify-center items-center gap-2">
        <div>
          <Image src="/image.png" alt="logo" width={40} height={40} />
        </div>
        <div>
          <h1 className="text-[25px] font-bold text-red-600">
            Bangla News 24<span className="text-black">/</span>7
          </h1>
          <p className="text-[12px] text-red-900 ">
            <Date />
          </p>
        </div>
      </div>
      {/* NavLink */}
      <div>
        <NavLink />
      </div>
      {/* LogIn SignUp Buttons */}
      <div className="absolute right-5">
        <Buttons />
      </div>
    </div>
  );
};

export default Header;
