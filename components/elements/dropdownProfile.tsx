import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Settings, HandCoins, CircleDollarSign, LogOut } from "lucide-react";
import { deleteSession } from '@/lib/session';

export default function DropdownProfile() {

     const logout = () => {
          deleteSession();
     }
  return (
     <>
          <Menu as="div" className="relative inline-block">
               <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
                    <img src="/img/logo-accessibit.webp" alt="logo" className="w-28 h-5" />
               </MenuButton>
               <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
               >
                    <div className="py-1">
                         <MenuItem>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                   Edit
                              </a>
                         </MenuItem>
                         <MenuItem>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                   Duplicate
                              </a>
                         </MenuItem>
                    </div>
                    <div className="py-1">
                         <MenuItem>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                   Archive
                              </a>
                         </MenuItem>
                         <MenuItem>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                   Move
                              </a>
                         </MenuItem>
                    </div>
                    <div className="py-1">
                         <MenuItem>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                   Share
                              </a>
                         </MenuItem>
                         <MenuItem>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                   Add to favorites
                              </a>
                         </MenuItem>
                    </div>
                    <div className="py-1">
                         <MenuItem>
                              <a
                                   href="#"
                                   className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                              >
                                   
                              </a>
                              {/* <CircleDollarSign className="mx-3"/>Invoices & Payments */}
                         </MenuItem>
                    </div>
                    <button onClick={logout}>logout</button>
               </MenuItems>
          </Menu>
     </>
  )
}


{/* <div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><Settings className="mx-3"/>Account settings</div>

<div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><CircleDollarSign className="mx-3"/>Invoices & Payments</div>
<div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><LogOut className="mx-3"/>Subscriptions</div>

          
<div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 text-gray-800 cursor-default"><LogOut className="mx-3"/>Subscriptions</div>
                                */}