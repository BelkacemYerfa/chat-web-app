import { SearchForm } from '../Form/SearchForm';
import testImage  from '../Images/photo-1511367461989-f85a21fda167.jpg' ;
import github  from '../Images/github.svg' ;
import { useState , useEffect } from 'react';
import {motion} from 'framer-motion' ; 
import { AddChannel } from '../Form/AddChannComp/AddChannel';
import {Link} from 'react-router-dom' ; 
import {useNavigate} from 'react-router-dom' ; 
import {signOut} from 'firebase/auth'

export const Search = ({childToParent , toggle , auth})=>{
  let navigate = useNavigate() ;  
  const randomNumbersGenerator = ()=>{
    return Math.floor(Math.random() * 10000)
  }
  const [newToggle , setNewToggle] = useState(false) ; 
 const HandleToggle = ()=>{
  setNewToggle(!newToggle)
 }
 useEffect(() => {
   childToParent(newToggle)
 }, [newToggle])
 const [newChannel , setNewChannel] = useState(false) ; 
 const [newData , setNewData] = useState('')
 const CreateChannel = ()=>{
  setNewChannel(true)
 }
  const ChannelToggleHandler = (ToggleData) => {
    setNewChannel(ToggleData);
  }
  const getChannelNewLink = (newChannelData)=>{
    setNewData(newChannelData)
  }
  const [DropSettings , setDropSettings] = useState(false)
  const randomAvatar = ()=>{
    
  }
 return(
  <div className="SearchSection" style={{
    translate : toggle ? '0%' : '-120%' , 
    transition : 'all .45s .4s ease-in-out'
  }} >
    {
      newChannel && (
        <AddChannel ChangeToggleState = {ChannelToggleHandler} newChannel={getChannelNewLink} />
      )
    }
     <div className="Nav-Section">
       <div className='titleHolder'>
        <h2 className="title">
         Search 
        </h2>
       </div>
     <div className='BtnHolder'>
      <motion.div 
       whileTap={{scale:.9}}
       onClick={CreateChannel}
      className="AddBtn">
         <div className="Line"></div>
         <div className="Line Child"></div>
       </motion.div>
       <div className='AddBtn DeleteBtn' onClick={HandleToggle}>
         <div className="Line LineDelete"></div>
         <div className="Line LineDelete2"></div>
       </div>
     </div>
     </div>
     <div className='SearchForm'>
      <SearchForm channelData={newData} />
     </div>
     <div className='Nav-Section UserSection'>
      <div className='UserInfo'>
      <img src={auth?.photoURL !== null ? auth?.photoURL : testImage} className='UserProfileImage' alt="TestPic" height={70} width={70} />
       <h3 className='UserName'>
         {auth?.displayName !== null ? auth?.displayName : 'user'+randomNumbersGenerator() }
       </h3>
      </div>
      {
        DropSettings && (
          <motion.div 
           initial={{y : 15, opacity : 0}}
           whileInView={{y : 0 , opacity : 1}}
          className='UserSettings'>
            <ul className='listChoice'>
              <Link className='LinkHolder'>
               <span class="material-symbols-outlined">
                account_circle
               </span>
               <p>
                My Profile
               </p>
              </Link>
              <Link className='LinkHolder'>
               <img src={github} className='githubHolder' alt="github profile pic" />
               <p>
                My Github
               </p>
              </Link>
            </ul>
            <div className='LineSeparator'></div>
            <motion.div
            whileTap={{scale : .9}}
             onClick={async()=>{
                navigate('/')
                await signOut(auth); 
             }}
            className='LogOutMethod'>
              <span class="material-symbols-outlined">
               logout
              </span>
              <p>
                Log Out
              </p>
            </motion.div>
          </motion.div>
        )
      }
       <div 
        onClick={()=>{
          setDropSettings(!DropSettings)
        }}
       className="AddBtn UserDropDown">
         <div className="Line rotation"></div>
         <div className="Line rotation2"></div>
       </div>
     </div>
  </div>
 ) ; 
}