import React, { Component } from 'react';

class Section2 extends Component {
    render() {
        return(
            <div className="section2">
        <div className="section2 bg-light">
            <div className="section-header">
                <h3 className="section-header-title">Choose your Insurance</h3>
                <p className="section-header-details">Keep Your Life Smile, Safe, and Wealthy</p>
            </div>
            <div className="section-content">
                <div>
                    <div className="row insurance-card-container">
                        <div className="col-4">
                            <div className="col-4 insurance-card">
                                <div className="insurance-icon" style={{backgroundColor: "#91f2ff"}}>   
                                    <img src="/assets/img/home-insurance.svg" width="50px" />
                                </div>
                                <h5 className="insurance-title">Home Insurance</h5>
                                <p className="insurance-details">Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col-4 insurance-card">
                                <div className="insurance-icon" style={{backgroundColor: "#fbd1ff"}}>   
                                    <img src="/assets/img/car-insurance.svg" width="50px" />
                                </div>
                                <h5 className="insurance-title">Car Insurance</h5>
                                <p className="insurance-details">Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="col-4 insurance-card">
                                <div className="insurance-icon" style={{backgroundColor: "#cbffd8"}}>   
                                    <img src="/assets/img/life-insurance.svg" width="50px" />
                                </div>
                                <h5 className="insurance-title">Life Insurance</h5>
                                <p className="insurance-details">Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row insurance-card-container">
                        <div className="col-4">
                            <div className="insurance-card">
                                <div className="insurance-icon" style={{backgroundColor: "#fff4b4"}}>   
                                    <img src="/assets/img/business-insurance.svg" width="50px" />
                                </div>
                                <h5 className="insurance-title">Business Insurance</h5>
                                <p className="insurance-details">Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="insurance-card">
                                <div className="insurance-icon" style={{backgroundColor: "#ffdad1"}}>   
                                    <img src="/assets/img/travel-insurance.svg" width="50px" />
                                </div>
                                <h5 className="insurance-title">Travel Insurance</h5>
                                <p className="insurance-details">Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="insurance-card">
                                <div className="insurance-icon" style={{backgroundColor: "#d3d3ff"}}>   
                                    <img src="/assets/img/other-insurance.svg" width="50px" />
                                </div>
                                <h5 className="insurance-title">Other Insurance</h5>
                                <p className="insurance-details">Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Section2;