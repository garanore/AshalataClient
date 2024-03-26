// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const InstallmentDetails = () => {
  const [selectedCenter, setSelectedCenter] = useState("");
  const [worker, setWorker] = useState("");
  const [monthlyData, setMonthlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    if (selectedCenter) {
      fetchInstallmentDetails(selectedCenter);
    }
  }, [selectedCenter]);
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

  const handleCenterChange = (e) => {
    const center = e.target.value;
    setSelectedCenter(center);

    // Fetch member data for the selected center
    if (center) {
      axios
        .get(
          `http://localhost:9000/member-callback?selectedCenter=${encodeURIComponent(
            center
          )}`
        )

        .catch((error) => {
          console.error("Error fetching member data:", error);
        });
    }
  };

  const fetchInstallmentDetails = async (center) => {
    try {
      const response = await axios.get(`/installments?center=${center}`);
      const { worker, monthlyInstallments, weeklyInstallments } = response.data;
      setWorker(worker);
      setMonthlyData(monthlyInstallments);
      setWeeklyData(weeklyInstallments);
    } catch (error) {
      console.error("Error fetching installment details:", error);
    }
  };

  return (
    <div className="bg-light mt-2">
      <h2 className="text-center mb-4 pt-4">কিস্তির তালিকা</h2>
      <div className="row p-3">
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
        <div className="col-md-3 col-3">
          <label className="form-label">কর্মী</label>
          <input type="text" className="form-control" value={worker} readOnly />
        </div>
      </div>

      <div className="mt-4 table-responsive p-3">
        <div className="col-md-6 table table-hover mb-5">
          <h3 className="text-center">মাসিক কিস্তি</h3>
          <table className="table table-hover">
            {/* Table headers */}
            <tbody>
              {monthlyData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.memberName}</td>
                  <td>{item.mobile}</td>
                  <td>{item.loanType}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-md-6 table table-hover mt-5 p-3">
        <h3 className="text-center">সাপ্তাহিক কিস্তি</h3>
        <table className="table table-hover">
          {/* Table headers */}
          <tbody>
            {weeklyData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.memberName}</td>
                <td>{item.mobile}</td>
                <td>{item.loanType}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstallmentDetails;
