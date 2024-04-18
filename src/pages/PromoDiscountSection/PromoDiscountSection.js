import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPromos } from "../../functions/Promos";

export function PromoDiscountSection(id) {
  const { user } = useSelector((state) => state.record);
  const [promo, setPromo] = useState([]);

  useEffect(() => {
    getPromos(id.businessUnitId)
      .then((response) => {
        if (response.valid) {
          // Filter the promo items based on your criteria
          const filteredPromo = response.data.items.filter((item) => {
            const currentDate = new Date();
            const startDate = new Date(item.DateStart);
            const endDate = new Date(item.DateEnd);

            return (
              item.Slots >= 1 &&
              currentDate >= startDate &&
              currentDate <= endDate
            );
          });

          setPromo(filteredPromo);
        } else {
          // Handle error
        }
      })
      .catch();
  }, [id]);

  return (
    <>
      <div className="flex justify-center font-poppins mb-10  tablet:text-3xl text-white font-bold text-[24px] text-center px-10 my-10 ">
        {" "}
        Promo and Discount
      </div>
      <div className="flex items-center pb-10 ">
        <div className="container ml-auto mr-auto flex flex-wrap items-start justify-center">
          {promo.map((item, index) => {
            return (
              <div
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2"
              >
                <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 ">
                  <figure className="mb-2">
                    <img
                      src={item.image}
                      alt="package"
                      className="h-64 ml-auto mr-auto rounded-2xl"
                    />
                  </figure>
                  <div className="rounded-lg p-4 bg-slate-400 flex flex-col">
                    <div className=" mb-2">
                      <h5 className="text-white tablet:text-[24px] text-[18px] font-bold leading-none">
                        {item.Name}
                      </h5>
                    </div>
                    <div className="flex flex-row tablet:text-[17px] text-[13px] justify-between font-bold">
                      <div className="flex flex-col justify-center items-center">
                        <div className="">Ticket Name:</div>
                        <div className="text-gray-200">{item.TicketName}</div>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <div className=""> Use Code:</div>
                        <div className="text-gray-200">{item.Code}</div>
                      </div>

                      {/* <div className="flex  items-center">
                    <div className="text-[14px] text-white text-center font-light">
                      Ticket Name: <div className=""> {item.TicketName} </div>
                    </div>
                    <div className="text-[14px] text-white text-center  font-light">
                      Use Code: <div className="">{item.Code}</div>
                    </div>
              
                  </div> */}
                    </div>
                    <div className="overflow-y-auto ">
                      <span className="text-xs text-gray-700 leading-none">
                        {item.Description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {promo.length <= 0 && (
            <div className="text-white mx-auto text-center">
              Sorry, Currently No Promo and Discounts{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
