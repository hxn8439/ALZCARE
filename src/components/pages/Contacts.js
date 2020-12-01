import React from "react";
import emailjs from "emailjs-com";
// import Recaptcha from "react-recaptcha";
function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "alzcare",
      "template_3pbyv0e",
      e.target,
      "user_sBeaS4zSza5DHXJ5dbOa1"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
class Contact extends React.Component {
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
        <div class="container-fluid form-container">
          <form onSubmit={sendEmail}>
            <div class="row">
              <div class="col-12 contact-form-heading">
                <h2 class="hollow-text">Contact Us!</h2>
              </div>
            </div>
            <div class="row social-media">
              <div class="col-12 text-center">
                <ul class="list-inline social-links">
                  <li class="list-inline-item">
                    <a href="https://web.wechat.com/" target="_blank">
                      <i class="fa fa-weixin" aria-hidden="true"></i>
                      <span class="sr-only">Facebook</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://twitter.com/billieeilish" target="_blank">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                      <span class="sr-only">Twitter</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="https://www.instagram.com/wherearetheavocados/"
                      target="_blank"
                    >
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                      <span class="sr-only">Instagram</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH"
                      target="_blank"
                    >
                      <i class="fa fa-spotify" aria-hidden="true"></i>
                      <span class="sr-only">Spotify</span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      href="https://www.youtube.com/billieeilish"
                      target="_blank"
                    >
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                      <span class="sr-only">YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row form-group contact-form group-name">
              <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 contact-form-item">
                <label for="InputFirstName">First name</label>
                <input
                  type="text"
                  name="firstname"
                  class="form-control"
                  id="InputFirstName"
                  placeholder="First name"
                  required
                />
              </div>
              <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 contact-form-item">
                <label for="InputLastName">Last name</label>
                <input
                  type="text"
                  name="lastname"
                  class="form-control"
                  id="InputLastName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div class="row form-group contact-form group-details">
              <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 contact-form-item">
                <label for="InputEmail">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="InputEmail"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 contact-form-item">
                <label for="Subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  id="InputSubject"
                  placeholder="Subject"
                  required
                />
              </div>
            </div>
            <div class="row form-group contact-form group-message">
              <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                <label for="InputMessage">Message</label>
                <textarea
                  rows="7"
                  name="message"
                  class="form-control"
                  id="InputMessage"
                  placeholder="Please enter your message here"
                  required
                ></textarea>
              </div>
            </div>
            {/* <div>
              <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 contact-form-item">
                <Recaptcha
                  sitekey="6Ldsa-AZAAAAAOx6lTm39j6x_TRsPhJZQEPysx0J"
                  theme="dark"
                  render="explicit"
                  onloadCallback={this.recaptchaLoaded}
                  verifyCallback={this.verifyCallback}
                />
              </div>
            </div> */}
            <div class="form-row text-center">
              <div class="col">
                <button
                  onClick={this.handleSubmit}
                  class="btn btn-default btn-lg btn-send"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
