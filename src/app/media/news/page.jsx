import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";

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
	url: "https://www.gsaglobal.co.zw/media/news",  // Replace with actual URL
	canonical: "https://www.gsaglobal.co.zw/media/news",  // Replace with actual URL
  };

export default async function LatestPosts () {
  const client = createClient();
  const news = await client.getAllByTag('news');
  revalidate("prismic");
  return ( 
	   <section>
	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">News</h1>
    <article className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
			{news.map((el, index) => (
				<Post
					key={`news-${index}`}
					image={el.data.story_image}
					title={el.data.title}
					content={el.data.story}
					author={el.data.author}
					date={el.data.publishing_time}
					link={el.url}
				/>
			))}
			</article>
	    </section>
  	);
}
