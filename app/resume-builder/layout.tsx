'use client'
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ToggleState } from "@/lib/store";
import { Hamburger } from "@/public/Svg";
import { useRecoilState, useRecoilValue } from "recoil";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle,setToggleState] = useRecoilState(ToggleState)
  return (
    <div className="flex flex-col bg-gray-500 h-screen">
      <Navbar />
      {toggle ? (
        <div className="flex">
          <div className="py-4 px-2">
            <Sidebar />
          </div>
          <div className=" px-4 py-4">
            {children}
          </div>
        </div>
      ) : (
        <div className="flex justify-center gap-1 p-4 bg-gray-500 h-screen">
          <div className="px-4">
            <Button onClick={()=>{setToggleState(true)}} className="rounded-full h-6 w-6" variant={'default'} size={'icon'}> 
              <Hamburger/>
            </Button>
          </div>
            {children}
        </div>
      )}
    </div>
  );
}
