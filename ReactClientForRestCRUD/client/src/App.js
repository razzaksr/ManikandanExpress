import { useEffect, useState } from "react";
import { greetings } from "./API/contact";


function App() {
  const[message,setMessage]=useState('Razak')
  useEffect(()=>{
    getGreet()
  },[])


  const getGreet=async()=>{
    const sort=await greetings()
    alert(sort.data+" in use effect")
    setMessage(()=>sort.data)
  }

  return (
    <>
      <h1>{message}</h1>
    </>
    );
}

export default App;
