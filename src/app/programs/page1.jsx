import Link from "next/link"
import LinksToSocials from './linksToSocials'

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | Leadership and Capacity Building',
  description: "Learn about Generational Stewards for Antimicrobials (GSA) programs and initiatives aimed at addressing antimicrobial resistance.",
  keywords: ["GSA programs", "antimicrobial resistance initiatives", "health advocacy programs", "stewardship initiatives"],
  url: "https://www.gsaglobal.co.zw/programs",  // Replace with actual URL
  canonical: "https://www.gsaglobal.co.zw/programs",  // Replace with actual URL
};


const Programs = () => {
  return (
    <main>
      <h1 className="text-5xl font-bold my-10 text-center text-main-400">Programs</h1>
      <section className="flex gap-2 w-fit mx-auto p-2 mb-4">
        <Link href='/programs'  className="link-1 block w-fit font-bold bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">1</Link>
        <Link href='/programs/healthclubs' className="link-2 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">2</Link>
        <Link href='/programs/' className="link-3 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">3</Link>
        <Link href='/programs/' className="link-4 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">4</Link>
      </section>
      <section className="program-container">
      <h2 className="">Leadership and Capacity Building</h2>
      <LinksToSocials />
      <p>
        The Generational Stewards for Antimicrobials (GSA) is actively implementing a comprehensive Leadership
        and Capacity Building Program on Antimicrobial Resistance (AMR) in primary and secondary schools across Zimbabwe.
        This program, aimed at empowering young minds to become champions in the fight against AMR, has been successfully
        launched at two prominent educational institutions: Alexander College and Kingdom Knowledge College.
      </p> 
      <p>
        The program&apos;s core objective is to equip students with the knowledge, skills, and confidence to become
        active agents of change in their communities. It leverages interactive workshops, engaging activities,
        and mentorship opportunities to foster a deep understanding of AMR and its implications.
      </p>
      <p>
        Engaging Young Minds: A Multifaceted Approach The program&apos;s curriculum is designed to be interactive and engaging, tailored to the age and learning styles of primary and secondary school students. Key elements of the program include: 
        Interactive Workshops:
      </p>
      <h3>Students participate in workshops covering a range of topics related to AMR, including: </h3>
      <ul>
        <li>The importance of responsible antimicrobial use</li>
        <li>The dangers of antibiotic resistance</li>
        <li>Strategies to prevent the spread of infections</li>
        <li>The role of hygiene and sanitation in combating AMR</li>
      </ul>
      <h3>Creative Activities: </h3>
      <p>
        The program utilizes creative activities like role-playing, storytelling, and art projects to reinforce
        learning and make the concepts of AMR relatable and memorable.
      </p>
      <h3>Community Engagement Projects: </h3>
      <p>Students engage in community-based projects, such as raising awareness campaigns, educational presentations,
         and hygiene promotion initiatives. This hands-on experience allows them to apply their knowledge directly in
         their communities and see the real-world impact of their efforts.
      </p>
      <h3>Mentorship Program: </h3>
      <p>Experienced mentors from the GSA and other relevant organizations provide guidance and support to students,
         fostering a sense of community and encouraging their ongoing commitment to AMR awareness and action.
      </p>
      <h3>Building a Foundation for Future Leaders By empowering students with knowledge and skills, the GSA&apos;s program aims to:</h3>
      <p>The successful launch of the program at Alexander College and Kingdom Knowledge College marks a significant milestone in the GSA&apos;s commitment to empowering youth in the fight against AMR. These schools serve as model examples of how the program can be implemented effectively, engaging students, fostering a sense of responsibility, and building a foundation for a healthier future. The GSA&apos;s Leadership and Capacity Building Program on AMR is a testament to the power of youth engagement in tackling global health challenges. By empowering young people with knowledge and skills, the program is laying the groundwork for a healthier and more sustainable future for all.</p>
  </section>
    </main>
  )
}

export default Programs
