var express = require('express');
var router = express.Router();
const model = require('../schema/registerdataschema');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



/* GET register data. */
router.post('/registerdata',async function(req, res, next) {

   const {name,email,contact,password,cpassword} = req.body;

   if(!name || !email || !contact || !password || !cpassword)
   {
    res.status(422).json({ error :  "fill the all data"})
   }


  try {
    const preuser = await model.findOne({email:email});
    console.log(preuser);
  
      if(preuser)
      {   
        res.status(422).json({ error: "this user is already present"})
      }else if(password !== cpassword)
      {
        res.status(422).json({ error: "password  and cpassword are not match"})
      }else{
            const registerdata =  new model({ name, email,contact,password,cpassword});
        const register  =  await registerdata.save();
        console.log(register);
            res.status(201).json(register);

      }

 
  
  } catch (error) {
    res.json({
      error
    })
    
  }



});

router.post('/logindata' ,async (req,res,next)=>{

  const {email,password} = req.body;


  if(!email || !password)
  {
    res.send(400).json({"error":"please fill the all data"})
  }

  try {
    const userlogin = await model.findOne({email:email});
    console.log(userlogin);
    if(userlogin)
    {
      const passwordmatch =await bcrypt.compare(password,userlogin.password);
      // console.log(passwordmatch);



      if(!passwordmatch)
      {

        res.status(400).json({error:"not valid data"});
      }else{
        res.status(201).json({message:"password match",userlogin});
      }
    }else{
      res.status(400).json({error:"not valid data"});

    }
    
  } catch (error) {
    res.status(400).json({error:"invalid detail"})
  }

})


router.get('/', async function(req,res,next){

  var page_no = req.query.page;

  try {

    let limit_page =2;
    let skip_data =((page_no - 1 ) * limit_page);

    let data = await model.find().skip(skip_data).limit(limit_page);
    res.status(200).json({
      status:"success",
      data
    })

    
  } catch (error) {
    
    res.json({
      error
    })
  }

})



module.exports = router;
