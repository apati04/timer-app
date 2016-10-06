import React, { Component } from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

export default class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
    this.setCountdown = this.setCountdown.bind(this);
  }

  setCountdown(seconds){
    this.setState({
      count: seconds
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
