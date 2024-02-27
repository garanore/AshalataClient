// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

function CenterList() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedCenter, setSelectedCenter] = useState(null);
  const [centers, setCenters] = useState([]);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/branch-callback")
      .then((response) => {
        setBranches(response.data);
      })
      .catch((error) => {
        console.error("Error fetching branch data:", error);
      });
  }, []);

  const handleBranchChange = (e) => {
    const branch = e.target.value;

    setSelectedBranch(branch);
    setSelectedCenter(null);

    // Fetch worker data for the selected branch
    if (branch) {
      axios
        .get(
          `http://localhost:4000/center-callback?selectedBranch=${encodeURIComponent(
            branch
          )}`
        )
        .then((response) => {
          console.log("Fetched centers:", response.data); // Log the data
          setCenters(response.data);
        })
        .catch((error) => {
          console.error("Error fetching worker data:", error);
        });
    }
  };

  const handleCenterClick = (center) => {
    setSelectedCenter(center);
  };

  return (
    <div className="bg-light container-fluid">
      <div className="row mb-5">
        <h2 className="text-center mb-4 pt-4">কেন্দ্রের তালিকা</h2>
      </div>

      <div className="row">
        <div className="col-md-3 mb-3">
          <label htmlFor="branchSelect" className="form-label">
            শাঁখা নির্বাচন করুণ
          </label>
          <select
            className="form-select"
            id="branchSelect"
            onChange={handleBranchChange}
            value={selectedBranch}
          >
            <option value="">Choose...</option>
            {Array.isArray(branches) &&
              branches.length > 0 &&
              branches.map((branch) => (
                <option key={branch._id} value={branch.BranchName}>
                  {branch.BranchName}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="table-responsive">
        {selectedBranch && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>নাম</th>
                <th>মোবাইল</th>
                <th>ঠিকানা</th>
                <th>সদস্য সংখ্যা</th>
                <th>কর্মী</th>
                <th>পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {centers.map((center) => (
                <tr key={center.centerID}>
                  <td>{center.centerID}</td>
                  <td>{center.CenterName}</td>
                  <td>{center.CenterMnumber}</td>
                  <td>{center.AddressCenter}</td>
                  <td>{center.selectedWorker}</td>
                  <td>{center.selectedWorker}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleCenterClick(center)}
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
        )}

        {selectedCenter && (
          <div>
            <div className="mb-5 ">
              <h2 className="text-center mb-4 pt-4 ">
                নির্বাচিত কেন্দ্রের বিবরণ
              </h2>
            </div>

            <div className="row">
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কেন্দ্রের ID</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedCenter.centerID}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কেন্দ্রের নাম</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedCenter.CenterName}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">মোবাইল</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedCenter.CenterMnumber}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">ঠিকানা</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedCenter.AddressCenter}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              {/* Add more fields based on your data */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CenterList;
