import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_INVOICE } from "../graphql/mutation";
import InvoiceGeneratorHeader from "./Sections/InvoiceGeneratorHeader";
import InvoiceGeneratorForm from "./Sections/InvoiceGeneratorForm";
import InvoiceGeneratorPreview from "./Sections/InvoiceGeneratorPreview";
import { useForm, FormProvider } from "react-hook-form";
import { transformInvoiceData } from "../utils/MapData";
import { InvoiceData } from "../types/invoiceTypes";
import { showToast } from './../components/toastUtils';

const InvoiceGeneratorApp: React.FC = () => {
  const [createInvoice, { loading, error }] = useMutation(CREATE_INVOICE);
  const methods = useForm<InvoiceData>();

  const onSubmit = async (data: InvoiceData) => {
    try {
      const input = transformInvoiceData(data);
      const response = await createInvoice({ variables: input });
      if (response) {
        showToast({
          type: "success",
          title: "Invoice created successfully!",
          description: "Your invoice has been created.",
        });
         methods.reset();
      }
    } catch (error) {
      console.error("Error creating invoice:", error);
      showToast({
        type: "error",
        title: "Error creating invoice!",
        description: "Your invoice was not created. Please try again.",
      });

    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-6"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <InvoiceGeneratorHeader />
        <section className="flex flex-wrap gap-4 items-start px-8">
          <header className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <h1 className="text-3xl font-medium leading-none text-gray-900 max-md:max-w-full">
              New Invoice
            </h1>
            <p className="mt-1 text-base text-gray-500">
              Create new invoice for your customers
            </p>
          </header>
          <div className="flex gap-3 items-center text-base font-medium whitespace-nowrap">
            <button
              className="flex items-start self-stretch my-auto rounded-lg text-slate-700 border border-[#cfd4dc]"
              type="button"
              onClick={() => methods.reset()}
            >
              <span className="overflow-hidden gap-2 self-stretch px-5 py-2.5 bg-white rounded-lg shadow-sm">
                Reset
              </span>
            </button>
            <button
              className="flex items-start self-stretch my-auto text-white rounded-lg"
              type="submit"
              disabled={loading} 
            >
              <span
                className={`overflow-hidden gap-2 self-stretch px-5 py-2.5 ${
                  loading ? "bg-gray-400" : "bg-violet-500"
                } rounded-lg shadow-sm`}
              >
                {loading ? "Saving..." : "Save"}
              </span>
            </button>
          </div>
        </section>
        <div className="flex items-start justify-center gap-6 px-8">
          <InvoiceGeneratorForm />
          <InvoiceGeneratorPreview />
        </div>
      </form>
    </FormProvider>
  );
};

export default InvoiceGeneratorApp;
