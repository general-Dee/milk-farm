import 'tailwindcss/tailwind.css';


// import { Provider } from 'next-auth/client';
import '../styles/globals.css'
// import Router, { useRouter } from 'next/router'
// import { AnimatePresence } from 'framer-motion'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { auth } from "../firebase"
// import { RecoilRoot } from 'recoil'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { AppProps } from 'next/app';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// interface AppProps {
//   Component: ,
//   pageProps:
// }


// function MyApp({ Component, pageProps }: AppProps) {
function MyApp({ Component, pageProps }: AppProps) {
  // const [user, loading, error] = useAuthState(auth);
  return (
    <>
    <Component {...pageProps} />  
    <ToastContainer position="top-center" autoClose={3000} />
    </>

  );
}

export default MyApp
