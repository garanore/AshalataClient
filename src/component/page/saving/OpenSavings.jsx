// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const OpenSavings = () => {
  const [nid, setNid] = useState("");
  const [savingsData, setSavingsData] = useState(null);
  const [savingsType, setSavingsType] = useState("General");

  const demoData = {
    123456789: {
      id: "SV0001",
      name: "John Doe",
      husbandName: "Doe",
      mobile: "0123456789",
      center: "Demo Center",
      address: "Demo Address",
      worker: "Demo Worker",
      nomini: "Demo Nomini",
    },
    123456788: {
      id: "SV0002",
      name: "John Doe",
      husbandName: "Doe",
      mobile: "0123456789",
      center: "Demo Center",
      address: "Demo Address",
      worker: "Demo Worker",
      nomini: "Demo Nomini",
    },
    // Add more demo data entries as needed
  };

  const handleNidChange = (e) => {
    const newNid = e.target.value;
    setNid(newNid);

    // Check if NID matches demo data
    const matchingData = demoData[newNid];
    if (matchingData) {
      setSavingsData(matchingData);
    } else {
      setSavingsData(null);
    }
  };

  const handleSavingsTypeChange = (e) => {
    setSavingsType(e.target.value);
  };

  return (
    <div className=" bg-light mt-2 p-3">
      <div className=" p-2">
        <div className=" border-bottom mb-5 ">
          <h2 className="text-center   mb-4 pt-3">সঞ্চয় খুলুন</h2>
        </div>
      </div>
      <div className="mb-4 col-3">
        <label htmlFor="nid" className="form-label">
          NID
        </label>
        <input
          type="number"
          id="nid"
          className="form-control"
          value={nid}
          onChange={handleNidChange}
        />
      </div>

      {savingsData && (
        <div className="mb-3">
          <div className="row mb-3 ">
            <div className="mb-2 col-2">
              <label>ID:</label>
              <input
                type="text"
                value={savingsData.id}
                readOnly
                className="form-control"
              />
            </div>
            <div className="mb-2 col-3">
              <label>Name:</label>
              <input
                type="text"
                value={savingsData.name}
                readOnly
                className="form-control"
              />
            </div>
            <div className="mb-2 col-3">
              <label>Husband Name:</label>
              <input
                type="text"
                value={savingsData.husbandName}
                readOnly
                className="form-control"
              />
            </div>
            <div className="mb-2 col-2">
              <label>Mobile:</label>
              <input
                type="text"
                value={savingsData.mobile}
                readOnly
                className="form-control"
              />
            </div>
            <div className="mb-2 col-2">
              <label>Center:</label>
              <input
                type="text"
                value={savingsData.center}
                readOnly
                className="form-control"
              />
            </div>
          </div>

          <div className="mb-4">
            <label>Address:</label>
            <input
              type="text"
              value={savingsData.address}
              readOnly
              className="form-control"
            />
          </div>

          <div className="row">
            <div className="mb-2 col-2">
              <label>Worker:</label>
              <input
                type="text"
                value={savingsData.worker}
                readOnly
                className="form-control"
              />
            </div>
            <div className="mb-2 col-2">
              <label>Nomini:</label>
              <input
                type="text"
                value={savingsData.nomini}
                readOnly
                className="form-control"
              />
            </div>
          </div>
        </div>
      )}

      <div className="row">
        {/* Selection Option For Savings Type */}
        <div className="mb-3 col">
          <label htmlFor="savingsType" className="form-label">
            Savings Type
          </label>
          <select
            id="savingsType"
            className="form-select"
            value={savingsType}
            onChange={handleSavingsTypeChange}
          >
            <option value="General">সাধারণ</option>
            <option value="Meyadi">মেয়াদি</option>
            <option value="NonMeyadi">এককালিন ৩ বছর</option>
          </select>
        </div>

        {/* Add other form fields based on selected Savings Type */}
        <div className="col">
          {savingsType === "Meyadi" && (
            <div className="mb-2">
              <label htmlFor="timePeriod" className="form-label">
                Time Period
              </label>
              <select id="timePeriod" className="form-select">
                <option value="6">6 months</option>
                <option value="12">12 months</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mb-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default OpenSavings;
