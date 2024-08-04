import { InvoiceData } from "../types/invoiceTypes";

export const defaultValues: InvoiceData = {
  companyName: "",
  companyEmail: "",
  country: "",
  city: "",
  postalCode: "",
  streetAddress: "",
  clientName: "",
  clientEmail: "",
  clientCountry: "",
  clientCity: "",
  clientPostalCode: "",
  clientStreetAddress: "",
  invoiceDate: new Date().toISOString().split("T")[0], 
  paymentTerms: "",
  projectDescription: "",
  items: [], 
};