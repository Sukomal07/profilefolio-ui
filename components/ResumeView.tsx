import ReactToPrint from "react-to-print"
import { Resume } from "./Resume"
import { Button } from "./ui/button"
import { useRef } from "react"

export const ResumeView = ()=>{
    
    return <div className="bg-slate-300 h-[90vh] overflow-y-scroll  rounded">
            <Resume/>        
    </div>
}