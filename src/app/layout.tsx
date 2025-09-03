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


const WhatsAppButton = () => {
  const phoneNumber = "263778473160"; // Replace with your actual WhatsApp number
  const message = "Hello GSA Global, I would like to inquire about..."; // Default message
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Animation Background */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
      
      {/* Main Button */}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5C] transition-all duration-300 hover:scale-110">
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </div>
      
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
    </a>
  );
};


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
          <WhatsAppButton />
        <Footer />
      </body>
      <BasicAnimations />
    </html>
  );
}
