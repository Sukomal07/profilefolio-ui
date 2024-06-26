'use client'
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Cancel, Hamburger } from "@/public/Svg";
import { ToggleState } from "@/store";
import { useState } from "react";
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
          <div className="p-2 w-[25vw]">
            <Sidebar />
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div className="flex flex-col gap-1 p-2">
            <Button onClick={()=>{setToggleState(true)}} className="rounded h-6 w-6" variant={'outline'} size={'icon'}> 
            <Hamburger/>
        </Button>
            {children}
        </div>
      )}
    </div>
  );
}
