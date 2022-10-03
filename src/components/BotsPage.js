 import React from "react";
 import YourBotArmy from "./YourBotArmy";
 import BotCollection from "./BotCollection";
 import BotSpecs from '../components/BotSpecs'

// function BotsPage() {
//   //start here with your code for step one
class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allBots: [],
      selectBot: undefined,
      query: '',
      filter: 'All'
    }
  }

  componentDidMount(){
    fetch('http://localhost:8002/bots')
    .then(res => res.json())
    .then(bots => this.setBots(bots))
      .then(bots => this.setState({
        allBots: bots
      }))
  }

  setBots = (bots) => {
    return bots.map(bot => {
      bot.owned = false
      return bot
    })
  }

  botClicked = (bot) => {
    this.setState({
      selectBot: bot
    })
  }

  //  deleteBot = (selectBot)=> {
  //   if(bot.id === selectBot.id){
  //     fetch (`  http://localhost:8002/bots/${id}`, {
  //       method: "DELETE"
  //     ...
  //   }else{
  //   }
  //   }
  // }

  includeBot = (selectBot) => {
    let x = this.state.allBots.map(bot => {
      if(bot.id === selectBot.id){
        bot.owned = !bot.owned
        return bot
      }else {
        return bot
      }
    })
    this.setState({
      allBots: x
    })
  }

  availableBots = () => {
    let freeBots = []
    this.state.allBots.map(bot => {
      if(bot.owned === false){
        freeBots.push(bot)
      }
    })
    if(this.state.filter !== 'All'){
      freeBots = freeBots.filter(bot =>
        bot.bot_class == this.state.filter
      )
    }
    if(this.state.query){
      freeBots = freeBots.filter(bot=>
        bot.name.toLowerCase().includes(this.state.query.toLowerCase())
      )
    }
    return freeBots
  }

  botSelectedArmy = () => {
    let ownedBots = []
    this.state.allBots.map(bot => {
      if(bot.owned === true){
        ownedBots.push(bot)
      }
    })
    let filtered = ownedBots.filter(bot=> {
      return bot.name.toLowerCase().includes(this.state.query.toLowerCase())
    })
    return filtered
  }

  clearBotSpecific = () => {
    this.setState({
      selectBot: undefined
    })
  }
render() {
  console.log(this.state)
   return (
     <div>
       <YourBotArmy
            bots={this.botSelectedArmy()}
            includeBot={this.botClicked}
            clear = {this.clear}
        />
       {this.state.selectBot ?
       <BotSpecs
            bot={this.state.selectBot}
            clearBotSpecific={this.clearBotSpecific}
            includeBot={this.includeBot}
        />:
       <BotCollection
          bots={this.availableBots()}
          includeBot={this.botClicked}
        />
      }
     </div>
     );
    }
  }
 export default BotsPage;
