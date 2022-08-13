import Icon, { IconType } from "../icon";

const MobileNavProfile = () => (
  <>
    <div className="flex items-center px-5">
      <div className="flex-shrink-0">
        <Icon icon={IconType.COG} />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium leading-none text-white">Tom Cook</div>
        <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
      </div>
      <button type="button"
              className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
    </div>

    <div className="mt-3 px-2 space-y-1">
      <a href="next-app/components/ui/navbar/navbar#"
         className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your
        Profile</a>

      <a href="next-app/components/ui/navbar/navbar#"
         className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

      <a href="next-app/components/ui/navbar/navbar#"
         className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign
        out</a>
    </div>
  </>
)

export default MobileNavProfile
