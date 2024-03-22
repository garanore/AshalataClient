// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:9000/openloan";

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
  const [loanID, setLoanID] = useState("");
  const [memberID, setMemberID] = useState("");
  const [memberData, setMemberData] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [loanType, setLoanType] = useState("");
  const [OLamount, setAmount] = useState("0");
  const [OLtotal, setTotal] = useState("0");

  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/member-callback"
        );

        setMemberData(response.data.members);
      } catch (error) {
        console.error("Error fetching member data:", error.message);
      }
    };

    fetchMemberData();
  }, []);

  useEffect(() => {
    if (loanCount !== undefined) {
      setLoanID(generateLoanID(loanCount));
    }
  }, [loanCount]);

  const generateLoanID = (count) => {
    const paddedCount =
      count !== undefined ? count.toString().padStart(4, "0") : "";
    return `L${paddedCount}`;
  };

  useEffect(() => {
    // Check if memberData is available and not empty
    if (!memberData || memberData.length === 0) {
      return;
    }

    // Now, memberData should be available
    const fetchedMember = memberData.find(
      (member) => member.memberID === memberID
    );

    // Check if the member is found
    if (fetchedMember) {
      setSelectedMember(fetchedMember);
      setLoanType(fetchedMember.loanType || "");
      setAmount(fetchedMember.amount || "0");
      setTotal(fetchedMember.total || "0");
    } else {
      setSelectedMember(null);
      setLoanType("");
      setAmount("0");
      setTotal("0");
    }
  }, [memberData, memberID]);

  const handleMemberIDChange = async (e) => {
    const enteredMemberID = e.target.value;

    setMemberID(enteredMemberID);

    try {
      // Fetch member data
      const response = await axios.get("http://localhost:9000/member-callback");

      // Check if the response data is an array and not empty
      if (Array.isArray(response.data) && response.data.length > 0) {
        // Find the member in the fetched data
        const fetchedMember = response.data.find(
          (member) => member.memberID === enteredMemberID
        );

        // Update the state based on the fetched member
        if (fetchedMember) {
          setSelectedMember(fetchedMember);
          setLoanType(fetchedMember.loanType || "");
          setAmount(fetchedMember.amount || "0");
          setTotal(fetchedMember.total || "0");
        } else {
          setSelectedMember(null);
          setLoanType("");
          setAmount("0");
          setTotal("0");
        }
      } else {
        // Reset the selected member and other fields
        setSelectedMember(null);
        setLoanType("");
        setAmount("0");
        setTotal("0");
      }
    } catch (error) {
      console.error("Error fetching member data:", error.message);
      // Handle the error as needed
    }
  };

  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
    setAmount("");
    setTotal("");
  };

  const handleAmountChange = (e) => {
    const enteredAmount = +e.target.value;
    let interestRate = 0.15;

    if (!isNaN(enteredAmount)) {
      const calculatedTotal = enteredAmount + enteredAmount * interestRate;
      setAmount(enteredAmount);
      setTotal(calculatedTotal.toFixed(2));
      setTotal(Math.ceil(calculatedTotal));
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(API_URL, {
        memberID,
        loanID,
        OLmobile: selectedMember.OLmobile,
        selectedMember,
        loanType: loanTypeTranslations[loanType],
        OLamount,
        OLtotal,
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitMessage("Successfully submitted!");

        setLoanCount(loanCount + 1);
        setLoanID(generateLoanID());

        setMemberID("");
        setLoanID("");
        setSelectedMember(null);
        setLoanType("");
        setAmount("");
        setTotal("");
      } else {
        // Handle unexpected response status
        console.error("Unexpected response status:", response.status);
        setSubmitMessage(
          `Error: Unexpected response status ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Log the detailed error response from the server
      if (error.response) {
        console.error("Server response data:", error.response.data);
      }
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
              <label htmlFor="memberID" className="form-label">
                Member ID:
              </label>
              <input
                type="text"
                id="memberID"
                className="form-control"
                value={memberID}
                onChange={handleMemberIDChange} // Handle Member ID change
                placeholder="Enter Member ID"
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
                  <label htmlFor="fathername" className="form-label">
                    পিতা/স্বামী
                  </label>
                  <input
                    type="text"
                    id="fathername"
                    className="form-control"
                    value={selectedMember.MfhName}
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
                    value={selectedMember.BranchMember}
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
                    value={selectedMember.CenterMember}
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
                    value={selectedMember.MemberMobile}
                    readOnly
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
                  value={OLamount}
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
                  value={OLtotal}
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
