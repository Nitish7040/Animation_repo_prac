import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/N-logo.jpg";

function Navbar() {
  return (
<>

<div className="navbar flex items-center justify-between p-4 text-md relative z-10 top-0 w-full " style={{ backgroundColor: "#EFEAE3" }}>
  {/* Logo on the Left */}
  <img src={img} alt="Logo" className="w-20 h-20 rounded-full" />

  {/* Navigation Links on the Right */}
  <div className="flex gap-10">
    <Link 
      to="#" 
      className="relative border-black rounded-full border-2 py-1 w-20 h-9 flex items-center justify-center text-center overflow-hidden group"
    >
      <span className="relative z-10 text-black group-hover:text-white transition duration-500">
        Home
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 group-hover:h-full"></span>
    </Link>

    <Link 
      to="#" 
      className="relative border-black rounded-full border-2 py-1 w-20 h-9 flex items-center justify-center text-center overflow-hidden group"
    >
      <span className="relative z-10 text-black group-hover:text-white transition duration-500">
        Studio
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 group-hover:h-full"></span>
    </Link>

    <Link 
      to="#" 
      className="relative border-black rounded-full border-2 py-1 w-20 h-9 flex items-center justify-center text-center overflow-hidden group"
    >
      <span className="relative z-10 text-black group-hover:text-white transition duration-500">
        Contact
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 group-hover:h-full"></span>
    </Link>
  </div>
</div>

    </>
  );
}

export default Navbar;
