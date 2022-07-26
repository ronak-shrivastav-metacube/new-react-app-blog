import React, {Component} from 'react';

export default class Timmer extends Component
{   
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

      componentDidMount() {
        this.timerID = setInterval(
          () => {
            this.setState({
                date: new Date()
              })
          },
          1000
        );
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }

   render () {
    return (
        <h1>Timmer : {this.state.date.toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit', second : '2-digit', hours12: true})}</h1>
    );
   }     
}