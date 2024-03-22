// MemberEdit.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MEMBER_LIST_CENTER_ROUTE = "/MemberListCenter";

const MemberEdit = () => {
  const location = useLocation();
  const memberID = location.state ? location.state.memberID : null;
  const navigate = useNavigate();
  const [allBrands, setAllBrands] = useState([]);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9000/member-callback/${memberID}`)
      .then((res) => res.json())
      .then((data) => setAllBrands(data));
  }, [memberID]);

  const handleUpdateMember = (e) => {
    e.preventDefault();
    const form = e.target;
    const ID = form.ID.value;
    const memberName = form.memberName.value;
    const MfhName = form.MfhName.value;
    const memberJob = form.memberJob.value;
    const memberVillage = form.memberVillage.value;
    const memberUnion = form.memberUnion.value;
    const memberPost = form.memberPost.value;
    const memberSubDic = form.memberSubDic.value;
    const memberDic = form.memberDic.value;
    const memberFhead = form.memberFhead.value;
    const MemberNIDnumber = form.MemberNIDnumber.value;
    const MemberMobile = form.MemberMobile.value;
    const NominiName = form.NominiName.value;
    const NominiFather = form.NominiFather.value;
    const MemberNominiRelation = form.MemberNominiRelation.value;
    setSubmitMessage("Successfully Updated!");
    const updatedData = {
      ID,
      memberName,
      MfhName,
      memberJob,
      memberVillage,
      memberUnion,
      memberPost,
      memberSubDic,
      memberDic,
      memberFhead,
      MemberNIDnumber,
      MemberMobile,
      NominiName,
      NominiFather,
      MemberNominiRelation,
    };

    fetch(`http://localhost:9000/member-callback/${memberID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Member Updated Successfully");
        } else {
          console.error("Member Update Failed");
        }
      });
  };

  const handleCancel = () => {
    navigate(MEMBER_LIST_CENTER_ROUTE);
  };

  return (
    <div className="form-row container-fluid p-2">
      <form onSubmit={handleUpdateMember}>
        <div className="row  g-4 bg-light mt-5">
          <div className="col-md-4">
            <label htmlFor="memberID" className="form-label">
              ID
            </label>
            <input
              type="text"
              name="ID"
              className="form-control"
              defaultValue={allBrands.memberID}
              readOnly
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="memberName" className="form-label">
              নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="memberName"
              defaultValue={allBrands.memberName}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="MfhName" className="form-label">
              পিতা/স্বামীর নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="MfhName"
              defaultValue={allBrands.MfhName}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="memberJob" className="form-label">
              পেশা
            </label>
            <input
              className="form-control"
              type="text"
              name="memberJob"
              defaultValue={allBrands.memberJob}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="memberVillage" className="form-label">
              গ্রাম/পাড়া
            </label>
            <input
              className="form-control"
              type="text"
              name="memberVillage"
              defaultValue={allBrands.memberVillage}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="memberUnion" className="form-label">
              ইউনিয়ন
            </label>
            <input
              className="form-control"
              type="text"
              name="memberUnion"
              defaultValue={allBrands.memberUnion}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="memberPost" className="form-label">
              ডাকঘর
            </label>
            <input
              className="form-control"
              type="text"
              name="memberPost"
              defaultValue={allBrands.memberPost}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="memberSubDic" className="form-label">
              থানা
            </label>
            <input
              className="form-control"
              type="text"
              name="memberSubDic"
              defaultValue={allBrands.memberSubDic}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="memberDic" className="form-label">
              জেলা
            </label>
            <input
              className="form-control"
              type="text"
              name="memberDic"
              defaultValue={allBrands.memberDic}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="memberFhead" className="form-label">
              পরিবারের প্রধানের নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="memberFhead"
              defaultValue={allBrands.memberFhead}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="MemberNIDnumber" className="form-label">
              NID নাম্বার
            </label>
            <input
              className="form-control"
              type="text"
              name="MemberNIDnumber"
              defaultValue={allBrands.MemberNIDnumber}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="MemberMobile" className="form-label">
              মোবাইল নাম্বার
            </label>
            <input
              className="form-control"
              type="text"
              name="MemberMobile"
              defaultValue={allBrands.MemberMobile}
            />
          </div>
          <div className="mb-5 mt-5">
            <h2 className="text-center mb-4 ">নমনী তথ্য </h2>
          </div>

          <div className="col-md-4">
            <label htmlFor="NominiName" className="form-label">
              নমনীর নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="NominiName"
              defaultValue={allBrands.NominiName}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="NominiFather" className="form-label">
              পিতা/স্বামীর নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="NominiFather"
              defaultValue={allBrands.NominiFather}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="MemberNominiRelation" className="form-label">
              সম্পর্ক
            </label>
            <input
              className="form-control"
              type="text"
              name="MemberNominiRelation"
              defaultValue={allBrands.MemberNominiRelation}
            />
          </div>

          <div className="d-flex justify-content-between mt-5">
            <button type="submit" className=" btn btn-primary">
              Update
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className=" btn btn-primary btn-md"
            >
              Cancel
            </button>
          </div>
          <div>
            {submitMessage && (
              <div className="alert alert-success" role="alert">
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemberEdit;
