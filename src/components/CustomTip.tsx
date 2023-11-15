import { selection } from "./InputTip"
export default function CustomTip({getTip}:{getTip:(value:number)=> void}) {

    const handleClick = () => {
        selection.value = 0
    }

    return (
        <input onClick={handleClick} type="number" placeholder="CUSTOM" className="appearance-none outline-none bg-Very-light-grayish-cyan lg:h-10 lg:w-20 h-8 w-16 text-sm rounded-lg p-1 lg:text-md text-Very-dark-cyan placeholder:text-center focus:outline-Strong-cyan" onChange={(e)=> getTip(parseInt(e.target.value))}/>
    )
}