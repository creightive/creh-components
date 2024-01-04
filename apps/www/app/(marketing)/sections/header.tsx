import React from 'react'
import Logo from '@/components/logo'

const Header = () => {
  return (
    <header>
      <div className="flex flex-col flex-wrap items-center px-8 py-6 mx-auto max-w-7xl md:flex-row">
        <a
          href="#_"
          className="h-12 flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
        >
          <Logo className="h-full" />
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base font-bold tracking-tight md:ml-auto">
          <a href="#_" className="mr-5 hover:text-gray-900">
            Github
          </a>
          <a href="#_" className="mr-5 hover:text-gray-900">
            Maker logs
          </a>
        </nav>
        <button
          className="flex items-center justify-center px-4 font-medium text-[--orange-11] border-2 border-[--orange-9] rounded-full h-9"
          data-primary="orange-500"
          data-rounded="rounded-full"
        >
          Public Beta
        </button>
      </div>
    </header>
  )
}

export default Header
