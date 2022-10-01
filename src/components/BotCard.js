import React from "react";

function BotCard(props) {
  let { bot } = props;

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
            {bot.name}
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
