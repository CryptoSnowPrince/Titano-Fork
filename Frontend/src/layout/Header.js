import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap";

import MENU from "../assets/icons/menu.png";
import INFO from "../assets/icons/info.png";
import RESIZE from "../assets/icons/resize.png";

const Header = (props) => {
  return (
    <header className="p-4">
      <div>
        <div className="d-flex flex-row-reverse">
          <div className="mb-menu">
            <Link to='#' className="mb-menu-btn" onClick={props.sidebarToggle}>
              <img width="25" src={MENU} alt="" />
            </Link>
          </div>
          <div className="text-end">
            <button className="btn btn-header dropdown-toggle" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img className="icon" width="20" height="20" src={INFO} alt="" />
              <span>TITANO <small>$0.1645 USD</small></span>
            </button>
            <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">
              <li><a href='https://pancakeswap.finance/swap?outputCurrency=0xba96731324de188ebc1ed87ca74544ddebc07d7f' className="dropdown-item">Buy on Pancakeswap
                <img className="icon" width="13" height="13"
                  src={RESIZE} alt="" />
              </a>
              </li>
              <li><a className="dropdown-item" href='https://www.dextools.io/app/bsc/pair-explorer/0x44f382cec44c33067cb12fcfc08457eb6734be02'>Chart
                <img className="icon" width="13" height="13"
                  src={RESIZE} alt="" />
              </a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><Link className="dropdown-item" to="/">
                ADD TOKEN TO WALLET</Link>
              </li>
            </ul>
            <button type="button" className="btn btn-header">Connect Wallet</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;