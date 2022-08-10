import { useState } from "react";
import { useRouter } from "next/router";

interface NavLinkOption {
  href: string
  title: string
  isCurrentPage: boolean
}
const navLinkOption = (href: string, title: string, path: string): NavLinkOption => ({ href, isCurrentPage: href === path, title })

const navLinksFactory = (path: string) => {
  return [
    navLinkOption('/', 'Dashboard', path),
    navLinkOption('/liveKit', 'LiveKit', path),
    navLinkOption('/openTok', 'OpenTok', path)
  ]
}

export default function useNavigation() {
  const { asPath } = useRouter()
  const [navLinks] = useState(navLinksFactory(asPath))

  const isCurrentPage = (navLink: NavLinkOption) => navLink.href === asPath
  const currentNavLink = () => navLinks.find(n => n.href === asPath)

  return { navLinks, currentNavLink, isCurrentPage }
}
