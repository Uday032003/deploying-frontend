import { Component } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import UserDashboard from "./components/UserDashboard";
import VerifierSidebar from "./components/VerifierSidebar";
import VerifierDashboard from "./components/VerifierDashboard";
import AdminSidebar from "./components/AdminSidebar";
import AdminDashboard from "./components/AdminDashboard";

class App extends Component {
  state = { value: "user", closed: false };

  onClickedMenu = () => {
    console.log("clicked");
    this.setState((prevState) => ({ closed: !prevState.closed }));
  };

  onChangingValue = (value) => {
    this.setState({ value });
  };

  userView = () => <UserDashboard />;

  adminView = () => {
    const { closed } = this.state;
    return (
      <div className="cont">
        <AdminSidebar closed={closed} />
        <AdminDashboard />
      </div>
    );
  };

  verifierView = () => {
    const { closed } = this.state;
    return (
      <div className="cont">
        <VerifierSidebar closed={closed} />
        <VerifierDashboard />
      </div>
    );
  };

  renderResultView = () => {
    const { value } = this.state;
    switch (value) {
      case "user":
        return this.userView();
      case "admin":
        return this.adminView();
      case "verifier":
        return this.verifierView();
      default:
        return null;
    }
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <Navbar
          value={value}
          onChangingValue={this.onChangingValue}
          onClickedMenu={this.onClickedMenu}
        />
        {this.renderResultView()}
      </>
    );
  }
}
export default App;
