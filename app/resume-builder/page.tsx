"use client"

import ResumeHeader from "@/components/ResumeHeader";
import ResumeView from "@/components/ResumeView";
import Sidebar from "@/components/Sidebar";
import { FormProvider, useForm, FieldValues } from 'react-hook-form';

export default function Page() {
    const methods = useForm();
    const onSubmit = async (data: FieldValues) => console.log(data, 'userdetails');

    return (
        <div className="h-full px-12">
            <ResumeHeader />
            <hr />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="h-full">
                    <div className="mt-7 flex justify-between h-full gap-8">
                        <Sidebar handleSubmit={methods.handleSubmit(onSubmit)} />
                        <ResumeView />
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}
