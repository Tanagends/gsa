import Members from "./[member]/Members"
import TeamPageClient from './TeamPageClient'
import { revalidateTag } from "next/cache"

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Meet the GSA Team',
  description: "Get to know the passionate team behind Generational Stewards for Antimicrobials (GSA). Learn about our members&apos; expertise and commitment to addressing antimicrobial resistance.",
  keywords: [
    "AMR articles",
    "antimicrobial resistance insights",
    "team articles",
    "AMR education",
    "Generational Stewards for Antimicrobials team",
    "Generational Stewards for Antimicrobials members",
    "team contributions",
    "GSA team",
    "antimicrobial resistance experts",
    "health advocacy team",
    "stewardship leaders"
  ],
  url: "https://www.gsaglobal.co.zw/ourteam",
  canonical: "https://www.gsaglobal.co.zw/ourteam",
};

const page = () => {
  let teamMembers = []
  for(let key in Members){
    teamMembers.push(Members[key])
  }
  revalidateTag("prismic");
  
  return <TeamPageClient teamMembers={teamMembers} />
}

export default page
