 import React from "react";
 import BotCard from "./BotCard";


 function YourBotArmy(props) {
   //your bot army code here...
   function renderBots ()  {
		return props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} includeBot={props.includeBot}/>
		})
  }

  return (
     <div className="ui segment inverted olive bot-army">
       <div className="ui five column grid">
         <div className="row bot-army-row">
           {/*...and here...*/}
           Your Bot Army
           {renderBots()}
         </div>
       </div>
     </div>
   );
 }

 export default YourBotArmy;
