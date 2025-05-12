import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

import Tab from "../Tab";

import "./index.css";

const viewerList = [
  {
    viewerId: "user",
    viewer: "User",
  },
  {
    viewerId: "verifier",
    viewer: "Verifier",
  },
  {
    viewerId: "admin",
    viewer: "Admin",
  },
];

const tabItemsList = [
  { tabId: "home", tabName: "Home" },
  { tabId: "payments", tabName: "Payments" },
  { tabId: "budget", tabName: "Budget" },
  { tabId: "card", tabName: "Card" },
];

const Navbar = (props) => {
  const { onChangingValue, value, onClickedMenu } = props;
  const onChangingView = (event) => {
    onChangingValue(event.target.value);
  };
  const onClicked = () => {
    onClickedMenu();
  };
  const onClickedLogo = () => {
    onChangingValue("user");
  };
  const tabClass = value !== "user" ? "not-dis" : "";
  const iconClass = value === "user" ? "not-dis" : "";
  return (
    <nav className="nav-container">
      <div className="nav-header-container">
        <p className="app-name" onClick={onClickedLogo}>
          CREDIT APP
        </p>
        <TiThMenu className={`menu-icon ${iconClass}`} onClick={onClicked} />
      </div>
      <ul className={`tabs-container ${tabClass}`}>
        {tabItemsList.map((i) => (
          <Tab key={i.tabId} tabDetails={i} />
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
        <select value={value} className="select-btn" onChange={onChangingView}>
          {viewerList.map((i) => (
            <option key={i.viewerId} value={i.viewerId}>
              {i.viewer}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
