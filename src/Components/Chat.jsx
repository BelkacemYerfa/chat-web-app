import { SendMessage } from "../Form/SendMessage";
import { useEffect , useState} from 'react' ; 
import { motion } from 'framer-motion' ; 
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
  <motion.div 
   initial={{translateY : '10%' , opacity : 0}}
   animate={{translateY : '0%' , opacity : 1}}
   transition={{duration : .5 , delay : .45}}
  className="ChatChannel " style={{
    zIndex : !newToggle ? '30' : '1' , 
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
  </motion.div>
 );
}