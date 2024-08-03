

type InvoiceItem = {
  name: string;
  quantity: number;
  price: number;
};

type InputData = {
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
  items: {
    name: string;
    quantity: string;
    price: string;
  }[];
};

type TransformedData = {
  input: {
    createInvoiceAttributes: {
      invoiceDate: string;
      paymentTerms: string;
      projectDescription: string;
      billingFromAttributes: {
        companyName: string;
        companyEmail: string;
        billingFromAddressAttributes: {
          streetAddress: string;
          city: string;
          country: string;
          postalCode: string;
        };
      };
      billingToAttributes: {
        clientName: string;
        clientEmail: string;
        billingToAddressAttributes: {
          streetAddress: string;
          city: string;
          country: string;
          postalCode: string;
        };
      };
      itemAttributes: InvoiceItem[];
    };
  };
};

export const transformInvoiceData = (data: InputData): TransformedData => {
  return {
    input: {
      createInvoiceAttributes: {
        invoiceDate: data.invoiceDate,
        paymentTerms: data.paymentTerms.toUpperCase().replace(' ', '_'),
        projectDescription: data.projectDescription,
        billingFromAttributes: {
          companyName: data.companyName,
          companyEmail: data.companyEmail,
          billingFromAddressAttributes: {
            streetAddress: data.streetAddress,
            city: data.city,
            country: data.country,
            postalCode: data.postalCode,
          },
        },
        billingToAttributes: {
          clientName: data.clientName,
          clientEmail: data.clientEmail,
          billingToAddressAttributes: {
            streetAddress: data.clientStreetAddress,
            city: data.clientCity,
            country: data.clientCountry,
            postalCode: data.clientPostalCode,
          },
        },
        itemAttributes: data.items.map(item => ({
          name: item.name,
          quantity: parseInt(item.quantity, 10),
          price: parseFloat(item.price),
        })),
      },
    },
  };
};



export function formatNetDays(value: string): string {
  // Convert the string to lower case and replace underscores with spaces
  const formattedString = value
    .toLowerCase() // Convert to lower case
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
  
  return formattedString;
}
