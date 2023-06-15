'use client'
import { ShowmoreProp } from "@/types"
import { CustomButton } from "./CustomButton"
import { updateSearchParams } from "@/utils/fetchData"
import { useRouter } from "next/navigation"
export const Showmore = ({ pageNum, isNext }: ShowmoreProp) => {
    const router = useRouter()

    const handleNavigation = () =>{
        const newLimit = (pageNum +1) *10
        const newPathName = updateSearchParams('limit' ,`${newLimit}`)
        router.push(newPathName)
    }
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    btnType="button"
                    title="Show More"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>

    )
}
