import React from 'react';
import Link from 'next/link';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className='bg-main-700 text-white flex flex-col gap-6 p-6 sm:flex-row sm:items-start justify-center'>
      <div className='flex justify-center sm:justify-start w-full sm:w-auto md:w-2/5'>
        <div className='relative w-[80%] sm:w-auto sm:h-auto'>
          <img 
            src="/assets/images/logo.jpg"
            className='w-full h-full object-cover rounded-md'
            alt="logo for generational stewards for antimicrobials"
          />
        </div>
      </div>
      
      <div className='w-full sm:w-auto sm:ml-6'>
        <ContactForm />
      </div>

      <div className='flex flex-col sm:flex-row lg:flex-col gap-6 text-center sm:text-left'>
        <div>
          <h4 className='text-main2 font-bold mb-2'>Connect with us</h4>
          <ul className='flex gap-4 justify-center sm:justify-start'>
            <li><a href="tel:+263772916923" className='bi bi-phone'> Phone</a></li>
            <li><a href="tel:+263778473160" className='bi bi-telephone'> Cell</a></li>
          </ul>
        </div>
        <div>
          <h4 className='text-main2 font-bold mb-2'>Mail</h4>
          <ul className='flex gap-4 flex-wrap justify-center sm:justify-start'>
            <li><a href="mailto:gsateamglobal@gmail.com" className='bi bi-envelope'> Main</a></li>
            <li><a href="mailto:Info@gsa.co.zw" className='bi bi-envelope'> Info</a></li>
            <li><a href="mailto:Headofprograms@gsa.co.zw" className='bi bi-envelope'> Head of Programs</a></li>
            <li><a href="mailto:secretary@gsa.co.zw" className='bi bi-envelope'> Secretary</a></li>
          </ul>
        </div>

        <div>
          <h4 className='text-main2 font-bold mb-2'>Follow Us</h4>
          <div className='flex gap-4 justify-center sm:justify-start'>
            <Link href='https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/'><i className='bi bi-linkedin'></i></Link>
            <Link href='https://twitter.com/Preservefutures'><i className='bi bi-twitter'></i></Link>
            <Link href='https://www.facebook.com/profile.php?id=1000093674206378&mibextid=LQQJ4d'><i className='bi bi-facebook'></i></Link>
          </div>
        </div>

        <div>
          <h4 className='text-main2 font-bold mb-2'>Location</h4>
          <p>Harare, Zimbabwe</p>
        </div>

        <div>
          <h4 className='text-main2 font-bold mb-2'>Made By</h4>
          <a href="https://wa.me/263771975597">PixelCrafte</a>
        </div>

        <div>
          <p className='text-main2 font-bold'>© { new Date().getFullYear()} GSA. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
