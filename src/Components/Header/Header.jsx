import React, { Component } from "react";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  rendernavLinks = () => {
    let navList = ["Siva ", " About ", "Resume", "Works", "Contact"];
    let hRefs = ["home", "about", "resume", "works", "contact"];
    return (
      <>
        {navList.map((link, index) => (
          <li className={index === 0 ? "current" : ""}>
            <a class="smoothscroll" href={`#${hRefs[index]}`}>
              {link}
            </a>
          </li>
        ))}
      </>
    );
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a class="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a class="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" class="nav">
            {this.rendernavLinks()}
          </ul>
        </nav>

        <div class="row banner">
          <div class="banner-text">
            <h1 class="responsive-headline">I'm Jonathan Doe.</h1>
            <h3>
              I'm a Manila based <span>graphic designer</span>,{" "}
              <span>illustrator</span> and <span>webdesigner</span> creating
              awesome and effective visual identities for companies of all sizes
              around the globe. Let's{" "}
              <a class="smoothscroll" href="#about">
                start scrolling
              </a>
              and learn more{" "}
              <a class="smoothscroll" href="#about">
                about me
              </a>
              .
            </h3>
            <hr />
            <ul class="social">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-skype"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p class="scrolldown">
          <a class="smoothscroll" href="#about">
            <i class="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}
