import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";
import ArticlesPageClient from './ArticlesPageClient';

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Articles and Insights by Team Members',
  keywords: [
    "AMR articles",
    "antimicrobial resistance insights",
    "team articles",
    "AMR education",
    "global health articles",
    "non-profit Zimbabwe",
    "AMR innovation",
    "Generational Stewards for Antimicrobials articles",
    "public health education",
    "health advocacy",
    "antimicrobial stewardship writings",
    "team contributions",
  ],
  url: "https://www.gsaglobal.co.zw/media/articles",
  canonical: "https://www.gsaglobal.co.zw/media/articles",
};

export default async function LatestPosts() {
  const client = createClient();
  const articles_arr = await client.getAllByTag('articles');
  revalidateTag("prismic");

  return <ArticlesPageClient articles={articles_arr} />;
}
