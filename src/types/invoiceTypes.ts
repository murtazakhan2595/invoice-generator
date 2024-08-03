

export type Address = {
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
};

export type Item = {
  name: string;
  quantity: string;
  price: string;
};

export type InvoiceData = {
  companyName: string;
  companyEmail: string;
  country: string;
  city: string;
  postalCode: string;
  streetAddress: string;
  clientName: string;
  clientEmail: string;
  clientCountry: string;
  clientCity: string;
  clientPostalCode: string;
  clientStreetAddress: string;
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Item[];
};
