import DropdownCountry from "@/components/elements/dropdownCountry"
import DropdownProfile from "@/components/elements/dropdownProfile"
import Sidebar from "@/components/layout/Sidebar"

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    return (
            <div className="relative w-full min-h-screen flex bg-gray-200 border">
                <div>
                    <Sidebar />
                </div>

                <div className="relative overflow-auto w-full h-screen flex flex-col">
                    <div className="w-full flex justify-end bg-white h-16 border-2">
                        <div className="flex items-center">
                            <DropdownCountry />
                            <DropdownProfile />
                        </div>
                    </div>
                    <div className="h-full flex-1 p-8">
                        {children}
                    </div>
                </div>
            </div>
    )
}
