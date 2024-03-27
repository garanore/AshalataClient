// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

const InstallmentDetails = () => {
  const [centers, setCenters] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [centerMember, setCenterMember] = useState("");

  // For Center Fetching----------------------------------------------------------------

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

  useEffect(() => {
    axios
      .get(`http://localhost:9000/get-datesS/${selectedCenter}`)
      .then((response) => {
        setCenterMember(response.data);
      })
      .catch((error) => {
        console.error("Error fetching center data:", error);
      });
  }, [selectedCenter]);

  // For Center Change-------------------------------------
  const handleCenterChange = (e) => {
    const selectedCenter = e.target.value;
    setSelectedCenter(selectedCenter);
  };

  return (
    <div className="bg-light container-fluid">
      <form>
        <div className="mb-3">
          <div className="row mb-5">
            <h2 className="text-center mb-4 pt-4">কিস্তির তালিকা</h2>
          </div>
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
                <option key={center._id} value={center.CenterName}>
                  {center.CenterName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="table-responsive">
          {selectedCenter && centerMember.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>সদস্য ID</th>
                  <th>সদস্য নাম</th>
                  <th>পিতা/স্বামীর নাম</th>
                  <th>মোবাইল</th>
                  <th>কেন্দ্র </th>
                  <th>ঋণের ধরণ</th>
                  <th>কিস্তির পরিমাণ </th>
                  {/* Add more table headings if needed */}
                </tr>
              </thead>
              <tbody>
                {centerMember.map((center, index) => (
                  <tr key={index}>
                    <td>{center.loanID}</td>
                    <td>{center.memberID}</td>
                    <td>{center.OLname}</td>
                    <td>{center.fathername}</td>
                    <td>{center.OLmobile}</td>
                    <td>{center.OLcenter}</td>
                    <td>{center.loanType}</td>
                    <td>{center.installment}</td>
                    {/* Add more table cells for other data if needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : selectedDate ? (
            <p>No data found</p>
          ) : (
            <p>Please select a date</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default InstallmentDetails;
