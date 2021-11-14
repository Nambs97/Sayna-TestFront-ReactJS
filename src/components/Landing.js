import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return(
            <div className="section1">
        <div className="section1-top">
            <div className="top-background-image">
                <img src="/assets/img/banner-1.png" alt="banner-1" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/img/logo.png" alt="Fincorp Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">For you & family</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">For Business</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="introduction row">
                <div className="col-3 my-auto">
                    <p className="introduction-greetings text-uppercase">Hello, We are Fincorp</p>
                    <h1 className="introduction-title">Insurance
                        made easy.</h1>
                    <button className="introduction-button btn btn-primary">Get your free Quote</button>
                </div>
            </div>
            
            <div className="section1-top-ending row justify-content-center">
                <div className="col-md-4">
                    <h3 className="section1-top-ending-text">A new take on insurance</h3>
                    <p className="section1-top-ending-details">Great for individuals and business</p>
                </div>  
            </div>
        </div>
        <div className="section1-bottom">
            <div className="row">
                <div className="col-6 offset-6">
                    <div className="advantages">
                        <h4>Monotonectally deploy seamless data and resource maximizing systems.</h4>
                        <h5>Great for individuals and small families up to 4 members.</h5>
                        <p>A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence, creativity and attention to detail to ensure you are getting the best “bang for your buck” each and every year.</p>
                        <ul className="advantages-list list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row advantages-list-item-container">
                                    <div className="col-2"><img className="advantages-list-icon" src="/assets/img/tick.png" alt="tick"/></div>
                                    <div className="col-10 advantages-list-content">
                                        <h5 className="advantages-list-title">Comprehensive Insurance</h5>
                                        <p className="advantages-list-text">Dynamically repurpose e-business users rather than granular products.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row advantages-list-item-container">
                                    <div className="col-2"><img className="advantages-list-icon" src="/assets/img/tick.png" alt="tick"/></div>
                                    <div className="col-10 advantages-list-content">
                                        <h5 className="advantages-list-title">Support is just a call away</h5>
                                        <p className="advantages-list-text">Rapidiously customize value-added platforms compliant action items.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row advantages-list-item-container">
                                    <div className="col-2"><img className="advantages-list-icon" src="/assets/img/tick.png" alt="tick"/></div>
                                    <div className="col-10 advantages-list-content">
                                        <h5 className="advantages-list-title">Say goodbye to paperwork.</h5>
                                        <p className="advantages-list-text">Globally deliver economically sound communities relationships.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-background-image">
                <img src="/assets/img/health-family-1.png" alt="health-family-1" />
            </div>

        </div>
    </div>
        );
    }
}

export default Landing;