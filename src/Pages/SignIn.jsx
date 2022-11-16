import { useState } from 'react';
import { BubblyLink } from 'react-bubbly-transitions' ; 
import {motion} from 'framer-motion' ; 
import { useNavigate } from 'react-router-dom';
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword } from 'firebase/auth';
import * as yup from 'yup' ;
import {useForm} from 'react-hook-form' ; 
import {yupResolver} from '@hookform/resolvers/yup' ; 
import {app } from '../Config/firebase' ;
import { GoogleAuthProvider , signInWithPopup } from 'firebase/auth' ; 
import googlePic from '../Images/2991148 (1).png';
const ConnectBtn = ()=>{
  return(
    <motion.button 
    type='submit'
    className='CreateBtn'
    whileTap={{scale : .9}}
    >
      Connect
    </motion.button>
  ) ; 
}

const GoogleBtn = ({setAuth})=>{
  let auth = getAuth()
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider() ; 
  return(
    <div className='BtnGHolder'>
    <p className='signInMethod'>
      Or signIn with google
    </p>
    <motion.div    
    whileHover={{scale:1.05}}
    whileTap={{scale:.95}} 
    onClick={async()=>{
      try{
        let userRes = await signInWithPopup(auth , googleProvider) ;
        if(userRes?.user?.uid){
          navigate('/Home') ; 
          setAuth(userRes?.user)
        }
        else{
          navigate('/Redirect')
        }
      } catch{
        alert('some Errors')
      }
    }}
    className='GoogleBtnHolder'>
     <img src={googlePic} alt="" className='GoogleIcon' />
     <p>
      Google
     </p>
    </motion.div>
    </div>
  );
}

export const Account = ({setAuth})=>{
 const [ExistedAccount , setExistedAccount] = useState(true) ;
 const HandleAccount = ()=>{
  setExistedAccount(!ExistedAccount)
 } ; 
 const schema1 = yup.object().shape({
  Username : yup.string().max(10).min(5).required() ,
  Email : yup.string().email().required() ,
  Password : yup.string().max(10).min(5).required() , 
  ConfirmPassword : yup.string().oneOf([yup.ref('Password')], 'Passwords must match').required() 
 }) ; 
 const schema2 = yup.object().shape({
  Email : yup.string().email().required() ,
  Password : yup.string().max(10).min(5).required() , 
 }) ; 
 let schema 
  if(ExistedAccount){
   schema = schema2
  } else{
   schema = schema1 ; 
  }
 const {register , handleSubmit , formState : {errors}} = useForm({
  resolver : yupResolver(schema) 
 }) ; 
 const navigate = useNavigate();
 const [newAccount , setNewAccount] = useState({}) ; 
 let auth = getAuth(app) ;
 const autho = true ;
 const handleSubmition = (data)=>{
  if(schema === schema1){
    createUserWithEmailAndPassword(auth , data?.Email , data?.Password)
    .then((res)=>{
      if(res?.user?.uid){
        navigate('/Home')
        setAuth(res?.user)
      }
    }).catch(err => {alert(err)})  
  } else if (schema === schema2){
    signInWithEmailAndPassword(auth , data?.Email , data?.Password)
    .then((res)=>{
      if(res?.user?.uid){
        console.log(res?.user)
        navigate('/Home')
        setAuth(res?.user)
      }
    }).catch(err => {alert(err)})
  
  }
 }

 return(
  <div className="SignContainer" >
   {ExistedAccount && (<>
    <motion.div 
    initial = {{ y : '5%' , opacity : 0}}
    whileInView={{y : '0%' , opacity : 1}}
   className='ChannelContainer'>
    <h1 className='title'>
      Welcome
    </h1>
    <form 
     onSubmit={handleSubmit(handleSubmition)}
    className='Format' action="">
      <div className='UserInputHolder'>
       <span class="material-symbols-outlined icon">
        mail
       </span>
       <input type="email" className='InputChannelUpdated' placeholder='Enter Your Email' {...register('Email')} />
      </div>
      {errors?.Email ? (<p className='error'>{errors?.Email?.message}</p>) : null}
      <div className='UserInputHolder'>
       <span class="material-symbols-outlined icon">
        lock
       </span>
       <input type="password" className='InputChannelUpdated' placeholder='Enter your Password' {...register('Password')} />
      </div>
      {errors?.Password ? (<p className='error'>{errors?.Password?.message}</p>) : null}
     
        <ConnectBtn />
     
      <p>
        You don't have an account SignIn here : 
      </p>
      <div onClick={HandleAccount} className='AccountSetting'> Sign In </div>
    </form>
   </motion.div>
    <GoogleBtn setAuth={setAuth} />
   </>
   )}
    {!ExistedAccount && (
      <>
       <motion.div 
     initial = {{ y : '5%' , opacity : 0}}
     whileInView={{y : '0%' , opacity : 1}}
    className='ChannelContainer'>
     <h1 className='title'>
      Welcome
     </h1>
      <form action=""
       onSubmit={handleSubmit(handleSubmition)}
      className='Format' >
      <div className='UserInputHolder'>
       <span class="material-symbols-outlined icon">
        person
       </span>
       <input type="text" className='InputChannelUpdated' placeholder='Enter Your Username' {...register('Username')} />
      </div>
      {errors?.Username ? (<p className='error'>{errors?.Username?.message}</p>) : null}
      <div className='UserInputHolder'>
       <span class="material-symbols-outlined icon">
        mail
       </span>
       <input type="email" className='InputChannelUpdated' placeholder='Enter your Email' {...register('Email')}/>
      </div>
      {errors?.Email ? (<p className='error'>{errors?.Email?.message}</p>) : null}
      <div className='UserInputHolder'>
       <span class="material-symbols-outlined icon">
        lock
       </span>
       <input type="password" className='InputChannelUpdated' placeholder='Enter Your Password' {...register('Password')} />
      </div>
      {errors?.Password ? (<p className='error'>{errors?.Password?.message}</p>) : null}
      <div className='UserInputHolder'>
       <span class="material-symbols-outlined icon">
        visibility
       </span>
       <input type="password" className='InputChannelUpdated' placeholder='Confirm your Password' {...register('ConfirmPassword')} />
      </div>
      {errors?.ConfirmPassword ? (<p className='error'>{errors?.ConfirmPassword?.message}</p>) : null}
      
        <ConnectBtn />
      
      <p>
        You have an account already LogIn here :
      </p>
      <div onClick={HandleAccount} className='AccountSetting'> Log In </div>
    </form>
    </motion.div>
    <GoogleBtn setAuth={setAuth} />
      </>
    )}
    
  </div>
 )
}