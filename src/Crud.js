
import { Link, useNavigate } from 'react-router-dom';
import Data from './Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const Crud = () => {
  let history = useNavigate();

  const [value,setvalue] = useState('');
  const[alldata,setalldata] =useState(Data);
  const [filterdata,setfilterdata] =useState([])


  const deleteData = (id) => {

    // alert(id);
    Data.map((value, index) => {
      if (value.id === id) {
        Data.splice(index, 1);



        console.log(Data);

        history('/');

        toast.success("delete item suceessfully..", {
          position: "top-center",
          autoClose: 1000,
          theme: "colored",
        })
      }
    })

  }


  const searcharrayofitem = (item) => {
    setvalue(item);
   
    item = item.toLowerCase();
    let Datasearch = alldata.filter((fil) => fil.name.toLowerCase().includes(item));

    console.log("datasearch....", Datasearch);
    setfilterdata(Datasearch);
  }


  return (
    <div>
      {/* <Crud/> */}
      <label htmlFor="">Search Here  </label>
      <input type="text" placeholder='search here....' onChange={(e) => {searcharrayofitem(e.target.value) }}  />



      <table border="">
        <thead>
          <tr>
            <td>id</td>
            <td>name:</td>
            <td>email:</td>
            <td>password</td>
            <td>delete</td>
            <td>update</td>

          </tr>
        </thead>

        <tbody>

         {
          value.length > 0 ? 
          
        filterdata.map((getData, key) => {

              return (
                <tr key={key}>
                  <td>{getData.id}</td>
                  <td>{getData.name}</td>
                  <td>{getData.email}</td>
                  <td>{getData.password}</td>
                  <td><button onClick={() => {deleteData(getData.id) }} >delete</button></td>
                  <td><Link to={`/${getData.id}`}><button >update</button></Link></td>



                </tr>
              )
            }) :
            alldata.map((getData, key) => {

              return (
                <tr key={key}>
                  <td>{getData.id}</td>
                  <td>{getData.name}</td>
                  <td>{getData.email}</td>
                  <td>{getData.password}</td>
                  <td><button onClick={() => {deleteData(getData.id) }} >delete</button></td>
                  <td><Link to={`/${getData.id}`}><button >update</button></Link></td>



                </tr>
              )
            }) 


          
           
          
        }
        </tbody>



      </table>



      <Link to="/adddata">
        Add Data
      </Link>



      <ToastContainer />
    </div>
  )
}

export default Crud
