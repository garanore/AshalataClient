// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:9000/opensaving";

const SavingTypeTranslations = {
  General: "সাধারণ",
  Meyadi: "মেয়াদি",
  NonMeyadi: "এককালিন",
};

function OpenSavings() {
  const [savingsType, setSavingsType] = useState("General");
  const [memberID, setMemberID] = useState("");
  const [memberData, setMemberData] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [savingCount, setsavingCount] = useState(0);
  const [savingID, setsavingID] = useState("");
  const [Samount, setSamount] = useState("");
  const [timePeriod, setTimePeriod] = useState("6"); // Default value, adjust as needed

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
    if (savingCount !== undefined) {
      setsavingID(generatesavingID(savingCount));
    }
  }, [savingCount]);

  const generatesavingID = (count) => {
    const paddedCount =
      count !== undefined ? count.toString().padStart(4, "0") : "";
    return `L${paddedCount}`;
  };

  const handleMemberIDChange = async (e) => {
    const enteredMemberID = e.target.value;

    setMemberID(enteredMemberID);

    try {
      const response = await axios.get("http://localhost:9000/member-callback");

      if (Array.isArray(response.data) && response.data.length > 0) {
        const fetchedMember = response.data.find(
          (member) => member.memberID === enteredMemberID
        );

        if (fetchedMember) {
          setSelectedMember(fetchedMember);
          setSavingsType(fetchedMember.savingsType || "General");
          // Include other relevant fields
        } else {
          setSelectedMember(null);
          setSavingsType("General");
          // Reset other fields
        }
      } else {
        console.error("Invalid member data format");
        setSelectedMember(null);
        setSavingsType("General");
        // Reset other fields
      }
    } catch (error) {
      console.error("Error fetching member data:", error.message);
    }
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
    } else {
      setSelectedMember(null);
    }
  }, [memberData, memberID]);
  const handleSubmit = async () => {
    try {
      const response = await axios.post(API_URL, {
        memberID,
        savingID,
        selectedMember,
        Samount,
        savingType: SavingTypeTranslations[savingsType],
        timePeriod: savingsType === "Meyadi" ? timePeriod : undefined,
        // Include other relevant data for savings
      });

      if (response.status === 200 || response.status === 201) {
        setSubmitMessage("Successfully submitted!");

        setsavingCount(savingCount + 1);
        setsavingID(generatesavingID());

        setMemberID("");
        setsavingID("");
        setSelectedMember(null);
        setSamount("");

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        console.error("Unexpected response status:", response.status);
        setSubmitMessage(
          `Error: Unexpected response status ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      if (error.response) {
        console.error("Server response data:", error.response.data);
      }
      setSubmitMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="bg-light mt-2 p-3">
      <div className="p-2">
        <div className="border-bottom mb-5">
          <h2 className="text-center mb-4 pt-3">সঞ্চয় খুলুন</h2>
        </div>
      </div>

      <div className="mb-3 col-3">
        <label htmlFor="memberID" className="form-label">
          Member ID:
        </label>
        <input
          type="text"
          id="memberID"
          className="form-control"
          value={memberID}
          onChange={handleMemberIDChange}
          placeholder="Enter Member ID"
        />
      </div>
      <div className="mb-3 col-3">
        <label htmlFor="savingID" className="form-label">
          Loan ID:
        </label>
        <input
          id="savingID"
          className="form-control"
          type="text"
          value={savingID}
          disabled
        />
      </div>
      {selectedMember && (
        <div className="mt-3 row">
          <div className="col-2">
            <label htmlFor="OSname" className="form-label">
              নাম
            </label>
            <input
              type="text"
              id="OSname"
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
            <label htmlFor="OSbranch" className="form-label">
              শাঁখা
            </label>
            <input
              type="text"
              id="OSbranch"
              className="form-control"
              value={selectedMember.BranchMember}
              readOnly
            />
          </div>

          <div className="col-3">
            <label htmlFor="OScenter" className="form-label">
              কেন্দ্র
            </label>
            <input
              type="text"
              id="OScenter"
              className="form-control"
              value={selectedMember.centerID}
              readOnly
            />
          </div>

          <div className="col-3">
            <label htmlFor="OSmobile" className="form-label">
              মোবাইল:
            </label>
            <input
              type="number"
              id="OSmobile"
              className="form-control"
              value={selectedMember.MemberMobile}
              readOnly
            ></input>
          </div>
        </div>
      )}

      <div className="row">
        <div className="mb-3 col">
          <label htmlFor="savingType" className="form-label">
            Savings Type
          </label>
          <select
            id="savingType"
            className="form-select"
            value={savingsType}
            onChange={(e) => setSavingsType(e.target.value)}
          >
            <option value="General">{SavingTypeTranslations.General}</option>
            <option value="Meyadi">{SavingTypeTranslations.Meyadi}</option>
            <option value="NonMeyadi">
              {SavingTypeTranslations.NonMeyadi}
            </option>
          </select>
        </div>

        <div className="col">
          {savingsType === "Meyadi" && (
            <div>
              <div className="mb-2">
                <label htmlFor="timePeriod" className="form-label">
                  Time Period
                </label>
                <select
                  id="timePeriod"
                  className="form-select"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                >
                  <option value="3">3 Year</option>
                  <option value="5">5 Year</option>
                  <option value="10">10 Year</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="Samount" className="form-label">
          সঞ্চয়ের পরিমাণ
        </label>
        <input
          type="number"
          id="Samount"
          className="form-control"
          value={Samount}
          onChange={(e) => setSamount(e.target.value)}
          placeholder="Enter Amount"
        />
      </div>

      <div className="mb-2">
        <button
          type="submit"
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
  );
}

export default OpenSavings;
