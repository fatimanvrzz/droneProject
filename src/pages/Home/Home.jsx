import React, { useEffect, useState } from "react";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneIphone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { GrCreditCard } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { LuChevronUp } from "react-icons/lu";

function Home() {
  const [floatingIconButtonStyle, setFloatingIconButtonStyle] =
    useState("none");

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        setFloatingIconButtonStyle("block");
      } else {
        setFloatingIconButtonStyle("none");
      }
    }, { passive: true });
  }, []);
  

  return (
    <>
      <div className="flex h-screen bg-[url(../src/assets/images/drone.jpg)] w-[100%] bg-center bg-no-repeat bg-cover bg-fixed z-[1]">
        <div className="flex flex-col justify-center h-80 w-[40rem] mt-56 ml-48 leading-[0.9] font-inter text-white z-[2]">
          <p className="flex flex-row items-center justify-start gap-4">
            <div className="border-t-[1px] border-white w-16"></div>
            <p className="flex items-center gap-6 pb-5 pt-5 italic">
              The World&#39;s Smallest Quadcopter
            </p>
          </p>
          <h1 className="text-8xl mx-0 mb-1 font-semibold">
            Elomus F18 Drone 3 Auto
          </h1>
          <h4 className="text-[0.9rem] mb-10 italic">
            Newest Hover Function, Elomus F18 Drone 3 Auto Quadcopter UFO With
            2Mp Wifi Camera
          </h4>
          <div className="flex w-fit mt-30 pt-3 pb-3 pr-5 pl-5 border-2 rounded-full hover:border-[1] border-white transition-all duration-300 hover:border-blue-300 hover:cursor-pointer hover:decoration-blue-300 hover:text-blue-300 hover:bg-white">
            Shop now
          </div>
          {/* background-color islemedi */}
        </div>
      </div>

      <div className="flex flex-col w-full h-[125vh] items-center mt-8 leading-6">
        <div className="flex flex-col items-center justify-center font-poppins italic mb-0 ">
          <p className="text-xl normal-case">Experience</p>
          {/* color eliye bilmedim */}
          <h4 className="font-poppins text-3xl m-0 font-semibold pb-6 leading-normal">
            FLY IN THE SKY
          </h4>
        </div>
        <div className="flex flex-col justify-center items-center m-0 p-0 leading-[1]">
          <div className="w-16 mr-8 border-[1px] border-blue-300"></div>
          <div className="w-16 ml-16 border-[0.5px] border-blue-300 mt-[5%]"></div>
        </div>
        <div className="flex flex-col justify-center items-center m-0 p-0 leading-none">
          <div className="w-16 mr-8 border-solid-1"></div>
          <div className="w-16 ml-8 border-solid-1"></div>
        </div>
        <div className="flex w-[1450] p-8 items-center leading-6  gap-6 mt-12 text-base font-inter  ">
          <div className="first-box">
            <div className="flex flex-col justify-center items-center text-xl text-center">
              <img
                className="w-1/5"
                src="https://elomus-theme.myshopify.com/cdn/shop/files/drone_rotate_360.png?crop=center&height=56&v=1613722857&width=56"
                alt=""
              />
              <h5 className="decoration-[#454545] font-semibold">
                Immersive Field of View
              </h5>
              <p className="decoration-[#808080] font-extralight">
                Screen equivalent to 125” screen viewed from 10 feet with 24-bit
                true color (16 million colors)
              </p>
            </div>
          </div>
          <div className="second-box">
            <div className="flex flex-col justify-center items-center text-xl text-center">
              <img
                className="w-1/5"
                src="https://elomus-theme.myshopify.com/cdn/shop/files/hdmi_connect_b00a5bc7-e202-4b35-bf90-534e48ea97fd.png?crop=center&height=61&v=1613722857&width=61"
                alt=""
              />
              <h5 className="decoration-[#454545] font-semibold">USB & HDMI</h5>
              <p className="decoration-[#808080] font-extralight">
                Includes optional full immersion face mask. Supports HDMI
                industry standard 3D content
              </p>
            </div>
          </div>
          <div className="third-box">
            <div className="flex flex-col justify-center items-center text-xl text-center">
              <img
                className="w-1/5"
                src="https://elomus-theme.myshopify.com/cdn/shop/files/high_battery_393941be-6fa4-48b5-bc37-dea5252fb748.png?crop=center&height=56&v=1613722857&width=56"
                alt=""
              />
              <h5 className="decoration-[#454545] font-semibold">Battery</h5>
              <p className="decoration-[#808080] font-extralight">
                Built-in batteries allow the pilot to participate in the sport
                for hours of racing.
              </p>
            </div>
          </div>
          <div className="fourth-box">
            <div className="flex flex-col justify-center items-center text-xl text-center">
              <img
                className="w-1/5"
                src="https://elomus-theme.myshopify.com/cdn/shop/files/return_back_if_error.png?crop=center&height=46&v=1613722857&width=67"
                alt=""
              />
              <h5 className="decoration-[#454545] font-semibold">
                Return to Home
              </h5>
              <p className="decoration-[#808080] font-extralight">
                Tells the drone to automatically come back to you using GPS.
                It's a very useful convenient feature.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-4 ml-20 cursor-pointer">
          <img
            src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static2-elomus1.jpg?v=1613722920"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-2xl bg-blue-300 font-poppins italic px-5 py-5 text-white">
        <span>
          Buy Now Phantom 4 Professional offer an immersive, fun flying
          experience.
        </span>
        <div className="flex w-fit px-5 py-2 mt-5 text-white cursor-pointer bg-transparent border-[1px] border-white rounded-[50px] transition-all duration-300 font-poppins not-italic text-xl hover:bg-white hover:text-blue-300 backdrop-blur-sm ">
          Shop now
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex w-[1200px] items-center justify-between ">
          <div className="flex flex-col w-full text-left">
            {/* burda yazilar olacaq */}
            <h3 className="text-4xl font-semibold font-noto mb-6 max-w-md text-dark-gray mt-20">
              Integrated PTZ camera Stabilizes every single pixel in the image
            </h3>
            <p className="text-base font-extralight font-noto leading-5 mb-7 max-w-[550px] text-dark-gray">
              PTZ camera includes a processor that calculates and compensates
              additional movements, and highly sensitive 3-axis gambal
              stabilizes up to 2000 vibrations per second, ± 0.02° accuracy.
            </p>
            <div className="flex gap-16">
              {/* burda da reqemli hisseler */}
              <div className="flex gap-2">
                <img
                  src="https://elomus-theme.myshopify.com/cdn/shop/files/diameter_icon_924a3ad3-2b39-4cc3-9b88-aac5300194e8.png?v=1613722922"
                  className="w-16 h-16"
                />
                <p className="flex items-center justify-center gap-2 font-normal">
                  <span className="font-medium text-2xl">58</span> mm
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://elomus-theme.myshopify.com/cdn/shop/files/video_quality_icon_0316d479-1b9a-4475-93d7-d89ef194a887.png?v=1613722922"
                  className="w-16 h-16"
                />
                <p className="flex items-center justify-center gap-2 font-normal">
                  <span className="font-medium text-2xl">40</span> fps
                </p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://elomus-theme.myshopify.com/cdn/shop/files/drone_weight_icon_71b6e908-27ba-4b11-9d88-e003ade5aad8.png?v=1613722922"
                  className="w-16 h-16"
                />
                <p className="flex items-center justify-center gap-2 font-normal">
                  <span className="font-medium text-2xl">450</span> g
                </p>
              </div>
            </div>
            <div className="flex border-[1px] border-light-gray rounded-[50px] w-fit px-[20px] py-[12px] mt-7 text-base gap-[8px] items-center cursor-pointer text-black  hover:bg-blue-300 hover:text-white hover:border-white">
              <PiArrowBendUpRightDuotone /> View Product
            </div>
          </div>
          <div className="flex mt-8">
            <img src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static3-elomus1.jpg?v=1613722921" />
          </div>
        </div>
        <div className="flex w-[1200px] border-[1px] mt-[3rem]"></div>
        <div className="flex justify-center items-center w-[1200px] h-auto">
          <img
            src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static4-elomus1.jpg?v=1613722922"
            className="h-[40rem] mb-10"
          />
          <div className="z-2 absolute w-[1200px] h-[800px] leding-4">
            <div className="absolute flex flex-col text-right top-[30%] left-[1%] max-w-[225px]">
              <h3 className="text-nonegray">Robust Structure</h3>
              <span className="text-metalic">
                Even after falling down, your drone will rise the phoenix.
              </span>
            </div>
            <div className="absolute flex flex-col text-right top-[80%] left-[5%] max-w-[230px]">
              <h3 className="text-dark-gray">HD Video Recording</h3>
              <span className="text-metalic">
                Get the drone with a spectacular 4k camera.
              </span>
            </div>
            <div className="absolute flex flex-col text-left top-[25%] left-[79%] max-w-[225px]">
              <h3 className="text-dark-gray">Simple Disassembly</h3>
              <span className="text-metalic">
                Need a new detail? No problem at all!
              </span>
            </div>
            <div className="absolute flex flex-col text-left top-[67%] left-[78%] max-w-[225px]">
              <h3 className="text-dark-gray">Advanced Technology</h3>
              <span className="text-metalic">
                We offer only the latest technologies on the market
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center font-poppins text-white pl-5 h-96 
        w-full bg-center bg-no-repeat bg-cover bg-fixed z-[1] bg-[url(../src/assets/images/drone2.jpg)]"
      >
        <div className="flex flex-col gap-4 ml-20">
          <h1 className="tracking-[10px] font-bold text-6xl">SHOP OUR STORE</h1>
          <p className="tracking-[3px] text-3xl">
            Camera Drone Usa Sells Top Name Brand Drones
          </p>
        </div>
      </div>
      {/* <div className="linee"></div> */}
      <div className="flex flex-col justify-center items-center font-poppins">
        <div className="flex flex-col items-center font-oswald font-light leading-[0] mt-8">
          <p className="text-xl text-ab font-medium tracking-wide mb-[5px] font-oswald ">
            Welcome to my personal presentation
          </p>
          <h3 className="font-4xl font-poppins text-dark-gray font-semibold text-4xl">
            <span className="text-blue-300"> ULTRA-BRIGHT </span> SCREEN
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center m-0 p-0 leading-[1]">
          <div className="w-16 mr-8 border-[1px] border-blue-300 mt-[20%]"></div>
          <div className="w-16 ml-16 border-[0.5px] border-blue-300 mt-[5%]"></div>
        </div>
        <div className="flex w-[1200px] mt-16 justify-between">
          <div className="flex flex-col">
            <div className="flex items-left justify-center text-base text-metalic w-[70%]">
              <span>
                A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers
                1000 cd/m2 of brightness, more than twice as bright as
                conventional smart devices. It makes bright, vivid colors easily
                visible in direct sunlight. As the DJI GO 4 app is built into
                the screen, a mobile device is not required, simplifying
                pre-flight preparations.
              </span>
            </div>
            <div className="flex gap-20 mt-5 flex-row">
              <div className="flex flex-col gap-3 text-sm">
                {ScreenContainerContent(
                  "https://elomus-theme.myshopify.com/cdn/shop/files/icon1_static6_26d96bf0-1781-4c3a-9f63-35a5c5c4764b.png?v=1613722925",
                  "Flight time",
                  "30 MINS"
                )}
                {ScreenContainerContent(
                  "//elomus-theme.myshopify.com/cdn/shop/files/icon3_static6.png?v=1613722925",
                  "Control range",
                  "7 KM"
                )}
                {ScreenContainerContent(
                  "//elomus-theme.myshopify.com/cdn/shop/files/icon5_static6.png?v=1613722925",
                  "Sensor range",
                  "30 M"
                )}
              </div>
              <div className="flex flex-col gap-3 text-sm">
                {ScreenContainerContent(
                  "//elomus-theme.myshopify.com/cdn/shop/files/icon2_static6.png?v=1613722925",
                  "Speed",
                  "72 KM/H"
                )}
                {ScreenContainerContent(
                  "//elomus-theme.myshopify.com/cdn/shop/files/icon4_static6.png?v=1613722925",
                  "Video resolution",
                  "4K 60fps"
                )}
                {ScreenContainerContent(
                  "//elomus-theme.myshopify.com/cdn/shop/files/icon6_static6.png?v=1613722926",
                  "Obstacle sensing",
                  "5 DIRECTIONS"
                )}
              </div>
            </div>
            <div className="flex border-[1px] border-light-gray rounded-[50px] w-fit px-[20px] py-[12px] mt-7 text-base gap-[8px] items-center cursor-pointer text-black  hover:bg-blue-300 hover:text-white hover:border-white">
              <PiArrowBendUpRightDuotone /> View Product
            </div>
          </div>
          <div className="flex w-[75%]">
            <img src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static6-elomus1.jpg?v=1613722925" />
          </div>
        </div>
        <div className="flex w-full border-[1px] mt-[2rem] mb-4"></div>
        {/* {line} */}
        <div className="flex flex-row w-[1200px] items-center justify-center gap-48 mt-9 mb-8 ">
          <div className="flex flex-col items-left w-[30%] gap-2">
            <h3 className="flex items-center justify-center font-bold text-dark-gray">
              CONTACT US
            </h3>
            <p className="flex items-center       text-metalic">
              We are a team of designers and developers who creates high quality
              premium Shopify themes.
            </p>
            <p className="flex items-center gap-4 text-metalic">
              <IoLocationOutline /> No 40 Baria Sreet 133/2, NewYork, USA.
            </p>
            <p className="flex items-center gap-4 text-metalic">
              <MdPhoneIphone />
              (012) 800 456 789
            </p>
            <p className="flex items-center gap-4 text-metalic">
              <CgMail /> support@masstechnologist
            </p>
          </div>
          <div className="flex flex-col items-left gap-2">
            <h3 className="flex items-center justify-center font-bold  text-dark-gray">
              MAIN MENU
            </h3>
            <p className="flex items-center gap-4 text-metalic">Home</p>
            <p className="flex items-center gap-4 text-metalic">Shop</p>
            <p className="flex items-center gap-4 text-metalic">Top Products</p>
            <p className="flex items-center gap-4 text-metalic">
              Product Pages
            </p>
            <p className="flex items-center gap-4 text-metalic">Pages/Layout</p>
          </div>
          <div className="flex flex-col items-left gap-2">
            <h3 className="flex items-center justify-center font-bold  text-dark-gray">
              MAIN MENU
            </h3>
            <p className="flex items-center gap-4 text-metalic">Home</p>
            <p className="flex items-center gap-4 text-metalic">Shop</p>
            <p className="flex items-center gap-4 text-metalic">Top Products</p>
            <p className="flex items-center gap-4 text-metalic">
              Product Pages
            </p>
            <p className="flex items-center gap-4 text-metalic">Pages/Layout</p>
          </div>
          <div
            className="px-5 py-5 border-[2px] border-white bg-blue-300 text-white w-fit
           text-3xl cursor-pointer rounded-[10px] transition-all duration-300 ease-in fixed bottom-5 right-5"
            style={{ display: floatingIconButtonStyle }}
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <LuChevronUp />
          </div>
        </div>
        <div className="flex flex-row w-full bg-blue-300 justify-around items-center mt-4 h-16">
          <div className="copyright text-white font-medium text-sm">
            <span>
              Copyright © 2024 MassTechnologist.com. All rights reserved.
            </span>
          </div>
          <div className="flex gap-4 text-white ">
            <GrCreditCard />
            <GrCreditCard />
            <GrCreditCard />
          </div>
          <div className="flex flex-row gap-3 cursor-pointer">
            <div className="facebook border-[1px] border-white rounded-full px-2 py-2 text-white hover:text-blue-300 hover:bg-white">
              <FaFacebookF />
            </div>
            <div className="twitter border-[1px] border-white rounded-full px-2 py-2 text-white hover:text-blue-300 hover:bg-white">
              <IoLogoTwitter />
            </div>
            <div className="pinterest border-[1px] border-white rounded-full px-2 py-2 text-white hover:text-blue-300 hover:bg-white">
              <FaPinterestP />
            </div>
            <div className="google-plus border-[1px] border-white rounded-full px-2 py-2 text-white hover:text-blue-300 hover:bg-white">
              <IoLogoGoogleplus />
            </div>
            <div className="instagram border-[1px] border-white rounded-full px-2 py-2 text-white hover:text-blue-300 hover:bg-white">
              <GrInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function SomeButton() {
  return (
    <>
      <button>Shop</button>
    </>
  );
}

function ScreenContainerContent(iconUrl, Title, Description) {
  return (
    <div className="flex flex-row items-center justify-start h-12 gap-4">
      <div className="flex flex-row items-center justify-center w-20">
        <img src={iconUrl} className="aspect-auto max-h-10" />
      </div>
      <div className="flex flex-col text-dark-gray gap-1">
        <span>{Title}</span>
        <span>{Description}</span>
      </div>
    </div>
  );
}

export default Home;
