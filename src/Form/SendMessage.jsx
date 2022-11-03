import {useForm} from 'react-hook-form' ; 
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {motion} from 'framer-motion' ; 
import axios from "axios";
import { useState } from 'react';
export const SendMessage = ()=> {
 const schema = yup.object().shape({
  Message : yup.string('').min(1).max(250).required('') , 
 })
 const {register , handleSubmit} = useForm({
  resolver : yupResolver(schema) 
 }) ; 
 const [DropPredict , setDropPredict] = useState(false) ; 
 const [EmoJiList , setEmoJiList] = useState([]) ; 
 const [DropUploading , setDropUploading] = useState(false) 
 const onHandleMessage = (data)=>{
  console.log(data) ; 
  axios
  .get(`https://emoji-api.com/emojis?search=${data.Message.slice(1,data.Message.lenght)}&access_key=${process.env.REACT_APP_WEATHER_API_KEY}`)
  .then((res)=> {
    setEmoJiList(res.data) ;
    if(res && data.Message[0] === ':') {
      setDropPredict(true) ; 
    }
    else {
      setDropPredict(false)
    } 
  }) ; 
}

 return(
  <>
   {
    DropPredict && (
     <div
     className='DropEmoji'>
       {EmoJiList.map(elem =>(
        <div className='SelectorHolder' key={elem}>
          <div 
          className='Selector'
          id={elem}
          onClick={(elem)=>{
            const InputSend = document.getElementById('sendID') ; 
            let valEmoji = document.getElementById(elem) ; 
            InputSend.value += ' ' + valEmoji.textContent ; 
            setDropPredict(false) ;
          }}
         >
          {elem.character}
          </div>
          <p className='ElementSlug'>
             {elem.slug}
          </p>
        </div>
       ))}
      </div>
    )
   }
   {
    DropUploading && (
      <motion.div 
      initial = {{scale : 0}}
      whileInView={{scale : 1}}
      className='DropUploading'>
       <div className='FileHolder'>
         <input type="file" />
       </div>
      </motion.div>
    )
   }
   <form action="" onChange={handleSubmit(onHandleMessage)} className='SearchForm ChangeFormat'>
   <motion.div
    whileTap={{scale : 0.9}}
    onClick={
      ()=>{
        setDropUploading(!DropUploading)
      }
    }
    className='EmojiBtn'>
    <span className="material-symbols-outlined"
    >
     add
    </span>
   </motion.div>
   <input type="text" id='sendID' className='SearchInput SendInput' placeholder="Type a message here " {...register('Message')} />
   <motion.div 
    whileTap={{scale : 0.9}}
   className='SendBtn'>
    <span   
    className="material-symbols-outlined">
     send
    </span>
   </motion.div>
  </form>
  </>
 );
}
