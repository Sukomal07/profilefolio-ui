import { useRecoilValue } from 'recoil'
import { personalInfoSelector } from '../selectors'

export const BasicDetails = ()=>{
    const personalInfo = useRecoilValue(personalInfoSelector)
    const { name, email, phone, jobTitle, summary } = personalInfo;
    console.log(phone, jobTitle);
    

    return <div className="flex flex-col">
    <div className="text-3xl text-center font-medium">{name}</div>
    <div className="text-center text-sm font-light">{jobTitle}</div>
    <div className="flex justify-center text-sm font-light">
        <div className="px-1">{email}</div>
        <div className="px-1">{phone ? '|' : ''} {phone}</div>
        {/* <div  className="font-medium border-r-2 border-gray-500 px-1">
           <a href="http://www.github.com/PatelYash7" target="_blank">
            Github
           </a>
        </div>
        <div  className="font-medium px-1">
            <a href="http://www.linkedin.com/in/yash-patel-86666b1b9" target="_blank">
                LinkedIN
           </a>
        </div> */}
    </div>
  </div>
}