import { Component } from "react";

import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import TabItem from "../TabItem";

import "./index.css";

const tabItemsDetails = [
  { tabId: "home", tabName: "Home" },
  { tabId: "payments", tabName: "Payments" },
  { tabId: "budget", tabName: "Budget" },
  { tabId: "card", tabName: "Card" },
];

class Header extends Component {
  state = { tabId: tabItemsDetails[0].tabId };

  render() {
    const { tabId } = this.state;
    return (
      <nav className="nav-container">
        <p className="app-name">CREDIT APP</p>
        <ul className="tabs-container">
          {tabItemsDetails.map((i) => (
            <TabItem key={i.tabId} tabDetails={i} />
          ))}
        </ul>
        <div className="btn-container">
          <button type="button" className="btn">
            <FaBell />
          </button>
          <button type="button" className="btn">
            <AiFillMessage />
          </button>
          <button type="button" className="btn">
            <FaUserCircle />
          </button>
          <select value={tabId} className="select-btn">
            {tabItemsDetails.map((i) => (
              <option key={i.tabId} value={i.tabId}>
                {i.tabName}
              </option>
            ))}
          </select>
        </div>
      </nav>
    );
  }
}

export default Header;
