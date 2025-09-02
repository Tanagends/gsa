/* home page */
import Link from "next/link";
import About from "@/components/about/About";
import Partner from "@/components/Partner";
import LatestPosts from '@/components/latestPosts/LatestPosts';
import Contact from '@/components/Contact';
import LandingGallery from '@/components/LandingGallery';
import dynamic from "next/dynamic";
import { revalidateTag } from "next/cache";
import Values from '@/components/Values';
import { createClient } from '@/prismicio';
import CTA from '@/components/CTA';

const HomePageAnime = dynamic(() => import('./HomePageAnime'), { ssr: false });

const contactDetails = [
  {
    name:'linkedIn',
    link:'https://www.linkedin.com/company/generational-stewards-for-antimicrobials-gsa/',
    icon:'linkedin',  
  },
  {
    name:'whatsApp',
    link:'https://wa.me/263778473160',
    icon:'whatsapp'
  },
  {
    name:'phone',
    link:'tel:+263772916923',
    icon:'telephone'
  },
  {
    name:'mail',
    link:"mailto:gsateamglobal@gmail.com",
    icon:'envelope'
  },
  {
  name:'facebook',
  link:'https://www.facebook.com/profile.php?id=100093674206378&mibextid=LQQJ4d',
  icon:'facebook'
  },
  {
    name:'twitter',
    link:'https://twitter.com/Preservefutures',
    icon:'twitter-x'
  }
]

export const metadata = {
  title: 'Generational Stewards for Antimicrobials',
  description: 'Empowering the next generation to combat antimicrobial resistance (AMR) through education, innovation, and advocacy. Learn about our mission, vision, and programs fostering responsible antimicrobial use and global health solutions.',
 keywords: [
    "antimicrobial resistance",
    "AMR",
    "global health",
    "non-profit Zimbabwe",
    "responsible antimicrobial use",
    "antibiotic stewardship",
    "health advocacy",
    "education on AMR",
    "AMR innovation",
    "Zimbabwe health programs",
    "Generational Stewards for Antimicrobials",
    "AMR solutions",
    "public health Zimbabwe",
  ],

  author: 'Generational Stewards for Antimicrobials',
  descriptionLong: 'Join our mission to empower the next generation to combat antimicrobial resistance through education, innovation, and advocacy. Learn about our programs, events, and resources fostering responsible antimicrobial use and global health solutions.',
  image: 'link-to-your-website-image',
  url: 'https://www.gsaglobal.org.zw',
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
  copyright: '2025 Generational Stewards for Antimicrobials. All rights reserved.',
}
export default async function Home() {
  revalidateTag("prismic");
  const client = createClient();
  const articles_arr = await client.getAllByType("article", {
    limit: 5,
    orderings: [
      {
        field: 'my.article.publishing_time',
        direction: 'desc',
      },
    ],
  });

  return (
    <main className="overflow-x-hidden">
      {/* animation to allow page loading */}
      <section className='h-screen bg-main-300 absolute z-10 w-screen loading-cover overflow-x-hidden'>
      <svg viewBox='0 0 600 160' className="loader-svg pt-[25vh]">
        <text x="30%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-g'>
          G
        </text>
        <text x="50%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-s'>
          S
        </text>
        <text x="70%" y="50%" dy=".32em" textAnchor='middle' className='loader-body-a'>
          A
        </text>
      </svg>
      <h1 className='font-extrabold text-white w-fit mx-auto mt-[5vh] animate-pulse'>Loading...</h1>
    </section>
      {/* hero section */}
      <section className="hero flex items-center flex-col text-white gap-y-8 h-screen roboto tracking-wide leading-relaxed isolate w-full" id="hero">
        <h1 className="text-center hero-text-container mt-8 relative top-[17%] space-y-4 z-20">
          <div className="mx-auto text-3xl md:text-4xl font-bold hero-text-1 hero-text w-fit">Generational Stewards</div>
          <div className="mx-auto text-2xl font-bold hero-text-2 hero-text w-fit">for</div>
          <div className="mx-auto uppercase text-4xl md:text-5xl font-extrabold text-main2 hero-text-3 hero-text w-fit">Antimicrobials</div>
        </h1>
        <div className="z-20 action-btn-group flex gap-4 md:gap-6 relative top-[22%] md:top-[25%]">
          <Link className="call-btn call-btn-left" href="/#join-us">join Us <span className="bi bi-hand-thumbs-up opacity-0"></span></Link>
          <Link className="call-btn call-btn-right" href="mailto:Info@gsa.co.zw">donate <span className="bi bi-emoji-sunglasses opacity-0"></span></Link>
        </div>
        <a href="#" className="" id="about-us"></a>
        <p className="z-20 relative top-[22%] md:top-[35%] text-xs font-sans p-2 martin">
          <blockquote>
            If you can&apos;t fly then run, if you can&apos;t run then walk, if you can&apos;t walk then crawl, but whatever you do you have to keep moving forward.
          </blockquote>
          <b className="block ml-auto p-1 w-fit mr-3">Martin Luther King Jr.</b>
        </p>
      </section>

      <About />
            {/* values */}
      <Values />
      <Partner />
            
      {/* join us and contact-us
      <section className="my-4 contacts-section text-white p-2 space-y-3 responsive-text">
        <article className="contact-us bg-main-300 bg-opacity-15 backdrop-blur-md p-2 rounded-lg sm:w-2/3 mx-auto shadow-md shadow-black">
          <h1 className="bg-transparent text-center text-main2 font-bold text-xl">Connect With Us</h1>
          <p className="slide-in-top">
            We are always glad to engage both professionals and students in all our activities.
            We highly value individual and collective contributions that each one of us can have
            in Antimicrobial Resistance. At GSA, we believe that it is the small efforts that
            each one of us undertakes which matter most.
            <a id="contact-us"></a>
            We welcome you to our family!
          </p>          
        </article>
        <article className="bg-main-300 bg-opacity-25 backdrop-blur-md p-2 rounded-lg sm:w-2/3 mx-auto shadow-md shadow-black">
        <h1 className="bg-transparent text-center text-main2 text-xl font-bold">Contact Us</h1>
          <div className="flex flex-wrap gap-3 justify-center p-2 mt-3 slide-in-top">
            { contactDetails.map((item,index) => <Contact key={'contact-'+index} {...item} />)}
            <a id="join-us"></a>
          </div>
        </article>
        <article className="join-us bg-main-300 bg-opacity-25 backdrop-blur-md p-2 rounded-lg sm:w-2/3 mx-auto shadow-md shadow-black">
          <h1 className="bg-transparent text-center text-main2 text-xl font-bold">Join Us</h1>
          <p className="p-2 slide-in-top">
            Donate!!! Your support can save lives.
            We welcome any gifts and donations, and sponsorships to support our work. We are sure that you will find interesting and important purposes to support your involvement and generosity in the work that we are doing.
            For inquiries and conversations about gifts, donations and sponsorships, please contact us at:
            <br />
            <span className="font-bold text-main2">Info@gsa.co.zw</span>
            <Link href="mailto:Info@gsa.co.zw" className="btn-main">Donate</Link>
          </p>
        </article>
      </section>*/}

      {/* gallery */} 
           
      <LandingGallery />
      {/* latest posts */}
      <LatestPosts articles_arr={ articles_arr } />
      <CTA />
      <HomePageAnime />
    </main>
  );
}
