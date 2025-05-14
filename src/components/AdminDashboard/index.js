import { Component } from "react";
import { PuffLoader } from "react-spinners";

import { FaMoneyBill1 } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { FaPiggyBank } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";

import VerifierAdminBoxItem from "../VerifierAdminBoxItem";

import "./index.css";

const status = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class AdminDashboard extends Component {
  state = { adminRecentLoansSectionDetails: [], presentStatus: status.loading };

  componentDidMount() {
    this.getLoansDetails();
  }

  onSuuccessCall = (data) => {
    this.setState({
      adminRecentLoansSectionDetails: data,
      presentStatus: status.success,
    });
  };

  onFailureCall = () => {
    this.setState({ presentStatus: status.failure });
  };

  getLoansDetails = async () => {
    const url =
      "https://deploying-backend-14-b2t2.onrender.com/adminRecentLoans/";
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        this.onSuuccessCall(data);
      } else {
        this.onFailureCall();
      }
    } catch (e) {
      console.log("Error");
    }
  };

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <PuffLoader type="Threedots" width={40} height={40} />
    </div>
  );

  renderSuccessView = () => {
    const { adminRecentLoansSectionDetails } = this.state;
    return (
      <div className="list-container">
        {adminRecentLoansSectionDetails.map((i) => (
          <VerifierAdminBoxItem key={i.id} item={i} />
        ))}
      </div>
    );
  };

  renderFailureView = () => <p className="failed-text">Failed To Fetch</p>;

  renderFinalView = () => {
    const { presentStatus } = this.state;
    switch (presentStatus) {
      case "LOADING":
        return this.renderLoadingView();
      case "SUCCESS":
        return this.renderSuccessView();
      case "FAILURE":
        return this.renderFailureView();
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="dash-inner-container">
        <p className="span-ele heading">Dashboard</p>
        <div className="divs-container">
          <div className="div-contt">
            <div className="iconn-container">
              <FaUsers />
            </div>
            <div className="text-container">
              <p className="total-count">200</p>
              <p className="about">ACTIVE USERS</p>
            </div>
          </div>
          <div className="div-contt">
            <div className="iconn-container">
              <FaUserMinus />
            </div>
            <div className="text-container">
              <p className="total-count">100</p>
              <p className="about">BORROWERS</p>
            </div>
          </div>
          <div className="div-contt">
            <div className="iconn-container">
              <FaMoneyBills />
            </div>
            <div className="text-container">
              <p className="total-count">550,000</p>
              <p className="about">CASH DISBURSED</p>
            </div>
          </div>
          <div className="div-contt">
            <div className="iconn-container">
              <TbCurrencyNaira />
            </div>
            <div className="text-container">
              <p className="total-count">1,000,000</p>
              <p className="about">CASH RECEIVED</p>
            </div>
          </div>
          <div className="div-contt">
            <div className="iconn-container">
              <FaPiggyBank />
            </div>
            <div className="text-container">
              <p className="total-count">450,000</p>
              <p className="about">SAVINGS</p>
            </div>
          </div>
          <div className="div-contt">
            <div className="iconn-container">
              <FaUserCheck />
            </div>
            <div className="text-container">
              <p className="total-count">30</p>
              <p className="about">REPAID LOANS</p>
            </div>
          </div>
          <div className="div-contt">
            <div className="iconn-container">
              <BsBank2 />
            </div>
            <div className="text-container">
              <p className="total-count">10</p>
              <p className="about">OTHER ACCOUNTS</p>
            </div>
          </div>
          <div className="div-contt">
            <div className="iconn-container">
              <FaMoneyBill1 />
            </div>
            <div className="text-container">
              <p className="total-count">50</p>
              <p className="about">LOANS</p>
            </div>
          </div>
        </div>
        <div className="down-cont">
          <div className="applied-loans-heading-cont">
            <h1 className="heading">Recent Loans</h1>
            <div className="icons-container">
              <div className="sort-icon-cont">
                <FaSortAmountUp />
                <p>Sort</p>
              </div>
              <div className="filter-icon-cont">
                <FaFilter />
                <p>Filter</p>
              </div>
            </div>
          </div>
          <div className="title-cont">
            <p className="title1">User Details</p>
            <p className="title2">Customer Name</p>
            <p className="title3">Date</p>
            <p className="title4">Action</p>
          </div>
          {this.renderFinalView()}
        </div>
        <div className="graph1-cont">
          <p className="graph-heading">Loans Released Monthly</p>
          <img
            src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746970350/Chart_1_jre3ed.png"
            alt="graph-green"
            className="graph-img"
          />
        </div>
        <div className="graph2-cont">
          <p className="graph-heading">
            Total Outstanding Open Loans - Monthly
          </p>
          <img
            src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746970392/Chart_4_odeo4e.png"
            alt="graph-green"
            className="graph-img"
          />
        </div>
        <div className="recovery-container">
          <div className="recovery-container1">
            <div>
              <p className="para1">
                Rate of Recovery (Open, Fully Paid, Default Loans)
              </p>
              <p className="para2">
                Percentage of the due amount that is paid for all loans until
                today
              </p>
              <p className="para3">45%</p>
            </div>
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746974750/Group_mgd1r1.png"
              alt="mini-graph"
            />
          </div>
          <div className="recovery-container2">
            <div>
              <p className="para1">Rate of Recovery (Open Loans)</p>
              <p className="para2">
                Percentage of the due amount that is paid for open loans until
                today
              </p>
              <p className="para3">35%</p>
            </div>
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746974750/Group_mgd1r1.png"
              alt="mini-graph"
            />
          </div>
        </div>
        <div className="graph3-cont">
          <p className="graph-heading">
            Number of Repayments Collected - Monthly
          </p>
          <img
            src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746970361/Chart_3_bioopv.png"
            alt="graph-green"
            className="graph-img"
          />
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
