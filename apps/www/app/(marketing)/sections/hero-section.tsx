import React from 'react'
import Header from '@/app/(marketing)/sections/header'

const HeroSection = () => {
  return (
    <>
      <section className="">
        <Header />
        <div className="max-w-3xl mx-8 mt-4 lg:mx-auto md:mt-16">
          <h1 className="mb-8 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-6xl">
            Find Your Fit in the Tech Industry
          </h1>
          <h2 className="inline-block px-2.5 mb-4 text-base font-semibold leading-normal tracking-wide text-[--orange-11] rounded-full bg-[--orange-2] ring-1 ring-[--orange-6] sm:font-medium sm:text-lg">
            Ready to code your future?
          </h2>
          <p className="mb-8 text-base font-light leading-relaxed text-gray-700 sm:text-lg">
            Navigate the tech job landscape effortlessly with our platform. Access a curated
            selection of junior and transitional developer roles, get personalized job alerts, and
            unlock resources to boost your job search. Your dream developer job is just a few clicks
            away.
          </p>
        </div>
        <div
          className="h-48 max-w-4xl mx-8 mt-16 overflow-hidden text-white lowercase bg-transparent border-2 border-b-0 border-gray-200 rounded-b-none lg:mx-auto rounded-xl sm:h-64 md:h-96"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <img src="https://cdn.devdojo.com/images/december2020/hero-img.jpeg" className="" />
        </div>
      </section>
    </>
  )
}

export default HeroSection
