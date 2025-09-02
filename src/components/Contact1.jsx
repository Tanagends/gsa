
import Link from "next/link"

const Contact = ({name, link, icon}) => {
  return (
  <Link
    target="_blank"
    href={link}
    className={`${icon} p-2 group flex justify-center rounded-md drop-shadow-x text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 w-fit`}
  >
    <span className="w-5 h-5 pl-[1px]">
        <span className={`bi bi-${icon}`}></span>
    </span>
    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700">
      {name}
    </span>
  </Link>
  )
}

export default Contact
