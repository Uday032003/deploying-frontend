import { BsThreeDotsVertical } from "react-icons/bs";

import "./index.css";

const AppliedLoanItem = (props) => {
  const { item } = props;
  const {
    loanOfficerName,
    loanAmount,
    dateApplied,
    status,
    id,
    imageUrl,
    appliedTime,
    noDueStatus,
    update,
  } = item;
  const statusColor = () => {
    if (status === "APPROVED") {
      return "blue";
    } else if (status === "REJECTED") {
      return "red";
    } else if (status === "PENDING") {
      return "yellow";
    } else if (status === "VERIFIED") {
      return "green";
    }
  };
  return (
    <div className="list-item">
      <div className="cont-1">
        <img src={imageUrl} alt={loanOfficerName} className="officer-img" />
        <div className="cont-1-text-img-container">
          <p className="officer-name">{loanOfficerName}</p>
          <p className="update">Updated {update}</p>
        </div>
      </div>
      <div className="cont-2">
        <p className="total-loan-amount">{loanAmount}</p>
        <p className="no-due-status">{noDueStatus}</p>
      </div>
      <div className="cont-3">
        <p className="date-applied">{dateApplied}</p>
        <p className="applied-time">{appliedTime}</p>
      </div>
      <div className="status-container">
        <p className={`status ${statusColor()}`}>{status}</p>
      </div>
      <BsThreeDotsVertical className="dots-icon" />
    </div>
  );
};
export default AppliedLoanItem;
