import { useEffect, useState } from "react"
import { ChevronDown, ChevronUp, Eye, ArrowDownToLine, Settings, Trash2 } from "lucide-react"
import { BlueButton } from "./button/blueButton"
import { DashboardSite } from "@prisma/client"

const initialTableValue = [{
    id: '',
    userId: '',
    siteUrl: '',
    license: false,
    createdAt: null,
    deletedAt: null
}]

type SortState = {
    sortUrl: number;
    sortLicense: number;
  };

export const TableComponent = ({searchValue}: {searchValue: string}) => {
    const [tableValue, setTableValue] = useState<DashboardSite[]>(initialTableValue);
    const [sortData, setSortData] = useState<SortState>({
        sortUrl: 0,
        sortLicense: 0
    });
    
    const getTableData = async () => {
        const res = await fetch('api/website/main/read/getAllDashboardUrl');
        const tableData = (await res.json()).fileId;

        if(sortData.sortUrl) tableData.sort((a:DashboardSite, b:DashboardSite) => a.siteUrl.localeCompare(b.siteUrl));
        if(sortData.sortLicense) tableData.sort((a:DashboardSite, b:DashboardSite) => Number(b.license) - Number(a.license));
        setTableValue(tableData.filter((prev: DashboardSite) =>  prev.siteUrl?.includes(searchValue)));
    }
    const removeUrl = async (id: string) => {
        const res = await fetch('/api/website/main/delete/deleteUrl',{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id: id})
        })
        getTableData()
    }
    const sortValState = (name: keyof SortState) => {
        setSortData(prev => ({...prev, [name]:!prev[name]}));
        getTableData()
    }
    useEffect(() => {
    console.log("searchValue", searchValue);

        getTableData();
    }, [searchValue])
    
    return (
        <div className="w-full">
            <div className="w-full my-4 overflow-x-auto text-gray-700 rounded-lg border border-gray-300 text-sm">
                <table className="min-w-max overflow-x-auto table-auto w-full">
                    <thead className=" border-b">
                        <tr>
                            <th className="p-2 min-w-[200px] max-w-[400px]">
                                <button className="flex items-center" onClick={() => {sortValState("sortUrl")}}>
                                    Site Url
                                    {sortData.sortUrl ? <ChevronUp /> : <ChevronDown />}
                                </button>
                            </th>
                            <th className="p-2 min-w-[200px] max-w-[400px]">
                                <button className="flex items-center" onClick={() => {sortValState("sortLicense")}}>
                                    Licence
                                    <ChevronDown />
                                </button>
                            </th>
                            <th className="p-2 min-w-[250px] max-w-[500px]">Basic Report</th>
                            <th className="p-2 min-w-[100px] max-w-[200px]"></th>
                            <th className="p-2 min-w-[100px] max-w-[200px]">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableValue && tableValue.map((item, index) => (
                            <tr key={index} className="items-center">
                                <td className="p-2">{item.siteUrl}</td>
                                <td className="p-2">{item.license}</td>
                                <td className="p-2">
                                    <div className="flex flex-wrap gap-2">
                                        <BlueButton className="p-2 bg-blue-700 text-white" buttonType="submit">
                                            <Eye size={16} />
                                            Send Email
                                        </BlueButton>

                                        <BlueButton className="p-2" buttonType="submit">
                                            <Eye size={16} />
                                            Add Site
                                        </BlueButton>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <BlueButton className="p-2 px-1 bg-blue-700 text-white" buttonType="submit">
                                        <ArrowDownToLine size={24} />
                                        <p>Install Widget</p>
                                    </BlueButton>
                                </td>
                                <td className="flex items-center py-4 gap-4">
                                    <button className="flex items-center"><Settings size={20}/></button>
                                    <button className="flex items-center" onClick={e => removeUrl(item.id)}><Trash2 size={20} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}