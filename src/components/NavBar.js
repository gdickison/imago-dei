/* eslint-disable @next/next/no-img-element */
import MenuBurger from "./MenuBurger"
export default function NavBar () {

  return (
    <header className="py-4 bg-white sm:py-5 w-full max-w-[1200px]" x-data="{expanded: false}">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <a href="/" title="" className="">
              {/* <img className="w-auto h-8" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg" alt="" /> */}
              <span>Imago Dei Logo</span>
            </a>
          </div>

          <div className="hidden md:flex lg:items-center lg:space-x-4 lg:justify-end lg:ml-auto">
            <a href="/about" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              About Us
            </a>

            <a href="/resources" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300">
              Resources
            </a>

            <a href="/contact" title="" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300 gap-2">
              <img className="h-6 w-6" src="/icons/email.png" alt="email icon" />Conctact Us
            </a>
          </div>
          <div className="md:hidden">
            <MenuBurger/>
          </div>
        </div>
      </div>
    </header>
  )
}
