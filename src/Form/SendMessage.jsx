import { useForm} from 'react-hook-form' ; 
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {motion} from 'framer-motion' ; 
import axios from "axios";
import { useState } from 'react';
import { APIKey } from '../Config/EmojiAPi';
export const SendMessage = ()=> {
 const schema = yup.object().shape({
  Message : yup.string('').min(1).max(250).required('') , 
 })
 const {register , handleSubmit} = useForm({
  resolver : yupResolver(schema) 
 }) ; 
 const [DropPredict , setDropPredict] = useState(false) ; 
 const [EmoJiList , setEmoJiList] = useState([]) ; 
 const [DropUploading , setDropUploading] = useState(false) ;
 const [FileSlider , setFileSlider] = useState(false) ; 
  document.body.addEventListener('click' , ()=>{
    setDropPredict(false) ;
   }) ;
 const onHandleMessage = (data)=>{
  console.log(data) ; 
  axios
  .get(`https://emoji-api.com/emojis?search=${data.Message.slice(1,data.Message.lenght)}&access_key=${APIKey}`)
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
const [ImageUploading , setImageUploading]= useState([]) ; 
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
       <label htmlFor='FileID' className='FileHolder'>
         <div className='InputStyle'>
           <span className='material-symbols-outlined'>
            upload
           </span>
           <h3 className='textImage'>
            upload an image
           </h3>
         </div>
         <input type="file" id='FileID' 
         onChange={(e)=>{      
          //U can use 2 ways e.file or e.target.files and this is an array 
          //to specify the file U can use and index 
          //EXMP : e.target.files[0] ;
           if(e.target.files[0] !== null || undefined) {
            setDropUploading(false) ; 
            setFileSlider(true)
            let newImage = URL.createObjectURL(e.target.files[0]) ; 
            setImageUploading(ImageUploading => [...ImageUploading , newImage])
            console.log(ImageUploading)
           }
         }} />
       </label>
      </motion.div>
    )
   }
   {
    FileSlider && (
      <div className='ImageContainer'>
        <div className='ImageSettings group'>
          <motion.div 
           whileTap={{scale : .9}}
           onClick={()=>{
            setImageUploading([]) ; 
            setFileSlider(false)
           }}
          className='DeleteImageBtn'>
          <span 
           className='material-symbols-outlined '>
            delete
           </span>
           <h3 
           className='TextInfo'>
            Delete All
           </h3>  
          </motion.div>
        </div>
        <div className='ImageCont'>
        {
          ImageUploading.map(elem =>(
            <div className='HolderImage' >
              <div className='ImgSett group'>
               <div className='DeleteIndexImageBtn'>
                 <h3 className='textSett'>
                  Delete Image
                 </h3>
               </div>
               <div
                onClick={()=>{
                  for(let i=0 ; i<ImageUploading.length ; i++){
                    if(ImageUploading[i]=== elem && i === 0){
                      setImageUploading(ImageUploading.slice(1 , ImageUploading.length))
                    }
                    else if(ImageUploading[i] === elem){
                      setImageUploading(ImageUploading.splice(i , 1))
                    }
                    if(ImageUploading.length === 1){
                      setImageUploading(ImageUploading.slice(1 , ImageUploading.length))
                      setFileSlider(false)
                    }
                  }
                  console.log(ImageUploading)
                }}
               className='IconHolder'>
               <span className='material-symbols-outlined'>
                delete
               </span>
               </div>
              </div>
             <img className='UploadedImage' src={elem} alt="Just a Pic" />
            </div>
          ))
         }
         <div className='NoNeed'></div>
        </div>      
      </div>
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
