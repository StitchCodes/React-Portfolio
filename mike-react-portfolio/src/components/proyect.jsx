import React from "react";

// Import Images
import justCodeImg from "../img/justCode.png";
import readmeImg from "../img/readmeImg.png";
import jateImg from "../img/jateImg.png";
import mcImg from "../img/mcImg.png";

class Proyect extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">¡Summary of my best works!.</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          {/* pet finder assistant card */}
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/StitchCodes/Pet-Finder-Assistant" Target="_blank">
                  <div className="work-img">
                    <img src={justCodeImg} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pawtroller. Pet Finder Assistant</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap JavaScript 
                                                     </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>          
              </div>
            </div>
            {/* Read me generator Card */}
            <div className="col-md-4">
              <div className="work-box">
              <a href="https://github.com/StitchCodes/ReadMe-Generator" Target="_blank">
                  <div className="work-img">
                    <img src={readmeImg} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title"> ReadMe-Generator</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Simple readme generator made on NodeJS using CLI.
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* JATE card */}
            <div className="col-md-4">
              <div className="work-box">
              <a href="https://github.com/StitchCodes/jate" Target="_blank">
                  <div className="work-img">
                    <img src={jateImg} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">JATE - Another Text Editor </h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 Bootstrap Webpack ReactJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>               
              </div>
            </div>
            {/* MC Card */}
            <div className="col-md-4">
              <div className="work-box">
              <a href="https://github.com/josevidmal/team-project-2" Target="_blank">
                  <div className="work-img">
                    <img src={mcImg} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Team Project 2: Motorcycle Club</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                          JavaScript  - CCS - Handlebars
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>               
              </div>
            </div>    
          </div>
        </div>
      </section>
    );
  }
}

export default Proyect;
