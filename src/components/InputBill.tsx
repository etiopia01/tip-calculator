

export default function Input({getBill}) {
return (
<div className="flex flex-col gap-2 ">
    
    <label htmlFor="bill" className="text-Dark-grayish-cyan text-xs">Bill</label>
    <input type="number" 
    name="bill" 
    id="bill" 
    placeholder="$" 
    onChange={(e)=> getBill(parseInt(e.target.value))} 
    className="appearance-none outline-none bg-Very-light-grayish-cyan rounded-sm p-1 text-Very-dark-cyan placeholder:text-left text-right focus:outline-Strong-cyan"/>
   

</div>
)
}