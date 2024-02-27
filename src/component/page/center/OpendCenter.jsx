// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:4000/opencenter";

function OpenCenter() {
  const [centerCount, setCenterCount] = useState(0);
  const [centerID, setCenterID] = useState("");
  const [workers, setWorkers] = useState([]);
  const [branchs, setBranchs] = useState([]);
  const [formData, setFormData] = useState({
    centerID: "",
    CenterName: "",
    AddressCenter: "",
    CenterMnumber: "",
    centerBranch: "",
    centerWorker: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch("http://localhost:4000/branch-callback");
        const data = await response.json();
        console.log("Fetched branch:", data);
        setBranchs(data);
      } catch (error) {
        console.error("Error fetching branch options:", error.message);
      }
    };

    fetchCenters();
  }, []);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await fetch("http://localhost:4000/worker-callback");
        const data = await response.json();
        console.log("Fetched workers:", data); // Log the data
        setWorkers(data);
      } catch (error) {
        console.error("Error fetching worker options:", error.message);
      }
    };

    fetchCenters();
  }, []);

  useEffect(() => {
    if (centerCount !== undefined) {
      setCenterID(generateCenterID(centerCount));
    }
  }, [centerCount]);
  const generateCenterID = (count) => {
    const paddedCount =
      count !== undefined ? count.toString().padStart(4, "0") : "";
    return `C${paddedCount}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (
        !formData.CenterName.trim() ||
        !formData.AddressCenter.trim() ||
        (typeof formData.CenterMnumber === "string" &&
          !formData.CenterMnumber.trim())
      ) {
        return;
      }

      const response = await axios.post(API_URL, {
        centerID: formData.centerID, // Include centerID in the payload
        ...formData,
      });

      setSubmitMessage("Successfully submitted!");
      console.log("Response from server:", response.data);

      setCenterCount(centerCount + 1);
      setCenterID(generateCenterID());
      setFormData({
        centerID: "",
        CenterName: "",
        AddressCenter: "",
        CenterMnumber: "",
        centerBranch: "",
        centerdWorker: "",
      });

      setTimeout(() => {
        setSubmitMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setSubmitMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="bg-light">
        <div className="p-2">
          <div className="border-bottom mb-5">
            <h2 className="text-center mb-4 pt-3">কেন্দ্র খুলুন</h2>
          </div>
        </div>

        <div>
          <form className="p-3">
            <div className="row mb-4">
              <div className="mb-3 col-3">
                <label htmlFor="centerID" className="form-label">
                  Center ID:
                </label>
                <input
                  id="centerID"
                  className="form-control"
                  type="text"
                  value={centerID}
                  disabled
                />
              </div>
              <div className="mb-3 col-md-3 col-3">
                <label htmlFor="CenterName" className="form-label">
                  কেন্দ্রের নাম
                </label>
                <input
                  id="CenterName"
                  className="form-control"
                  type="text"
                  value={formData.CenterName}
                  onChange={handleChange}
                  name="CenterName"
                />
              </div>

              <div className="mb-3 col-3 col-md-3">
                <label htmlFor="AddressCenter" className="form-label">
                  ঠিকানা
                </label>
                <input
                  id="AddressCenter"
                  className="form-control"
                  type="text"
                  value={formData.AddressCenter}
                  onChange={handleChange}
                  name="AddressCenter"
                />
              </div>

              <div className="mb-3 col-3 col-md-3">
                <label htmlFor="CenterMnumber" className="form-label">
                  মোবাইল:
                </label>
                <input
                  id="CenterMnumber"
                  className="form-control"
                  type="number"
                  value={formData.CenterMnumber}
                  onChange={handleChange}
                  name="CenterMnumber"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-4 col-md-4">
                <label htmlFor="centerBranch" className="form-label">
                  শাঁখা নির্বাচন করুণ
                </label>
                <select
                  id="centerBranch"
                  className="form-select"
                  value={formData.centerBranch}
                  onChange={handleChange}
                  name="centerBranch"
                >
                  <option value="">Choose...</option>
                  {branchs.map((branch) => (
                    <option key={branch._id} value={branch.BranchName}>
                      {branch.BranchName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-4">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="centerWorker" className="form-label">
                      কর্মী নির্বাচন করুণ
                    </label>
                    <select
                      id="centerWorker"
                      className="form-select"
                      value={formData.centerWorker}
                      onChange={handleChange}
                      name="centerWorker"
                    >
                      <option value="">Choose...</option>
                      {workers.map((worker) => (
                        <option key={worker._id} value={worker.WorkerName}>
                          {worker.WorkerName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-5 mt-5">
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              {submitMessage && (
                <div className="alert alert-success" role="alert">
                  {submitMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OpenCenter;
