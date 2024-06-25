import { NextResponse } from "next/server";

let requestcount =0; 
export function middleware(res:NextResponse){
    requestcount++;
    return NextResponse.next( )
}