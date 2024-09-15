import Members from './Members';
import Link from 'next/link';
import '@/components/latestPosts/LatestPosts';
import MemberAnime from './MemberAnime';
import Post from '@/components/latestPosts/Post';
import Image from 'next/image';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';

  export const metadata = {
    title: 'Generational Stewards for Antimicrobials | Team Member',
    description: `A member at Generational Stewards for Antimicrobials (GSA). Read their bio and articles.`,
    keywords: [
      "AMR articles",
      "antimicrobial resistance insights",
      "team articles",
      "AMR education",
      "global health articles",
      "non-profit Zimbabwe",
      "AMR innovation",
      "Generational Stewards for Antimicrobials team members",
      "public health education",
      "health teams",
      "antimicrobial stewardship team",
      "team contributions",
  ],
};


async function page({params}) {

  if(params.member in Members){
    const {id, imageExtention, name, surname, title, bio, socials} = Members[params.member];
    const client = createClient();
    const article = await client.get({
      filters: [
      prismic.filter.at('my.article.author', `${name} ${surname}`),
      ],
    });
    const articles = article.results;
    return (
          <div className="bg-white min-h-screen">
            <section className="flex flex-col items-center gap-2 p-4 md:flex-row md:justify-center">
              <article className="w-[60%] md:w-[40%] rounded-lg overflow-hidden">
                <Image src={`/assets/images/ourteam/${id}.${imageExtention}`} alt={`${name} ${surname}`} className="rounded-lg block w-full member-image" width={1000} height={1000}/>
              </article>
              <article className='flex flex-col items-start justify-start'>
                <h1 className="text-2xl font-bold hero-text-1">{name} {surname}</h1>
                <h1 className="text-lg font-semibold text-gray-600 hero-text-2">{title}</h1>
              </article>
            </section>
            <h1 className="text-3xl font-bold mt-6 mb-2 ml-4 text-main-500 md:w-[70%] md:mx-auto hero-text-3">About {name}</h1>
            <section className="p-4 md:w-[70%] md:mx-auto">
              {bio.map((item, index) => (
                <p key={index} className="mb-2">{item}</p>
              ))}
            </section>
      
            <section className="p-4 divide-y-8 divide-main2">
              <h1 className="text-3xl font-bold mb-1 text-main-500">Socials</h1>
              <div className="flex gap-4 p-2 text-2xl">
                {socials.twitter && (
                  <Link href={socials.twitter} className="bi-twitter-x transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.email && (
                  <Link href={`mailto:${socials.email}`} className="bi-envelope transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.phone && (
                  <Link href={`https://wa.me/${socials.phone.substring(1)}`} className="bi-whatsapp transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.phone && (
                  <Link href={`tel:${socials.phone}`} className="bi-telephone transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.linkedin && (
                  <Link href={socials.linkedin} className="bi-linkedin transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.facebook && (
                  <Link href={socials.facebook} className="bi-facebook transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.instagram && (
                  <Link href={socials.instagram} className="bi-instagram transition-transform duration-100 hover:scale-110"></Link>
                )}
              </div>
            </section>
            <h1 className="text-3xl font-bold mt-6 mb-4 ml-4 text-main-500">My Posts</h1>
            <section className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
            { /* For their posts mujaya. use the Post component*/}
            {articles.map((el, index) => (
              <Post
                image={el.data.story_image}
                title={el.data.title}
                content={el.data.story}
                author={el.data.author}
                date={el.data.publishing_time}
                link={el.url}
                type={el.type}
                key={"personal-articles-"+index}
              />
            ))}
            </section>
            <MemberAnime />
          </div>
          )
  }
  else {
    return (
      <section className='h-screen flex items-center justify-center flex-col'>
        <i class="bi bi-exclamation-triangle text-orange-500 text-5xl block w-fit"></i>
        <h1 className="text-4xl font-bold my-10 w-fit text-red-600 title">What kind of Microbial is {params.member}?</h1>
      </section>
    )
  }
}

export default page
