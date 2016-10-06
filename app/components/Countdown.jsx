import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      countStatus: 'stopped'
    }
    this.setCountdown = this.setCountdown.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.countStatus !== prevState.countStatus){
      switch(this.state.countStatus){
        case 'started':
          this.startTimer();
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
  render() {
    let  {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.setCountdown}/>
      </div>
    )
  }
}
