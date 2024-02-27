// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// Sample worker data (replace it with your actual data)
const centers = {
  টাঙ্গাইল: [
    {
      id: 1,
      name: "কেন্দ্র 1A1",
      mobile: "1234567890",
      loantype: "Normal",
      Address: "Address 1A1",
      amount: 20,
      Worker: "কামাল",
    },
    {
      id: 2,
      name: "কেন্দ্র 1A2",
      mobile: "9876543210",
      loantype: "Normal",
      amount: 30,
      Worker: "কামাল",
    },
    {
      id: 3,
      name: "কেন্দ্র 1B1",
      mobile: "1112223333",
      loantype: "Medium",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 4,
      name: "কেন্দ্র 1B2",
      mobile: "4445556666",
      loantype: "Medium",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 5,
      name: "কেন্দ্র 1C1",
      mobile: "7778889999",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 6,
      name: "কেন্দ্র 1C2",
      mobile: "0001112222",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
  ],
  ঘাটাইল: [
    {
      id: 7,
      name: "কেন্দ্র 2A1",
      mobile: "1112223333",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 8,
      name: "কেন্দ্র 2A2",
      mobile: "4445556666",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 9,
      name: "কেন্দ্র 2B1",
      mobile: "7778889999",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 10,
      name: "কেন্দ্র 2B2",
      mobile: "0001112222",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 11,
      name: "কেন্দ্র 2C1",
      mobile: "1234567890",
      loantype: "Normal",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 12,
      name: "কেন্দ্র 2C2",
      mobile: "9876543210",
      loantype: "Medium",
      amount: 100,
      Worker: "কামাল",
    },
  ],
  মধুপুর: [
    {
      id: 13,
      name: "কেন্দ্র 3A1",
      mobile: "0001112222",
      loantype: "Normal",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 14,
      name: "কেন্দ্র 3A2",
      mobile: "7778889999",
      loantype: "Normal",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 15,
      name: "কেন্দ্র 3B1",
      mobile: "1234567890",
      loantype: "Normal",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 16,
      name: "কেন্দ্র 3B2",
      mobile: "9876543210",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 17,
      name: "কেন্দ্র 3C1",
      mobile: "1112223333",
      loantype: "High",
      amount: 100,
      Worker: "কামাল",
    },
    {
      id: 18,
      name: "কেন্দ্র 3C2",
      mobile: "4445556666",
      loantype: "Medium",
      amount: 100,
      Worker: "কামাল",
    },
  ],
};

// Main Component
function SavingsDetails() {
  // State variables to store selected values
  const [selectedCenters, setSelectedCenter] = useState("");
  const [selectedCenter, setSelectedWorker] = useState(null);

  // Event handler for change in select option
  const handleBranchChange = (e) => {
    setSelectedCenter(e.target.value);
    setSelectedWorker(null);
  };

  const handleWorkerClick = (center) => {
    setSelectedWorker(center);
  };

  const totalID =
    selectedCenters && centers[selectedCenters]
      ? centers[selectedCenters].length
      : 0;

  const totalAmount =
    selectedCenters &&
    centers[selectedCenters] &&
    centers[selectedCenters].reduce(
      (total, center) => total + (center.amount || 0),
      0
    );

  return (
    <div className="bg-light mt-2">
      <div className=" p-3 ">
        <div className=" row ">
          <div className="mb-5 ">
            <h2 className="text-center mb-4 pt-4 ">সঞ্চয়ের তালিকা </h2>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="branchSelect" className="form-label">
                কেন্দ্র নির্বাচন করুণ
              </label>
              <select
                className="form-select"
                id="branchSelect"
                onChange={handleBranchChange}
                value={selectedCenters}
              >
                <option value="">Choose...</option>
                {Object.keys(centers).map((branch) => (
                  <option key={branch} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="table-responsive">
            <table className="  table table-hover ">
              {selectedCenters && (
                <div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>নাম</th>
                        <th>মোবাইল</th>
                        <th>সঞ্চয়ের ধরণ</th>
                        <th> সঞ্চয়ের সময়</th>
                        <th>কর্মী</th>
                        <th>পদক্ষেপ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {centers[selectedCenters].map((center) => (
                        <tr key={center.id}>
                          <td>{center.id}</td>
                          <td>{center.name}</td>
                          <td>{center.mobile}</td>
                          <td>{center.loantype}</td>
                          <td>{center.amount}</td>
                          <td>{center.Worker}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                              onClick={() => handleWorkerClick(center)}
                            >
                              View
                            </button>{" "}
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => console.log("Delete center")}
                            >
                              Delete
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
                </div>
              )}

              {/* Selected Worker Details */}
              {selectedCenter && (
                <div>
                  <h2>নির্বাচিত সঞ্চয়ের বিবরণ</h2>
                  <p>ID: {selectedCenter.id}</p>
                  <p>নাম: {selectedCenter.name}</p>
                  <p>মোবাইল: {selectedCenter.mobile}</p>
                  <p>কর্মী: {selectedCenter.Worker}</p>
                </div>
              )}
            </table>
          </div>

          <div className="mt-4">
            <p>মোট সদস্য: {totalID} জন</p>
            <p>মোট ঋণের পরিমাণ: {totalAmount} টাকা</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavingsDetails;
