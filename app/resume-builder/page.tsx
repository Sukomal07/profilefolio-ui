import ResumeHeader from "@/components/ResumeHeader";
import ResumeView from "@/components/ResumeView";
import Sidebar from "@/components/Sidebar";


export default function Page() {
    return (
        <div className="h-full px-12">
            <ResumeHeader />
            <hr />
            <div className="mt-7 flex justify-between h-full">
                <Sidebar />
                <ResumeView />
            </div>
        </div>
    )
}