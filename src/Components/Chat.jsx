import { SendMessage } from "../Form/SendMessage";
import { useEffect , useState} from 'react'
export const Chat = ({childToParent})=>{
 const ChannelName = 'Welcome' ; 
 const [newToggle , setNewToggle] = useState(true) ; 
 const HandleToggle = ()=>{
  setNewToggle(!newToggle)
 }
 useEffect(() => {
   childToParent(newToggle)
 }, [newToggle])
 
 return(
  <div className="ChatChannel " style={{
    zIndex : !newToggle ? '30' : '1'
  }}>
   <div className="Nav-Section ChannelSection">
    <div className="toggle" onClick={HandleToggle} >
      <div className=" ChildLine"></div>
      <div className=" ChildLine"></div>
      <div className=" ChildLine"></div>
    </div>
    <h2 className="title titleMoves">
      {ChannelName}
    </h2>
   </div>
   <div className="MainChatSection ">
     <SendMessage />
   </div>
  </div>
 );
}