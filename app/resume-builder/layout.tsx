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
    <div className="flex flex-col">
      <Navbar />
      {toggle ? (
        <div className="flex">
          <div className="p-2 ">
            <Sidebar />
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 p-2">
            <Button onClick={()=>{setToggleState(true)}} className="rounded-full h-6 w-6" variant={'default'} size={'icon'}> 
            <Hamburger/>
        </Button>
            {children}
        </div>
      )}
    </div>
  );
}
