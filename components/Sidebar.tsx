'use client'
import { Cancel } from "@/public/Svg";
import { Button } from "./ui/button";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ToggleState } from "@/store";

export const Sidebar = () => {
    const[toggleState, setToggleState] = useRecoilState(ToggleState);
    return (
        <div className="bg-gray-100 rounded-md min-h-[90vh] overflow-y-auto p-2">
        <Button onClick={()=>{setToggleState(false)}} className="rounded h-6 w-6" variant={'outline'} size={'icon'}> 
            <Cancel />
        </Button>
        </div>
    );
};
