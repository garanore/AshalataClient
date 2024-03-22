// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MEMBER_LIST_CENTER_ROUTE = "/CenterList";

function CenterEdit() {
  const location = useLocation();
  const centerID = location.state ? location.state.centerID : null;
  const navigate = useNavigate();
  const [allCenter, setAllCenter] = useState([]);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9000/center-callback/${centerID}`)
      .then((res) => res.json())
      .then((data) => setAllCenter(data));
  }, [centerID]);

  const handleUpdateCenter = (e) => {
    e.preventDefault();
    const form = e.target;
    const ID = form.ID.value;
    const CenterName = form.CenterName.value;
    const AddressCenter = form.AddressCenter.value;
    const CenterMnumber = form.CenterMnumber.value;

    setSubmitMessage("Successfully Updated!");
    const updatedData = {
      ID,
      CenterName,
      AddressCenter,
      CenterMnumber,
    };

    fetch(`http://localhost:9000/center-callback/${centerID}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log("Center Updated Successfully");
        } else {
          console.error("Center Update Failed");
        }
      });
  };

  const handleCancel = () => {
    navigate(MEMBER_LIST_CENTER_ROUTE);
  };

  return (
    <div className="form-row container-fluid p-2">
      <form onSubmit={handleUpdateCenter}>
        <div className="row  g-4 bg-light mt-5">
          <div className="col-md-4">
            <label htmlFor="centerID" className="form-label">
              ID
            </label>
            <input
              type="text"
              name="ID"
              className="form-control"
              defaultValue={allCenter.centerID}
              readOnly
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="CenterName" className="form-label">
              নাম
            </label>
            <input
              className="form-control"
              type="text"
              name="CenterName"
              defaultValue={allCenter.CenterName}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="AddressCenter" className="form-label">
              ঠিকানা
            </label>
            <input
              className="form-control"
              type="text"
              name="AddressCenter"
              defaultValue={allCenter.AddressCenter}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="CenterMnumber" className="form-label">
              মোবাইল
            </label>
            <input
              className="form-control"
              type="text"
              name="CenterMnumber"
              defaultValue={allCenter.CenterMnumber}
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
}
export default CenterEdit;
