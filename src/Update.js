import React, { useEffect, useState } from 'react'
import Data from './Data';
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {
  let history = useNavigate();

  var id = useParams();
  // console.log(id.id);

  // console.log(id);
  const [name, setnameedit] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  useEffect(() => {

    if (id) {

      let id_data = Data.filter((item) => {
        if (item.id == id.id) {
          return item;
        }
      })
      console.log(id_data);
      console.log(id_data[0].name);


      setnameedit(id_data[0].name);
      setemail(id_data[0].email);
      setpassword(id_data[0].password);

    }

  }, [id])


const updatedata = (e) => {
    e.preventDefault();


    Data.map((e) => {

      if (e.id == id.id) {
        e.name = name;
        e.email = email;
        e.password = password;


      }
    })

    history('/');


  }



  return (
    <div>
      <form action="">

        <div>
          <label htmlFor="">name:
            <input type="text" value={name} name="nameedit" onChange={(e) => setnameedit(e.target.value)} />

          </label>
        </div>

        <br /><br />
        <div>
          <label htmlFor="">email:
            <input type="text" value={email} name="email" onChange={(e) => setemail(e.target.value)} />

          </label>
        </div>
        <br /><br />
        <div>
          <label htmlFor="">password:
            <input type="text" value={password} name="password" onChange={(e) => setpassword(e.target.value)} />

          </label>
        </div>
        <br /><br />
        <div>
          <input type="submit" value="update" onClick={(e) => { updatedata(e) }} />
        </div>
      </form>

    </div>
  )
}

export default Update
