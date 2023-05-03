
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Registerform = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [contact, setcontact] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    // const [error,seterror] =useState('')

    const submitdata = () => {

        axios.post('registerdata',{name,email,contact,password,cpassword})
            .then(function (response) {
                // handle success
                console.log(response.data);
                // seterror(response.data)
               
            });

            if( !name || !email || !contact || !password || !cpassword )
            {
                toast.warn(' Please Enter all the field', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }


            //  if(422)
            // {
            //     toast.warn(' Please Enter the rigtht Data!', {
            //         position: "top-right",
            //         autoClose: 5000,
            //         hideProgressBar: false,
            //         closeOnClick: true,
            //         pauseOnHover: true,
            //         draggable: true,
            //         progress: undefined,
            //         theme: "light",
            //         });
            // }

           
    }


    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e) => { setname(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => { setemail(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">Contact</label>
                    <input type="contact"  onChange={(e) => { setcontact(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input type="password" onChange={(e) => { setpassword(e.target.value) }} />
                </div>
                <div>
                    <label htmlFor="">cpassword</label>
                    <input type="password" onChange={(e) => { setcpassword(e.target.value) }} />
                </div>
                <div>
                    <input type="button" onClick={() => { submitdata() }} value="submit"/>
                </div>

            </form>

            
            <ToastContainer/>


        </div>
    )
}

export default Registerform
