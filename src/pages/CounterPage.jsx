import { useState } from "react";
import { Button } from "../components/Button.jsx"
import { Message } from "../components/Message.jsx"

export const CounterPage =()=>{
    // Hook (state)
    const[count , setCount]= useState(0)
    const Update=(val)=>{   
        if(val==="+")
            setCount(count+1)
        else{
            setCount(count-1);
        }
        console.log("Count is ",count);
    }
    return(<div className="container">
        <Message msg="Counter App" className="alert alert-danger"/>
        <Message msg="The counter value is " className="alert alert-success" value={count}/>
        <Button fn ={Update} classname='alert alert-success' val="+"/>
        <Button fn ={Update} classname='alert alert-danger' val="-"/>
    </div>)
}