import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import DisclosureModal from './disclosure_modal';
import Splash1 from './splash1';
import Splash2 from './splash2';
import Splash3 from './splash3';
import Splash4 from './splash4';

export default function splash() {

  useEffect(() => {
    document.title = `Commisson-free Cryptocurrency Exchange | Robinhodl`;
  });

  const currentUser = useSelector((state) => state.session.currentUser)

  const [isOpen, setIsOpen] = useState(false);

  if (currentUser) {
    return (
      <div>
      </div>
    )
  } else {
    return (
      <div id="splash-container">

        <Splash1 isOpen={isOpen}></Splash1>
        
        <Splash2></Splash2>

        <Splash3 isOpen={isOpen}></Splash3>

        <Splash4 isOpen={isOpen}></Splash4>

        <div id="splash5-container">
          <div id="splash5-buttons">
            <button>Learn</button>
            <button>Manage</button>
            <button>Customize</button>
          </div>

          <div id="splash5-img">
            <img src={window.learn} alt="learn" />
          </div>

          <div id="splash5-text-container">

            <div id="splash5-text">
              <h1>Learn As You Grow</h1>
              <p>Our goal is to make investing in financial markets more affordable, more intuitive, and more fun, no matter how much experience you have (or don’t have).</p>
            </div>
          </div>
        </div>

        <div id="splash6-container">
          <div id="splash6-inner-container">
            <div id="splash6-text">
              <h2>Our Products</h2>
              <div id="splash6-buttons">
                <button>Cash Management</button>
                <button>Stocks & Funds</button>
                <button>Options</button>
                <button>Gold</button>
                <button>Crypto</button>
              </div>
              <div id="splash6-info">
                <p>Earn 0.30% APY* on your uninvested cash and get more flexibility with your brokerage account.</p>
              </div>
              <button id="learn">Learn about Cash Management</button>
              <div id="splash6-disclosure" className="disclosures">
                <button onClick={() => setIsOpen(true)}>ⓘ Variable APY and Debit Card Disclosures</button>
              </div>
              <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>

            </div>
            <div id="splash6-img">
              <img src="https://robinhood.com/us/en/_next/static/images/1x__ea42f9545c170fe8354ebde19dcefbc0.png" alt="cash-mgmt" />
            </div>
          </div>

        </div>
        <div id="splash7-container">
          <div id="splash7-inner-container">
            
            <div id="footer-links">
              <div id="links">
                <div id="col1" className="cols">
                  <p>Stocks & Funds</p>
                  <p>Options</p>
                  <p>Gold</p>
                  <p>Cash Management</p>
                  <p>Crypto</p>
                </div>
                <div id="col2" className="cols">
                  <p>Learn</p>
                  <p>Support</p>
                  <p>Snacks</p>
                </div>
                <div id="col3" className="cols">
                  <p>About us</p>
                  <p>Careers</p>
                  <p>Affiliates</p>
                  <p>Blog</p>
                  <p>Investor Relations</p>
                  <div id="contact-icons">
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github-square"></i>
                    <i className="far fa-file"></i>
                    <i className="far fa-user"></i>
                  </div>
                </div>
              </div>

              <div id="snacks">
                <img src={window.snacks} alt="snacks" />
                <p>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
                <div id="email-container">
                  <input type="text" placeholder="email@email.com"/>
                  <button>Get in touch</button>
                </div>

              </div>
            </div>

            <div id="tandcs">
              <a href="#" target="_blank">Check the background of the firm on FINRA’s BrokerCheck</a>
              <a href="#" target="_blank">Brokerage Customer Relationship Summary</a>
              <a href="#" target="_blank">Robinhodl Terms & Conditions</a>
              <a href="#" target="_blank">Disclosure Library</a>
              <a href="#" target="_blank">Privacy</a>
            </div>
            <div id="rights">
              <p>© 2021 Robinhodl. All rights reserved.</p>
              <p>Robinhodl means Robinhodl Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhodl Financial, Robinhodl Securities, and Robinhodl Crypto.</p>
              <p>No investments involve risks, including the possible loss of capital.</p>
              <p>Securities trading is offered to self-directed customers by Robinhodl Financial. Robinhodl Financial is not a member of the Financial Industry Regulatory Authority (FINRA).</p>
              <div id="splash7-disclosure" className="disclosures">
                <button onClick={() => setIsOpen(true)}>ⓘ View important disclosures</button>
              </div>
              <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// class Splash extends React.Component {
//   constructor(props) {
//       super(props)
//     this.handleLogOut = this.handleLogOut.bind(this);
//   }

//   handleLogOut() {
//     this.props.logOut;
//     this.props.resetErrors;
//   }

//   render() {
//     if (this.props.currentUser) {
//       return(
//         <div>            
//         </div>
//         )
//     } else {
//       return(
//         <div>
//           <div className="sign-up-offer">

//             <div className="offer">
//               <h1>Investing for Everyone</h1>
//               <p>Commission-free investing, plus the tools you need to put your
//               money in motion. Sign up and get your first tokens for free.
//               Certain limitations apply.</p>
              
//               <div className="sign-up-btn">
//                 <Link to="/signup">
//                   <button type="submit">Sign Up</button>
//                 </Link>
//               </div>

//               <div className="disclosure">
//                 <p>ⓘ Commissions and Free Token Disclosure</p>
//               </div>
//             </div>

//             <div className="offer-image">
//               <img className="offer-image" src={window.offer_image} />
//               {/* <video src={window.offer_video} draggable="false" className="offer-video" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline preload="auto" /> */}
//             </div>
              
//           </div>

//           <div className="disclaimer">
//             <p>See our fee schedule to learn more about cost.</p>
//           </div>

//           {/* <div className="superbowl-campaign">
//             <video src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4"></video>
//             <h1>We are all investors</h1>
//             <p>See the campaign ➔</p>
//           </div>

//           <div>
//             FOOTER
//           </div> */}
//         </div>
//       )
//     }
//   }
// }

// export default Splash;