import {useForm} from 'react-hook-form' ; 
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {motion} from 'framer-motion' ; 

export const SendMessage = ()=>{
 const schema = yup.object().shape({
  Message : yup.string('').min(1).max(250).required('') , 
 })
 const {register , handleSubmit} = useForm({
  resolver : yupResolver(schema) 
 }) ; 
 const onHandleMessage = (data)=>{
  console.log(data)
 }
 return(
  <form action="" onSubmit={handleSubmit(onHandleMessage)} className='SearchForm ChangeFormat'>
   <motion.div
    whileTap={{scale : 0.9}}
    className='EmojiBtn'>
    <span className="material-symbols-outlined"
    >
     mood
    </span>
   </motion.div>
   <input type="text" className='SearchInput SendInput' placeholder="Type a message here " {...register('Message')} />
   <motion.div 
    whileTap={{scale : 0.9}}
   className='SendBtn'>
    <span   
    className="material-symbols-outlined">
     send
    </span>
   </motion.div>
  </form>
 );
}