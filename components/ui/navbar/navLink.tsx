import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string
  isCurrentPage: boolean
  mobile?: boolean
  children: React.ReactNode
}

const LinkClassMap = {
  MOBILE_ACTIVE: 'bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium',
  MOBILE_INACTIVE: 'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium',
  DESKTOP_ACTIVE: 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium',
  DESKTOP_INACTIVE: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
}

const NavLink = ({ href, isCurrentPage, children, mobile = false }: NavLinkProps) => {
  // Set aria-current for relevant link anchor tag
  const ariaCurrent = isCurrentPage ? 'page' : false

  // Get class lst for active/inactive class based on mobile or desktop
  const activeClasses = mobile ? LinkClassMap.MOBILE_ACTIVE : LinkClassMap.DESKTOP_ACTIVE
  const inactiveClasses = mobile ? LinkClassMap.MOBILE_INACTIVE : LinkClassMap.DESKTOP_INACTIVE
  const classList = isCurrentPage ? activeClasses : inactiveClasses

  return (
    <Link href={href}>
      <a
        className={classList}
        aria-current={ariaCurrent}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
