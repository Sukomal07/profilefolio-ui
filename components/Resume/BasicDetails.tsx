import { personalInfoSelector } from '../selectors'

export const BasicDetails = () => {

    return <div className="flex flex-col">
        <div className="text-3xl text-center font-medium">{ }</div>
        <div className="text-center text-sm font-light">{ }</div>
        <div className="flex justify-center text-sm font-light">
            <div className="px-1">{ }</div>
            <div className="px-1">{ }</div>
        </div>
    </div>
}