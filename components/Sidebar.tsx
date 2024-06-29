import React from 'react'
import UserInfo from './ResumeDetails/UserInfo/UserInfo'
import Education from './ResumeDetails/Education/Education'
import Experience from './ResumeDetails/Experience/Experience'
import Project from './ResumeDetails/Project/Project'
import Skills from './ResumeDetails/Skills/Skills'
import Language from './ResumeDetails/Language/Language'
import Certificate from './ResumeDetails/Certificate/Certificate'

export default function Sidebar() {
  return (
    <div className='w-[400px] h-full'>
      <div className='py-4 border border-gray-200 rounded-md h-[530px] overflow-y-auto scrollbar-none scroll-smooth'>
        <h1 className='font-semibold text-slate-600 text-base mb-4 px-4'>Resume Details</h1>
        <hr />
        <div className='flex flex-col'>
          <UserInfo />
          <hr />
          <Education />
          <hr />
          <Experience />
          <hr />
          <Project />
          <hr />
          <Skills />
          <hr />
          <Language />
          <hr />
          <Certificate />
        </div>
      </div>
    </div>
  )
}
