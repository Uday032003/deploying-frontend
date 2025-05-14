import { Component } from "react";
import { PuffLoader } from "react-spinners";

import Popup from "reactjs-popup";

import { TbCurrencyNaira } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";

import UserBoxItem from "../UserBoxItem";

import "./index.css";

const status = {
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

class UserDashboard extends Component {
  state = { userAppliedLoansDetails: [], presentStatus: status.loading };

  componentDidMount() {
    this.getLoansDetails();
  }

  onSuuccessCall = (data) => {
    this.setState({
      userAppliedLoansDetails: data,
      presentStatus: status.success,
    });
  };

  onFailureCall = () => {
    this.setState({ presentStatus: status.failure });
  };

  getLoansDetails = async () => {
    const url =
      "https://deploying-backend-14-b2t2.onrender.com/userAppliedLoans/";
    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
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
    const { userAppliedLoansDetails } = this.state;
    return (
      <div className="list-container">
        {userAppliedLoansDetails.map((i) => (
          <UserBoxItem key={i.id} item={i} />
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
      <div className="main-container">
        <div className="top-cont">
          <div className="cont1">
            <div className="cont1-left">
              <img
                src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746878555/Screenshot_2025-05-10_172916_luxuot.png"
                alt="logo"
                className="logo-img"
              />
              <div className="all-cont">
                <p className="defitit-text">DEFICIT</p>
                <div className="amount-cont">
                  <TbCurrencyNaira className="n-icon" />
                  <p className="loan-amount">0.0</p>
                </div>
              </div>
            </div>
            <Popup
              modal
              trigger={
                <button type="button" className="loan-btn">
                  Get A Loan
                </button>
              }
            >
              {(close) => {
                return (
                  <div className="popup-bg">
                    <form className="popup-container">
                      <p className="apply-loan-heading">APPLY FOR A LOAN</p>
                      <div className="inps-container">
                        <div className="left-inps-cont">
                          <div className="inp-cont">
                            <label className="label" htmlFor="input1">
                              Full name as it appears on bank account
                            </label>
                            <br />
                            <input
                              id="input1"
                              className="inp"
                              type="text"
                              placeholder="Full name as it appears on bank account"
                            />
                          </div>
                          <div className="inp-cont">
                            <label className="label" htmlFor="input2">
                              Loan tenure(in months)
                            </label>
                            <br />
                            <input
                              id="input2"
                              className="inp"
                              type="text"
                              placeholder="Loan tenure(in months)"
                            />
                          </div>
                          <div className="inp-cont">
                            <label className="label" htmlFor="input3">
                              Reason for loan
                            </label>
                            <br />
                            <textarea
                              id="input3"
                              className="inp txt"
                              type="text"
                              placeholder="Reason for loan"
                            />
                          </div>
                        </div>
                        <div className="right-inps-cont">
                          <div className="inp-cont">
                            <label className="label" htmlFor="input4">
                              How much do you need?
                            </label>
                            <br />
                            <input
                              id="input4"
                              className="inp"
                              type="text"
                              placeholder="How much do you need?"
                            />
                          </div>
                          <div className="inp-cont">
                            <label className="label" htmlFor="input5">
                              Employment status
                            </label>
                            <br />
                            <input
                              id="input5"
                              className="inp"
                              type="text"
                              placeholder="Employment status"
                            />
                          </div>
                          <div className="inp-cont">
                            <label className="label" htmlFor="input6">
                              Employment address
                            </label>
                            <br />
                            <input
                              id="input6"
                              className="inp"
                              type="text"
                              placeholder="Employment address"
                            />
                          </div>
                          <div className="inp-cont">
                            <label className="label" htmlFor="input7">
                              Employment address
                            </label>
                            <br />
                            <input
                              id="input7"
                              className="inp"
                              type="text"
                              placeholder="Employment address"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1746931618/Chart_fbrvtt.png"
                        alt="chart"
                        className="chart-img"
                      />
                      <div className="checks-cont">
                        <div className="check-cont">
                          <input type="checkbox" id="checkbox-inp1" />
                          <label className="label" htmlFor="checkbox-inp1">
                            I have read the important information and accept
                            that by completing the application I will be bound
                            by the terms
                          </label>
                        </div>
                        <div className="check-cont">
                          <input type="checkbox" id="checkbox-inp2" />
                          <label className="label" htmlFor="checkbox-inp2">
                            Any personal and credit information obtained may be
                            disclosed from time to time to other lenders, credit
                            bureaus or other credit reporting agencies.
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="submit-btn"
                        onClick={() => close()}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                );
              }}
            </Popup>
          </div>
          <div className="cont2">
            <span className="cash-span cash-span1">Borrow Cash</span>
            <hr className="hr-line" />
            <span className="cash-span">Transact</span>
            <hr className="hr-line" />
            <span className="cash-span">Deposit Cash</span>
          </div>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search for loans"
            />
          </div>
        </div>
        <div className="down-cont">
          <div className="applied-loans-heading-cont">
            <h1 className="heading">Applied Loans</h1>
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
            <p className="title1">Loan Officer</p>
            <p className="title2">Amount</p>
            <p className="title3">Date Applied</p>
            <p className="title4">Status</p>
          </div>
          {this.renderFinalView()}
        </div>
      </div>
    );
  }
}
export default UserDashboard;
