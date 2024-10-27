//import Gallery from "./Gallery";
import { createClient } from '@/prismicio';
import Link from 'next/link';
import Gallery from './Gallery';
import { revalidateTag } from "next/cache";

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Media and Activity Gallery',
  keywords: [
    "antimicrobial resistance",
    "AMR advocacy",
    "global health activities",
    "media gallery",
    "non-profit Zimbabwe",
    "AMR education",
    "health initiatives Zimbabwe",
    "Generational Stewards for Antimicrobials media",
    "community outreach",
    "health innovation",
    "Zimbabwe health programs",
    "AMR awareness events",
  ],
  url: "https://www.gsaglobal.co.zw/media",  // Replace with actual URL
  canonical: "https://www.gsaglobal.co.zw/media",  // Replace with actual URL
};


async function Media () {
	const client = createClient();
	const images = await client.getAllByType('image_gallery');
	revalidateTag("prismic");
return (
  <>
  	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Media</h1>
      {/* links to pages for events, news, articles */}
      <section className='flex gap-2 justify-center'>
          <Link className='btn-main' href="/media/events">Events</Link>
          <Link className='btn-main' href="media/articles">Article</Link>
          <Link className='btn-main' href="media/news">News</Link>
      </section>
      <h1 className='section-heading slide-in-top'>Gallery</h1>      
      {/* the gallery Slide here down here */}
      <Gallery images={images} />
  </>
 )
}
export default Media
