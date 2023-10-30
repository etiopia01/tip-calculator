import { useState } from 'react'

import './App.css'
import InputBill from './components/InputBill'
import InputTip from './components/InputTip'
import InputPeople from './components/InputPeople'
import Output from './components/Output'

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
    <>
    <div className="text-Dark-grayish-cyan tracking-[0.5em] text-lg">
    <h1>SPLI</h1>
    <h1>TTER</h1>
    </div>
    <div className="bg-white w-[700px] h-auto rounded-2xl p-6 flex gap-10">
      <div className='w-[50%] h-full p-3 flex flex-col gap-6 justify-between'>
        <InputBill getBill={getBill}/>
        <div>
        <p className="text-Dark-grayish-cyan text-xs">Select tip %</p>
        <div className='flex flex-wrap gap-4 mt-2'>
            <InputTip value={5} getTip={getTip}/>
            <InputTip value={10} getTip={getTip}/>
            <InputTip value={15} getTip={getTip}/>
            <InputTip value={25} getTip={getTip}/>
            <InputTip value={50} getTip={getTip}/>
            
        </div>
    </div>
    <InputPeople getPeople={getPeople}/>
      </div>
      <Output people={people} tip={tip} bill={bill} reset={reset}/>
    </div>
    </>
  )
}

export default App
