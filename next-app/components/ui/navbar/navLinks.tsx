import useNavigation from "../../../hooks/navigation";
import NavLink from "./navLink";

interface NavLinksProps {
  mobile?: boolean
}

const NavLinks = ({ mobile = false }: NavLinksProps) => {
  const { navLinks, isCurrentPage } = useNavigation()

  return (
    <>
      {navLinks.map((navLink) => (
        <NavLink href={navLink.href} isCurrentPage={isCurrentPage(navLink)} key={navLink.href} mobile={mobile}>{navLink.title}</NavLink>
      ))}
    </>
  )
}

export default NavLinks
