import Icon, { IconType } from "../icon";
import { useState } from "react";

interface ProfileDropdownProps {
}

const ProfileDropdown = ({}: ProfileDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="ml-3 relative">
      <div>
        <button type="button"
                className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setShowDropdown(!showDropdown) }>
          <span className="sr-only">Open user menu</span>
          <Icon icon={IconType.COG} />
        </button>
      </div>

      {/*
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              */}
      {showDropdown &&
          <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
            {/* Active: "bg-gray-100", Not Active: "" */}
              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}
                 id="user-menu-item-0">Your Profile</a>

              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}
                 id="user-menu-item-1">Settings</a>

              <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1}
                 id="user-menu-item-2">Sign out</a>
          </div>
      }
    </div>
  )
}

export default ProfileDropdown
