import React from "react";
import { PiArrowBendUpRightDuotone } from "react-icons/pi";

function Home() {
  return (
    <>
      <div className="flex h-screen bg-[url(../src/assets/images/drone.jpg)] w-[100%] bg-center bg-no-repeat bg-cover bg-fixed z-[1]">
       
        <div className="flex flex-col justify-center h-80 w-[40rem] mt-56 ml-48 leading-[0.9] font-inter text-white z-[2]">
          <p>
            <div className="border-t-[1px] border-white w-16"></div>
            <p>The World&#39;s Smallest Quadcopter</p>
          </p>
          <h1 className="text-8xl mx-0">Elomus F18 Drone 3 Auto</h1>
          <h4 className="text-[0.9rem]">
            Newest Hover Function, Elomus F18 Drone 3 Auto Quadcopter UFO With
            2Mp Wifi Camera
          </h4>
          <div className="flex w-fit mt-30 pt-3 pb-3 pr-5 pl-5 border-2 rounded-full"> Shop now</div>
        </div>
      </div>

      <div className="flex flex-col w-full h-[125vh] items-center mt-8 leading-6">
        <div className="title">
          <p>Experience</p>
          <h4>FLY IN THE SKY</h4>
        </div>
        <div className="two-lines">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
        <div className="dord-qutu">
          <div className="first-box">
            <div className="qutunun-ici">
              <img
                src="https://elomus-theme.myshopify.com/cdn/shop/files/drone_rotate_360.png?crop=center&height=56&v=1613722857&width=56"
                alt=""
              />
              <h5>Immersive Field of View</h5>
              <p>
                Screen equivalent to 125” screen viewed from 10 feet with 24-bit
                true color (16 million colors)
              </p>
            </div>
          </div>
          <div className="second-box">
            <div className="qutunun-ici">
              <img
                src="https://elomus-theme.myshopify.com/cdn/shop/files/hdmi_connect_b00a5bc7-e202-4b35-bf90-534e48ea97fd.png?crop=center&height=61&v=1613722857&width=61"
                alt=""
              />
              <h5>USB & HDMI</h5>
              <p>
                Includes optional full immersion face mask. Supports HDMI
                industry standard 3D content
              </p>
            </div>
          </div>
          <div className="third-box">
            <div className="qutunun-ici">
              <img
                src="https://elomus-theme.myshopify.com/cdn/shop/files/high_battery_393941be-6fa4-48b5-bc37-dea5252fb748.png?crop=center&height=56&v=1613722857&width=56"
                alt=""
              />
              <h5>Battery</h5>
              <p>
                Built-in batteries allow the pilot to participate in the sport
                for hours of racing.
              </p>
            </div>
          </div>
          <div className="fourth-box">
            <div className="qutunun-ici">
              <img
                src="https://elomus-theme.myshopify.com/cdn/shop/files/return_back_if_error.png?crop=center&height=46&v=1613722857&width=67"
                alt=""
              />
              <h5>Return to Home</h5>
              <p>
                Tells the drone to automatically come back to you using GPS.
                It's a very useful convenient feature.
              </p>
            </div>
          </div>
        </div>
        <div className="drone-pic">
          <img
            src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static2-elomus1.jpg?v=1613722920"
            alt=""
          />
        </div>
      </div>

      <div className="banner-text">
        <p>
          Buy Now Phantom 4 Professional offer an immersive, fun flying
          experience.
        </p>
        <div className="someButton"> Shop now</div>
      </div>

      <div className="home-row">
        <div className="camera-details">
          <div className="camera-details-text-top">
            {" "}
            {/* burda yazilar olacaq */}
            <h3>
              Integrated PTZ camera Stabilizes every single pixel in the image
            </h3>
            <p>
              PTZ camera includes a processor that calculates and compensates
              additional movements, and highly sensitive 3-axis gambal
              stabilizes up to 2000 vibrations per second, ± 0.02° accuracy.
            </p>
            <div className="camera-details-text-bottom">
              {/* burda da reqemli hisseler */}
              <div className="one">
                <img
                  src="https://elomus-theme.myshopify.com/cdn/shop/files/diameter_icon_924a3ad3-2b39-4cc3-9b88-aac5300194e8.png?v=1613722922"
                  alt=""
                />
                <p>
                  <span>58</span> mm
                </p>
              </div>
              <div className="second">
                <img
                  src="https://elomus-theme.myshopify.com/cdn/shop/files/video_quality_icon_0316d479-1b9a-4475-93d7-d89ef194a887.png?v=1613722922"
                  alt=""
                />
                <p>
                  <span>40</span> fps
                </p>
              </div>
              <div className="third">
                <img
                  src="https://elomus-theme.myshopify.com/cdn/shop/files/drone_weight_icon_71b6e908-27ba-4b11-9d88-e003ade5aad8.png?v=1613722922"
                  alt=""
                />
                <p>
                  <span>450</span> g
                </p>
              </div>
            </div>
            <div className="viewProductButton">
              <PiArrowBendUpRightDuotone /> View Product
            </div>
            {/* bunun hover azzarini eliye bilmedim */}
          </div>
          <div className="camera-picture">
            <img
              src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static3-elomus1.jpg?v=1613722921"
              alt="camera"
            />
          </div>
        </div>
        <div className="line"></div>
        <div className="drone-details">
          <img
            src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static4-elomus1.jpg?v=1613722922"
            alt=""
          />
          <div className="text-overlay">
            <div className="text1">
              <h3>Robust Structure</h3>
              <p>Even after falling down, your drone will rise the phoenix.</p>
            </div>
            <div className="text2">
              <h3>HD Video Recording</h3>
              <p>Get the drone with a spectacular 4k camera.</p>
            </div>
            <div className="text3">
              <h3>Simple Disassembly</h3>
              <p>Need a new detail? No problem at all! </p>
            </div>
            <div className="text4">
              <h3>Advanced Technology</h3>
              <p>We offer only the latest technologies on the market</p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-store">
        <img src="" alt="" />
        <h1>SHOP OUR STORE</h1>
        <p>Camera Drone Usa Sells Top Name Brand Drones</p>
      </div>
      {/* <div className="linee"></div> */}
      <div className="client-comment">
        <div className="headLine">
          <p>Welcome to my personal presentation</p>
          <h3>
            {" "}
            <span> ULTRA-BRIGHT </span> SCREEN
          </h3>
        </div>
        <div className="two-lines">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
        <div className="boyuk-qutu">
          <div className="ikiliqutu">
            <div className="text-side">
              <p>
                A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers
                1000 cd/m2 of brightness, more than twice as bright as
                conventional smart devices. It makes bright, vivid colors easily
                visible in direct sunlight. As the DJI GO 4 app is built into
                the screen, a mobile device is not required, simplifying
                pre-flight preparations.
              </p>
            </div>
            <div className="screen-container">
              <div className="col1">
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
              <div className="col2">
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
          </div>
          <div className="pictures-side">
            <img src="https://elomus-theme.myshopify.com/cdn/shop/files/img-static6-elomus1.jpg?v=1613722925" />
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
    <div className="screen-container-content">
      <div className="icon">
        <img src={iconUrl} />
      </div>
      <div className="text">
        <p>{Title}</p>
        <p>{Description}</p>
      </div>
    </div>
  );
}

export default Home;
