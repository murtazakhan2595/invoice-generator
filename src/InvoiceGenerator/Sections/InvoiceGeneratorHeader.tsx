import React from "react";
import LogoIcon from "../../assets/LogoIcon.svg";

export default function InvoiceGeneratorHeader() {
  return (
    <div className="flex items-center justify-center h-[72px]  border-b border-b-[#cfd4dc]">
      <img src={LogoIcon} alt="Logo" />
    </div>
  );
}
