import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="p-7 bg-white dark:bg-zinc-900 text-black  dark:text-white h-screen text-center sm:text-left">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
