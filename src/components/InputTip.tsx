import { useState } from "react"

export default function InputTip({ value, getTip }: { value: number; getTip: (value: number) => void }) {
    const [active, setActive] = useState(false)

    const handleClick =()=> {
        setActive(!active)
        getTip(value)
    }
    const buttonClass = active? "active-button" : "inactive-button"

    return (
        
        <button className={`bg-Very-dark-cyan h-10 w-20 rounded-lg text-white hover:bg-Light-grayish-cyan hover:text-Very-dark-cyan ${buttonClass}`}
        onClick={handleClick}
        onBlur={()=> {setActive(false)}}
        >{value}%
        </button>
        
    )
}