import { Omega, LayoutDashboard } from "lucide-react"

export default function Sidebar() {
    return (
        <div className="container absolute bg-white min-h-screen w-[5%] shadow-lg flex justify-center py-5">
            <ul className="space-y-7">
                <li className="bg-[#111111] rounded-full p-[0.5vw] hover:bg-[#F0F0F0] text-white hover:text-black duration-150 flex justify-center"><Omega size={20}/></li>
                <li className="rounded-lg p-[0.5vw] hover:bg-[#F0F0F0] text-[#8F8F8F] hover:text-black duration-150"><LayoutDashboard /></li>
            </ul>
        </div>
    )
}