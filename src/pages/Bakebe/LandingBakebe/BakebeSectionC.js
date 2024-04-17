import React, { useEffect } from "react";
import rightArrow from "../../../assets/Bakebe/arrowfrm2.png";
import a from "../../../assets/Bakebe/a.png";
import b from "../../../assets/Bakebe/b.png";
import c from "../../../assets/Bakebe/c.png";
import d from "../../../assets/Bakebe/d.png";
import e from "../../../assets/Bakebe/e.png";
import frm3 from "../../../assets/Bakebe/frm3.png";
import cakepromoa from "../../../assets/Bakebe/cakepromo.png";
import cakepromob from "../../../assets/Bakebe/cakepromo2.png";

import rightcake1 from "../../../assets/Bakebe/rightcake (1).png";
import { getBranches } from "../../../functions/Branches";
import { getPromos } from "../../../functions/Promos";
import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../../constants/routes";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PromoDiscountSection } from "../../PromoDiscountSection/PromoDiscountSection";
// import ScrollAnimation from "react-animate-on-scroll";

// let promo = [
//   {
//     Name: "Online Promo",
//     Description:
//       "Get 100 off on any day of the week! Book your baking project now!",
//     src: cakepromoa,
//   },
//   {
//     Name: "Weekday Promo",
//     Description:
//       "Get 100 off on any day of the week! Book your baking project now!",
//     src: cakepromob,
//   },
// ];
const bakebe = process.env.REACT_APP_INFLATABLE_KEY
export default function BakebeSectionC() {
  const [promo, setPromo] = useState([]);
  const { user } = useSelector((state) => state.record);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Cus
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <div id="promo" className="h-full" ref={ref}>
      {" "}
      <div
        className="h-full "
        style={{
          fontFamily: "Gotham-Bold, sans-serif",
          backgroundImage: `url(${frm3})`,
          backgroundSize: "cover", // Apply object-fit property
        }}
      >
                       <motion.div
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 2, delay: 1 }}
                  variants={{
                    visible: { opacity: 1, y: -10 },
                    hidden: { opacity: 0, y:  100 },
                  }}
              >
        <div className="py-[50px] laptopL:py-[15%] ">
          {/* <div className="text-[24px] text-white text-center px-10 mb-10 my-10 laptopL:mt-[-5%]">
            {" "}
            Promo and Discounts
          </div> */}
          <div>
            <PromoDiscountSection businessUnitId={bakebe}/>
          </div>
          {/* <div className="flex flex-row flex-wrap justify-center pt-5 pb-[10%]  ">
            {promo.length > 0
              ? promo.map((item) => {
                  console.log(item);
                  return (
                    <Link to={user ? routes.BookingBakebe : routes.Login}>
                      <div className="mx-[7%] laptopL:mx-0 mb-5 justify-center opacity-40 hover:opacity-100 laptopL:px-3 hoverEffects">
                        <div className="min-w-[274px] max-w-[630px] mobileL:h-[219px] laptop:h-[276px] laptopL:w-[430px] rounded-[50px] bg-white flex flex-row ">
                          <div className="w-[40%]">
                            <img
                              src={item?.image}
                              className="h-full w-full object-cover rounded-tl-[50px] rounded-bl-[50px] "
                            />
                          </div>
                          <div className="w-[60%] px-[5%] my-2 flex flex-col justify-center">
                            <div className="text-bakebe-orange text-[24px]">
                              {item?.Name}
                            </div>
                            <div
                              className="text-[13px] tracking-wide overflow-y-auto mt-5"
                              style={{
                                fontFamily: "GothamMedium, sans-serif",
                              }}
                            >
                              {item?.Description}
                            </div>
                            <div className="tablet:mt-6 ">
                              <button className="rounded-full px-[24px] py-[10px] bg-bakebe-pink text-white mt-8 laptop4K:[30px] opacity-80 hover:opacity-100">
                                BOOK NOW
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : "No Data"}
          </div> */}
        </div>
        </motion.div>
      </div>
    </div>
  );
}
