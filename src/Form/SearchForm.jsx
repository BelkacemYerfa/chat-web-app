import {useForm } from 'react-hook-form' ; 
import * as yup from 'yup' ; 
import {yupResolver} from '@hookform/resolvers/yup' ; 
import { useEffect, useState } from 'react';

export const SearchForm = ({channelData})=>{
 const schema = yup.object().shape({
  Search : yup.string().required('') 
 })
 const {register , handleSubmit} = useForm({
  resolver : yupResolver(schema)
 })
 const onSearch = (data)=>{
  console.log(data)
 }
 console.log(channelData)
 const [ChannelArray , setChannelArray] = useState(['welcome'])
  useEffect(()=>{
   if(channelData !== '') {
      ChannelArray.push(channelData); 
      console.log(ChannelArray)
   }
  })
 return(
  <div className='MainSearch'>
   <form onSubmit={handleSubmit(onSearch)} className='SearchForm' >
     <span className="material-symbols-outlined SearchIcon">
       search
     </span>
     <input className='SearchInput' type="text" placeholder='Search ...' {...register('Search')} />
  </form>
  <div className='MainChannels'>
   {
      ChannelArray.map((elem)=>{
         return(
            <div className='Channel' key={elem}>
             <div className='ShapeLogo'>
              <div className='Shape'>
               <h3 className='Name' >
                {elem}
               </h3>
              </div>
             </div>
             <div className='ChannelInfo'>
              <h3 className='ChannelName'>
               {elem}
              </h3>
             </div>
            </div>
         );
      })
   }
  </div>
  </div>
 );
}