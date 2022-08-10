import useNavigation from "../../../hooks/navigation";
import NavLink from "./navLink";

interface NavLinksProps {
  mobile?: boolean
}

const NavLinks = ({ mobile = false }: NavLinksProps) => {
  const { navLinks } = useNavigation()

  return (
    <>
      {navLinks.map(({ href, isCurrentPage, title }) => (
        <NavLink href={href} isCurrentPage={isCurrentPage} key={href} mobile={mobile}>{title}</NavLink>
      ))}
    </>
  )
}

export default NavLinks
