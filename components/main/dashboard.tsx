'use client'
import { useState } from "react"
import { BlueButton } from "../elements/button/blueButton"
import { LayoutDashboard, Plus } from "lucide-react"
import { Search } from "lucide-react"
import { DashboardModal } from "../elements/dashboardModal"
import { TableComponent } from "../elements/tableComponent"

export const Dashboard = () => {
    const [modalState, setModalState] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState('');
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }
    return (                            
        <div className="w-full h-full bg-white rounded-2xl p-8 flex-col">
            {modalState ? <DashboardModal setModalState={setModalState} /> : "" }
            <div className="flex justify-between my-4">
                <div className=" flex items-center gap-4 text-gray-500">
                    <LayoutDashboard size={20}/>
                    Dashboard
                </div>
                <BlueButton 
                    className={`p-2 bg-blue-700 text-white`} 
                    buttonType="submit"
                    action={(e) =>setModalState(true)} 
                >
                    <Plus size={16}/>
                    Add site
                </BlueButton>
            </div>
            <div className=" w-full flex justify-end bg-blue-200 p-3 rounded-xl">
                <div className="relative lg:w-90 md:w-full text-gray-500">
                    <input 
                        type="text" 
                        className="w-full bg-white p-3 ps-10 shadow focus:outline-1 rounded-lg text-md" 
                        placeholder="Search sites"
                        onChange={handleChange}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
                </div>
            </div>
            <TableComponent searchValue={searchInput as string} />
        </div>    
    )
}


