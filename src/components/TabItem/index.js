import { FaTachometerAlt } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

import "./index.css";

const TabItem = (props) => {
  const { tabDetails } = props;
  const { tabId, tabName } = tabDetails;
  const tabIcon = () => {
    if (tabId === "home") {
      return <FaTachometerAlt className="icon" />;
    } else if (tabId === "payments") {
      return <TbCurrencyNaira className="icon" />;
    } else if (tabId === "budget") {
      return <FaBook className="icon" />;
    } else if (tabId === "card") {
      return <FaCreditCard className="icon" />;
    }
  };
  return (
    <li className="tab-container">
      {tabIcon()}
      <p className="tab-name">{tabName}</p>
    </li>
  );
};

export default TabItem;
