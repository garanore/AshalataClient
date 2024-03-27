// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axios from "axios";

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
  const [selectedDate, setSelectedDate] = useState(null);
  const [OLamount, setOLAmount] = useState("");
  const [OLtotal, setOLTotal] = useState("");
  const [loanType, setLoanType] = useState("");
  const [installment, setInstallment] = useState("");
  const [withoutInterst, setwithoutInterst] = useState("");
  const [onlyInterest, setonlyInterest] = useState("");

  const [loanCount, setLoanCount] = useState(0);
  const [loanID, setLoanID] = useState("");
  const [memberID, setMemberID] = useState("");
  const [memberData, setMemberData] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

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
      setOLAmount(fetchedMember.amount || "0");
      setOLTotal(fetchedMember.total || "0");
    } else {
      setSelectedMember(null);
      setLoanType("");
      setOLAmount("0");
      setOLTotal("0");
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
          setOLAmount(fetchedMember.amount || "0");
          setOLTotal(fetchedMember.total || "0");
        } else {
          setSelectedMember(null);
          setLoanType("");
          setOLAmount("0");
          setOLTotal("0");
        }
      } else {
        // Reset the selected member and other fields
        setSelectedMember(null);
        setLoanType("");
        setOLAmount("0");
        setOLTotal("0");
      }
    } catch (error) {
      console.error("Error fetching member data:", error.message);
      // Handle the error as needed
    }
  };

  //----------------------------------------------------------------
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
    setOLAmount("");
    setOLTotal("");
  };

  const handleAmountChange = (e) => {
    const enteredAmount = +e.target.value;
    let interestRate = 0.15;

    if (loanType === "daily") {
      interestRate = 0.1; // Change interest rate for daily loan type
    }

    const calculatedTotal = enteredAmount * (1 + interestRate); // Calculate total including interest
    setOLAmount(enteredAmount);

    const calculatedInstallment = calculatedTotal / 46; // Assuming 46 installments
    setInstallment(Math.round(calculatedInstallment)); // Assuming installment is calculated

    const calculatedWithoutInterst = enteredAmount / 46; // Assuming 46 installments without interest
    setwithoutInterst(Math.round(calculatedWithoutInterst));

    const calculatedOnlyInterest =
      calculatedInstallment - calculatedWithoutInterst; // Assuming only interest
    setonlyInterest(Math.round(calculatedOnlyInterest)); // Assuming only interest

    setOLTotal(calculatedTotal.toFixed(2)); // Assuming total is calculated with two decimal places
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedDate && OLamount) {
      const formattedDate = moment(selectedDate).format("DD-MM-YY");

      const nextDates = [];
      let currentDate = moment(selectedDate);
      for (let i = 0; i < 46; i++) {
        const nextDate = currentDate
          .add(i === 0 ? 0 : 1, "weeks")
          .format("DD-MM-YY");
        nextDates.push(nextDate);
      }

      try {
        // Send request to backend API to save the next 5 dates
        const response = await fetch(
          "http://localhost:9000/openloan/save-dates",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              loanID: loanID,
              memberID: memberID,
              OLname: selectedMember.memberName,
              fathername: selectedMember.MfhName,
              OLbranch: selectedMember.BranchMember,
              OLcenter: selectedMember.CenterMember,
              OLmobile: selectedMember.MemberMobile,
              selectedDate: formattedDate,
              nextDates: nextDates,
              OLamount: OLamount,
              OLtotal: OLtotal,
              installment: installment,
              withoutInterst: withoutInterst,
              onlyInterest: onlyInterest,
              loanType: loanTypeTranslations[loanType],
              CenterDay: selectedMember.CenterDay,
            }),
          }
        );

        setLoanCount(loanCount + 1);

        if (response.ok) {
          setSelectedMember("");
          setSelectedDate(null);
          setOLAmount("");
          setOLTotal("");
          setLoanType("");
          setInstallment("");
          setwithoutInterst("");
          setonlyInterest("");
          setMemberID("");
          setSubmitMessage(""); // Clear submit message

          setSubmitMessage("Successfully submitted!");
        } else {
          // Handle unexpected response status
          console.error("Unexpected response status:", response.status);
          setSubmitMessage(
            `Error: Unexpected response status ${response.status}`
          );
          console.error("Failed to save next 5 dates:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
        // Log the detailed error response from the server
        if (error.response) {
          console.error("Server response data:", error.response.data);
        }
        setSubmitMessage(`Error: ${error.message}`);
        console.error("Error saving dates:", error.message);
      }
    } else {
      console.log("Please select a date and enter loan amount first");
    }
  };

  return (
    <div className="bg-light  mt-2">
      <div className="mt-2 p-2">
        <form onSubmit={handleSubmit}>
          <div>
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
            </div>

            <div className="row mt-5">
              <div className="mb-3 col-3">
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

              <div className="mb-3 col-3">
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

              <div className="mb-3 col-3">
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

              <div className="mb-3 col-3">
                <label htmlFor="installment" className="form-label">
                  কিস্তির পরিমাণ
                </label>
                <input
                  type="text"
                  id="installment"
                  className="form-control"
                  value={installment}
                  readOnly
                />
              </div>
              <div className="row mt-5">
                <div className="col-3">
                  <label htmlFor="CenterDay" className="form-label">
                    কেন্দ্র বার
                  </label>
                  <input
                    type="string"
                    id="CenterDay"
                    className="form-control"
                    readOnly
                  ></input>
                </div>

                <div className="mb-3 col-3">
                  <label htmlFor="date" className="form-label">
                    কিস্তি শুরু
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

              <button className="btn btn-primary">Submit</button>
              {submitMessage && (
                <div className="alert alert-success mt-3" role="alert">
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OpenLoan;
