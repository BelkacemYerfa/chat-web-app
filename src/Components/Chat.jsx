import { SendMessage } from "../Form/SendMessage";

export const Chat = ()=>{
 const ChannelName = 'Welcome' ; 

 return(
  <div className="ChatChannel ChannelSection">
   <div className="Nav-Section ChannelSection">
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