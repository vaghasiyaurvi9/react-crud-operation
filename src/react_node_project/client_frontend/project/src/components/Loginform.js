import React, { useState } from 'react'
import axios from 'axios';


const Loginform = () => {
    const [email,setemail] =useState('');
    const [password,setpassword]=useState('');


    const submitdata = () =>{
        axios.post('logindata',{email,password})
        .then(function (response) {
            // handle success
            console.log(response.data);
            // seterror(response.data)
           
        });

    }
  return (
    <div>

        <form action="">
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" onChange={(e)=>{setemail(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" onChange={(e)=>{setpassword(e.target.value)}} />
            </div>
            <div>
                <input type="button" onClick={()=>{submitdata()}}  value="submit"/>
            </div>
        </form>
      
    </div>
  )
}

export default Loginform
