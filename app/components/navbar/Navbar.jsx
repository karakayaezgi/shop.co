"use client"
import { bebas } from "@/app/font"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center py-3 px-6 justify-center md:justify-between">
      <div className="flex items-center gap-2">
        <GiHamburgerMenu className="lg:hidden text-lg md:text-2xl" size={25}/>
        <strong className={`${bebas.className} text-2xl sm:text-3xl md:text-5xl lg:text-7xl`}>SHOP.CO</strong>
      </div>
      <div className="hidden lg:flex gap-8 mx-5">
        <p>Shop</p>
        <p>On Sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
      </div>
      <div className="bg-gray-200 p-2 rounded-2xl flex items-center gap-2 flex-1 max-w-md mx-4">
        <IoSearchOutline size={21}/>
        <input placeholder="Search for products" type="text" className="outline-0 flex-1 text-sm"/>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <SlBasket className="text-lg md:text-2xl"/>
        <AiOutlineUser className="text-lg md:text-2xl"/>
      </div>
    </div>
  )
}

export default Navbar
