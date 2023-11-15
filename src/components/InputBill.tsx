


export default function Input({getBill,bill}:{getBill:(val:number)=> void , bill:number}) {

    
return (
<div className="flex flex-col gap-2 ">
    
    <label htmlFor="bill" className="text-Dark-grayish-cyan text-xs">Bill</label>
    <input type="number" 
    name="bill" 
    id="bill" 
    value={bill > 0? bill : ""}
    placeholder="$" 
    onChange={(e)=> getBill(parseInt(e.target.value))} 
    className="appearance-none outline-none bg-Very-light-grayish-cyan rounded-sm p-1 whitespace-nowrap text-Very-dark-cyan placeholder:text-left text-right focus:outline-Strong-cyan"/>
   

</div>
)
}