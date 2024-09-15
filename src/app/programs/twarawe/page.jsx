import Link from "next/link"
import LinksToSocials from "../linksToSocials"

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Program 4',
  description: "Learn about Generational Stewards for Antimicrobials (GSA) programs and initiatives aimed at addressing antimicrobial resistance.",
  keywords: ["GSA programs", "antimicrobial resistance initiatives", "health advocacy programs", "stewardship initiatives"],
  url: "https://www.gsaglobal.co.zw/programs/twarawe",  // Replace with actual URL
  canonical: "https://www.gsaglobal.co.zw/programs/twarawe",  // Replace with actual URL
};

const Programs = () => {
  return (
    <>
      <h1 className="text-5xl font-bold my-10 text-center text-main-400">Programs</h1>
      <section className="flex gap-2 w-fit mx-auto p-2 mb-4">
        <Link href='/programs'  className="link-1 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">1</Link>
        <Link href='/programs/healthclubs' className="link-2 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">2</Link>
        <Link href='/programs/twarawe' className="link-3 block w-fit font-bold bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">3</Link>
        <Link href='/programs/eyitfaar' className="link-4 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">4</Link>
      </section>
      <section className="program-container">
        <h2>The World Antimicrobial Resistance Awareness Week Engagement</h2>
        <LinksToSocials />
        <p>Leading Youth Engagement in World Antimicrobial Resistance Awareness Week, Zimbabwe, The Generational Stewards for Antimicrobials (GSA) has taken a leading role in coordinating youth engagement during World Antimicrobial Resistance Awareness Week (WAAW) in Zimbabwe, successfully mobilizing young people to raise awareness and advocate for action against AMR.</p>
        <h3>2022 Activities:</h3>
        <h4>&bull; Radio Sensitization:</h4>
        <p>GSA coordinated a series of AMR sensitization spots aired on Star FM, one of Zimbabwe&apos;s most popular radio stations. This effectively reached a broad audience and highlighted the importance of AMR awareness. </p>
        <h4>&bull; AMR Seminar:</h4>
        <p>GSA organized an informative seminar for young people, providing insights into AMR, its consequences, and potential solutions. </p>
        <h4>&bull; Go Blue Campaign: </h4>
        <p>GSA actively participated in the global &quot;Go Blue&quot; campaign, showcasing solidarity and raising awareness about AMR. </p>
        <h4>&bull; TikTok Video Contest: </h4>
        <p>GSA engaged tertiary schools in a creative TikTok video contest challenging participants to create engaging content on AMR sensitization. This innovative approach successfully reached a young audience, fostering creativity and understanding of the issue.</p>
        <h3>2023 Activities</h3>
        <p>Building on the success of 2022, GSA expanded their efforts and collaborated with various stakeholders, including the Government of Zimbabwe, the World Organisation for Animal Health (WOAH), World Health Organization (WHO), Food and Agriculture Organization (FAO), and United Nations Environment Programme (UNEP).</p>
        <h4>&bull; Soccer Tournament:</h4>
        <p>GSA organized a soccer tournament for the top 10 secondary schools in Harare, using the platform to raise awareness about AMR among youth and promote healthy competition.</p>
        <h4>&bull; AMR Debate: </h4>
        <p>GSA spearheaded an international AMR youth debate, bringing together young participants from Zambia, Zimbabwe, and Senegal. This facilitated cross-border dialogue and the sharing of ideas for tackling AMR.</p>
        <h4>&bull; Walkathon: </h4>
        <p>GSA organized a walkathon involving over 200 young people across Harare&aposs Central Business District. This visible action served to raise awareness about AMR and promote community engagement.</p>
        <h4>&bull; Impact & Significance: </h4>
        <p>Through these impactful activities, GSA has successfully mobilized young people in Zimbabwe, raising awareness about AMR, building partnerships, and fostering collaboration. These initiatives demonstrate GSA&apos;s commitment to empowering youth as active agents in the fight against antimicrobial resistance. By engaging with diverse stakeholders and utilizing innovative strategies, GSA has made significant contributions to promoting awareness, action, and ultimately, a healthier future for all.</p>
        <h3>Future Plans: </h3>
        <p>GSA plans to continue leading youth engagement in future WAAW celebrations, expanding their reach, and incorporating new initiatives to further amplify the fight against AMR. We aim to build upon their existing collaborations and work towards building a sustainable youth-led movement for AMR awareness and action in Zimbabwe and beyond.</p>
    </section>
    </>
  )
}

export default Programs
