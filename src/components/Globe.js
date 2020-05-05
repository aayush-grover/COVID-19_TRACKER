import React, { Component } from 'react';
import './Globe.css';
class Globe extends Component {
    state={
        date:'',
      }
       componentDidMount(){
          const d=new Date();
          d.setDate(d.getDate()-2);
          this.setState({ date : d.toLocaleString()});
      }
    render() {
        return (
            <React.Fragment>
            <div className="main1">
                <div className="globe">
                    <iframe className="frame" src="https://covidvisualizer.com/"></iframe>
                </div>
                <div className="latestby">Latest By: {this.state.date}</div>
            </div>
              
              </React.Fragment>
        );
    }
}

export default Globe;