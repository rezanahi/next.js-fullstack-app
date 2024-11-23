import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import {getPost} from "../../lib/data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const generateMetadata = async () => {
  return {
    title: {
      template: '%s | Lama',
      default: 'Lama',
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
