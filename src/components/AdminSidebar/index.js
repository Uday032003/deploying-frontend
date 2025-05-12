import { FaUserCircle } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserMinus } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import { FaSignature } from "react-icons/fa";
import { BsCalendarCheckFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaPaypal } from "react-icons/fa";

import "./index.css";

const AdminSidebar = (props) => {
  const { closed } = props;
  return (
    <div className={`sidebar-container ${closed ? "closed" : "open"}`}>
      <div className="verifier-details-cont">
        <FaUserCircle className="verifier-icon" />
        <p>John Okoh</p>
      </div>
      <div className="item">
        <AiFillDashboard className="icon dashboard" />
        <p>Dashboard</p>
      </div>
      <div className="item">
        <FaUserMinus className="icon" />
        <p>Borrowers</p>
      </div>
      <div className="item">
        <FaMoneyBill1 className="icon" />
        <p>Loans</p>
      </div>
      <div className="item">
        <FaUserCheck className="icon" />
        <p>Repayments</p>
      </div>
      <div className="item">
        <FaBalanceScale className="icon" />
        <p>Loan Parameters</p>
      </div>
      <div className="item">
        <FaCreditCard className="icon" />
        <p>Accounting</p>
      </div>
      <div className="item">
        <FaChartBar className="icon" />
        <p>Reports</p>
      </div>
      <div className="item">
        <FaFileAlt className="icon" />
        <p>Collateral</p>
      </div>
      <div className="item">
        <FaUserCog className="icon" />
        <p>Access Configuration</p>
      </div>
      <div className="item">
        <FaPiggyBank className="icon" />
        <p>Savings</p>
      </div>
      <div className="item">
        <BsBank2 className="icon" />
        <p>Other Incomes</p>
      </div>
      <div className="item">
        <FaPaypal className="icon" />
        <p>Payroll</p>
      </div>
      <div className="item">
        <FaShareSquare className="icon" />
        <p>Expenses</p>
      </div>
      <div className="item">
        <FaSignature className="icon" />
        <p>E-signature</p>
      </div>
      <div className="item">
        <FaBriefcase className="icon" />
        <p>Investor Accounts</p>
      </div>
      <div className="item">
        <BsCalendarCheckFill className="icon" />
        <p>Calender</p>
      </div>
      <div className="item">
        <IoMdSettings className="icon" />
        <p>Settings</p>
      </div>
      <div className="item">
        <FaSignOutAlt className="icon" />
        <p>Sign Out</p>
      </div>
    </div>
  );
};
export default AdminSidebar;
