"use client"

import { InputWithLabel } from '@/components/InputWithLabel'
import { Button } from '@/components/ui/button'
import { DatePickerDemo } from '@/components/ui/date'
import { Label } from '@/components/ui/label'
import { ChevronDown, Star, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

export default function Certificate() {
    const [certificate, setShowCertificate] = useState(false)
    return (
        <div className='py-4 px-3 flex flex-col gap-4'>
            <div className='flex justify-between items-center cursor-pointer' onClick={() => setShowCertificate(!certificate)}>
                <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-300'>
                        <Star size={15} />
                    </div>
                    <span className='text-slate-500 text-base'>Certificates</span>
                </div>
                <ChevronDown className={`text-slate-400 cursor-pointer transform transition-transform duration-300 ${certificate ? 'rotate-180' : ''}`} size={20} />
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${certificate ? 'block' : 'hidden'}`}>
                <ListOfCertificates />
            </div>
        </div>
    )
}


export function ListOfCertificates() {
    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "certificates",
    });

    const [showInputs, setShowInputs] = useState<number | null>(null);

    const toggleInputs = (index: number) => {
        setShowInputs(showInputs === index ? null : index);
    };

    const addCertificate = () => {
        append({ name: "", date: "", issuer: "", url: "" })
    };

    const deleteCertificate = (index: number) => {
        remove(index)
    };
    return (
        <div className='flex flex-col gap-3 px-2'>
            {fields.map((certificate, index) => (
                <div key={index}>
                    <div
                        className='flex justify-between items-center px-4 py-4 cursor-pointer'
                        onClick={() => toggleInputs(index)}
                    >
                        <h1 className='text-slate-600 font-semibold text-base'>Certificate name</h1>
                        <div className='flex gap-3 items-center'>
                            <Trash2 size={20} className='text-slate-400 cursor-pointer' onClick={(e) => {
                                e.stopPropagation();
                                deleteCertificate(index);
                            }} />
                            <ChevronDown size={20} className={`text-slate-400 cursor-pointer transform transition-transform duration-300 ${showInputs === index ? 'rotate-180' : ''}`} />
                        </div>
                    </div>
                    {showInputs === index && <CertificateInputs index={index} />}
                </div>
            ))}
            <Button variant={'outline'} onClick={addCertificate}>
                + Add Certificate
            </Button>
        </div>
    )
}

export function CertificateInputs({ index }: { index: number }) {
    const { register } = useFormContext()
    return (
        <div className='flex flex-col gap-3 px-4'>
            <InputWithLabel label='Certificate name' type='text' placeholder='Full stack developer' {...register(`certificates.${index}.name`)} />
            <InputWithLabel label='Certificate link' type='url' placeholder='Certificate link' {...register(`certificates.${index}.url`)} />
            <InputWithLabel label='Issued by' type='text' placeholder='Udemy , Coursera' {...register(`certificates.${index}.issuer`)} />
            <div className='flex flex-col gap-3 w-full'>
                <Label htmlFor={`certificates.${index}.date`} className="text-base font-normal text-slate-500">Issue date</Label>
                <DatePickerDemo />
            </div>
        </div>
    )
}
