import { createClient } from '@/prismicio';
import { revalidateTag } from "next/cache";
import EventsPageClient from './EventsPageClient';

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
  url: "https://www.gsaglobal.co.zw/media/events",
  canonical: "https://www.gsaglobal.co.zw/media/events",
};

export default async function LatestPosts() {
  const client = createClient();
  const events = await client.getAllByTag('events');
  revalidateTag("prismicTag");
  
  return <EventsPageClient events={events} />;
}
