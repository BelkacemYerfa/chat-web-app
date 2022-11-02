import { SearchForm } from '../Form/SearchForm';
import testImage from '../Images/photo-1511367461989-f85a21fda167.jpg' ;
import { useState , useEffect } from 'react';

export const Search = ({childToParent , toggle})=>{
  const [newToggle , setNewToggle] = useState(false) ; 
 const HandleToggle = ()=>{
  setNewToggle(!newToggle)
 }
 useEffect(() => {
   childToParent(newToggle)
 }, [newToggle])
 
 return(
  <div className="SearchSection" style={{
    translate : toggle ? '0%' : '-120%' , 
    transition : 'all .35s ease-in-out'
  }} >
     <div className="Nav-Section">
       <div className='titleHolder'>
        <h2 className="title">
         Search 
        </h2>
       </div>
     <div className='BtnHolder'>
     <div className="AddBtn">
         <div className="Line"></div>
         <div className="Line Child"></div>
       </div>
       <div className='AddBtn DeleteBtn' onClick={HandleToggle}>
         <div className="Line LineDelete"></div>
         <div className="Line LineDelete2"></div>
       </div>
     </div>
     </div>
     <div className='SearchForm'>
       <SearchForm />
     </div>
     <div className='Nav-Section UserSection'>
      <div className='UserInfo'>
      <img src={testImage} className='UserProfileImage' alt="TestPic" height={100} width={70} />
       <h3 className='UserName'>
         Username
       </h3>
      </div>
       <div className="AddBtn UserDropDown">
         <div className="Line rotation"></div>
         <div className="Line rotation2"></div>
       </div>
     </div>
  </div>
 ) ; 
}