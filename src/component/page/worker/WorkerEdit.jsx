// MemberEdit.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MEMBER_LIST_CENTER_ROUTE = "/WorkerDetails";

const WorkerEdit = () => {
  const location = useLocation();
  const workerID = location.state ? location.state.workerID : null;
  const navigate = useNavigate();
  const [allWorker, setAllWorker] = useState([]);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9000/worker-callback/${workerID}`)
      .then((res) => res.json())
      .then((data) => setAllWorker(data));
  }, [workerID]);

  const handleUpdateWorker = (e) => {
    e.preventDefault();
    const form = e.target;
    const ID = form.ID.value;
    const WorkerName = form.WorkerName.value;
    const WorkerParent = form.WorkerParent.value;
    const WorkerJob = form.WorkerJob.value;
    const WorkerHome = form.WorkerHome.value;
    const WorkerUnion = form.WorkerUnion.value;
    const WorkerPost = form.WorkerPost.value;
    const WorkerSubDic = form.WorkerSubDic.value;
    const WorkerDic = form.WorkerDic.value;
    const WorkerNID = form.WorkerNID.value;
    const WorkerMobile = form.WorkerMobile.value;

    setSubmitMessage("Successfully Updated!");
    const updatedData = {
      ID,
      WorkerName,
      WorkerParent,
      WorkerJob,
      WorkerHome,
      WorkerUnion,
      WorkerPost,
      WorkerSubDic,
      WorkerDic,
      WorkerNID,
      WorkerMobile,
    };

    fetch(`http://localhost:9000/worker-callback/${workerID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Worker Updated Successfully");
        } else {
          console.error("Worker Update Failed");
        }
      });
  };

  const handleCancel = () => {
    navigate(MEMBER_LIST_CENTER_ROUTE);
  };

  return (
    <div className="form-row container-fluid p-2">
      <form onSubmit={handleUpdateWorker}>
        <div className="row  g-4 bg-light mt-5">
          <div className="col-md-4">
            <label htmlFor="workerID" className="form-label">
              ID
            </label>
            <input
              type="text"
              name="ID"
              className="form-control"
              defaultValue={allWorker.workerID}
              readOnly
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="WorkerName" className="form-label">
              নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerName"
              defaultValue={allWorker.WorkerName}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerParent" className="form-label">
              পিতা/স্বামীর নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerParent"
              defaultValue={allWorker.WorkerParent}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerJob" className="form-label">
              পেশা
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerJob"
              defaultValue={allWorker.WorkerJob}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerHome" className="form-label">
              গ্রাম/পাড়া
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerHome"
              defaultValue={allWorker.WorkerHome}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerUnion" className="form-label">
              ইউনিয়ন
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerUnion"
              defaultValue={allWorker.WorkerUnion}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerPost" className="form-label">
              ডাকঘর
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerPost"
              defaultValue={allWorker.WorkerPost}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerSubDic" className="form-label">
              থানা
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerSubDic"
              defaultValue={allWorker.WorkerSubDic}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerDic" className="form-label">
              জেলা
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerDic"
              defaultValue={allWorker.WorkerDic}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="WorkerNID" className="form-label">
              NID নাম্বার
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerNID"
              defaultValue={allWorker.WorkerNID}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="WorkerMobile" className="form-label">
              মোবাইল নাম্বার
            </label>
            <input
              className="form-control"
              type="text"
              name="WorkerMobile"
              defaultValue={allWorker.WorkerMobile}
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

export default WorkerEdit;
