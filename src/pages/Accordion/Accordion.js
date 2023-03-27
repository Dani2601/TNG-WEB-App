import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-y rounded-md">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-[#e83384]">{title}</h3>
        {
            isOpen ?
            <FiChevronUp/>
            :
            <FiChevronDown/>
        }
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } p-4`}
      >
        {children}
      </div>
    </div>
  );
}