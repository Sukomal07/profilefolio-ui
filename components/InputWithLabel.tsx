import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    onChange: any
}

export function InputWithLabel({ label, name, type, placeholder, onChange }: Props) {
    const handleChange = (value: string) => {
        onChange(name, value)
    }
    return (
        <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor={name} className="text-base font-normal text-slate-500">{label}</Label>
            <Input type={type} name={name} id={name} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}
