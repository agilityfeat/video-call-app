interface MobileMenuButtonProps {
  showMobileMenu: boolean
  setShowMobileMenu: (v: boolean) => void
}

const ToggleMobileNavButton = ({ showMobileMenu, setShowMobileMenu }: MobileMenuButtonProps) => {
  const closedIcon = showMobileMenu ? 'hidden' : 'block'
  const openedIcon = showMobileMenu ? 'block' : 'hidden'

  return (
    <button type="button"
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false" onClick={() => setShowMobileMenu(!showMobileMenu)}>
      <span className="sr-only">Open main menu</span>
      {/*
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            */}
      <svg className={closedIcon + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      {/*
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            */}
      <svg className={openedIcon + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}

export default ToggleMobileNavButton
