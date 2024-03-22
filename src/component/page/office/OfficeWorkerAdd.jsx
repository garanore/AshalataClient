// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import DatePicker from "../../datepicker/DatePicker";
import axios from "axios";
const API_URL = "http://localhost:9000/OfficeWorkerAdd";

const OfficeWorkerAdd = () => {
  const [OfficeWorkerCount, setOfficeWorkerCount] = useState(0);
  const [officeworkerID, setofficeworkerID] = useState("");
  const [centers, setCenters] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [OfficeWorkerData, setOfficeWorkerData] = useState({
    officeWorkerName: "",
    OfficeWorkerParent: "",
    OfficeWorkerJob: "",
    officeWorkerHome: "",
    OfficeWorkerUnion: "",
    OfficeWdateOfBirth: "",
    officeWorkerPost: "",
    OfficeWorkerSubDic: "",
    OfficeWorkerDic: "",
    OfficeWorkerMarital: "",
    OfficeWorkerStudy: "",
    OfficeWorkerNID: "",
    OfficeWorkerMobile: "",
    OfficeWorkerMail: "",

    OfficeWorkerCenter: "",
    OfficeWorkerBranch: "",
    Designation: "",
    agreementChecked: false,
  });
  const formRef = useRef(null);
  const handleDateChange = (date) => {
    setOfficeWorkerData({
      ...OfficeWorkerData,
      OfficeWdateOfBirth: date,
    });
  };
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9000/branch-callback")
      .then((response) => {
        setBranches(response.data);
      })
      .catch((error) => {
        console.error("Error fetching branch data:", error);
      });
  }, []);

  useEffect(() => {
    if (OfficeWorkerCount !== undefined) {
      setofficeworkerID(generateOfficeWorkerID(OfficeWorkerCount));
    }
  }, [OfficeWorkerCount]);
  const generateOfficeWorkerID = (count) => {
    const paddedCount =
      count !== undefined ? count.toString().padStart(4, "0") : "";
    return `OW${paddedCount}`;
  };

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
    if (name === "OfficeWorkerBranch") {
      setSelectedBranch(value);
      setOfficeWorkerData((prevData) => ({
        ...prevData,
        OfficeWorkerBranch: value,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const numericValue =
      name === "OfficeWorkerNID" ? parseInt(value, 10) : value;

    // Format the date if needed
    const formattedDate =
      name === "OfficeWdateOfBirth"
        ? value
          ? value.toISOString()
          : null
        : value;

    setOfficeWorkerData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : name === "OfficeWdateOfBirth"
          ? formattedDate
          : numericValue,
      OfficeWorkerBranch:
        name === "OfficeWorkerBranch" ? value : prevData.OfficeWorkerBranch, // Update
    }));
  };

  // Total Family Member End
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(OfficeWorkerData),
      });

      // Handle success
      setSuccessMessage("Successfully added worker data!");
      setOfficeWorkerCount(OfficeWorkerCount + 1);
      setofficeworkerID(generateOfficeWorkerID());
      setOfficeWorkerData({
        officeworkerID: "",
        officeWorkerName: "",
        OfficeWorkerParent: "",
        OfficeWorkerJob: "",
        officeWorkerHome: "",
        OfficeWorkerUnion: "",
        OfficeWdateOfBirth: "",
        officeWorkerPost: "",
        OfficeWorkerSubDic: "",
        OfficeWorkerDic: "",
        OfficeWorkerMarital: "",
        OfficeWorkerStudy: "",
        OfficeWorkerNID: "",
        OfficeWorkerMobile: "",
        OfficeWorkerMail: "",

        OfficeWorkerCenter: "",
        OfficeWorkerBranch: "",
        Designation: "",
        agreementChecked: false,
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Error submitting OfficeWorker data:", error.message);
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
              <label htmlFor="officeworkerID" className="form-label">
                ID:
              </label>
              <input
                id="officeworkerID"
                className="form-control"
                type="text"
                value={officeworkerID}
                disabled
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="officeWorkerName" className="form-label">
                নাম
              </label>
              <input
                type="text"
                className="form-control"
                id="officeWorkerName"
                required
                onChange={handleChange}
                name="officeWorkerName"
                value={OfficeWorkerData.officeWorkerName}
              ></input>
            </div>

            {/* সদস্য তথ্য শুরু */}

            <div className="col-md-4">
              <label htmlFor="OfficeWorkerParent" className="form-label">
                পিতা/স্বামীর নাম
              </label>
              <input
                type="text"
                className="form-control"
                id="OfficeWorkerParent"
                required
                onChange={handleChange}
                name="OfficeWorkerParent"
                value={OfficeWorkerData.OfficeWorkerParent}
              ></input>
            </div>

            <div className="col-4">
              <div className="col-4">
                <DatePicker
                  selectedDate={OfficeWorkerData.OfficeWdateOfBirth}
                  onDateChange={handleDateChange}
                />
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="OfficeWorkerJob" className="form-label">
                পেশা
              </label>
              <input
                type="text"
                className="form-control"
                id="OfficeWorkerJob"
                required
                onChange={handleChange}
                name="OfficeWorkerJob"
                value={OfficeWorkerData.OfficeWorkerJob}
              ></input>
            </div>

            <div className="col-md-6">
              <label htmlFor="officeWorkerHome" className="form-label">
                গ্রাম/পাড়া
              </label>
              <input
                type="text"
                className="form-control"
                id="officeWorkerHome"
                required
                onChange={handleChange}
                name="officeWorkerHome"
                value={OfficeWorkerData.officeWorkerHome}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="OfficeWorkerUnion" className="form-label">
                ইউনিয়ন
              </label>
              <input
                type="text"
                className="form-control"
                id="OfficeWorkerUnion"
                required
                onChange={handleChange}
                name="OfficeWorkerUnion"
                value={OfficeWorkerData.OfficeWorkerUnion}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="officeWorkerPost" className="form-label">
                ডাকঘর
              </label>
              <input
                type="text"
                className="form-control"
                id="officeWorkerPost"
                required
                onChange={handleChange}
                name="officeWorkerPost"
                value={OfficeWorkerData.officeWorkerPost}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="OfficeWorkerSubDic" className="form-label">
                থানা
              </label>
              <input
                type="text"
                className="form-control"
                id="OfficeWorkerSubDic"
                required
                onChange={handleChange}
                name="OfficeWorkerSubDic"
                value={OfficeWorkerData.OfficeWorkerSubDic}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="OfficeWorkerDic" className="form-label">
                জেলা
              </label>
              <input
                type="text"
                className="form-control"
                id="OfficeWorkerDic"
                required
                onChange={handleChange}
                name="OfficeWorkerDic"
                value={OfficeWorkerData.OfficeWorkerDic}
              ></input>
            </div>

            <div className="col-md-3">
              <label htmlFor="OfficeWorkerMarital" className="form-label">
                বৈবাহিক অবস্থা
              </label>
              <select
                id="OfficeWorkerMarital"
                name="OfficeWorkerMarital"
                className="form-select"
                value={OfficeWorkerData.OfficeWorkerMarital}
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
              <label htmlFor="OfficeWorkerStudy" className="form-label">
                শিক্ষাগত যোগ্যতা
              </label>
              <select
                id="OfficeWorkerStudy"
                name="OfficeWorkerStudy"
                className="form-select"
                value={OfficeWorkerData.OfficeWorkerStudy}
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
                        <label
                          htmlFor="OfficeWorkerNID"
                          className="col-form-label"
                        >
                          NID নাম্বার{" "}
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="number"
                          className="form-control"
                          id="OfficeWorkerNID"
                          required
                          onChange={handleChange}
                          name="OfficeWorkerNID"
                          value={OfficeWorkerData.OfficeWorkerNID}
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="row g-3 align-items-center ">
                      <div className="col-auto">
                        <label
                          htmlFor="OfficeWorkerMobile"
                          className="col-form-label"
                        >
                          মোবাইল নাম্বার{" "}
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="number"
                          className="form-control"
                          id="OfficeWorkerMobile"
                          required
                          onChange={handleChange}
                          name="OfficeWorkerMobile"
                          value={OfficeWorkerData.OfficeWorkerMobile}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row g-3 align-items-center ">
                      <div className="col-auto">
                        <label
                          htmlFor="OfficeWorkerMail"
                          className="col-form-label"
                        >
                          মেইল{" "}
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="email"
                          className="form-control"
                          id="OfficeWorkerMail"
                          required
                          onChange={handleChange}
                          name="OfficeWorkerMail"
                          value={OfficeWorkerData.OfficeWorkerMail}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="OfficeWorkerBranch" className="form-label">
                শাঁখা নির্বাচন করুণ
              </label>
              <select
                className="form-select"
                id="OfficeWorkerBranch"
                name="OfficeWorkerBranch"
                onChange={handleBranchChange}
                value={selectedBranch.OfficeWorkerBranch}
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
            <div className="col-md-4">
              <label htmlFor="OfficeWorkerCenter" className="form-label">
                কেন্দ্র নির্বাচন করুণ
              </label>
              <select
                id="OfficeWorkerCenter"
                name="OfficeWorkerCenter"
                className="form-select"
                value={OfficeWorkerData.OfficeWorkerCenter}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                {centers.map((center) => (
                  <option key={center.centerID} value={center.CenterName}>
                    {center.CenterName}
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
                value={OfficeWorkerData.Designation}
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
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                  name="agreementChecked"
                  checked={OfficeWorkerData.agreementChecked}
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

export default OfficeWorkerAdd;
