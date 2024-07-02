"use client"

import { InputWithLabel } from '@/components/InputWithLabel'
import { Button } from '@/components/ui/button'
import { DatePickerWithRange } from '@/components/ui/date-picker'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BookText, ChevronDown, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form';

export default function Education() {
    const [showEducation, setShowEducation] = useState(false)

    return (
        <div className='py-4 px-3 flex flex-col gap-4'>
            <div className='flex justify-between items-center cursor-pointer' onClick={() => setShowEducation(!showEducation)}>
                <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 rounded-full flex justify-center items-center bg-slate-300'>
                        <BookText size={15} />
                    </div>
                    <span className='text-slate-500 text-base'>Education</span>
                </div>
                <ChevronDown className={`text-slate-400 cursor-pointer transform transition-transform duration-300 ${showEducation ? 'rotate-180' : ''}`} size={20} />
            </div>
            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${showEducation ? 'block' : 'hidden'}`}>
                <ListOfInstitution />
            </div>
        </div>
    )
}

export function ListOfInstitution() {
    const { control, watch } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "educations",
    });

    const [showInputs, setShowInputs] = useState<number | null>(null);

    const toggleInputs = (index: number) => {
        setShowInputs(showInputs === index ? null : index);
    };

    const addEducation = () => {
        append({ institution: "", url: "", studyType: "", area: "", score: "", scoreType: "", duration: { start: null, end: null } });
    };

    const deleteEducation = (index: number) => {
        remove(index);
    };

    return (
        <div className='flex flex-col gap-3 px-2'>
            {fields.map((education, index) => {
                return (
                    <div key={index}>
                        <div
                            className='flex justify-between items-center px-4 py-4 cursor-pointer'
                            onClick={() => toggleInputs(index)}
                        >
                            <h1 className='text-slate-600 font-semibold text-base'>{watch(`educations.${index}.institution`) || "Institution name"}</h1>
                            <div className='flex gap-3 items-center'>
                                <Trash2 size={20} className='text-slate-400 cursor-pointer' onClick={(e) => {
                                    e.stopPropagation();
                                    deleteEducation(index);
                                }} />
                                <ChevronDown size={20} className={`text-slate-400 cursor-pointer transform transition-transform duration-300 ${showInputs === index ? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                        {showInputs === index && <InstituteInputs index={index} />}
                    </div>
                )
            })}
            <Button variant={'outline'} onClick={addEducation}>
                + Add Education
            </Button>
        </div>
    )
}

export function InstituteInputs({ index }: { index: number }) {
    const { register, control, setValue } = useFormContext();

    return (
        <div className='flex flex-col gap-3 px-4'>
            <div className='grid md:grid-cols-2 gap-3'>
                <InputWithLabel label='Institution' {...register(`educations.${index}.institution`)} type='text' placeholder='University name' />
                <InputWithLabel label='Website' {...register(`educations.${index}.url`)} type='url' placeholder='Institution website' />
                <InputWithLabel label='Degree' {...register(`educations.${index}.studyType`)} type='text' placeholder='Bachelors' />
                <InputWithLabel label='Field of Study' {...register(`educations.${index}.area`)} type='text' placeholder='Computer science' />
                <Input {...register(`educations.${index}.score`)} placeholder='4.5' />
                <Select
                    onValueChange={(value) => setValue(`educations.${index}.scoreType`, value)}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="gpa">GPA</SelectItem>
                        <SelectItem value="cgpa">CGPA</SelectItem>
                        <SelectItem value="percentage">Percentage</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex flex-col gap-3 w-full'>
                <Label htmlFor={`educations.${index}.duration`} className="text-base font-normal text-slate-500">Duration</Label>
                <DatePickerWithRange control={control} name={`educations.${index}.duration`} />

            </div>
        </div>
    )
}
