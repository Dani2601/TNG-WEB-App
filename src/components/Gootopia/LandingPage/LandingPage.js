import React from "react";
import gootopialanding from "../../../assets/Gootopia/gootopialanding.png";
import dripping from "../../../assets/Gootopia/slimedripping.png";
import book1 from "../../../assets/Gootopia/booknow1.png";

export default function LandingPage() {
  return (
    <div>
      <div className="h-screen bg-gootopia-purp">
        <div class="relative">
          <img class="w-full absolute top-0 left-0 mt-2 object-cover" src={gootopialanding} alt="gootopialanding"/>
          <button>
            <img
              className="absolute top-0 right-0  h-[39px] w-[71px] mr-[22px] mt-[50px]"
              src={book1}
              alt="dripping"
              width="182"
            />
          </button>
          {/* <img
            className="absolute top-0 left-0 "
            src={dripping}
            alt="dripping"
          /> */}

        </div>
      </div>
    </div>
  );
}
