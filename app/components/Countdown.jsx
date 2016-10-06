import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

export default class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      countStatus: 'stopped'
    }
    this.setCountdown = this.setCountdown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handleStatusChange =  this.handleStatusChange.bind(this);
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.countStatus !== prevState.countStatus){
      switch(this.state.countStatus){
        case 'started':
          this.startTimer();
        break;
        case 'stopped':
          this.setState({count: 0})
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }
  startTimer(){
    this.timer = setInterval( ()=>{
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >=0 ? newCount : 0
      });
    }, 1000);
  }
  setCountdown(seconds){
    this.setState({
      count: seconds,
      countStatus: 'started'
    })
  }
  handleStatusChange(newStatus){
    this.setState({countStatus: newStatus});
  }
  render() {
    let  {count, countStatus} = this.state;
    let renderControlArea = () => {
      if(countStatus !== 'stopped'){
        return <Controls countStatus={countStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.setCountdown}/>
      }
    }
    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
}
