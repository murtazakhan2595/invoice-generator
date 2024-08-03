import React from "react";
import { toast } from "react-toastify";

interface InvoiceNotificationProps {
  iconSrc: string;
  title: string;
  description: string;
}

const InvoiceNotification: React.FC<InvoiceNotificationProps> = ({
  iconSrc,
  title,
  description,
}) => {

  return (
    <div className="flex gap-4 items-start px-4 py-6 bg-white rounded-lg shadow-lg border border-neutral-100">
      <div className="flex gap-3 items-start min-w-[240px]">
        <img
          loading="lazy"
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 w-6 rounded-none aspect-square"
        />
        <div className="flex flex-col min-w-[240px] w-[346px]">
          <h2 className="text-base font-medium text-neutral-600">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
;
};

export default InvoiceNotification;

