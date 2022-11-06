import {useForm } from 'react-hook-form' ; 
import * as yup from 'yup' ; 
import {yupResolver} from '@hookform/resolvers/yup' ; 

export const SearchForm = ()=>{
 const schema = yup.object().shape({
  Search : yup.string().required('') 
 })
 const {register , handleSubmit} = useForm({
  resolver : yupResolver(schema)
 })
 const onSearch = (data)=>{
  console.log(data)
 }
 const ChannelArray = [{
   ChannelName : 'Welcome' , 
   Logo : null , 
 }]
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
              {elem.Logo !== null ? (<img src={elem.Logo} alt='ChL' />) : (<div className='Shape'>
               <h3 className='Name' >
                {elem.ChannelName[0]}
               </h3>
              </div>) }
             </div>
             <div className='ChannelInfo'>
              <h3 className='ChannelName'>
               {elem.ChannelName}
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