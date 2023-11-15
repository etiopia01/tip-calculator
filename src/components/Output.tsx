export default function Output({people, tip, bill, reset} : {people:number|undefined; tip:number|undefined; bill:number|undefined; reset:()=> void}) {
    return (
        <div className="bg-Very-dark-cyan h-[50%] lg:h-full lg:w-[50%] lg:max-w-[300px] w-full rounded-xl flex flex-col justify-start gap-6 p-6">
<div className="flex justify-between mt-6">
    <div>
        <p className="text-white text-sm">Tip Amount</p>
        <p className="text-Grayish-cyan text-xs">/ person</p>
    </div>
    <p className="text-Strong-cyan text-3xl truncate max-w-[50%]">{bill && tip && people?((bill/100) * tip)/people : 0}</p>
</div>
<div className="flex justify-between">
    <div>
        <p className="text-white text-sm">Total</p>
        <p className="text-Grayish-cyan text-xs">/ person</p>
    </div>
    <p className="text-Strong-cyan text-3xl truncate max-w-[50%] max-h-[50px]">{bill && people? bill/people : 0}</p>
</div>
<button className="w-auto h-10 bg-Strong-cyan rounded-[5px] mt-auto hover:bg-opacity-80" onClick={reset}>RESET</button>
        </div>
    )
}