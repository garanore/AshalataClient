// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

const InstallmentDetails = () => {
  // const [selectedCenter, setSelectedCenter] = useState("");

  const [centers, setCenters] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // instant
  const searchDate = moment(selectedDate).format("DD-MM-YY");
  console.log("searchDate: ", searchDate);
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
      setCenters("");
    }
  }, [selectedDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedDate) {
      const formattedDate = moment(selectedDate).format("DD-MM-YY");
      console.log("Selected Date:", formattedDate);

      // axios
      //   .get(`http://localhost:9000/get-dates/${formattedDate}`)
      //   .then((response) => {
      //     setCenters(response.data);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching center data:", error);
      //   });
      // setCenters("");
    } else {
      console.log("Please select a date first");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log("ABC", centers.length);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Bootstrap Form Date Select</h1>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Select Date:
            </label>
            <DatePicker
              id="date"
              className="form-control"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
            />
          </div>
          {/* <button className="btn btn-primary">Submit</button> */}
        </div>
      </form>
      <div>
        {centers.length > 0 ? (
          centers.map((center, index) => (
            <div key={index}>{center.WorkerName}</div>
          ))
        ) : selectedDate ? (
          <p>No data found</p>
        ) : (
          <p>Please select a date</p>
        )}
      </div>

      {/* <div>
        {selectedDate ? (
          centers.length > 0 ? (
            centers.map((center, index) => (
              <div key={index}>{center.WorkerName}</div>
            ))
          ) : (
            <p>No data found</p>
          )
        ) : (
          <p>Please select a date</p>
        )}
      </div> */}
    </div>
  );
};

export default InstallmentDetails;
