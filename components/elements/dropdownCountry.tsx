import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
export default function DropdownCountry() {
    return (
      <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text font-semibold text-black inset-ring-1 inset-ring-white/5 hover:bg-white/20">
              Italian
              <ChevronDown aria-hidden="true" className="-mr-1 size-6" />
          </MenuButton>

          <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl border bg-white outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
              <div className="p-2">
                  <MenuItem>
                      <div className=' rounded-xl hover:bg-gray-100 '>
                          <Link 
                              href={'/#'}
                              className="block px-4 p-2 text-sm text-black data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                              Italian
                          </Link>
                      </div>
                  </MenuItem>
                  <MenuItem>
                      <div className=' rounded-xl hover:bg-gray-100 '>
                            <Link 
                                  href={'/#'}
                                  className="block px-4 p-2 text-sm text-black data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                  English
                            </Link>
                      </div>
                  </MenuItem>
              </div>
          </MenuItems>
      </Menu>
    )
}