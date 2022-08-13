import MobileNavProfile from "./mobileNavProfile";
import NavLinks from "./navLinks";

const MobileNav = () => {
  return (
    <>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavLinks mobile={true} />
      </div>

      <div className="pt-4 pb-3 border-t border-gray-700">
        <MobileNavProfile />
      </div>
    </>
  )
}

export default MobileNav
