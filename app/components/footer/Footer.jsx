"use client"
import { bebas } from "@/app/font";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  const footerP = "text-gray-500 text-xs md:text-sm"
  const footerPTitle = "text-sm md:text-base"
  return (
    <div>
      <div className="relative flex lg:flex-row flex-col bg-gray-200 justify-center gap-10 px-10 py-50 md:px-30">
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-black py-8 px-12 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-10">
          <strong className={`${bebas.className} max-w-[500px] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white`}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</strong>
          <form className="sm:w-[400px] space-y-3">
            <div className="flex items-center gap-2 text-gray-500 p-2 bg-white rounded-2xl">
              <TfiEmail className="text-lg md:text-2xl ms-2" />
              <input className="outline-0 " type="text" placeholder="Enter your email address" />
            </div>
            <button className="w-full p-2 bg-white text-black rounded-2xl text-center">Subscribe to Newsletter</button>
          </form>
        </div>
        <div className="space-y-7">
          <strong className={`${bebas.className} text-3xl md:text-4xl`}>SHOP.CO</strong>
          <p className="text-gray-500 text-sm">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          <div className="flex items-center gap-3">
            <FaXTwitter className="text-lg md:text-2xl" />
            <FaFacebook className="text-lg md:text-2xl" />
            <FaInstagram className="text-lg md:text-2xl" />
            <FaGithub className="text-lg md:text-2xl" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10">
          <div>
            <p className={`${footerPTitle}`}>COMPANY</p>
            <p className={`${footerP}`}>About</p>
            <p className={`${footerP}`}>Features</p>
            <p className={`${footerP}`}>Works</p>
            <p className={`${footerP}`}>Career</p>
          </div>
          <div>
            <p className={`${footerPTitle}`}>HELP</p>
            <p className={`${footerP}`}>Customer Support</p>
            <p className={`${footerP}`}>Delivery Details</p>
            <p className={`${footerP}`}>Terms & Conditions</p>
            <p className={`${footerP}`}>Privacy Policy</p>
          </div>
          <div>
            <p className={`${footerPTitle}`}>FAQ</p>
            <p className={`${footerP}`}>Account</p>
            <p className={`${footerP}`}>Manage Deliveries</p>
            <p className={`${footerP}`}>Orders</p>
            <p className={`${footerP}`}>Payments</p>
          </div>
          <div>
            <p className={`${footerPTitle}`}>RESOURCES</p>
            <p className={`${footerP}`}>Free eBooks</p>
            <p className={`${footerP}`}>Development Tutorial</p>
            <p className={`${footerP}`}>How-to Blog</p>
            <p className={`${footerP}`}>Youtube Playlist</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
