import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {hours: new Date()};
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.clock()
    }, 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  clock(){
    this.setState({
      hours: new Date()
    });
  }

  render(){
    return(
      <h2>
        São {this.state.hours.toLocaleTimeString()}, horário local.
      </h2>
    );
  }
}

export default Clock;