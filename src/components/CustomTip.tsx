import { selection } from "./InputTip"
export default function CustomTip({getTip}:{getTip:(value:number)=> void}) {

    const handleClick = () => {
        selection.value = 0
    }

    return (
        <input onClick={handleClick} type="number" placeholder="CUSTOM" className="appearance-none outline-none bg-Very-light-grayish-cyan h-10 w-20 rounded-lg p-1 text-Very-dark-cyan placeholder:text-center focus:outline-Strong-cyan" onChange={(e)=> getTip(parseInt(e.target.value))}/>
    )
}