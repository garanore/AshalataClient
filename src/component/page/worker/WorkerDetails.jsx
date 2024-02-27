// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

// Main Component
function WorkerDetails() {
  // State variables to store selected values
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [workers, setWorkers] = useState([]);
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
    setSelectedWorker(null);

    // Fetch worker data for the selected branch
    if (branch) {
      axios
        .get(
          `http://localhost:4000/worker-callback?selectedBranch=${encodeURIComponent(
            branch
          )}`
        )
        .then((response) => {
          setWorkers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching worker data:", error);
        });
    }
  };

  const handleWorkerClick = (worker) => {
    setSelectedWorker(worker);
  };

  return (
    <div className="bg-light container-fluid">
      <div className="row mb-5">
        <h2 className="text-center mb-4 pt-4">কর্মীর তালিকা</h2>
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
                <th>কেন্দ্র</th>
                <th>পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.workerID}>
                  <td>{worker.workerID}</td>
                  <td>{worker.WorkerName}</td>
                  <td>{worker.WorkerMobile}</td>
                  <td>{worker.WorkerCenterAdd}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleWorkerClick(worker)}
                    >
                      View
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => console.log("Delete worker")}
                    >
                      Delete
                    </button>{" "}
                    <button
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => console.log("Edit worker")}
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
        {selectedWorker && (
          <div>
            <div className="mb-5 ">
              <h2 className="text-center mb-4 pt-4 ">নির্বাচিত কর্মীর বিবরণ</h2>
            </div>

            <div className="row">
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কর্মীর ID</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.workerID}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কর্মীর নাম</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.WorkerName}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">জন্ম তারিখ</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.WdateOfBirth}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">NID</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.WorkerNID}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">গ্রাম</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.WorkerHome}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">মেইল</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.WorkerMail}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">উপজেলা</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.WorkerSubDic}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">জেলা</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedWorker.WorkerDic}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WorkerDetails;
