import React from "react";
import BakebeMenubar from "../Navbar/BakebeMenubar";
import { Topbar } from "../Navbar";
import BakebeFooter from "../Footer/BakebeFooter";

export default function BakebeContainer({ children }) {
  return (
    <div className="flex flex-col w-full">
      <Topbar />

      {children}
      <BakebeFooter />
    </div>
  );
}
