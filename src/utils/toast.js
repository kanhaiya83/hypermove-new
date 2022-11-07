import {toast } from "react-toastify"
export const successToast=(msg,opt={})=>{

    toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        ...opt
      });
}