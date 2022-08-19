import {useEffect} from "react";
import {GET} from "./GetData";
const App = () =>{

  async function getData (){
    const {name} = await GET();
    console.log(name)
  }
useEffect(()=> {
getData()
},[])

  return (
  <div className ="App">

  </div>
  );
}

export default App;
