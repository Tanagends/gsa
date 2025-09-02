import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";
import ToolkitPageClient from './ToolkitPageClient';
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
  url: "https://www.gsaglobal.co.zw/toolkit",
  canonical: "https://www.gsaglobal.co.zw/toolkit",
};

async function Toolkit() {
  const client = createClient();
  const toolkits = await client.getAllByType('toolkit');
  revalidateTag("prismic");
  
  // Process data for client component
  const processedToolkits = toolkits.map(el => ({
    id: el.id,
    title: el.data.title,
    description: el.data.description,
    author: el.data.author,
    publishingTime: prismic.asDate(el.data.publishing_time).toISOString(),
    publishingTimeFormatted: prismic.asDate(el.data.publishing_time).toLocaleString(),
    pdfLink: el.data.pdf_link
  }));
  
  return <ToolkitPageClient toolkits={processedToolkits} />;
}

export default Toolkit;
