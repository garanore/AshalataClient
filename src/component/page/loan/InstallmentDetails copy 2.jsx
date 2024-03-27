// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

const InstallmentDetails = () => {
  const [centers, setCenters] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (selectedDate) {
      const searchDate = moment(selectedDate).format("DD-MM-YY");
      axios
        .get(`http://localhost:9000/get-dates/${searchDate}`)
        .then((response) => {
          setCenters(response.data);
        })
        .catch((error) => {
          console.error("Error fetching center data:", error);
        });
    } else {
      setCenters([]);
    }
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedDate) {
      const formattedDate = moment(selectedDate).format("DD-MM-YY");
      console.log("Selected Date:", formattedDate);
    } else {
      console.log("Please select a date first");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-light container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="row mb-5">
            <h2 className="text-center mb-4 pt-4">কিস্তির তালিকা</h2>
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
      </form>
      <div className="table-responsive">
        {centers.length > 0 ? (
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
              {centers.map((center, index) => (
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
    </div>
  );
};

export default InstallmentDetails;
