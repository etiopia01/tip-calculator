export default function InputPeople({getPeople}) {
    return (
    <div className="flex flex-col gap-2 ">
        
        <label htmlFor="people" className="text-Dark-grayish-cyan text-xs">Number of People</label>
        <input type="number" 
        name="people" 
        id="people" 
        placeholder="1"
        onChange={(e)=> getPeople(parseInt(e.target.value))} 
        className="appearance-none outline-none bg-Very-light-grayish-cyan rounded-sm p-1 text-Very-dark-cyan placeholder:text-left text-right input-people"/>
       
    
    </div>
    )
    }