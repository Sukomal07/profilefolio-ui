"use client";
import { Cancel } from "@/public/Svg";
import { Button } from "./ui/button";
import { useRecoilState } from "recoil";
import { ToggleState } from "@/lib/store";

export const Sidebar = () => {
  const [toggleState, setToggleState] = useRecoilState(ToggleState);
  return (
    <div className="bg-gray-100 rounded-md w-[25vw] max-h-[90vh] flex flex-col gap-2 overflow-y-auto p-2">
      <div className="flex justify-end sticky top-0">
        <Button
          onClick={() => {
            setToggleState(false);
          }}
          className="rounded-full h-6 w-6"
          variant={'default'}
          size={"icon"}
        >
          <Cancel />
        </Button>
      </div>
    </div>
  );
};
