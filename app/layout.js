import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Poppins font from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins", // Define a CSS variable
});

const against = localFont({
  src: [
    {
      path: "/fonts/Against-Regular.ttf", // Path to the font file in the public folder
      weight: "400", // Define font weight
      style: "normal", // Define font style (normal, italic, etc.)
    },
  ],
  variable: "--font-against", // Define a CSS variable for custom font
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${against.variable} antialiased`}>
        <Navbar />
        <ToastContainer />
        <div className="max-w-[1440px] mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
