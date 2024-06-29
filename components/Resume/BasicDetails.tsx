import { useRecoilValue } from 'recoil'
import { personalInfoSelector } from '../selectors'

export const BasicDetails = () => {
    const personalInfo = useRecoilValue(personalInfoSelector)
    const { name, email, phone, jobTitle, summary } = personalInfo;


    return <div className="flex flex-col">
        <div className="text-3xl text-center font-medium">{name}</div>
        <div className="text-center text-sm font-light">{jobTitle}</div>
        <div className="flex justify-center text-sm font-light">
            <div className="px-1">{email}</div>
            <div className="px-1">{phone ? '|' : ''} {phone}</div>
        </div>
    </div>
}