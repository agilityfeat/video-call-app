import Navbar from "./ui/navbar/navbar";
import React from "react";
import useNavigation from "../hooks/navigation";

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { currentNavLink } = useNavigation()

  return (
    <div className="h-screen bg-white dark:bg-black">
      <Navbar />

      <header className="shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{currentNavLink()?.title}</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
