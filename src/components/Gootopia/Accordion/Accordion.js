import { useState } from "react";
import { FaFacebook, FaLink, FaTwitter } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <hr class="h-px bg-[#E677AA] border-0"></hr>
      <div className="">
        <div
          className="p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-[16px] tablet:text-[18px] font-bold text-gootopia-green">{title}</h3>
          {isOpen ? (
            <FiChevronUp className="text-white" />
          ) : (
            <FiChevronDown className="text-white" />
          )}
        </div>
        <div className={`${isOpen ? "block" : "hidden"} p-4`}>
          {children}{" "}
          <div className="flex flex-row text-gootopia-green gap-3 mt-3">
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaLink />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
