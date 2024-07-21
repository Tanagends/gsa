import Post from '@/components/latestPosts/Post';
import { createClient } from '@/prismicio';

const fakePost = {
    image:'/assets/images/banner.png',
    alt:'chakadaro chakadaro',
    title:'A very long title must be here so I\'m just mumbling words to get it done',
    content:'Cannot possibly, deliberatley mumble a whole paragraph. However since'+
    ' I have no other option but to just talk about talking about mumbling...Wait a minute this could' +
    ' actually be an infinite loop of taling about talking about talking about talking about ..... mumbling' +
    ' The question is, can that actualy be classified as mumbling',
    author:'The Mumbler',
    date:'04 July 2024',
    link:'#'
  }

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
  console.log(articles_arr[0]);
  return ( 
	   <section>
			<h1>Latest Posts</h1>
			<article className='flex overflow-x-scroll p-3 flex-col gap-2'>
			{articles_arr.map((el) => (
				<Post
					image={el.data.story_image}
					title={el.data.title}
					content={el.data.story}
					author={el.data.author}
					date={el.data.publishing_time}
					link={el.url}
				/>
			))}
			{articles_arr.map((el) => (
				<Post
					image={el.data.story_image}
					title={el.data.title}
					content={el.data.story}
					author={el.data.author}
					date={el.data.publishing_time}
					link={el.url}
				/>
			))}
			{articles_arr.map((el) => (
				<Post
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
