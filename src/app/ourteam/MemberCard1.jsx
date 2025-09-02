import Link from "next/link"
import Image from "next/image"

const MemberCard = ({name, surname, title, imageExtention, id, socials}) => {
  return (
<section class="flex items-center p-3 w-72 h-28 bg-white rounded-md shadow-lg slide-in-left">
  <Link class="flex justify-center items-center w-14 h-14 rounded-full hover:cursor-pointer hover:scale-110 duration-300 overflow-hidden flex-shrink-0" href={`/ourteam/${id}`}>
    <Image src={`/assets/images/ourteam/${id}.${imageExtention}`} alt={name+" "+surname} className='rounded-full block flex-shrink-0' width={100} height={100}/>
  </Link>
  <article class="block border-l border-gray-300 m-3">
    <div class="pl-3">
      <h3 class="text-gray-600 font-semibold text-sm">{name+" "+surname}</h3>
      <h3 class="bg-clip-text text-transparent bg-gradient-to-l from-main-500 to-[#27272A] text-md font-bold">{title}</h3>
    </div>
    <div class="flex gap-2 pt-2 pl-3">
      {socials.twitter && (<Link href={socials.twitter} className="bi-twitter-x transition-transform duration-100 hover:scale-110"></Link>)}
      {socials.email && (<Link href={`mailto:${socials.email}`} className="bi-envelope transition-transform duration-100 hover:scale-110"></Link>)}
      {socials.phone && (<Link href={`https://wa.me/${socials.phone.substring(1)}`} className="bi-whatsapp transition-transform duration-100 hover:scale-110"></Link>)}
      {socials.phone && (<Link href={`tel:${socials.phone}`} className="bi-telephone transition-transform duration-100 hover:scale-110"></Link>)}
      {socials.linkedin && (<Link href={socials.linkedin} className="bi-linkedin transition-transform duration-100 hover:scale-110"></Link>)}
      {socials.facebook && (<Link href={socials.facebook} className="bi-facebook transition-transform duration-100 hover:scale-110"></Link>)}
      {socials.instagram && (<Link href={socials.instagram} className="bi-instagram transition-transform duration-100 hover:scale-110"></Link>)}
    </div>
  </article>
</section>
  )
}

export default MemberCard
