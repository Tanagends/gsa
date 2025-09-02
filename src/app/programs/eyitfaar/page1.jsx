import Link from "next/link"
import LinksToSocials from "../linksToSocials"

export const metadata = {
  title: 'Generational Stewards for Antimicrobials | A Global X Space Discussion Series',
  description: "Learn about Generational Stewards for Antimicrobials (GSA) programs and initiatives aimed at addressing antimicrobial resistance.",
  keywords: ["GSA programs", "antimicrobial resistance initiatives", "health advocacy programs", "stewardship initiatives"],
  url: "https://www.gsaglobal.co.zw/programs/eyitfaar",  // Replace with actual URL
  canonical: "https://www.gsaglobal.co.zw/programs/eyitfaar",  // Replace with actual URL
};
const Programs = () => {
  return (
    <main>
      <h1 className="text-5xl font-bold my-10 text-center text-main-400">Programs</h1>
      <section className="flex gap-2 w-fit mx-auto p-2 mb-4">
        <Link href='/programs'  className="link-1 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">1</Link>
        <Link href='/programs/healthclubs' className="link-2 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">2</Link>
        <Link href='/programs/twarawe' className="link-3 block w-fit font-bold bg-slate-300 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">3</Link>
        <Link href='/programs/eyitfaar' className="link-4 block w-fit font-bold bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-500 active:scale-95 transition-transform duration-300 ease-linear">4</Link>
      </section>
      <section className="program-container">
        <h2>Engaging Youths in the Fight Against Antimicrobial Resistance: A Global X Space Discussion Series - Ongoing Activity</h2>
        <LinksToSocials />
        <p><b>Project Organizer:</b> Generational Stewards for Antimicrobials</p>
        <p><b>Project Format:</b> Bi-weekly X Space Discussion Series </p>
        <p><b>Project Focus:</b> One Health Approach to equipping young people with knowledge about AMR and fostering collaboration between generations. </p>
        <h3>Ongoing Activity Summary: </h3>
        <p>The Generational Stewards for Antimicrobials host bi-weekly X Space discussions focusing on engaging youths in the fight against antimicrobial resistance (AMR). The series adopts a One Health approach, encompassing the interconnectedness of human, animal, and environmental health. Each session features a diverse panel of experts from various sectors and disciplines within the global health sphere, including researchers, practitioners, advocates, and policy-makers. To foster intergenerational collaboration, each X Space session includes a mix of young participants and experienced professionals. This mix encourages knowledge sharing, mentorship, and the development of innovative solutions to address AMR. </p>
        <h3>Key Activities:</h3>
        <h4>Session Planning:</h4>
        <ul>
            <li>Identifying relevant topics and speakers based on current AMR trends and research. </li>
            <li>Collaborating with panelists to develop engaging discussion points and call-to-action messages.</li>
            <li>Promoting each session through social media and online channels. </li>
        </ul>
        <h4>X Space Discussion Series: </h4>
        <ul>
            <li>Hosting bi-weekly live sessions on the X Space platform. </li>
            <li>Moderating the discussions to ensure all voices are heard and relevant questions are addressed.</li>
            <li>Capturing key takeaways, resources, and action points from each session.</li>
        </ul>
        <h4>Post-Session Engagement: </h4>
        <ul>
            <li>Sharing session recordings and resources on the Generational Stewards for Antimicrobials website and social media platforms. </li>
            <li>Facilitating ongoing dialogue and collaboration through online forums, networking groups, and mentorship programs.</li>
            <li>Connecting participants with relevant organizations and initiatives working on AMR.</li>
        </ul>
        <h4>Project Impact:</h4>
        <ul>
            <li>Raising awareness of AMR among youth and broader audiences.</li>
            <li>Equipping young people with the knowledge and skills to become active participants in fighting AMR.</li>
            <li>Fostering intergenerational dialogue and collaboration to address AMR.</li>
            <li>Identifying and supporting emerging AMR solutions and innovations.</li>
        </ul>
        <h4>Future Directions:</h4>
        <ul>
            <li>Expanding the reach of the X Space series to engage more youth globally.</li>
            <li>Developing a comprehensive resource library of AMR information and action guides. </li>
            <li>Creating mentorship programs to support young leaders working on AMR.</li>
            <li>Collaborating with other organizations to amplify the impact of the project.</li>
        </ul>
    <p>This ongoing activity exemplifies the Generational Stewards for Antimicrobials&apos; commitment to engaging youth in the fight against AMR, building a global community of action, and ensuring a healthier future for all.</p>
    </section>
    </main>
  )
}

export default Programs
