import { Component } from "react";

import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import TabItem from "../TabItem";

import "./index.css";

const viewList = [
  {
    viewId: "user",
    viewType: "User",
  },
  {
    viewId: "verifier",
    viewType: "Verifier",
  },
  {
    viewId: "admin",
    viewType: "Admin",
  },
];

const tabItemsDetails = [
  { tabId: "home", tabName: "Home" },
  { tabId: "payments", tabName: "Payments" },
  { tabId: "budget", tabName: "Budget" },
  { tabId: "card", tabName: "Card" },
];

class Header extends Component {
  state = { viewId: viewList[0].viewId };

  onChangingView = (event) => {
    this.setState({ viewId: event.target.value });
  };

  render() {
    const { viewId } = this.state;
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
            <p className="notifi-count">4</p>
          </button>
          <button type="button" className="btn">
            <AiFillMessage />
          </button>
          <button type="button" className="btn">
            <FaUserCircle />
          </button>
          <select
            value={viewId}
            className="select-btn"
            onChange={this.onChangingView}
          >
            {viewList.map((i) => (
              <option key={i.viewId} value={i.viewId}>
                {i.viewType}
              </option>
            ))}
          </select>
        </div>
      </nav>
    );
  }
}

export default Header;
