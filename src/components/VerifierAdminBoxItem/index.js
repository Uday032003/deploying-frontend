import { BsThreeDotsVertical } from "react-icons/bs";

import "./index.css";

const VerifierAdminBoxItem = (props) => {
  const { item } = props;
  const {
    aboutUpdate,
    customerName,
    updatedDate,
    status,
    imageUrl,
    updatedTime,
    loanAppliedDate,
    update,
  } = item;
  const statusColor = () => {
    if (status === "APPROVED") {
      return "green";
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
        <img src={imageUrl} alt="logo" className="officer-img" />
        <div className="cont-1-text-img-container">
          <p className="officer-name">{aboutUpdate}</p>
          <p className="update">Updated {update}</p>
        </div>
      </div>
      <div className="cont-2">
        <p className="total-loan-amount">{customerName}</p>
        <p className="no-due-status">{loanAppliedDate}</p>
      </div>
      <div className="cont-3">
        <p className="date-applied">{updatedDate}</p>
        <p className="applied-time">{updatedTime}</p>
      </div>
      <div className="status-container">
        <p className={`status ${statusColor()}`}>{status}</p>
      </div>
      <BsThreeDotsVertical className="dots-icon" />
    </div>
  );
};
export default VerifierAdminBoxItem;
