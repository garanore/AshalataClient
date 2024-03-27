// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

function LoanDetails() {
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [loans, setLoans] = useState({});
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/center-callback")
      .then((response) => {
        setCenters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching center data:", error);
      });
  }, []);

  const handleCenterChange = async (e) => {
    const center = e.target.value;
    setSelectedCenter(center);
    setSelectedMember(null);

    // Fetch loan data for the selected center
    try {
      const response = await axios.get(
        `http://localhost:9000/loan-callback?center=${encodeURIComponent(
          center
        )}`
      );

      // Update the loans state with the fetched data
      setLoans((prevLoans) => ({
        ...prevLoans,
        [center]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching loan data:", error);
    }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const totalID =
    selectedCenter && centers[selectedCenter]
      ? centers[selectedCenter].length
      : 0;

  const totalAmount =
    selectedCenter &&
    loans[selectedCenter]?.reduce(
      (total, loan) => total + (loan.OLamount || 0),
      0
    );

  return (
    <div className="bg-light container-fluid">
      <div className="row mb-5">
        <h2 className="text-center mb-4 pt-4">ঋণের তালিকা </h2>
      </div>

      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="CenterSelect" className="form-label">
            কেন্দ্র নির্বাচন করুণ
          </label>
          <select
            className="form-select"
            id="CenterSelect"
            onChange={handleCenterChange}
            value={selectedCenter}
          >
            <option value="">Choose...</option>
            {centers.map((center) => (
              <option key={center._id} value={center.centerID}>
                {center.centerID}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-responsive">
        {selectedCenter && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>নাম</th>
                <th>সদস্য ID</th>
                <th>মোবাইল</th>
                <th>ঋণের ধরণ</th>
                <th>ঋণের পরিমাণ</th>
                <th>কর্মী</th>
                <th>পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {loans[selectedCenter]?.map((loanItem) => (
                <tr key={loanItem.loanID}>
                  <td>{loanItem.loanID}</td>
                  <td>{loanItem.OLname}</td>
                  <td>{loanItem.memberID}</td>
                  <td>{loanItem.OLmobile}</td>
                  <td>{loanItem.loanType}</td>
                  <td>{loanItem.OLamount}</td>
                  <td>{loanItem.Worker}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleMemberClick(loanItem)}
                    >
                      View
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => console.log("Edit center")}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Selected Worker Details */}
        {selectedMember && (
          <div>
            <div className="mb-5 ">
              <h2 className="text-center mb-4 pt-4 ">নির্বাচিত ঋণের বিবরণ</h2>
            </div>

            <div className="row">
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">Loan ID</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.loanID}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">সদস্য ID</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.memberID}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">সদস্যর নাম</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.OLname}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">সদস্য মোবাইল</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.OLmobile}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">ঋণের ধরণ</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.loanType}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">ঋণের পরিমাণ</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.OLamount}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কিস্তির পরিমাণ</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.loanType}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কিস্তি জমা</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.loanType}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কিস্তি বাকি</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.loanType}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-4">
          <p>মোট সদস্য: {totalID} জন</p>
          <p>মোট ঋণের পরিমাণ: {totalAmount} টাকা</p>
        </div>
      </div>
    </div>
  );
}

export default LoanDetails;
