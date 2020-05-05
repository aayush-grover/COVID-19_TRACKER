import React, { Component } from 'react';
import './Symptoms.css';
class Symptoms extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="main">
                
                <div className="heading1">
                    <h1><b><span className="fonts">Symptoms</span></b></h1>
                </div>
                <div className="grid1">
                <div className="section">
                    <div className="homeimages1">
                        <img src={process.env.PUBLIC_URL + "/images/svgs/sneeze.svg"} width="80%" height="80%" className="d-inline-block align-top" alt="React Bootstrap logo" />
                        <h6>dry cough</h6>
                    </div>
                    <div className="homeimages1">
                        <img src={process.env.PUBLIC_URL + "/images/svgs/runny-nose.svg"} width="80%" height="80%" className="d-inline-block align-top" alt="React Bootstrap logo" />
                        <h6>running nose</h6>
                    </div>
                    <div className="homeimages1">
                        <img src={process.env.PUBLIC_URL + "/images/svgs/sleep-disorder.svg"} width="80%" height="80%" className="d-inline-block align-top" alt="React Bootstrap logo" />
                        <h6>tiredness&nbsp;&nbsp;</h6>
                    </div>
                    <div className="homeimages1">
                        <img src={process.env.PUBLIC_URL + "/images/svgs/fever.svg"} width="80%" height="80%" className="d-inline-block align-top" alt="React Bootstrap logo" />
                        <h6>high temperature</h6>
                    </div>
                </div>
                </div>

            </div>
            </React.Fragment>
        );
    }
}

export default Symptoms;