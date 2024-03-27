// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { convertLength } from "@mui/material/styles/cssUtils";

function MemberListCenter() {
  const [selectedCenter, setSelectedCenter] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [members, setMembers] = useState({});
  const [centers, setCenters] = useState([]);
  const navigate = useNavigate();

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
    setSelectedMember(null);

    // Fetch member data for the selected center
    if (center) {
      axios
        .get(
          `http://localhost:9000/member-callback?selectedCenter=${encodeURIComponent(
            center
          )}`
        )
        .then((response) => {
          setMembers({ ...members, [center]: response.data });
        })
        .catch((error) => {
          console.error("Error fetching member data:", error);
        });
    }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };
  const handleEdit = (member) => {
    navigate("/MemberEdit", { state: { memberID: member._id } });
  };

  return (
    <div className="bg-light container-fluid">
      <div className="row mb-5">
        <h2 className="text-center mb-4 pt-4">কেন্দ্রের সদস্য তালিকা</h2>
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
              <option key={center._id} value={center.centerID}>
                {center.centerID}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="table-responsive">
        {selectedCenter && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>নাম</th>
                <th>পিতা/স্বামী</th>
                <th>মোবাইল</th>
                <th>ঠিকানা</th>
                <th>ঋণ</th>
                <th>সঞ্চয়</th>
                <th>কর্মী</th>
                <th>পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {members[selectedCenter] &&
                members[selectedCenter].map((member) => (
                  <tr key={member.memberID}>
                    <td>{member.memberID}</td>
                    <td>{member.memberName}</td>
                    <td>{member.MfhName}</td>
                    <td>{member.MemberMobile}</td>
                    <td>{member.memberVillage}</td>
                    <td>{member.MemberLoan}</td>
                    <td>{member.MemberSavings}</td>
                    <td>{member.centerWorker}</td>
                    <td>
                      <button
                        type="button"
                        className=" btn btn-primary btn-sm"
                        onClick={() => handleMemberClick(member)}
                      >
                        View
                      </button>

                      <button
                        type="button"
                        className="ms-3 btn btn-primary btn-sm"
                        onClick={() => handleEdit(member)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}

        {/* Selected Member Details */}
        {selectedMember && (
          <form>
            <div className="mb-5 ">
              <h2 className="text-center mb-4 pt-4 ">নির্বাচিত সদস্যর বিবরণ</h2>
            </div>

            <div className="row">
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
                    <label className="col-form-label">সদস্য নাম</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.memberName}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">জন্ম তারিখ</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.MdateOfBirth}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">NID</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.MemberNIDnumber}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">নমীনির নাম</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      value={selectedMember.NominiName}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">নমীনির পিতা</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.NominiFather}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">নমীনির সম্পর্ক</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.MemberNominiRelation}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">ঋণের ধরণ</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.MemberLoanType}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">ঋণের পরিমাণ:</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.MemberLoan}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">সঞ্চয়ের ধরণ:</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.MemberSavingsType}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কর্মী</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.Worker}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="row g-3 align-items-center ">
                  <div className="col-3">
                    <label className="col-form-label">কর্মীর মোবাইল</label>
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      value={selectedMember.WorkerMobile}
                      readOnly
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default MemberListCenter;
