import React, { Component, PropTypes} from 'react';

export default class Controls extends Component {
  static propTypes= {
    countStatus: React.PropTypes.string.isRequired
  }
  render(){
    let { countStatus } = this.props;

    let renderStartStopButton = () => {
      if(countStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else if (countStatus === 'paused'){
        return <button className="button primary">Start</button>
      }
    }
    return (
      <div className="controls">
        { renderStartStopButton () }
        <button className="button alert hollow">Clear</button>
      </div>
    )
  }
}
