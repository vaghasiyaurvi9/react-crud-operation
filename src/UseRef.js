import React,{useRef} from 'react'
import Userefchild from './Userefchild';

const UseRef = () => {
    let inputref = useRef();
    function countdata()
    {
        inputref.current.value ="1000";
        inputref.current.style.color="red"
    }
  return (
    <div>
    <Userefchild ref={inputref}/>
    <button onClick={countdata}>click</button>
      

    </div>
  )
}

export default UseRef
