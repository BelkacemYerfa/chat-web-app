import * as yup from "yup" ; 
import {useForm} from 'react-hook-form' ; 
import { yupResolver } from "@hookform/resolvers/yup";
import {motion} from 'framer-motion'
export const AddChannel = ({ ChangeToggleState , newChannel})=>{
  const schema = yup.object().shape({
   ChannelName : yup.string().max(20).min(5).required('') ,
   Description : yup.string().max(150) 
  })
  const {register , handleSubmit , formState : {errors}} = useForm({
    resolver : yupResolver(schema)
  })
  const onSubmitValue = (data )=>{
    console.log(data) ;
    if(data.ChannelName !== '' || ' ' || undefined ||null ) {
      newChannel(data.ChannelName)
    } 
  }
 return(
 <div 
  className="overlay">
    <motion.div 
     initial = {{ y : 30}}
     animate={{y : 0}}
    className="ChannelContainer">
    <h1 className="TitleComp">
      New Channel
    </h1>
    <form action="" className="Format" onSubmit={handleSubmit(onSubmitValue)}>
     <input type="text" className="InputChannel" placeholder="Channel name" {...register('ChannelName')} />
     {errors?.ChannelName ? (<p className='error'>{errors.ChannelName?.message}</p>) :null} 
     <textarea
      placeholder="Enter Description"
      className="TextAreaChannel"
     style={{
      resize : "none"
     }} {...register("Description")}></textarea>
     {errors?.Description ? (<p className='error'>{errors.Description?.message}</p>) :null} 
      <div className="BtnSHolder">
       <motion.button 
        whileTap={{scale:.9}}
        onClick={()=>{ChangeToggleState(false)}}
        className="CreateBtn">
        Create
       </motion.button>
       <motion.div
        whileTap={{scale:.9}}
        onClick={()=>{ChangeToggleState(false)}}
        className="CancelBtn">
        Cancel
       </motion.div>
      </div>
    </form>
  </motion.div>
 </div>
 )
}