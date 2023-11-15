import { signal } from "@preact/signals-react";

export const selection = signal(0)

export default function InputTip({ value, getTip }: { value: number; getTip: (value: number) => void}) {
    

    const handleClick =()=> {
        selection.value = value
        getTip(value)
    }
    const buttonClass = selection.value === value? "active-button" : "inactive-button"

    return (
        
        <button className={`bg-Very-dark-cyan h-10 w-20 rounded-lg text-white hover:bg-Light-grayish-cyan hover:text-Very-dark-cyan ${buttonClass}`}
        onClick={handleClick}
        >{value}%
        </button>
        
    )
}