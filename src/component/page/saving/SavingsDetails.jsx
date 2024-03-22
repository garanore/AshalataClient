// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

// Main Component
function SavingsDetails() {
  // State variables to store selected values
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [savings, setsavings] = useState({});
  const [centers, setCenters] = useState([]);

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

  const handleCenterChange = async (e) => {
    const center = e.target.value;
    setSelectedCenter(center);
    setSelectedMember(null);

    // Fetch loan data for the selected center
    try {
      const response = await axios.get(
        `http://localhost:9000/saving-callback?center=${encodeURIComponent(
          center
        )}`
      );

      // Update the loans state with the fetched data
      setsavings((prevSavings) => ({
        ...prevSavings,
        [center]: response.data,
      }));
    } catch (error) {
      console.error("Error fetching loan data:", error);
    }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="bg-light mt-2">
      <div className=" p-3 ">
        <div className=" row ">
          <div className="mb-5 ">
            <h2 className="text-center mb-4 pt-4 ">সঞ্চয়ের তালিকা </h2>
          </div>

          <div className="row">
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
            {selectedCenter && (
              <table className="  table table-hover ">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>নাম</th>
                    <th>সদস্য ID</th>
                    <th>মোবাইল</th>
                    <th>সঞ্চয়ের ধরণ</th>
                    <th>কর্মী</th>
                    <th>পদক্ষেপ</th>
                  </tr>
                </thead>
                <tbody>
                  {savings[selectedCenter]?.map((saving) => (
                    <tr key={saving.savingID}>
                      <td>{saving.savingID}</td>
                      <td>{saving.OSname}</td>
                      <td>{saving.memberID}</td>
                      <td>{saving.OSmobile}</td>
                      <td>{saving.savingType}</td>
                      <td>{saving.Worker}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => handleMemberClick(saving)}
                        >
                          View
                        </button>

                        <button
                          type="button"
                          className="btn btn-warning btn-sm"
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
            {selectedMember && (
              <div>
                <div className="mb-5 ">
                  <h2 className="text-center mb-4 pt-4 ">
                    নির্বাচিত সঞ্চয়ের বিবরণ
                  </h2>
                </div>

                <div className="row">
                  <div className="col-3">
                    <div className="row g-3 align-items-center ">
                      <div className="col-3">
                        <label className="col-form-label">Saving ID</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          value={selectedMember.savingID}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="row g-3 align-items-center ">
                      <div className="col-3">
                        <label className="col-form-label">সদস্য ID</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          value={selectedMember.memberID}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="row g-3 align-items-center ">
                      <div className="col-3">
                        <label className="col-form-label">সদস্যর নাম</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          value={selectedMember.OSname}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="row g-3 align-items-center ">
                      <div className="col-3">
                        <label className="col-form-label">সদস্য মোবাইল</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          value={selectedMember.OSmobile}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="row g-3 align-items-center ">
                      <div className="col-3">
                        <label className="col-form-label">সঞ্চয়ের ধরণ</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          value={selectedMember.savingType}
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="row g-3 align-items-center ">
                      <div className="col-3">
                        <label className="col-form-label">সঞ্চয়ের পরিমাণ</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          className="form-control"
                          value={selectedMember.Samount}
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
      </div>
    </div>
  );
}

export default SavingsDetails;
