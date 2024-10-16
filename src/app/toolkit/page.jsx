import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | AMR Educational Toolkit',
  description: "Download expert-authored PDFs and resources from Generational Stewards for Antimicrobials (GSA) to help address antimicrobial resistance.",
  keywords: [
    "AMR toolkit",
    "antimicrobial resistance resources",
    "AMR education materials",
    "PDF resources",
    "teaching AMR",
    "AMR advocacy tools",
    "non-profit Zimbabwe",
    "global health education",
    "antimicrobial stewardship",
    "Generational Stewards for Antimicrobials toolkit",
    "AMR training resources",
    "AMR teaching materials",
  ],
  url: "https://www.gsaglobal.co.zw/toolkit",  // Replace with actual URL
  canonical: "https://www.gsaglobal.co.zw/toolkit",  // Replace with actual URL
};


async function Toolkit() {
  const client = createClient();
  const toolkits = await client.getAllByType('toolkit');
  return (
	<main>
	<h1 className="text-4xl font-bold my-4 text-center text-main-400 w-full flex-shrink-0">Toolkit</h1>
  <p className='p-2 text-sm font-light sm:text-center sm:text-lg'>
  This toolkit is designed for educators and professionals committed to advancing knowledge on antimicrobials. It offers comprehensive resources in the form of downloadable PDF files, enabling you to effectively share and utilize the materials as needed.
</p>
    <section className="bg-white flex flex-col items-center sm:flex-row flex-wrap sm:justify-center sm:items-start gap-2 py-2">
{/*       {toolkits.map((el, index) => (
        <article key={index} className="w-[320px] border-2 border-main-500 rounded-md p-2 flex-shrink-0 group slide-in-top">
			<div className='flex gap-2'>
          	<h1 className="text-2xl font-bold">{el.data.title}</h1>
			<span className='text-red-600 text-xl block'><i className="bi bi-file-earmark-pdf"></i></span>
			</div>
          <p className="mt-2">{el.data.description}</p>
          <aside className="mt-4 text-sm text-gray-600">
            Published by {el.data.author} on{' '}
            <time dateTime={(prismic.asDate(el.data.publishing_time)).toISOString()}>
              {prismic.asDate(el.data.publishing_time).toLocaleString()}
            </time>
          </aside>
		  <PrismicNextLink field={el.data.pdf_link}
    className="bg-white w-10 h-10 flex justify-center items-center rounded-lg hover:text-blue-600 hover:translate-y-1 hover:duration-300 ml-auto"
	target="_blank"
	title='download'
              	rel="noopener noreferrer">
					<div class="group relative">
    <svg
      class="w-6 h-6"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
	</div>
        </PrismicNextLink>
        </article>
      ))} */}
    </section>
	</main>
  );
}

export default Toolkit;
