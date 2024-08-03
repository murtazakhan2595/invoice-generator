import React from "react"; 
import { toast } from "react-toastify";
import InvoiceNotification from "./InvoiceNotification";
import toastSuccessIcon from "../assets/ToastSuccess.svg";
import toastErrorIcon from "../assets/ToastError.svg";

interface ToastOptions {
  type: "success" | "error";
  title: string;
  description: string;
  autoClose?: number;
  hideProgressBar?: boolean;
  iconSrc?: string;
}

export const showToast = ({
  type,
  title,
  description,
  autoClose = 2000,
  hideProgressBar = true,
}: ToastOptions) => 
{
  console.log(type, title, description, autoClose);

  const iconSrc = type === "success" ? toastSuccessIcon : toastErrorIcon;
  const toastContent = (
    <InvoiceNotification
      iconSrc={iconSrc}
      title={title}
      description={description}
    />
  );

  if (type === "success") {
    toast.success(toastContent, {
      autoClose,
      hideProgressBar,
      position: "top-right",
    });
  } else if (type === "error") {
    toast.error(toastContent, {
      autoClose,
      hideProgressBar,
      position: "top-right",
    });
  }
};
