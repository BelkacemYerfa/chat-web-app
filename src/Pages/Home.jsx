import { Chat } from '../Components/Chat';
import { Search } from '../Components/Search';
import {useState} from 'react' ; 

export const Home = ({auth})=>{
 const [data, setData] = useState(Boolean);
  
 const childToParent = (ToggleData) => {
   setData(ToggleData);
   console.log(ToggleData)
 }
 return(
  <>
   <Search toggle={data} auth={auth} childToParent={childToParent}  />
   <Chat childToParent={childToParent} auth={auth} />
  </>   
 )
}