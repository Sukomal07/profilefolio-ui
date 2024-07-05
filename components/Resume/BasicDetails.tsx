import { useFormContext } from 'react-hook-form'

interface Link {
    type: string;
    url: string;
}

interface PersonalInfo {
    fullName: string;
    jobTitle: string;
    email: string;
    phoneNumber: string;
    links: Link[];
}

export default function BasicDetails() {
    const { watch } = useFormContext()

    const personalInfo = watch("personalInfo") as PersonalInfo
    return <div className="flex flex-col gap-1">
        <h1 className="text-4xl text-center capitalize ">{personalInfo?.fullName}</h1>
        <span className="text-center text-sm font-light capitalize">{personalInfo?.jobTitle}</span>
        <div className="flex justify-center items-center gap-1">
            <a href={`mailto:${personalInfo?.email}`} className="text-sm">{personalInfo?.email}</a>
            {
                personalInfo?.email && personalInfo?.phoneNumber && (
                    <span>|</span>
                )
            }
            <p className="text-sm">{personalInfo?.phoneNumber}</p>
        </div>
        <div className="flex justify-center gap-1">
            {
                personalInfo?.links?.map((link, index) => (
                    <div key={index} className='flex items-center gap-1'>
                        <a href={link?.url} target='_blank' className='capitalize font-semibold text-base'>{link?.type}</a>
                        {index < personalInfo.links.length - 1 && <span>|</span>}
                    </div>
                ))
            }
        </div>
    </div>
}