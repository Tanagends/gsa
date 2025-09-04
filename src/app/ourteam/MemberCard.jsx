"use client";
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { 
  HiEnvelope, HiPhone, HiGlobeAlt
} from 'react-icons/hi2'

const MemberCard = ({name, surname, title, imageExtention, id, socials, department}) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header with Image */}
      <div className="relative h-64 bg-gradient-to-br from-main-500 to-main-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23FFCC00%22%20fill-opacity=%220.5%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        {/* Member Image */}
        <Link href={`/ourteam/${id}`} className="block relative h-full group/image">
          <div className="absolute inset-0 flex items-center justify-center">
            {!imageError ? (
              <Image 
                src={`/assets/images/ourteam/${id}.${imageExtention}`} 
                alt={`${name} ${surname}`}
                width={200}
                height={200}
                className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-xl 
                         group-hover/image:scale-110 transition-transform duration-300"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#FFCC00] to-yellow-500 
                            flex items-center justify-center text-main-900 text-5xl font-bold 
                            border-4 border-white shadow-xl">
                {name?.[0]}{surname?.[0]}
              </div>
            )}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-main-900/80 to-transparent opacity-0 
                        group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <span className="text-white font-semibold bg-[#FFCC00] text-main-900 px-4 py-2 rounded-full text-sm">
              View Profile
            </span>
          </div>
        </Link>

        {/* Department Badge */}
        {department && (
          <div className="absolute top-4 right-4 bg-[#FFCC00] text-main-900 px-3 py-1 rounded-full 
                        text-xs font-bold shadow-lg">
            {department}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6">
        {/* Name and Title */}
        <Link href={`/ourteam/${id}`} className="block mb-4 group/name">
          <h3 className="text-xl font-bold text-main-800 group-hover/name:text-main-600 transition-colors">
            {name} {surname}
          </h3>
          <p className="text-sm font-medium bg-gradient-to-r from-main-500 to-main-700 bg-clip-text text-transparent">
            {title}
          </p>
        </Link>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          {socials?.email && (
            <Link 
              href={`mailto:${socials.email}`}
              className="group/icon w-10 h-10 bg-gray-100 hover:bg-main-100 rounded-lg flex items-center 
                       justify-center transition-all duration-300 hover:scale-110"
              title="Email"
            >
              <HiEnvelope className="text-gray-600 group-hover/icon:text-main-600" />
            </Link>
          )}
          
          {socials?.phone && (
            <>
              <Link 
                href={`https://wa.me/${socials.phone.substring(1)}`}
                className="group/icon w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-lg flex items-center 
                         justify-center transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp text-gray-600 group-hover/icon:text-green-600"></i>
              </Link>
              <Link 
                href={`tel:${socials.phone}`}
                className="group/icon w-10 h-10 bg-gray-100 hover:bg-main-100 rounded-lg flex items-center 
                         justify-center transition-all duration-300 hover:scale-110"
                title="Phone"
              >
                <HiPhone className="text-gray-600 group-hover/icon:text-main-600" />
              </Link>
            </>
          )}
          
          {socials?.linkedin && (
            <Link 
              href={socials.linkedin}
              className="group/icon w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center 
                       justify-center transition-all duration-300 hover:scale-110"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin text-gray-600 group-hover/icon:text-blue-600"></i>
            </Link>
          )}
          
          {socials?.twitter && (
            <Link 
              href={socials.twitter}
              className="group/icon w-10 h-10 bg-gray-100 hover:bg-sky-100 rounded-lg flex items-center 
                       justify-center transition-all duration-300 hover:scale-110"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter-x text-gray-600 group-hover/icon:text-sky-600"></i>
            </Link>
          )}
          
          {socials?.facebook && (
            <Link 
              href={socials.facebook}
              className="group/icon w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center 
                       justify-center transition-all duration-300 hover:scale-110"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook text-gray-600 group-hover/icon:text-blue-600"></i>
            </Link>
          )}
          
          {socials?.instagram && (
            <Link 
              href={socials.instagram}
              className="group/icon w-10 h-10 bg-gray-100 hover:bg-pink-100 rounded-lg flex items-center 
                       justify-center transition-all duration-300 hover:scale-110"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram text-gray-600 group-hover/icon:text-pink-600"></i>
            </Link>
          )}
          
          {
            socials?.website && (
              <Link 
                href={socials.website}
                className="group/icon w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center 
                         justify-center transition-all duration-300 hover:scale-110"
                title="Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-globe text-gray-600 group-hover/icon:text-blue-600"></i>
              </Link>
            )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFCC00] to-yellow-500 
                    transform transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
    </div>
  );
}

export default MemberCard
