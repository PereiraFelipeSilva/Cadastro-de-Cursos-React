import React, { Fragment } from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.clock()
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  clock() {
    this.setState({
      hours: new Date()
    });
  }

  render() {
    return (
      <Fragment>
        São {this.state.hours.toLocaleTimeString()}, horário local.
      </Fragment>
    );
  }
}

export default Clock;