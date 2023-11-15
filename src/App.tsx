import { useState } from 'react'
import './App.css'
import InputBill from './components/InputBill'
import InputPeople from './components/InputPeople'
import Output from './components/Output'
import Tips from './components/Tips'

function App() {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [tip, setTip] = useState(0)

  const getBill = (value:number) => {
    setBill(value)
  }
 
const getTip = (value:number) => {
  setTip(value)
}
const getPeople = (value:number) => {
  setPeople(value)
}
const reset = ()=> {
  setBill(0)
  setPeople(1)
  setTip(0)
}

  return (
    <div className='p-20 flex flex-col items-center gap-6 h-[100vh]'>
    <div className="text-Dark-grayish-cyan tracking-[0.5em] text-lg">
    <h1>SPLI</h1>
    <h1>TTER</h1>
    </div>
    <div className="bg-white w-full h-[600px] lg:flex-row lg:w-[700px] lg:h-[350px] rounded-2xl p-6 flex flex-col gap-10">
      <div className='w-full h-[50%] lg:h-full lg:w-[50%]  p-3 flex flex-col gap-6 justify-between'>
        <InputBill getBill={getBill} bill={bill}/>
        <div>
        <p className="text-Dark-grayish-cyan text-xs">Select tip %</p>
       <Tips getTip={getTip}/>
    </div>
    <InputPeople getPeople={getPeople} people={people}/>
      </div>
      <Output people={people} tip={tip} bill={bill} reset={reset}/>
    </div>
    </div>
  )
}

export default App
