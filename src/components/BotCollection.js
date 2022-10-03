 import React from "react";
 import BotCard from "./BotCard";


 function BotCollection(props) {
   // Your code here
   function renderBots ()  {
	return props.bots.map(bot => {
		return <BotCard key={bot.id} bot={bot} includeBot={props.includeBot}/>
	})
}

   return (
     <div className="ui four column grid">
       <div className="row">
         {/*...and here..*/}
       {/* <div className="heading"><p ><strong>Collection of all bots</strong></p></div> */}
		 {renderBots()}
       </div>
     </div>
   );
 }

 export default BotCollection;
