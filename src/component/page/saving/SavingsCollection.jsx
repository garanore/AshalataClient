// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const SavingsCollection = () => {
//   return <div></div>;
// };

// export default SavingsCollection;

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const SavingsCollection = () => {
  const [selectedCenter, setSelectedCenter] = useState("");
  const [existingCenters, setExistingCenters] = useState([]);
  const [formData, setFormData] = useState([{ member: "", amount: "" }]);
  const [memberSuggestions, setMemberSuggestions] = useState([]);

  // Sample data (replace with your actual data fetching logic)
  const centerMembers = {
    টাঙ্গাইল: ["John", "Jane", "Doe"],
    কালিহাতি: ["Alice", "Bob", "Charlie"],
    মধুপুর: ["David", "Eva", "Frank"],
    ভুয়াপুর: ["Grace", "Henry", "Ivy"],
  };

  // Fetch center data when the component mounts
  useEffect(() => {
    // Replace this with your actual data fetching logic from the database
    const fetchCenters = async () => {
      try {
        // Simulating data fetching from the database
        const data = ["টাঙ্গাইল", "কালিহাতি", "মধুপুর", "ভুয়াপুর"];
        setExistingCenters(data);
      } catch (error) {
        console.error("Error fetching center data:", error);
      }
    };

    fetchCenters();
  }, []);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...formData];
    updatedData[index][name] = value;
    setFormData(updatedData);

    // Update member suggestions based on the selected center
    if (name === "member") {
      setMemberSuggestions(centerMembers[selectedCenter] || []);
    }
  };

  const handleAddInput = () => {
    setFormData([...formData, { member: "", amount: "" }]);
  };

  const handleRemoveInput = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-light mt-2 p-3">
      <div className="mb-5 ">
        <h2 className="text-center mb-4 pt-4 ">সঞ্চয় কালেকশন </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="centerSelect" className="form-label">
            কেন্দ্র নির্বাচন করুণ
          </label>
          <select
            id="centerSelect"
            className="form-select"
            onChange={(e) => setSelectedCenter(e.target.value)}
            value={selectedCenter}
          >
            <option value="">Choose...</option>
            {existingCenters.map((center) => (
              <option key={center} value={center}>
                {center}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          {formData.map((data, index) => (
            <div key={index} className="mb-3 row">
              <div className="col-4">
                <label htmlFor={`member-${index}`}>সদস্য</label>
                <input
                  type="text"
                  name="member"
                  value={data.member}
                  onChange={(e) => handleInputChange(index, e)}
                  className="form-control"
                  id={`member-${index}`}
                  list={`members-${index}`}
                />
                <datalist id={`members-${index}`}>
                  {memberSuggestions.map((member) => (
                    <option key={member} value={member} />
                  ))}
                </datalist>
              </div>

              <div className="col-4">
                <label htmlFor={`amount-${index}`}>সঞ্চয় (টাকা)</label>
                <input
                  type="number"
                  name="amount"
                  value={data.amount}
                  onChange={(e) => handleInputChange(index, e)}
                  className="form-control"
                  id={`amount-${index}`}
                />
              </div>

              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-danger mt-3"
                  onClick={() => handleRemoveInput(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 mb-3 mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddInput}
          >
            Add
          </button>
        </div>

        <div className="col-12 mb-3 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SavingsCollection;
