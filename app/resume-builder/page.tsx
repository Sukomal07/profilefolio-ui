"use client"

import ResumeHeader from "@/components/ResumeHeader";
import ResumeView from "@/components/ResumeView";
import Sidebar from "@/components/Sidebar";
import { RecoilRoot } from 'recoil';


export default function Page() {
    return (
        <div className="h-full px-12">
            <ResumeHeader />
            <hr />
            <RecoilRoot>
                <div className="mt-7 flex justify-between h-full">
                    <Sidebar />
                    <ResumeView />
                </div>
            </RecoilRoot>
        </div>
    )
}