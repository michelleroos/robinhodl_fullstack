import React from 'react';
import DisclosureModal from './disclosure_modal';
import { HashLink } from 'react-router-hash-link';

export default function Splash7({ isOpen, setIsOpen }) {
  return (
    <div id="splash7-container">
      <div id="splash7-inner-container">

        <div id="footer-links">
          <div id="links">
            <div id="col1" className="cols">
              <HashLink to="/#splash6-container">Cash Management</HashLink>
              <HashLink to="/#splash6-container">Blockchains</HashLink>
              <HashLink to="/#splash6-container">Options</HashLink>
              <HashLink to="/#splash6-container">Gold</HashLink>
              <HashLink to="/#splash6-container">Crypto</HashLink>
            </div>
            <div id="col2" className="cols">
              <p onClick={() => setIsOpen(true)}>Learn</p>
              <p onClick={() => setIsOpen(true)}>Support</p>
              <p onClick={() => setIsOpen(true)}>Snacks</p>
              <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
            </div>
            <div id="col3" className="cols">
              <p onClick={() => setIsOpen(true)}>About us</p>
              <p onClick={() => setIsOpen(true)}>Careers</p>
              <p onClick={() => setIsOpen(true)}>Affiliates</p>
              <p onClick={() => setIsOpen(true)}>Blog</p>
              <p onClick={() => setIsOpen(true)}>Investor Relations</p>
              <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
              <div id="contact-icons">
                <a href="https://www.linkedin.com/in/roosmichelle/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/michelleroos" target="_blank"><i className="fab fa-github-square"></i></a>
                <a href="https://firebasestorage.googleapis.com/v0/b/scroople-25727.appspot.com/o/Michelle%20Roos%20-%20Resume.pdf?alt=media&token=694e1ef5-62c6-4973-a3fa-56848d3a85d9" target="_blank"><i className="far fa-file"></i></a>
                <a href="#" target="_blank"><i className="far fa-user"></i></a>
              </div>
            </div>
          </div>

          <div id="snacks">
            <img src={window.snacks} alt="snacks" />
            <p>The 3-minute newsletter with fresh takes on the financial news you need to start your day.</p>
            <div id="email-container">
              <input type="text" placeholder="email@email.com" />
              <button>TBA</button>
            </div>

          </div>
        </div>

        <div id="tandcs">
          <p onClick={() => setIsOpen(true)} href="#" target="_blank">Check the background of the firm on CryptoCheck</p>
          <p onClick={() => setIsOpen(true)} href="#" target="_blank">Exchange Customer Relationship Summary</p>
          <p onClick={() => setIsOpen(true)} href="#" target="_blank">Robinhodl Terms & Conditions</p>
          <p onClick={() => setIsOpen(true)} href="#" target="_blank">Disclosure Library</p>
          <p onClick={() => setIsOpen(true)} href="#" target="_blank">Privacy</p>
          <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
        </div>
        <div id="rights">
          <p>c 2022 Robinhodl. No rights actually reserved.</p>
          <p>Robinhodl means Robinhodl Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Robinhodl NFT, Robinhodl Exchange, and Robinhodl Crypto.</p>
          <p>No investments involve risks, including the possible loss of capital (because this is not a real trading site).</p>
          <p>Securities trading is offered to self-directed customers by Robinhodl. Robinhodl Financial is not a member of any Regulatory Authorities.</p>
          <div id="splash7-disclosure" className="disclosures">
            <button onClick={() => setIsOpen(true)}>ⓘ View important disclosures</button>
          </div>
          <DisclosureModal open={isOpen} onClose={() => setIsOpen(false)}></DisclosureModal>
        </div>
      </div>
    </div>
  )
}
