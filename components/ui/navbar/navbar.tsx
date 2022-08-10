import { NextComponentType } from "next";
import Icon, { IconType } from "../icon";
import DesktopRightNav from "./desktopRightNav";
import ToggleMobileNavButton from "./toggleMobileNavButton";
import { useState } from "react";
import DesktopNavLinks from "./desktopNavLinks";
import MobileNav from "./mobileNav";

const Navbar: NextComponentType = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Icon icon={IconType.TELEPHONE} />
            </div>

            <div className="hidden md:block">
              <DesktopNavLinks />
            </div>
          </div>

          <div className="hidden md:block">
            <DesktopRightNav />
          </div>
          <div className="-mr-2 flex md:hidden">
            <ToggleMobileNavButton showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
          </div>
        </div>
      </div>

      <div className={(showMobileMenu ? '' : 'hidden ') + "md:hidden"} id="mobile-menu">
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
