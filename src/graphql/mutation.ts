

import { gql } from '@apollo/client';

export const CREATE_INVOICE = gql`mutation CreateInvoice($input: CreateInvoiceInput!) {
  createInvoice(input: $input) {
    id
    invoiceDate
    billingFrom {
      companyName
      companyEmail
      billingFromAddress {
        streetAddress
        city
        country
        postalCode
      }
    }
    billingTo {
      clientName
      clientEmail
      billingToAddress {
        streetAddress
        city
        country
        postalCode
      }
    }
    items {
      id
      name
      price
      quantity
      totalPrice
    }
    subTotal
    tax
    totalAmount
    paymentTerms
    projectDescription
  }
}


`;
