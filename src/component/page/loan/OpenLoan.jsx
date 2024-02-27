// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import axios from "axios"; // Import Axios
const API_URL = "http://localhost:4000/openloan";

const memberData = [
  {
    nid: 123456789,
    memberName: "ছালমা খাতুন",
    husbandName: "ঈমান আলী",
    branchName: "এলেংগা ",
    centerName: "ইছাপুর",
    mobile: "9876543210",
  },
  // Add more members as needed
];

const loanTypeTranslations = {
  normal: "সাধারণ ঋণ",
  tubewell: "নলকূপ ঋণ",
  farmer: "কৃষি ঋণ",
  sme: "এস এম ই ঋণ",
  emergency: "জরুরী ঋণ",
  disaster: "দুর্যোগ ঋণ",
  daily: "দৈনিক ঋণ",
};

function OpenLoan() {
  const [loanCount, setLoanCount] = useState(0);
  const [loanID, setloanID] = useState("");

  const [nid, setNid] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [loanType, setLoanType] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const fetchedMember = memberData.find((member) => member.nid === +nid);
    setSelectedMember(fetchedMember);
  }, [nid]);

  useEffect(() => {
    if (loanCount !== undefined) {
      setloanID(generateLoanID(loanCount));
    }
  }, [loanCount]);
  const generateLoanID = (count) => {
    const paddedCount =
      count !== undefined ? count.toString().padStart(4, "0") : "";
    return `L${paddedCount}`;
  };

  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
    setAmount("");
    setTotal("");
    setMobileNumber("");
  };

  const handleAmountChange = (e) => {
    const enteredAmount = +e.target.value;
    let interestRate;
    switch (loanType) {
      case "normal":
        interestRate = 0.15;
        break;
      case "tubewell":
        interestRate = 0.15;
        break;
      case "high":
        interestRate = 0.15;
        break;
      case "farmer":
        interestRate = 0.15;
        break;
      case "sme":
        interestRate = 0.15;
        break;
      case "emergency":
        interestRate = 0.15;
        break;
      case "disaster":
        interestRate = 0.15;
        break;
      case "daily":
        interestRate = 0.15;
        break;
      default:
        interestRate = 0;
    }

    const calculatedTotal = enteredAmount + enteredAmount * interestRate;
    setAmount(enteredAmount);
    setTotal(calculatedTotal.toFixed(2));
  };

  const handleSubmit = async () => {
    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post(API_URL, {
        nid,
        loanID,
        selectedMember,
        loanType: loanTypeTranslations[loanType],
        amount,
        total,
        mobileNumber,
      });

      // Set the success message
      setSubmitMessage("Successfully submitted!");
      console.log("Response from server:", response.data);
      setLoanCount(loanCount + 1);
      setloanID(generateLoanID());
      // Clear the form
      setNid("");
      setloanID("");
      setSelectedMember(null);
      setLoanType("");
      setAmount("");
      setTotal("");
      setMobileNumber("");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setSubmitMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-light  mt-2">
      <div>
        <div className="mt-2 p-2">
          <div className=" ">
            <div className=" border-bottom mb-3 ">
              <h2 className="text-center   mb-4 pt-3">ঋণ বিতরণ</h2>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-3">
              <label htmlFor="nid" className="form-label">
                NID:
              </label>
              <input
                type="number"
                id="nid"
                className="form-control"
                value={nid}
                onChange={(e) => setNid(e.target.value)}
                placeholder="Enter NID"
              ></input>
            </div>
            <div className="mb-3 col-3">
              <label htmlFor="loanID" className="form-label">
                Loan ID:
              </label>
              <input
                id="loanID"
                className="form-control"
                type="text"
                value={loanID}
                disabled
              />
            </div>

            {selectedMember && (
              <div className="mt-3 row">
                <div className="col-2">
                  <label htmlFor="OLname" className="form-label">
                    নাম
                  </label>
                  <input
                    type="text"
                    id="OLname"
                    className="form-control"
                    value={selectedMember.memberName}
                    readOnly
                  />
                </div>

                <div className="col-2">
                  <label htmlFor="OLfathername" className="form-label">
                    পিতা/স্বামী
                  </label>
                  <input
                    type="text"
                    id="fathername"
                    className="form-control"
                    value={selectedMember.husbandName}
                    readOnly
                  />
                </div>

                <div className="col-2">
                  <label htmlFor="OLbranch" className="form-label">
                    শাঁখা
                  </label>
                  <input
                    type="text"
                    id="OLbranch"
                    className="form-control"
                    value={selectedMember.branchName}
                    readOnly
                  />
                </div>

                <div className="col-3">
                  <label htmlFor="OLcenter" className="form-label">
                    কেন্দ্র
                  </label>
                  <input
                    type="text"
                    id="OLcenter"
                    className="form-control"
                    value={selectedMember.centerName}
                    readOnly
                  />
                </div>

                <div className="col-3">
                  <label htmlFor="OLmobile" className="form-label">
                    মোবাইল:
                  </label>
                  <input
                    type="number"
                    id="OLmobile"
                    className="form-control"
                    value={selectedMember.mobile}
                    onChange={(e) => {
                      const updatedMember = {
                        ...selectedMember,
                        mobile: e.target.value,
                      };
                      setSelectedMember(updatedMember);
                    }}
                  ></input>
                </div>
              </div>
            )}

            <div className="row mt-5">
              <div className="mb-3 col-4">
                <label htmlFor="loanType" className="form-label">
                  ঋণের ধরণ
                </label>
                <select
                  id="loanType"
                  className="form-select"
                  onChange={handleLoanTypeChange}
                  value={loanType}
                >
                  <option value="">বাছাই করুণ</option>
                  <option value="normal">{loanTypeTranslations.normal}</option>
                  <option value="tubewell">
                    {loanTypeTranslations.tubewell}
                  </option>
                  <option value="farmer">{loanTypeTranslations.farmer}</option>
                  <option value="sme">{loanTypeTranslations.sme}</option>
                  <option value="emergency">
                    {loanTypeTranslations.emergency}
                  </option>
                  <option value="disaster">
                    {loanTypeTranslations.disaster}
                  </option>
                  <option value="daily">{loanTypeTranslations.daily}</option>
                </select>
              </div>
              <div className="mb-3 col-4">
                <label htmlFor="OLamount" className="form-label">
                  ঋণের পরিমাণ
                </label>
                <input
                  type="number"
                  id="OLamount"
                  className="form-control"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Enter Amount"
                />
              </div>

              <div className="mb-3 col-4">
                <label htmlFor="OLtotal" className="form-label">
                  মোট টাকা
                </label>
                <input
                  type="text"
                  id="OLtotal"
                  className="form-control"
                  value={total}
                  readOnly
                />
              </div>
            </div>

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
        </div>
      </div>
    </div>
  );
}

export default OpenLoan;
