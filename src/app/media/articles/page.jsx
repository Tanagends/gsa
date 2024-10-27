import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";

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
	url: "https://www.gsaglobal.co.zw/media/articles",  // Replace with actual URL
	canonical: "https://www.gsaglobal.co.zw/media/articles",  // Replace with actual URL
  };
  
export default async function LatestPosts () {
  const client = createClient();
  const articles_arr = await client.getAllByTag('articles');
  revalidateTag("prismic");
  return ( 
	   <section>
	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Articles</h1>
    <article className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
			{articles_arr.map((el, index) => (
				<Post
					key={`article-${index}`}
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
