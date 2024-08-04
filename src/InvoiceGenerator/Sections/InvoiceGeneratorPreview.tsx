import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { formatNetDays } from "../../utils/mapData";

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface FormData {
  items: Item[];
  invoiceDate?: string;
  paymentTerms?: string;
  companyName?: string;
  companyEmail?: string;
  streetAddress?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  clientName?: string;
  clientEmail?: string;
  clientStreetAddress?: string;
  clientCity?: string;
  clientPostalCode?: string;
  clientCountry?: string;
  projectDescription?: string;
}

const InvoiceGeneratorPreview: React.FC = () => {
  const { control } = useFormContext();
  const formData = useWatch({ control }) as FormData;

  const calculateSubtotal = () => {
    return (formData.items || []).reduce(
      (total, item) => total + (item.quantity || 0) * (item.price || 0),
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * 0.1;
    return subtotal + tax;
  };

  return (
    <div className="flex flex-col flex-1 p-2 custom400:p-6 rounded-3xl basis-0 bg-neutral-100 min-w-[240px] w-full">
      <div className="w-full text-2xl font-semibold leading-loose text-gray-900 whitespace-nowrap max-md:max-w-full">
        Preview
      </div>
      <div className="flex flex-col p-2 custom400:p-6 mt-4 w-full text-base leading-10 bg-white rounded-2xl shadow-xl ">
        <div className="flex flex-col w-full text-lg font-semibold text-gray-900 max-md:max-w-full">
          <div className="max-md:max-w-full">New Invoice</div>
          <div className="flex mt-2 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="flex  gap-4 items-start w-full max-md:max-w-full flex-wrap xl:flex-nowrap">
            <div className="flex flex-col flex-1 shrink justify-center rounded-lg basis-0 min-w-[240px]">
              <div className="text-zinc-500">Invoice Date</div>
              <div className="font-medium text-gray-900">
                {formData.invoiceDate}
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink justify-center rounded-lg basis-0 min-w-[240px]">
              <div className="text-zinc-500">Payment Terms</div>
              <div className="font-medium text-gray-900">
                {formatNetDays(formData.paymentTerms || "")}
              </div>
            </div>
          </div>
          <div className="flex  gap-4 items-start mt-4 w-full max-md:max-w-full flex-wrap xl:flex-nowrap">
            <div className="flex flex-col flex-1 shrink justify-center rounded-lg basis-0 min-w-[240px] ">
              <div className="text-zinc-500">Billed From</div>
              <div className="font-medium text-gray-900">
                {formData.companyName}
              </div>
              <div className="font-medium text-gray-900">
                {formData.companyEmail}
              </div>
              <div className="font-medium text-gray-900">
                {formData.streetAddress}
              </div>

              <div className="font-medium text-gray-900">
                {formData.city && `${formData.city}, `}
                {formData.postalCode}
              </div>

              <div className="font-medium text-gray-900">
                {formData.country}
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink justify-center rounded-lg basis-0 min-w-[240px]">
              <div className="text-zinc-500">Billed To</div>
              <div className="font-medium text-gray-900">
                {formData.clientName}
              </div>
              <div className="font-medium text-gray-900">
                {formData.clientEmail}
              </div>
              <div className="font-medium text-gray-900">
                {formData.clientStreetAddress}
              </div>
              {formData.clientCity && formData.clientPostalCode && (
                <div className="font-medium text-gray-900">
                  {`${formData.clientCity}, ${formData.clientPostalCode}`}
                </div>
              )}
              <div className="font-medium text-gray-900">
                {formData.clientCountry}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 max-w-full rounded-lg min-h-[76px]">
          <div className="text-zinc-500">Project Description</div>
          <div className="font-medium text-gray-900">
            {formData.projectDescription}
          </div>
        </div>
        <div className="flex flex-col justify-center mt-4 w-full rounded-lg max-md:max-w-full">
          <div className="flex  justify-between items-center px-2 w-full rounded bg-neutral-100 text-zinc-500 max-md:max-w-full">
            <div className="w-[22%] py-2">Item</div>
            <div className="w-[22%] py-2">Qty.</div>
            <div className="w-[22%] py-2">Price</div>
            <div className="w-[34%] text-right py-2 whitespace-nowrap">
              Total Amount
            </div>
          </div>
          {(formData.items || []).map((item, index) => (
            <div
              key={index}
              className="flex  justify-between items-center px-2 w-full py-2 border-b text-gray-900"
            >
              <div className="w-[22%]">{item.name}</div>
              <div className="w-[22%]">{item.quantity}</div>
              <div className="w-[22%]">${Number(item.price)?.toFixed(2)}</div>
              <div className="w-[34%] text-right">
                ${(item.quantity * item.price).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-col mt-4 justify-end items-end font-semibold text-gray-900 max-md:max-w-full">
          <div className="flex  items-start gap-4 max-md:max-w-full">
            <div className="w-[120px]">Subtotal</div>
            <div className="text-right w-[120px]">
              ${calculateSubtotal().toFixed(2)}
            </div>
          </div>
          <div className="flex  items-start gap-4 whitespace-nowrap max-md:max-w-full">
            <div className="w-[120px]">Tax</div>
            <div className="text-right w-[120px]">10%</div>
          </div>
          <div className="flex  items-start gap-4 text-xl font-bold max-md:max-w-full">
            <div className="w-[120px]">Total</div>
            <div className="text-right w-[120px]">
              ${calculateTotal().toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGeneratorPreview;
