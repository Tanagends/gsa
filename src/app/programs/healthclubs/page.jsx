import Link from "next/link"
import LinksToSocials from "../linksToSocials"

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Program 3',
  description: "Learn about Generational Stewards for Antimicrobials (GSA) programs and initiatives aimed at addressing antimicrobial resistance.",
  keywords: ["GSA programs", "antimicrobial resistance initiatives", "health advocacy programs", "stewardship initiatives"],
  url: "https://www.gsaglobal.co.zw/programs/healthclubs",  // Replace with actual URL
  canonical: "https://www.gsaglobal.co.zw/programs/healthclubs",  // Replace with actual URL
};

const Programs = () => {
  return (
    <>
      <h1 className="text-5xl font-bold my-10 text-center text-main-400">Programs</h1>
      <section className="flex gap-2 w-fit mx-auto p-2 mb-4">
        <Link href='/programs'  className="link-1 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">1</Link>
        <Link href='/programs/healthclubs' className="link-2 block w-fit font-bold bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">2</Link>
        <Link href='/programs/twarawe' className="link-3 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">3</Link>
        <Link href='/programs/eyitfaar' className="link-4 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">4</Link>
      </section>
      <section className="program-container">
      <h2> One Health Clubs: A Youth-Led Movement for Antimicrobial Resistance</h2>
      <LinksToSocials />
      <p>
        The Generational Stewards for Antimicrobials (GSA) is spearheading a transformative
        initiative to establish One Health Clubs in schools across Zimbabwe, spanning primary, secondary,
         and tertiary levels. This ongoing project aims to empower young people from diverse disciplines to
         become active agents in combating antimicrobial resistance (AMR), creating a multi-sectoral force for change.
      </p>
    <h3>The One Health Imperative: A Holistic Approach </h3>
    <p>The GSA recognizes that AMR is a complex global health challenge that cannot be effectively tackled
        in isolation. A One Health approach, which recognizes the interconnectedness of human, animal,
         and environmental health, is essential. By uniting youth who are passionate about various global 
         health concerns, including mental health, HIV/AIDS, pandemic preparedness, and neglected tropical 
         diseases, the GSA aims to foster collaboration and prevent duplication of effort.
    </p>
    <h3>One Health Clubs: Platforms for Collaboration and Innovation </h3>
    <p>One Health Clubs will serve as dynamic platforms for information sharing, knowledge exchange, 
        and the development of synergistic solutions. These clubs will provide a space for:
    </p>
    <h3>&bull; Cross-Disciplinary Learning: </h3>
    <p>Young people from diverse backgrounds, including biology, medicine, veterinary science, agriculture, environmental science, and public health, will come together to learn from each other and gain a comprehensive understanding of AMR and its interconnectedness with other health challenges. </p>
    <h3>&bull; Data Sharing and Knowledge Building:</h3>
    <p>One Health Clubs will encourage the sharing of data, research findings, and experiences related to antimicrobial use and resistance across different sectors. This will help to build a more holistic picture of the AMR landscape and identify potential gaps in knowledge or action. </p>
    <h3>&bull; Developing Synergistic Solutions:</h3>
    <p>Through open dialogue and collaborative problem-solving, young people will be empowered to develop innovative solutions that address the multi-faceted nature of AMR. This could include community-based interventions, public awareness campaigns, research projects, advocacy efforts, and policy recommendations. Empowering Youth as Agents of Change The GSA envisions One Health Clubs as hubs of innovation and action, where young people are empowered to: </p>
    <h3>&bull; Conduct Research:</h3>
    <p>Clubs will encourage young people to engage in research projects related to AMR, focusing on areas such as surveillance, antimicrobial use patterns, resistance mechanisms, and the development of alternative approaches to infection control. </p>
    <h3>&bull; Raise Awareness: </h3>
    <p>Through public speaking events, educational campaigns, and social media initiatives, young people will raise awareness about AMR in their communities, encouraging responsible antimicrobial use and preventive measures.</p>
    <h3>&bull; Advocate for Policy Changes: </h3>
    <p>One Health Clubs will provide a platform for youth to advocate for policy changes that promote responsible antimicrobial use, improve surveillance, and strengthen healthcare systems. </p>
    <h3>&bull; Build a Sustainable Movement:</h3>
    <p>By creating a network of engaged young people across different schools, the GSA aims to establish a sustainable youth-led movement for AMR awareness and action.</p>
    <h3>A Healthier Future for All: The GSA Vision</h3>
    <p>Through the establishment of One Health Clubs, the GSA aims to embed a One Health perspective in future generations, leading to a healthier and more sustainable future for all. These clubs will cultivate a generation of young people who are knowledgeable, passionate, and committed to tackling the global challenge of antimicrobial resistance.</p>
    </section>
    </>
  )
}

export default Programs
