"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Controller } from "react-hook-form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerWithRangeProps {
    name: string;
    control: any;
    className?: string;
}

export function DatePickerWithRange({
    name,
    control,
    className,
}: DatePickerWithRangeProps) {

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <div className={cn("grid gap-2", className)}>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value?.from ? (
                                    field.value?.to ? (
                                        <>
                                            {format(field.value.from, "LLL, y")} -{" "}
                                            {format(field.value.to, "LLL, y")}
                                        </>
                                    ) : (
                                        format(field.value.from, "LLL , y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={field.value?.from}
                                selected={field.value}
                                onSelect={(dateRange) => field.onChange(dateRange)}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            )}
        />

    )
}
