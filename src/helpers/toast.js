import { toast } from "react-toastify";

function errorMessage(message) {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        toastId: '1'
    });
}

function successfulMessage(message) {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        toastId: '1'
    });
}

export { errorMessage, successfulMessage };