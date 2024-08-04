import React, { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import DeleteIcon from "../../assets/delete.svg";
import PlusIcon from "../../assets/plus.svg";

function ItemList() {
  const { control, register, watch, setValue } = useFormContext();
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });
  const items = watch("items");

  useEffect(() => {
    if (fields.length === 0) {
      append({ name: "", quantity: 1, price: 0 });
     setTimeout(() => {
       const input = document.querySelector(
         'input[name="companyName"]'
       ) as HTMLInputElement;
       if (input) {
         input.focus();
       }
     }, 30);
    }
    console.log("focus company")
    
  }, [append, fields.length]);


  return (
    <section className="flex flex-col mt-8 w-full max-md:max-w-full">
      <h2 className="text-2xl font-semibold leading-loose text-gray-900 max-md:max-w-full">
        Items List
      </h2>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex flex-col mt-4 w-full max-md:max-w-full"
        >
          <div className="flex  gap-4 items-center w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
              <label className="text-sm font-medium leading-none text-slate-700 whitespace-nowrap">
                Item Name
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-900 bg-white rounded-lg shadow-sm focus-within:border-[#7e56d8] border border-[#cfd4dc]">
                <input
                  type="text"
                  {...register(`items.${index}.name`, { required: true })}
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full focus:outline-none"
                  aria-label="Item Name"
                />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[110px]">
              <label className="text-sm font-medium leading-none text-slate-700">
                Qty.
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-900 bg-white rounded-lg shadow-sm focus-within:border-[#7e56d8] border border-[#cfd4dc]">
                <input
                  type="number"
                  {...register(`items.${index}.quantity`, {
                    required: true,
                    min: {
                      value: 1,
                      message: "Quantity must be greater than or equal to 1",
                    },
                  })}
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full focus:outline-none"
                  aria-label="Quantity"
                  min="1"
                  onChange={(e) => {
                    const value = Math.max(1, parseFloat(e.target.value));
                    setValue(`items.${index}.quantity`, value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[110px]">
              <label className="text-sm font-medium leading-none text-slate-700">
                Price
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-900 bg-white rounded-lg shadow-sm focus-within:border-[#7e56d8] border border-[#cfd4dc]">
                <input
                  type="number"
                  {...register(`items.${index}.price`, {
                    required: true,
                    min: {
                      value: 0,
                      message: "Price must be greater than or equal to 0",
                    },
                  })}
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full focus:outline-none"
                  aria-label="Price"
                  min="0"
                  onChange={(e) => {
                    const value = Math.max(0, parseFloat(e.target.value));
                    setValue(`items.${index}.price`, value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col self-stretch my-auto whitespace-nowrap w-[110px]">
              <label className="text-sm font-medium leading-none text-slate-700">
                Total
              </label>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-gray-50 rounded-lg shadow-sm  border border-[#cfd4dc]">
                <span className="flex-1 shrink gap-2 self-stretch my-auto w-full">
                  {(items && items[index]?.quantity * items[index]?.price) || 0}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              className="flex gap-2 items-center self-stretch pt-5 my-auto w-6"
              aria-label="Remove item"
            >
              <img
                loading="lazy"
                src={DeleteIcon}
                alt=""
                className="object-contain self-stretch my-auto min-w-6 aspect-square"
              />
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "", quantity: 1, price: 0 })}
        className="flex items-start mt-4 w-full text-base font-medium text-white rounded-lg max-md:max-w-full"
      >
        <div className="flex overflow-hidden flex-wrap flex-1 shrink gap-2 justify-center items-center px-5 py-2.5 w-full bg-violet-500 rounded-lg shadow-sm basis-0 min-w-[240px] max-md:max-w-full">
          <img
            loading="lazy"
            src={PlusIcon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
          <span className="self-stretch my-auto">Add New Item</span>
        </div>
      </button>
    </section>
  );
}

export default ItemList;
