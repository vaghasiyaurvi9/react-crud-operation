import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Data from './Data';

<link rel="stylesheet" href="sweetalert2/dist/sweetalert2.css"></link>

const Adddata = () => {
    let history =useNavigate();

    const [name,setname] = useState();
    const [email,setemail] = useState();
    const [password,setpassword] = useState();

    const submitdta = () =>
    {
        let id=Data.length+1;
        Data.push({id,name,email,password})
        console.log(Data);
     

        history('/');
      }
  return (
    <div>

<form action="">

Name: <input type="text" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/> <br /> <br />
email: <input type="text" name="email" value={email}  onChange={(e)=>{setemail(e.target.value)}}/> <br /> <br />
password: <input type="text" name="password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}/> <br /> <br />
<input type="button"  value="submit" onClick={()=>{submitdta()}}/>

</form>
      
    </div>
  )
}

export default Adddata
