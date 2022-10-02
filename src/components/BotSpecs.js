 import React from "react";

// const classBotClasses = {
//   Assault: "icon military",
//   Defender: "icon shield",
//   Support: "icon plus circle",
//   Medic: "icon ambulance",
//   Witch: "icon magic",
//   Captain: "icon star",
// };
 function BotSpecs(props) {
  let { bot } = props;
  let classBot;
  switch (bot.bot_class) {
    case "Assault":
      classBot = <i className="icon large circular military" />;
      break;
    case "Defender":
      classBot = <i className="icon large circular shield" />;
      break;
    case "Support":
      classBot = <i className="icon plus circle" />;
        break;
    case "Medic":
      classBot = <i className="icon ambulance" />;
        break;
    case "Witch":
      classBot = <i className="icon magic" />;
        break;
    case "Captain":
      classBot = <i className="icon star" />;
        break;
    default:
      classBot = <div />;
  }
   return (
     <div className="ui segment">
       <div className="ui two column centered grid">
         <div className="row">
           <div className="four wide column">
             <img
               alt="oh no!"
               className="ui medium circular image bordered"
               src={bot.avatar_url}
             />
           </div>
           <div className="four wide column">
             <h2><strong>Name: {bot.name}</strong></h2>
             <p>
               <h4><strong>Catchphrase: </strong></h4>
               {bot.catchphrase}
             </p>
             <h4><strong>Class: {bot.bot_class} {classBot}</strong></h4>
{/* //               <i className={classBotClasses[bot.bot_class]} /> */}
             <br />
             <div className="ui segment">
               <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                     <i className="icon large circular red heartbeat" />
                     <strong>{bot.health}</strong>
                   </div>
                   <div className="column">
                     <i className="icon large circular yellow lightning" />
                     <strong>{bot.damage}</strong>
                   </div>
                   <div className="column">
                     <i className="icon large circular blue shield" />
                     <strong>{bot.armor}</strong>
                   </div>
                 </div>
               </div>
             </div>
             <button
               className="ui button fluid"
               onClick={() =>props.clearBotSpecific() }
//                 console.log("connect this to a function that shows all bots")
             >
               Go Back
             </button>
             <button
               className="ui button fluid"
               onClick={() =>props.includeBot(bot)}
//                 console.log("connect this to a function that adds this bot to your bot army list")
               >
                {bot.owned ? "Remove From My Army" : "Enlist"}
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 }

 export default BotSpecs;
