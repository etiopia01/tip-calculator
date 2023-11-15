import InputTip from "./InputTip"
import CustomTip from "./CustomTip"






export default function Tips({getTip}:{getTip:(val:number)=> void}) {

    
    
    

    return (
        <div className='flex flex-wrap gap-4 mt-2'>
        <InputTip value={5}  getTip={getTip}/>
        <InputTip value={10}  getTip={getTip}/>
        <InputTip value={15} getTip={getTip}/>
        <InputTip value={25}  getTip={getTip}/>
        <InputTip value={50}  getTip={getTip}/>
        <CustomTip getTip={getTip}/>
        
    </div>
    )
}