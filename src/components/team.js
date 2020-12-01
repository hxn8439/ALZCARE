import React from "react";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      isVerified: false,
    };
  }
  recaptchaLoaded() {
    console.log("succesful");
  }
  handleSubmit() {
    if (this.state.isVerified) {
      alert("Message has been send");
    } else {
      alert("Are you really human!!!");
    }
  }
  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h2>Our Team</h2>

        <div className="container">
          <div className="our-team">
            <div className="pic">
              <img src="Images/team1.png" alt="" />
            </div>
            <div className="team-contact">
              <h3 className="title">Kathy Lee</h3>
              <span className="post">Principal Investigator</span>
            </div>
            <ul className="social">
              <li>
                <a href="#" className="fab fa-facebook"></a>
              </li>
              <li>
                <a href="#" className="fab fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fab fa-instagram"></a>
              </li>
              <li>
                <a href="#" className="fab fa-linkedin"></a>
              </li>
            </ul>
          </div>

          <div className="our-team">
            <div className="pic">
              <img src="Images/team2.png" alt="" />
            </div>
            <div className="team-contact">
              <h3 className="title">Chang Hyun Seo</h3>
              <span className="post">Program Coordinator</span>
              <span className="post">Research associate (Korean)</span>
            </div>
            <ul className="social">
              <li>
                <a href="#" className="fab fa-facebook"></a>
              </li>
              <li>
                <a href="#" className="fab fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fab fa-instagram"></a>
              </li>
              <li>
                <a href="#" className="fab fa-linkedin"></a>
              </li>
            </ul>
          </div>

          <div className="our-team">
            <div className="pic">
              <img src="Images/team3.png" alt="" />
            </div>
            <div className="team-contact">
              <h3 className="title">Joe Zhao</h3>
              <span className="post">Research Assistant (Chineese)</span>
            </div>
            <ul className="social">
              <li>
                <a href="#" className="fab fa-facebook"></a>
              </li>
              <li>
                <a href="#" className="fab fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fab fa-instagram"></a>
              </li>
              <li>
                <a href="#" className="fab fa-linkedin"></a>
              </li>
            </ul>
          </div>
          <div className="our-team">
            <div className="pic">
              <img src="Images/team3.png" alt="" />
            </div>
            <div className="team-contact">
              <h3 className="title">Jessica Cassidy</h3>
              <span className="post">Research Assistant (English)</span>
            </div>
            <ul className="social">
              <li>
                <a href="#" className="fab fa-facebook"></a>
              </li>
              <li>
                <a href="#" className="fab fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fab fa-instagram"></a>
              </li>
              <li>
                <a href="#" className="fab fa-linkedin"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
