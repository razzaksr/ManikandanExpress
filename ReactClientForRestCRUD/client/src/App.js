import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { greetings } from "./API/contact";
import Edit from "./Edit";
import Home from "./Home";
import Menu from "./Menu";
import New from "./New";


function App() {
  const[message,setMessage]=useState('Razak')
  useEffect(()=>{
    getGreet()
  },[])


  const getGreet=async()=>{
    const sort=await greetings()
    //alert(sort.data+" in use effect")
    setMessage(()=>sort.data)
  }

  return (
    <>
      {/* <h1>{message}</h1> */}
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={New}/>
        <Route exact path="/edit/:id" component={Edit}/>
      </Switch>
    </>
    );
}

export default App;