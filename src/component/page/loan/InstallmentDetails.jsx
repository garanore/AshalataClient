// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

const InstallmentDetails = () => {
  const [centers, setCenters] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [centerMember, setCenterMember] = useState([]);

  useEffect(() => {
    // Fetch centers
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
    // Fetch data based on selected center and date
    if (selectedCenter && selectedDate) {
      const searchDate = moment(selectedDate).format("DD-MM-YY"); // Format selectedDate as "DD-MM-YY"
      axios
        .get(`http://localhost:9000/get-installmentDate/${selectedCenter}`)
        .then((response) => {
          const filteredData = response.data.filter((item) =>
            item.nextDates.includes(searchDate)
          );
          setCenterMember(filteredData);
        })
        .catch((error) => {
          console.error("Error fetching center data:", error);
        });
    } else {
      setCenterMember([]);
    }
  }, [selectedCenter, selectedDate]);

  const handleCenterChange = (e) => {
    setSelectedCenter(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
                <option key={center._id} value={center.centerID}>
                  {center.centerID}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="form-label">
              তারিখ নির্বাচন করুণ
            </label>
            <div>
              <DatePicker
                id="date"
                className="form-control"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </div>
        <div className="table-responsive">
          {centerMember.length > 0 ? (
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
          ) : selectedCenter && selectedDate ? (
            <p> কেন্দ্র এবং তারিখ অনুযায়ী কোন কিস্তি নেই </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default InstallmentDetails;
``;
