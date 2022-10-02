import React from "react";

// const classBotClasses = {
//   Assault: "icon military",
//   Defender: "icon shield",
//   Support: "icon plus circle",
//   Medic: "icon ambulance",
//   Witch: "icon magic",
//   Captain: "icon star",
// };

function BotCard(props) {
  let { bot } = props;
  let classBot;

  switch (bot.bot_class) {
    case "Assault":
      classBot = <i className="icon military" />;
      break;
    case "Defender":
      classBot = <i className="icon shield" />;
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
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => props.includeBot(bot)}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {classBot}
            {/* //             <i className={classBotClasses[bot.bot_class]} /> */}
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
