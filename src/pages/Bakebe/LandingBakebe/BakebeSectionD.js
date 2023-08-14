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
import { MdLocationOn } from "react-icons/md";
import leftCAKE from "../../../assets/Bakebe/leftcake.png";
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { BsEnvelope } from "react-icons/bs";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import bakebeLogo from "../../../assets/Bakebe/navbarlogo.png";
import { useRef } from "react";
// import ScrollAnimation from "react-animate-on-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
let promo = [
  {
    Name: "Online Promo",
    Description:
      "Get 100 off on any day of the week! Book your baking project now!",
    src: cakepromoa,
  },
  {
    Name: "Weekday Promo",
    Description:
      "Get 100 off on any day of the week! Book your baking project now!",
    src: cakepromob,
  },
];

export default function BakebeSectionD() {
  const storeLocation = { lat: 14.546748, lng: 14.546748 }; // Example coordinates for San Francisco
  const mapRef = useRef(null);

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


  useEffect(() => {
    if (mapRef.current) {
      const map = L.map("map").setView([14.546748, 14.546748], 11); // Coordinates for BakeBe Philippines in Taguig City

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Add a dark overlay layer
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }
      ).addTo(map);

      const customIcon = L.divIcon({
        className: "custom-icon",
        html: '<div class="rounded-full bg-red-500 text-white text-center flex justify-center items-center"></div>',
      });

      const marker = L.marker([14.5289, 121.0773], { icon: customIcon }).addTo(
        map
      ); // Marker for BakeBe Philippines
      marker
        .bindPopup(
          `<img src=${bakebeLogo} alt="BakeBe Logo" class="w-[200px] h-auto mr-2" />`,
          { className: "custom-popup" }
        )
        .openPopup();

      // Cleanup the map instance when the component is unmounted
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div
      style={{
        fontFamily: "Gotham-Bold, sans-serif",
      }}
      ref={ref}
    >
      <div className="flex flex-row h-[20%] w-full bg-white py-10"> </div>

      <div className="flex flex-row w-[30%]">
        <img src={leftCAKE} className="" />
      </div>
      <motion.div
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 2, delay: 1 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y:  0 },
                  }}
              >      <div className="flex flex-col  px-4 mr-4 -mt-[20%]">
        <div className="">
          <div className="text-bakebe-orange text-[24px]">
            WE'RE EXCITED TO SEE YOU!
          </div>

          <div
            className="flex flex-col mt-[6%] tablet:mt-[3%]"
            style={{
              fontFamily: "Gotham-Light, sans-serif",
            }}
          >
            <div className="flex flex-row items-center">
              <MdLocationOn className="text-bakebe-pinkIcon" />{" "}
              <div className="ml-2 hover:underline">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/14%C2%B032'48.3%22N+121%C2%B003'16.4%22E/@14.546748,121.0523612,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.546748!4d121.0545499?entry=ttu"
                >
                  SM Aura, Taguig City
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <BsEnvelope className="text-bakebe-pinkIcon" />{" "}
              <div className="ml-2 hover:underline mt-1">
                <a href="mailto: hello@ph.bakebe.com">hello@ph.bakebe.com</a>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col mt-[6%] tablet:mt-[3%]"
            style={{
              fontFamily: "Gotham-Light, sans-serif",
            }}
          >
            <div className="flex flex-row items-center">
              <MdLocationOn className="text-bakebe-pinkIcon" />{" "}
              <div className="ml-2 hover:underline">
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/14%C2%B032'48.3%22N+121%C2%B003'16.4%22E/@14.546748,121.0523612,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.546748!4d121.0545499?entry=ttu"
                >
                  S Maison (SM MOA) Pasay, City
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <BsEnvelope className="text-bakebe-pinkIcon" />
              <div className="ml-2 hover:underline mt-1">
                <a href="mailto: hello@ph.bakebe.com">hello@ph.bakebe.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[10%] flex flex-row justify-center items-center z-10">
          <div
            id="map"
            ref={mapRef}
            style={{ width: "100%", height: "400px" }}
          ></div>
        </div>
      </div>
      </motion.div>

      {/* </ScrollAnimation> */}
    </div>
  );
}
