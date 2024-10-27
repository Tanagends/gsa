import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa"

export default function Values () {
  const values = [
    "Dedication",
    "Empathy",
    "Industriousness",
    "Teamwork",
    "Grassroot engagement",
    "Empowerment",
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-main-500">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-12 text-white">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 slide-in-left"
              >
                <div className="flex items-center">
                  <FaCheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <p className="font-medium text-gray-800">{value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-lg shadow-lg slide-in-top">
              <Image
                src="/assets/images/bg-1.jpeg"
                alt="Our team members collaborating"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105 shadow-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}