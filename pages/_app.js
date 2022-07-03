import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#2631fd" />
        <meta name="title" content="hugo" />
        <meta name="description" content="@wheredidhugo's homepage" />
      </Head>
      <ThemeProvider attribute="class">
        <div className="transition ease-in-out duration-300 p-7 bg-white dark:bg-zinc-900 text-black  dark:text-white h-screen text-center sm:text-left">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
