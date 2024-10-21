import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";

export const metadata = {
	title: 'Generational Stewards for Antimicrobials | Event Highlights and Outcomes',
	keywords: [
	  "antimicrobial resistance events",
	  "AMR awareness",
	  "AMR education",
	  "health events Zimbabwe",
	  "non-profit events",
	  "AMR advocacy events",
	  "global health initiatives",
	  "Generational Stewards for Antimicrobials events",
	  "event outcomes",
	  "public health articles",
	  "health conferences Zimbabwe",
	  "AMR workshops",
	],
	url: "https://www.gsaglobal.co.zw/media/events",  // Replace with actual URL
	canonical: "https://www.gsaglobal.co.zw/media/events",  // Replace with actual URL
  };  

export default async function LatestPosts () {
  const client = createClient();
  const events = await client.getAllByTag('events');
  revalidateTag("prismicTag");
  return ( 
	   <section>
	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Events</h1>
    <article className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
			{events.map((el, index) => (
				<Post
					key={`event-${index}`}
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
