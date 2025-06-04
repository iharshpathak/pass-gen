import React from "react";
import {PassContext} from "../Context/context"
import {Bounce, ToastContainer, toast } from 'react-toastify';
// import toast, { Toaster } from 'react-hot-toast';

function PassGenerator() {
  const {pass, setPass} = React.useContext(PassContext);

    function generateEightDigitNumber() {
        return Math.floor(10000000 + Math.random() * 90000000);
      }

    function ranPass(){
        const num = generateEightDigitNumber();
        setPass(num.toString(36));

        // toast.success('Password Generated.');
        toast("Password Generated !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }

    return (
    <>
    <button onClick={ranPass}>
          Generate Password
        </button>
        {/* <Toaster 
          position="top-center"
          reverseOrder={false}
        /> */}
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        />
    </>
);
}
export default PassGenerator;