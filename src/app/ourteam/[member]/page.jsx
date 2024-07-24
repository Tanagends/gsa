import Members from './Members';
import Link from 'next/link';
import '@/components/latestPosts/LatestPosts';
import LatestPosts from '@/components/latestPosts/LatestPosts';

const page = ({params}) => {

  if(params.member in Members){
    const {id, imageExtention, name, surname, title, bio, socials} = Members[params.member]
    return (
          <div className="bg-white min-h-screen">
            <section className="flex flex-col items-center gap-2 p-4">
              <article className="w-[60%] rounded-lg overflow-hidden">
                <img src={`/assets/images/ourteam/${id}.${imageExtention}`} alt={`${name} ${surname}`} className="rounded-lg block w-full" />
              </article>
              <article className='flex flex-col items-start justify-start'>
                <h1 className="text-2xl font-bold">{name} {surname}</h1>
                <h1 className="text-lg font-semibold text-gray-600">{title}</h1>
              </article>
            </section>
      
            <h1 className="text-3xl font-bold mt-6 mb-2 ml-4 text-main-500">About {name}</h1>
            <section className="p-4">
              {bio.map((item, index) => (
                <p key={index} className="mb-2">{item}</p>
              ))}
            </section>
      
            <section className="p-4 divide-y-2 divide-main2">
              <h1 className="text-3xl font-bold mb-1 text-main-500">Socials</h1>
              <div className="flex gap-4 p-2">
                {socials.twitter && (
                  <Link href={socials.twitter} className="bi-twitter-x transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.email && (
                  <Link href={socials.email} className="bi-envelope transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.phone && (
                  <Link href={socials.phone} className="bi-whatsapp transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.phone && (
                  <Link href={`tel:${socials.phone}`} className="bi-telephone transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.linkedin && (
                  <Link href={socials.linkedin} className="bi-linkedin transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.facebook && (
                  <Link href={socials.facebook} className="bi-facebook transition-transform duration-100 hover:scale-110"></Link>
                )}
                {socials.instagram && (
                  <Link href={socials.instagram} className="bi-instagram transition-transform duration-100 hover:scale-110"></Link>
                )}
              </div>
            </section>
            <h1 className="text-3xl font-bold mt-6 mb-4 ml-4 text-main-500">My Posts</h1>
            <LatestPosts /> {/* Assuming this component renders your latest posts */}
          </div>
          )
  }
  else {
    return (
      <section className='h-screen flex items-center justify-center flex-col'>
        <i class="bi bi-exclamation-triangle text-orange-500 text-5xl block w-fit"></i>
        <h1 className="text-4xl font-bold my-10 w-fit text-red-600 title">{params.member} not found</h1>
      </section>
    )

  }
}

export default page
