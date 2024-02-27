// import React from "react";

// const CollectionList = () => {
//   return <div></div>;
// };

// export default CollectionList;

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

// Sample data (replace it with your actual data)
const centersData = {
  টাঙ্গাইল: {
    id: 1,
    worker: "কামাল",
    monthlyInstallments: [
      {
        id: 1,
        memberName: "মোঃ আলী",
        mobile: "1234567890",
        loanType: "Normal",
        amount: 50,
      },
      {
        id: 2,
        memberName: "মোঃ ববু",
        mobile: "9876543210",
        loanType: "Medium",
        amount: 70,
      },
    ],
    weeklyInstallments: [
      {
        id: 1,
        memberName: "মোঃ আলী",
        mobile: "1234567890",
        loanType: "High",
        amount: 20,
      },
      {
        id: 2,
        memberName: "মোঃ ববু",
        mobile: "9876543210",
        loanType: "Normal",
        amount: 30,
      },
    ],
  },
  কালিহাতি: {
    id: 3,
    worker: "সুমন",
    monthlyInstallments: [
      {
        id: 1,
        memberName: "মোঃ আলী",
        mobile: "1234567890",
        loanType: "Normal",
        amount: 50,
      },
      {
        id: 2,
        memberName: "মোঃ ববু",
        mobile: "9876543210",
        loanType: "Medium",
        amount: 70,
      },
    ],
    weeklyInstallments: [
      {
        id: 1,
        memberName: "মোঃ আলী",
        mobile: "1234567890",
        loanType: "High",
        amount: 20,
      },
      {
        id: 2,
        memberName: "মোঃ ববু",
        mobile: "9876543210",
        loanType: "Normal",
        amount: 30,
      },
    ],
  },
  ঘাটাইল: {
    id: 2,
    worker: "জামিল",
    monthlyInstallments: [
      {
        id: 3,
        memberName: "মোঃ করিম",
        mobile: "1112223333",
        loanType: "High",
        amount: 80,
      },
      {
        id: 4,
        memberName: "মোঃ রহিম",
        mobile: "4445556666",
        loanType: "Medium",
        amount: 60,
      },
    ],
    weeklyInstallments: [
      {
        id: 3,
        memberName: "মোঃ করিম",
        mobile: "1112223333",
        loanType: "Normal",
        amount: 40,
      },
      {
        id: 4,
        memberName: "মোঃ রহিম",
        mobile: "4445556666",
        loanType: "High",
        amount: 25,
      },
    ],
  },
  // Add more centers as needed
};

const CollectionList = () => {
  const [selectedCenter, setSelectedCenter] = useState("");
  const [worker, setWorker] = useState("");
  const [monthlyData, setMonthlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    // Fetch worker data when the selectedCenter changes
    if (selectedCenter && centersData[selectedCenter]) {
      const { worker, monthlyInstallments, weeklyInstallments } =
        centersData[selectedCenter];
      setWorker(worker);
      setMonthlyData(monthlyInstallments);
      setWeeklyData(weeklyInstallments);
    }
  }, [selectedCenter]);

  return (
    <div className=" bg-light mt-2">
      <h2 className="text-center mb-4 pt-4">সঞ্চয়ের তালিকা</h2>
      <div className="row p-3">
        <div className="col-md-3 mb-3">
          <label htmlFor="centerSelect" className="form-label">
            কেন্দ্র নির্বাচন করুণ
          </label>
          <select
            className="form-select"
            id="centerSelect"
            onChange={(e) => setSelectedCenter(e.target.value)}
            value={selectedCenter}
          >
            <option value="">Choose...</option>
            {Object.keys(centersData).map((center) => (
              <option key={center} value={center}>
                {center}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3 col-3 ">
          <label className="form-label">কর্মী</label>
          <label htmlFor="name" className="form-label"></label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={worker}
            readOnly
          />
        </div>
      </div>

      <div className=" mt-4 table-responsive p-3">
        <div className="col-md-6 table table-hover mb-5">
          <h3 className="text-center">মাসিক সঞ্চয়</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>নাম</th>
                <th>মোবাইল</th>
                <th>ঋণের ধরণ</th>
                <th>কিস্তি</th>
              </tr>
            </thead>
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
        <h3 className="text-center">সাপ্তাহিক সঞ্চয়</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>নাম</th>
              <th>মোবাইল</th>
              <th>ঋণের ধরণ</th>
              <th>কিস্তি</th>
            </tr>
          </thead>
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

export default CollectionList;
