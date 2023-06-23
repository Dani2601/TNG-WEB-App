import React, { useEffect } from "react";
import cake from "../../../assets/Bakebe/frm1.png";
import cakesmall from "../../../assets/Bakebe/smallercake.png";

import rightcake1 from "../../../assets/Bakebe/rightcake (1).png";
// import ScrollAnimation from "react-animate-on-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function BakebeSectionA() {
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
    <div>
      {" "}
      <div
        className=" h-auto bakebegradient"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
        id="menu"
      >
        <div className="py-10">
          <div className="flex flex-row ">
            {/* <div className="h-[300px] w-[50%] bg-slate-400"></div>
            <div className="h-[300px] w-[50%] bg-slate-800"></div> */}
            <div
              className="w-[50%]  h-auto max-w-none hidden laptopL:block z-20"
              ref={ref}
            >
              {/* <ScrollAnimation
                animateIn="fadeInLeft"
                animateOnce={true}
                duration={2.5}
                delay={1000}
              > */}
              <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2, delay: 2 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
              >
                <img src={cake} alt={"cake"} className="" />
              </motion.div>
              {/* </ScrollAnimation> */}
            </div>
            <div className="flex flex-col mt-5 justify-center items-center laptopL:w-[50%] ml-[5%]">
              <div className="flex flex-col my-auto " ref={ref}>
                {/* <ScrollAnimation
                  animateIn="fadeInLeft"
                  animateOnce={true}
                  duration={2.5}
                  delay={1000}
                > */}
                <motion.div
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 2, delay: 1 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -100 },
                  }}
                >
                  <img
                    src={cakesmall}
                    alt={"cake"}
                    className="w-[80%] laptop:pl-[-10%] ml-[-6%] h-auto max-w-none  z-20 laptopL:hidden"
                  />
                </motion.div>
                {/* </ScrollAnimation> */}
                {/* 
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOnce={true}
                  // duration={2.5}
                  delay={300}
                > */}
                <motion.div
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 2, delay: 1 }}
                  variants={{
                    visible: { opacity: 1, y: -100 },
                    hidden: { opacity: 0, y: 0 },
                  }}
                >
                  <div className="font-mrDafoe text-white text-[80px] leading-tight laptopL:text-[112px] mt-[100px] ">
                    BakeBe Ph
                  </div>
                  <div
                    className="text-white text-[16px] tablet:text-[20px] mr-[85px] laptop4k:text-[30px]"
                    style={{ fontFamily: "Gotham-Bold, sans-serif" }}
                  >
                    Co-Baking Space that teaches you to bake with an app!
                  </div>
                  <div className="  ">
                    <a href="#promo">
                      <button className="rounded-full px-[24px] py-[10px] bg-bakebe-pink text-white mt-8 laptop4K:[30px] hoverEffects">
                        BOOK NOW
                      </button>
                    </a>
                  </div>
                </motion.div>
                {/* </ScrollAnimation> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="bakebegradient -mt-1 laptopL:-mt-[230px] z-1"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,288L26.7,293.3C53.3,299,107,309,160,266.7C213.3,224,267,128,320,80C373.3,32,427,32,480,74.7C533.3,117,587,203,640,240C693.3,277,747,267,800,234.7C853.3,203,907,149,960,112C1013.3,75,1067,53,1120,58.7C1173.3,64,1227,96,1280,138.7C1333.3,181,1387,235,1413,261.3L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="-mt-[300px] flex flex-row justify-end  ">
        <img src={rightcake1} alt={"cake"} className="" />
      </div>
    </div>
  );
}
