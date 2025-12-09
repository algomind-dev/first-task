'use client'
import { useState, useEffect } from "react"
import { Settings, User, BookText, Mail, BriefcaseConveyorBelt } from "lucide-react"
import { Pencil, ShoppingCart } from "lucide-react"
import { InputWithIcon } from "@/components/elements/input/inputWithIcon"
import { BlueButton } from "@/components/elements/button/blueButton"
const initialAvatarUrl = '/default-avatar.png'; 

export const Account = () => {
    const [state, setState] = useState(0);
    const [editState, setEditState] = useState(0);
    const [profilePreview, setProfilePreview] = useState({
        avatar:initialAvatarUrl,
        name:'',
        email:'',
        agency:'',

    });
    const onEditButton = () => {
        setEditState(editState ? 0 : 1);
    }
    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file ){
            setProfilePreview(state => ({
                ...state,
                avatar: URL.createObjectURL(file)
              }));
        }
    }
    const handleSubmit = async (formData: FormData) => {
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
    }
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setProfilePreview(state => ({
            ...state,
            [e.target.name]:e.target.value
        }))
    }
    useEffect(() => {
    }, [])
    return (
        <div className="w-full bg-white p-6 rounded-xl text-gray-600">
            <div className="w-full flex my-1 p-3 rounded-xl  bg-transparent hover:bg-blue-100 cursor-default">
                <Settings className="mx-3 "/>Account settings
            </div>
            <div className="p-16">
                <form action={handleSubmit} >
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <img 
                                    src={profilePreview.avatar} 
                                    alt="No Image"
                                    className="rounded-full w-24 h-24 object-cover bg-gray-100" 
                                />
                                <input 
                                    type="file" 
                                    name="avatar" 
                                    disabled={editState ? false : true}
                                    accept="image/png, image/jpeg, image/jpg" 
                                    onChange={handleFileChange} 
                                    className="absolute top-0 right-0 opacity-0 w-full h-full rounded-full cursor-pointer" 
                                     
                                />
                                {/* <span className="absolute top-10 left-4 text-gray-700">No Image</span> */}
                            </div>
                            <p className="text-sm">tiehe.dev1115@gmail.com</p>
                        </div>
                        <BlueButton className="p-2" action={onEditButton}>
                            <Pencil size={16}/>
                            Edit
                        </BlueButton>
                        <BlueButton className={`p-2 ${editState ? "" : "hidden"}`} buttonType="submit" >
                            <Pencil size={16}/>
                            Save
                        </BlueButton>
                        
                    </div>
                    <div className="flex gap-10 py-3">
                        <div className="w-1/2">
                            <InputWithIcon 
                                label="Name:"
                                name="name"
                                Icon={User}
                                disabled={editState ? false : true}
                                onChange={onChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <InputWithIcon 
                                label="Agency"
                                name="agency"
                                Icon={BookText}
                                disabled={editState ? false : true}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="flex gap-10 py-3">
                        <div className="w-1/2">
                            <InputWithIcon 
                                label="Email:"
                                name="email"
                                Icon={Mail}
                                onChange={onChange}
                                disabled={editState ? false : true}
                            />
                        </div>
                        <div className="w-1/2">
                            <InputWithIcon 
                                label="Preferred language:"
                                name="nameq"
                                Icon={Settings}
                                onChange={onChange}
                                disabled={editState ? false : true}
                            />
                        </div>
                    </div>
                </form>
                <div className="relative rounded-md border border-gray-300 p-4 leading-10">
                    <p className="flex text-xl font-bold py-3 items-center gap-4">
                       <BriefcaseConveyorBelt /> My Balance
                    </p>
                    <p className="text-blue-700 font-bold">0 credit</p>
                    <p className="text-sm">These credits will be consumed during the accessibility scan.</p>
                    <BlueButton className={"sm:absolute sm:top-4 sm:right-4 "} action={onEditButton}>
                        <ShoppingCart size={16}/>
                        Acquire
                    </BlueButton>
                    {/* <button 
                        className="sm:absolute sm:top-4 sm:right-4 flex items-center rounded-md border  px-8 hover:bg-blue-700 text-blue-700 hover:border-blue-700 hover:text-white ">
                        <ShoppingCart size={16}/>
                        Acquire
                    </button> */}
                </div>
            </div>
        </div>
    )
}

// className={`p-2 ${editState ? "" : "hidden"}`}
