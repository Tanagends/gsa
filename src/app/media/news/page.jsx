import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";
import NewsPageClient from './NewsPageClient';

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Latest News on Antimicrobial Resistance',
  description: "Stay informed about the latest news, updates, and breakthroughs on antimicrobial resistance from Generational Stewards for Antimicrobials (GSA). Read our news articles and press releases.",
  keywords: [
    "AMR articles",
    "antimicrobial resistance insights",
    "AMR education",
    "global health news",
    "non-profit Zimbabwe",
    "AMR innovation",
    "Generational Stewards for Antimicrobials news",
    "public health news",
    "health advocacy",
    "antimicrobial stewardship writings",
    "GSA updates",
    "health advocacy news",
    "stewardship news"
  ],
  url: "https://www.gsaglobal.co.zw/media/news",
  canonical: "https://www.gsaglobal.co.zw/media/news",
};

export default async function LatestPosts() {
  const client = createClient();
  const news = await client.getAllByTag('news');
  revalidateTag("prismic");
  
  return <NewsPageClient news={news} />;
}
