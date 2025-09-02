import Members from "./[member]/Members"
import MemberCard from '@/app/ourteam/MemberCard'
import { revalidateTag } from "next/cache"

const metaata = {
  title: "Meet the GSA Team: Dedicated to Combating Antimicrobial Resistance",
  keywords: ["GSA team", "antimicrobial resistance experts", "health advocacy team", "stewardship leaders"],
  author: "Generational Stewards for Antimicrobials (GSA)"
}
export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Meet the GSA Team',
  description: "Get to know the passionate team behind Generational Stewards for Antimicrobials (GSA). Learn about our members' expertise and commitment to addressing antimicrobial resistance.",
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
  url: "https://www.gsaglobal.co.zw/ourteam",  // Replace with actual URL
  canonical: "https://www.gsaglobal.co.zw/ourteam",  // Replace with actual URL
};

const page = () => {
  let keys = []
  for(let key in Members){
    keys.push(key)
  }
  revalidateTag("prismic");
  return (
    <section className="flex flex-col justify-center items-center gap-2 p-2 sm:flex-row flex-wrap sm:items-start md:h-screen">
            <h1 className="font-bold text-main-500 text-2xl sm:text-3xl text-center w-full m-4">Our Team</h1>
            {keys.map((item)=>{
              let person = Members[item]
              return (
                <MemberCard key={person.id} {...person}/>
              )
            })}
    </section>
  )
}
export default page
