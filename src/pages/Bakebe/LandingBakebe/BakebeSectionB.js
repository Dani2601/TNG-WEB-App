import React, { useEffect } from "react";
import rightArrow from "../../../assets/Bakebe/arrowfrm2.png";
import a from "../../../assets/Bakebe/a.png";
import b from "../../../assets/Bakebe/b.png";
import c from "../../../assets/Bakebe/c.png";
import d from "../../../assets/Bakebe/d.png";
import e from "../../../assets/Bakebe/e.png";
import f from "../../../assets/Bakebe/f.png";

import rightcake1 from "../../../assets/Bakebe/rightcake (1).png";
// import motion.div from "react-animate-on-scroll";
// import motion.div from "react-animate-on-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function BakebeSectionB() {
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
    <div >
      {" "}
      <div
        id="howto"
        className=" h-auto"
        style={{ fontFamily: "Gotham-Bold, sans-serif" }}
      >
        <div className="py-10 " >
          <div className="flex flex-col mx-[5%] items-center">
            <div className="text-bakebe-orange text-[24px] mb-10" ref={ref}>
              <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 1}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                HOW TO RESERVE
              </motion.div>
            </div>

            <div className="flex flex-col laptopL:flex-row items-center  w-full px-[10%]">
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%] ">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:2}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <div className="flex flex-row justify-center">
                    <img src={a} alt={"A"} className="w-[86px] " />
                  </div>
                  <div className="font-bold text-center">Step 1</div>
                  <div
                    className="items-center text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Click Book Now!
                  </div>
                </motion.div>
              </div>

              <div className="hidden laptopL:block laptopL:w-[8%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:2.3}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </motion.div>
              </div>

              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:2.6}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <div className="flex flex-row justify-center">
                    <img src={b} alt={"B"} className="w-[86px]" />
                  </div>
                  <div className="font-bold text-center">Step 2</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Choose your location
                  </div>
                </motion.div>
              </div>
              <div className="hidden laptopL:block laptopL:w-[8%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:2.9}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </motion.div>
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:3.1}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <div className="flex flex-row justify-center">
                    <img src={c} alt={"AC"} className="w-[86px] " />
                  </div>
                  <div className="font-bold text-center">Step 3</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Select your booking: Regular baking experience? Or Express
                    Service?
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col laptopL:flex-row items-center  w-full px-[10%]">
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:3.4}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <div className="flex flex-row justify-center">
                    <img src={d} alt={"D"} className="w-[86px]" />
                  </div>

                  <div className="font-bold text-center">Step 4</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Book in your chosen recipe!
                  </div>
                </motion.div>
              </div>

              <div className="hidden laptopL:block laptopL:w-[8%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:3.5}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </motion.div>
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:3.8}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <div className="flex flex-row justify-center">
                    <img src={e} alt={"E"} className="w-[86px]" />
                  </div>
                  <div className="text-center font-bold">Step 5</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Add in the number of bakers and schedule of baking.
                  </div>
                </motion.div>
              </div>
              <div className="hidden laptopL:block laptopL:w-[8%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:4.1}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <img
                    src={rightArrow}
                    alt={"rightArrow"}
                    className="w-[40px] "
                  />
                </motion.div>
              </div>
              <div className="flex flex-col items-center gap-y-4 text-[16px] my-8 laptopL:w-[28%]">
               <motion.div
                initial="hidden"
                animate={controls}
                transition={{ duration: 2,delay:4.4}} 
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 0 },
                }}
              >
                  <div className="flex flex-row justify-center">
                    <img src={f} alt={"F"} className="w-[86px]" />
                  </div>

                  <div className="font-bold text-center">Step 6</div>
                  <div
                    className="text-center tablet:mx-[10%]"
                    style={{ fontFamily: "Gotham-Light, sans-serif" }}
                  >
                    Pay in via bank transfer or paypal and many more!{" "}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={rightcake1}
          alt={"F"}
          className="h-[250px] hidden laptopL:block -mt-[120px]"
        />
      </div>
    </div>
  );
}
