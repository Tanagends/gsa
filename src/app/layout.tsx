import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import dynamic from "next/dynamic";

export const metadata = {
  description:
    "Generational Stewards for Antimicrobials is dedicated to empowering the next generation to combat antimicrobial resistance (AMR) through education, innovation, and advocacy. Learn about our mission, vision, and programs fostering responsible antimicrobial use and global health solutions.",
  icons: {
    icon: '/assets/images/logo.jpg'
  },
  author: "Generational Stewards for Antimicrobials",
  og: {
    title: "Generational Stewards for Antimicrobials | Combating Antimicrobial Resistance",
    description:
      "At Generational Stewards for Antimicrobials, we are committed to educating and advocating for responsible antimicrobial use and fostering innovation in combating AMR. Discover our global health initiatives and programs.",
    type: "website",
  },
  socialMedia: {
    twitter: 'https://twitter.com/Preservefutures',
    facebook: 'https://www.facebook.com/profile.php?id=100093674206378&mibextid=LQQJ4d',
    linkedin: 'https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/',
  },
  contact: {
    email: 'gsateamglobal@gmail.com',
    phone: '+263772916923',
    address: 'GSA Headquarters, Harare, Zimbabwe',
  },
  copyright: '2024 Generational Stewards for Antimicrobials. All rights reserved.',
};

const BasicAnimations = dynamic(() => import('@/components/BasicAnimations'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden roboto">
        <Navbar />
          {children}
        <Footer />
      </body>
      <BasicAnimations />
    </html>
  );
}
