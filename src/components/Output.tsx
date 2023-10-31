export default function Output({people, tip, bill, reset} : {people:number|undefined; tip:number|undefined; bill:number|undefined; reset:()=> void}) {
    return (
        <div className="bg-Very-dark-cyan h-full w-[50%] rounded-xl flex flex-col justify-start gap-6 p-6">
<div className="flex justify-between mt-6">
    <div>
        <p className="text-white text-sm">Tip Amount</p>
        <p className="text-Grayish-cyan text-xs">/ person</p>
    </div>
    <p className="text-Strong-cyan text-3xl">{bill && tip && people?((bill/100) * tip)/people : 0}</p>
</div>
<div className="flex justify-between">
    <div>
        <p className="text-white text-sm">Total</p>
        <p className="text-Grayish-cyan text-xs">/ person</p>
    </div>
    <p className="text-Strong-cyan text-3xl">{bill && people? bill/people : 0}</p>
</div>
<button className="w-auto h-10 bg-Strong-cyan rounded-[5px] mt-auto" onClick={reset}>RESET</button>
        </div>
    )
}