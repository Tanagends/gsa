import Members from './Members';
import MemberPageClient from './MemberPageClient';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { revalidateTag } from "next/cache";

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Team Member',
  description: 'A member at Generational Stewards for Antimicrobials (GSA). Read their bio and articles.',
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
  if(params.member in Members) {
    const memberData = Members[params.member];
    const client = createClient();
    const article = await client.get({
      filters: [
        prismic.filter.at('my.article.author', `${memberData.name} ${memberData.surname}`),
      ],
    });
    const articles = article.results;
    revalidateTag("prismic");
    
    return <MemberPageClient member={memberData} articles={articles} />
  } else {
    return <MemberNotFound memberName={params.member} />
  }
}

function MemberNotFound({ memberName }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-main-100 to-white">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 
                      rounded-full mb-6 animate-pulse">
          <i className="bi bi-exclamation-triangle text-white text-5xl"></i>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-main-800">
          Member Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          What kind of Microbial is <span className="text-orange-500 font-bold">{memberName}</span>?
        </p>
        <a href="/ourteam" 
           className="inline-flex items-center gap-2 bg-gradient-to-r from-main-500 to-main-700 
                    text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform">
          <span>Back to Team</span>
        </a>
      </div>
    </section>
  );
}

export default page;
