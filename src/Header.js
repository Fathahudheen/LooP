import { useState } from "react";
import "./App.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb] p-4">
      <div className="w-[95%] py-[15px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">LooP</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex gap-10 text-white">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Responsive navbar */}

        <ul
          className={`md:hidden duration-300 w-full  text-white text-left fixed bg-black top-[98px] 
        ${toggle ? "left-[0]" : "left-[-100%]"}
        `}
        >
          <li className="p-5">Home</li>
          <li className="p-3">Company</li>
          <li className="p-3">Resources</li>
          <li className="p-3">About</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
