import React,{forwardRef} from 'react'

const Userefchild = (props,ref) => {
    console.log(ref);
  return (
    <div>
       

    <input type="text" ref={ref} />

      
    </div>
  )
}

export default forwardRef(Userefchild)
