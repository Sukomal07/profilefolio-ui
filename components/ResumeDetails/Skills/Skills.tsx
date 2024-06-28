import { ChevronDown, Database } from 'lucide-react'
import React from 'react'

export default function Skills() {
    return (
        <div className='flex justify-between items-center py-4 px-4 cursor-pointer'>
            <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-300'>
                    <Database size={15} />
                </div>
                <span className='text-slate-500 text-base'>Skills</span>
            </div>
            <ChevronDown className='text-slate-400 cursor-pointer' size={20} />
        </div>
    )
}
