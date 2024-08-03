import React from "react";
import { InputField, SelectField, DatePicker } from "../../components/index";
import {countryOptions, paymentTermOptions} from "../../Data/selectInputOptions"

import ItemList from "./ItemList";

function BillingForm() {
  return (
    <div className="flex flex-1 overflow-hidden flex-col p-6 rounded-3xl max-md:px-5 border border-[#cfd4dc]">
      <section className="flex flex-col w-full max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-loose text-gray-900 max-md:max-w-full">
          Bill From
        </h2>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <InputField name="companyName" label="Company Name" required />
            <InputField name="companyEmail" label="Company Email" required />
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
            <SelectField
              name="country"
              label="Country"
              placeholder="Select Country"
              options={countryOptions}
              className="w-[202px] max-w-[202px]"
              required
            />
            <InputField name="city" label="City" required />
            <InputField
              name="postalCode"
              label="Postal Code"
              required
            />
          </div>
          <InputField
            name="streetAddress"
            label="Street Address"
            className="mt-4"
            required
          />
        </div>
      </section>

      <section className="flex flex-col mt-8 w-full max-md:max-w-full">
        <h2 className="text-2xl font-semibold leading-loose text-gray-900 max-md:max-w-full">
          Bill To
        </h2>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
            <InputField name="clientName" label="Client's Name" required />
            <InputField name="clientEmail" label="Client's Email" required />
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
            <SelectField
              name="clientCountry"
              label="Country"
              placeholder="Select Country"
              options={countryOptions}
              className="w-[202px] max-w-[202px]"
              required
            />
            <InputField
              name="clientCity"
              label="City"
              className="min-w-min"
              required
            />
            <InputField
              name="clientPostalCode"
              label="Postal Code"
              className="min-w-min"
              required
            />
          </div>
          <InputField
            name="clientStreetAddress"
            label="Street Address"
            className="mt-4"
            required
          />
        </div>
      </section>

      <section className="flex flex-col mt-8 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          <DatePicker
            name="invoiceDate"
            label="Invoice Date"
            required
            defaultValue={new Date().toISOString().split("T")[0]}
            className="flex-1"
          />
          <SelectField
            name="paymentTerms"
            label="Payment Terms"
            placeholder="Select Term"
            options={paymentTermOptions}
            required
            className="flex-1"
          />
        </div>
        <InputField
          name="projectDescription"
          label="Project Description"
          className="mt-4"
          required
        />
      </section>

      <ItemList />
    </div>
  );
}

export default BillingForm;
