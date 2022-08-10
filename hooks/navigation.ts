import { useState } from "react";

const navLinksArray = [{
  href: '/',
  isCurrentPage: true,
  title: 'Dashboard'
}, {
  href: '/team',
  isCurrentPage: false,
  title: 'Team'
}, {
  href: '/projects',
  isCurrentPage: false,
  title: 'Projects'
}, {
  href: '/calendar',
  isCurrentPage: false,
  title: 'Calendar'
}, {
  href: '/reports',
  isCurrentPage: false,
  title: 'Reports'
}]

export default function useNavigation() {
  const [navLinks] = useState(navLinksArray)

  return { navLinks }
}
