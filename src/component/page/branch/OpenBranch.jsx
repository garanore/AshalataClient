// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://ashalota.gandhipoka.com/openbranch";
const Managers = ["আব্দুল ছাত্তার", "সুমন সরকার", "আকলিমা বেগম "];
function OpenBranch() {
  const [branchCount, setBranchCount] = useState(0);
  const [branchID, setBranchID] = useState("");
  const [branchData, setBranchData] = useState({
    BranchID: "",
    BranchName: "",
    BranchAddress: "",
    BranchMobile: "",
    selectedManager: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (branchCount !== undefined) {
      setBranchID(generateBranchID(branchCount));
    }
  }, [branchCount]);

  const generateBranchID = (count) => {
    const paddedCount =
      count !== undefined ? count.toString().padStart(4, "0") : "";
    return `B${paddedCount}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (
        !branchData.BranchName.trim() ||
        !branchData.BranchAddress.trim() ||
        !branchData.BranchMobile.trim()
      ) {
        // Display an error message or prevent form submission
        return;
      }

      const response = await axios.post(API_URL, {
        BranchID: branchID,
        ...branchData,
      });

      setSubmitMessage("Successfully submitted!");
      console.log("Response from server:", response.data);

      // Reset form values after submission
      setBranchCount(branchCount + 1);
      setBranchID(generateBranchID());
      setBranchData({
        BranchID: "",
        BranchName: "",
        BranchAddress: "",
        BranchMobile: "",
        selectedManager: "",
      });

      setTimeout(() => {
        setSubmitMessage("");
      }, 2000);
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
            <h2 className="text-center mb-4 pt-3">শাখা খুলুন</h2>
          </div>
        </div>

        <div>
          <form className="p-3">
            <div className="row mb-4">
              <div className="mb-3 col-3">
                <label htmlFor="BranchID" className="form-label">
                  Branch ID:
                </label>
                <input
                  id="BranchID"
                  className="form-control"
                  type="text"
                  value={branchID}
                  disabled
                />
              </div>
              <div className="mb-3 col-md-3 col-3">
                <label htmlFor="BranchName" className="form-label">
                  শাখার নাম
                </label>
                <input
                  id="BranchName"
                  className="form-control"
                  type="text"
                  name="BranchName"
                  value={branchData.BranchName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 col-3 col-md-3">
                <label htmlFor="BranchAddress" className="form-label">
                  ঠিকানা
                </label>
                <input
                  id="BranchAddress"
                  className="form-control"
                  type="text"
                  name="BranchAddress"
                  value={branchData.BranchAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3 col-3 col-md-3">
                <label htmlFor="BranchMobile" className="form-label">
                  Mobile:
                </label>
                <input
                  id="BranchMobile"
                  className="form-control"
                  type="number"
                  name="BranchMobile"
                  value={branchData.BranchMobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-3 col-4 col-md-4">
                <label htmlFor="selectedManager" className="form-label">
                  ম্যনেজার নির্বাচন করুণ
                </label>
                <select
                  id="selectedManager"
                  className="form-select"
                  name="selectedManager"
                  value={branchData.selectedManager}
                  onChange={handleChange}
                >
                  <option value="">Choose...</option>
                  {Managers.map((manager) => (
                    <option key={manager} value={manager}>
                      {manager}
                    </option>
                  ))}
                </select>
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

export default OpenBranch;
