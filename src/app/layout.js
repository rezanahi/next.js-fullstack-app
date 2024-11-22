import localFont from "next/font/local";
import "./globals.css";
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

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

export const metadata = {
  title: {
    default: 'Lama',
    template: '%s | Lama'
  },
  description: "%s",
};

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
