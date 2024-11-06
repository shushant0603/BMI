import { useState } from 'react'
import './App.css'

function App() {
  // making state of our application
  const [weight, setweight] = useState(0);
  const  [height, setheight] = useState(0);
  const [message,setmessage]=useState("");
  const [bmi,setbmi]=useState(0);

  //logic
let calBMI =(event)=>{
         event.preventDefault();
         if(weight==0 || height==0){
          alert("please enter a valid weight & height");
         }
         else{
          let bmi =(weight/((height*height))*703);
          setbmi(bmi.toFixed(1));

          //
          if(bmi<25){
            setmessage("you are underweight");
          }else if(bmi>=25 && bmi<30){
            setmessage("you are a healthy weight person");
          }
          else{
            setmessage("you are overweight");
          }
         }
}
const reload = () => {
  setweight(0);
  setheight(0);
  setbmi(0);
  setmessage("");
};


  return (
    <>
      <div className='App'>
        <div className='container'>
          <h2>BMI Calculator</h2>
          <form onSubmit={calBMI}>
            <div>
              <label>weight(ibs)</label>
              <input type="text" placeholder='Enter weight value' value={weight} onChange={(event)=>setweight(event.target.value)} />
            </div>

            <div>
              <label>height (in)</label>
              <input type="text" placeholder='Enter height value' value={height} onChange={(event)=>setheight(event.target.value)} />
            </div>

            <div>
              <button className='btn' type="submit" >Submit</button>
              <button className='btn btn-outline' onClick={reload} type="submit">Reload</button>
            </div>

            <div className='center'>
              <h3>Your BMI is:{bmi}</h3>
              <p>{message}</p>
            </div>

          </form>
        </div>
      </div>

    </>
  )
}

export default App
