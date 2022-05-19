import { toast } from "react-toastify";

export const notifyError = (msg: string) => {
    toast.error(msg, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export const notifySuccess = (msg: string) => {
    toast.success(msg, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export const notifyWarn = (msg: string) => {
    toast.warn(msg, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

export const notifyPromise = (promesa: Promise<any>, pending?: string, error?: string, success?: string) => {
    return toast.promise(
        promesa, {
        pending: pending || "Cargando...",
        error: error || "Error",
        success: success || "Funciona"
    });
}