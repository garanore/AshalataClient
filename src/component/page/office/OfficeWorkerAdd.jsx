// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";

import axios from "axios";
import DatePickers from "./../../datepicker/DatePicker";
const API_URL = "http://localhost:9000/workeradmission";

const WorkerAdmission = () => {
  const [WorkerCount, setWorkerCount] = useState(0);
  const [workerID, setWorkerID] = useState("");
  const [centers, setCenters] = useState([]);
  const [branches, setBranchs] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [WorkerData, setWorkerData] = useState({
    WorkerName: "",
    WorkerParent: "",
    WdateOfBirth: "",
    WorkerJob: "",
    WorkerHome: "",
    WorkerUnion: "",
    WorkerPost: "",
    WorkerSubDic: "",
    WorkerDic: "",
    WorkerMarital: "",
    WorkerStudy: "",
    WorkerNID: "",
    WorkerMobile: "",
    WorkerMail: "",
    Workerimage: null,
    WorkerCenterAdd: "",
    WorkerBranchAdd: "",
    Designation: "",
    agreementChecked: false,
  });
  const formRef = useRef(null);
  const handleDateChange = (date) => {
    setWorkerData({
      ...WorkerData,
      WdateOfBirth: date,
    });
  };
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9000/branch-callback")
      .then((response) => {
        setBranchs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching branch data:", error);
      });
  }, []);

  const handleBranchChange = (e) => {
    const branch = e.target.value;
    const { name, value } = e.target;

    setSelectedBranch(branch);

    if (branch) {
      axios
        .get(
          `http://localhost:9000/center-callback?selectedBranch=${encodeURIComponent(
            branch
          )}`
        )
        .then((response) => {
          setCenters(response.data);
        })
        .catch((error) => {
          console.error("Error fetching worker data:", error);
        });
    }
    if (name === "WorkerBranchAdd") {
      setSelectedBranch(value);
      setWorkerData((prevData) => ({
        ...prevData,
        WorkerBranchAdd: value,
      }));
    }
  };

  useEffect(() => {
    if (WorkerCount !== undefined) {
      setWorkerID(generateWorkerID(WorkerCount));
    }
  }, [WorkerCount]);
  const generateWorkerID = (count) => {
    const paddedCount =
      count !== undefined ? count.toString().padStart(4, "0") : "";
    return `W${paddedCount}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const numericValue = name === "WorkerNID" ? parseInt(value, 10) : value;
    setWorkerData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : numericValue,
      [name]: type === "checkbox" ? checked : formattedDate,
    }));

    const formattedDate =
      name === "WdateOfBirth" ? (value ? value.toISOString() : null) : value;
  };
  // Total Family Member End
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(WorkerData),
      });

      // eslint-disable-next-line no-unused-vars
      const data = await response.json();

      // Handle success
      setSuccessMessage("Successfully added worker data!");
      setWorkerCount(WorkerCount + 1);
      setWorkerID(generateWorkerID());
      setWorkerData({
        workerID: "",
        WorkerName: "",
        WorkerParent: "",
        WdateOfBirth: "",
        WorkerJob: "",
        WorkerHome: "",
        WorkerUnion: "",
        WorkerPost: "",
        WorkerSubDic: "",
        WorkerDic: "",
        WorkerMarital: "",
        WorkerStudy: "",
        WorkerNID: "",
        WorkerMobile: "",
        WorkerMail: "",
        Workerimage: null,
        WorkerCenterAdd: "",
        WorkerBranchAdd: "",
        Designation: "",
        agreementChecked: false,
      });
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      formRef.current.reset();
    } catch (error) {
      console.error("Error submitting WorkerAdmission data:", error.message);
      // Handle error appropriately
    }
  };
  return (
    <div>
      <div className="  mt-2 bg-light">
        <div className="mb-5 ">
          <h2 className="text-center mb-4 pt-4 ">অফিস কর্মী ভর্তি ফর্ম </h2>
        </div>

        <form className=" bg-light " onSubmit={handleSubmit} ref={formRef}>
          {/* <!-- Full Name --> */}
          <div className="row g-4 p-2">
            <div className="mb-3 col-3">
              <label htmlFor="workerID" className="form-label">
                Worker ID:
              </label>
              <input
                id="workerID"
                className="form-control"
                type="text"
                value={workerID}
                disabled
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="WorkerName" className="form-label">
                নাম
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerName"
                required
                onChange={handleChange}
                name="WorkerName"
                value={WorkerData.WorkerName}
              ></input>
            </div>

            {/* সদস্য তথ্য শুরু */}

            <div className="col-md-4">
              <label htmlFor="WorkerParent" className="form-label">
                পিতা/স্বামীর নাম
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerParent"
                required
                onChange={handleChange}
                name="WorkerParent"
                value={WorkerData.WorkerParent}
              ></input>
            </div>

            <div className="col-4">
              <div className="col-4">
                <DatePickers
                  selectedDate={WorkerData.WdateOfBirth}
                  onDateChange={handleDateChange}
                />
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="WorkerJob" className="form-label">
                পেশা
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerJob"
                required
                onChange={handleChange}
                name="WorkerJob"
                value={WorkerData.WorkerJob}
              ></input>
            </div>

            <div className="col-md-6">
              <label htmlFor="WorkerHome" className="form-label">
                গ্রাম/পাড়া
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerHome"
                required
                onChange={handleChange}
                name="WorkerHome"
                value={WorkerData.WorkerHome}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="WorkerUnion" className="form-label">
                ইউনিয়ন
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerUnion"
                required
                onChange={handleChange}
                name="WorkerUnion"
                value={WorkerData.WorkerUnion}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="WorkerPost" className="form-label">
                ডাকঘর
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerPost"
                required
                onChange={handleChange}
                name="WorkerPost"
                value={WorkerData.WorkerPost}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="WorkerSubDic" className="form-label">
                থানা
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerSubDic"
                required
                onChange={handleChange}
                name="WorkerSubDic"
                value={WorkerData.WorkerSubDic}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="WorkerDic" className="form-label">
                জেলা
              </label>
              <input
                type="text"
                className="form-control"
                id="WorkerDic"
                required
                onChange={handleChange}
                name="WorkerDic"
                value={WorkerData.WorkerDic}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="WorkerMarital" className="form-label">
                বৈবাহিক অবস্থা
              </label>
              <select
                id="WorkerMarital"
                name="WorkerMarital"
                className="form-select"
                value={WorkerData.WorkerMarital}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option>অবিবাহিত</option>
                <option>বিবাহিত</option>
                <option>তালাকপ্রাপ্ত</option>
                <option>বিধবা</option>
                <option>অন্যান্য</option>
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="WorkerStudy" className="form-label">
                শিক্ষাগত যোগ্যতা
              </label>
              <select
                id="WorkerStudy"
                name="WorkerStudy"
                className="form-select"
                value={WorkerData.WorkerStudy}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option>স্বাক্ষর জ্ঞান সম্পন্ন</option>
                <option>প্রাথমিক</option>
                <option>মাধ্যমিক</option>
                <option>উচ্চমাধ্যমিক</option>
                <option>স্নাতক</option>
                <option>স্নাতকোত্তর</option>
              </select>
            </div>

            <div>
              <div className="col">
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="row g-3 align-items-center ">
                      <div className="col-auto">
                        <label htmlFor="WorkerNID" className="col-form-label">
                          NID নাম্বার{" "}
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="number"
                          className="form-control"
                          id="WorkerNID"
                          required
                          onChange={handleChange}
                          name="WorkerNID"
                          value={WorkerData.WorkerNID}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="row g-3 align-items-center ">
                      <div className="col-auto">
                        <label
                          htmlFor="WorkerMobile"
                          className="col-form-label"
                        >
                          মোবাইল নাম্বার{" "}
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="number"
                          className="form-control"
                          id="WorkerMobile"
                          required
                          onChange={handleChange}
                          name="WorkerMobile"
                          value={WorkerData.WorkerMobile}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row g-3 align-items-center ">
                      <div className="col-auto">
                        <label htmlFor="WorkerMail" className="col-form-label">
                          মেইল{" "}
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="email"
                          className="form-control"
                          id="WorkerMail"
                          required
                          onChange={handleChange}
                          name="WorkerMail"
                          value={WorkerData.WorkerMail}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="WorkerBranchAdd" className="form-label">
                শাঁখা নির্বাচন করুণ
              </label>
              <select
                id="WorkerBranchAdd"
                className="form-select"
                value={selectedBranch.WorkerBranchAdd}
                onChange={handleBranchChange}
                name="WorkerBranchAdd"
              >
                <option value="">Choose...</option>
                {Array.isArray(branches) &&
                  branches.length > 0 &&
                  branches.map((branch) => (
                    <option key={branch._id} value={branch.BranchName}>
                      {branch.BranchName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="WorkerCenterAdd" className="form-label">
                কেন্দ্র নির্বাচন করুণ
              </label>
              <select
                id="workerCenterAdd"
                name="WorkerCenterAdd"
                className="form-select"
                value={WorkerData.WorkerCenterAdd}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                {centers.map((center) => (
                  <option key={center.centerID} value={center.centerID}>
                    {center.centerID}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="Designation" className="form-label">
                পদবি
              </label>
              <select
                id="Designation"
                name="Designation"
                className="form-select"
                value={WorkerData.Designation}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option>নির্বাহী পরিচালক</option>
                <option>সহকারী নির্বাহী পরিচালক</option>
                <option>অর্থ পরিচালক</option>
                <option>প্রোগ্রাম অফিসার</option>
                <option>অডিট অফিসার</option>
                <option>শাখা ব্যাবস্থাপক</option>
                <option>সহকারী শাখা ব্যাবস্থাপক</option>
                <option>শাখা হিসাব রক্ষক</option>
                <option>সহকারী শাখা হিসাব রক্ষক</option>
                <option>উর্ধ্বতন কর্মসূচী সংঘঠক</option>
                <option>কর্মসূচী সংঘঠক</option>
                <option>সহকারী কর্মসূচী সংঘঠক</option>
              </select>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="agreementChecked"
                  checked={WorkerData.agreementChecked}
                  onChange={handleChange}
                ></input>
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>

            <div className="col-12 mb-5">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkerAdmission;
