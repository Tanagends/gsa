/* home page */
import Link from "next/link";
import About from "@/components/About";
import Partner from "@/components/Partner";
import LatestPosts from '@/components/latestPosts/LatestPosts';
import HomePageAnime from '@/app/HomePageAnime';
import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

// partners props
const partners = [
  {
    name:"Zimbabwe Youth Council",
    logo:'/assets/images/partner.JPG',
    link:"#"
  },
  {
    name:"African Youth Antimicrobial Resistance Alliance Taskforce",
    logo:'/assets/images/partner.jpg',
    link:"#"
  },
  {
    name:"Stop superbugs Network",
    logo:'/assets/images/partner.jpg',
    link:"#"
  },  
  {
    name:"Stop superbugs Network",
    logo:'/assets/images/partner.jpg',
    link:"#"
  },  
  {
    name:"Stop superbugs Network",
    logo:'/assets/images/partner.jpg',
    link:"#"
  },  
  {
    name:"Stop superbugs Network",
    logo:'/assets/images/partner.jpg',
    link:"#"
  },  
]

//
const WhoWeAre = {
  title:'Who We Are',
  about:"We are dedicated to fostering innovation and advocacy in our health and awareness campaigns, specifically focusing on Antimicrobial Resistance (AMR). Our primary goal is to promote and empower stewardship among primary and secondary school students. By raising awareness and providing education, we aim to instil a sense of responsibility and understanding of AMR in the younger generation. We are inculcating a culture of social responsibility among young people to mitigate the threat of the spread of antimicrobial resistance in African communities using a One Health Approach. We are a catalyst organization and we achieve this by empowering young people, especially tertiary level students, and recent graduates by designing relevant programs that can trigger their interests and equip them with appropriate skills that mould them to be the next change-makers, opinion leaders, and hopefully pursue a career in the AMR sector. This is achieved through regular training and mentorship programs."
}
const mission = {
  title:'Our Mission',
  about:"We are committed to empowering the next generation as champions and advocates for responsible antimicrobial use. Our mission is to cultivate a community of student leaders dedicated to combating antimicrobial resistance (AMR) through research, innovation, and social responsibility. We provide a dynamic platform for learning and action through engaging educational programs, the creation of collaborative AMR clubs, and mentorship opportunities designed to nurture student ideas. By connecting these future leaders with relevant stakeholders, we aim to facilitate impactful collaborations and pave the way for student-led solutions to flourish and create lasting change in the fight against AMR."
}
const vision = {
  title:'Our Vision',
  about:"Our vision is to empower and educate young people to understand and tackle antimicrobial resistance (AMR) by fostering innovative solutions. We aim to engage and equip the next generation to actively contribute to global efforts in addressing this critical health threat."
}

const values = [
  "Dedication",
  "Empathy",
  "Industriousness",
  "Teamwork",
  "Grassroot engagement",
  "Empowerment",
  ]

export const metadata = {
  title:'generational',
  description:'focus on this and that and what what',
  //keywords:'woisawo mashoko esumbunuro pano'
}

export default async function Home() {
  const client = createClient();
  const images = await client.getAllByType("image_gallery");

  return (
    <main className="">
      {/* hero section */}
      <section className="hero flex items-center flex-col text-main-500 gap-y-8 h-screen" id="hero">
        <div className="text-center hero-text-container mt-8">
          <h1 className="mx-auto text-2xl font-bold hero-text-1 hero-text w-fit">Generational Stewarts</h1>
          <h1 className="mx-auto text-2xl font-bold hero-text-2 hero-text w-fit">for</h1>
          <h1 className="mx-auto uppercase text-3xl font-extrabold text-main2 hero-text-3 hero-text w-fit">Antimicrobials</h1>
        </div>
        <div className="action-btn-group flex justify-around">
          <Link className="call-btn call-btn-left" href="/#join-us">join Us <span className="bi bi-hand-thumbs-up opacity-0"></span></Link>
          <Link className="call-btn call-btn-right" href="#">donate <span className="bi bi-emoji-sunglasses opacity-0"></span></Link>
        </div>
      {/* who we are */}
        <About {...WhoWeAre}/>
      </section>
      {/* partners */}
      <section className="partners h-screen overflow-scroll" id="partners">
        <h1>Our Partners</h1>
        <div className="partners-container">
            {partners.map((item) => <Partner {...item}/>)}
        </div>
      </section>
      {/* mission and vision */}
      <section className="mission vision">
      <About {...mission} />
      <About {...vision} />
      </section>
      {/* values */}
      <section className="values">
        <h1>Our Core Values</h1>
        <ul>
          {values.map((item) => <li>{item}</li>)}
        </ul>
      </section>
      {/* join us and contact us*/}
      <section className="">
        <article className="contact-us" id="contact-us">
          contact us
        </article>
        <article className="join-us" id="join-us">
          join us
        </article>
      </section>
      {/* gallery */}
      <section className="gallery-slide">
        <h1>A pique at the gallery</h1>
        <div className="couresel flex overflow-x-scroll">
          <img className="block" src="/assets/images/banner.png" alt="" />
          <img className="block" src="/assets/images/billboard.png" alt="" />
          <img className="block" src="/assets/images/brochure.jpg" alt="" />
	        <PrismicNextImage field={images[0].data.image} className="block" />
        </div>
      </section>
      {/* latest posts */}
      <LatestPosts />
      {/* <HomePageAnime /> */}
    </main>
);
}
