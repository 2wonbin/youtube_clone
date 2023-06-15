import { BtnInfoProps, btnInfo } from "@/lib/dummyData";

export default function SearchingFilter() {
    return (
        <div className="relative overflow-x-scroll bg-orange-200 px-5 py-4">
            <div className="w-full whitespace-nowrap">
                {btnInfo.map((btn:BtnInfoProps) => (
                    <button className="px-2 py-1 rounded-md bg-gray-300 ml-2" key={btn.id}>{btn.btnName}</button>))}
            </div>
        </div>
    )
}
