import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';

export default async function LatestPosts () {
  const client = createClient();
  const articles_arr = await client.getAllByType("article", {
	  limit: 10,
  	  orderings: [
    	  {
      	    field: 'my.article.publishing_time',
      	    direction: 'desc',
    	  },
  	],
  });
  return ( 
	   <section>
			<h1 className='section-heading slide-in-top'>Latest Posts</h1>
			<article className='flex overflow-x-scroll p-3 flex-col gap-2 sm:flex-row flex-wrap sm:justify-center'>
			{articles_arr.map((el, index) => (
				<Post
					image={el.data.story_image}
					title={el.data.title}
					content={el.data.story}
					author={el.data.author}
					date={el.data.publishing_time}
					link={el.url}
					type={el.type}
					key={"post-latest-"+index}
				/>
			))}
			</article>
	    </section>
  	);
}
