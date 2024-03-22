// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BranchList() {
  const [branchData, setBranchData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/branch-callback"
        );
        setBranchData(response.data);
      } catch (error) {
        console.error("Error fetching branch data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (branch) => {
    navigate("/BranchEditModal", { state: { BranchID: branch._id } });
  };

  return (
    <div>
      <div className="bg-light container-fluid">
        <div className="mt-2 ">
          <h2 className="text-center mb-4 pt-3">শাঁখার তালিকা </h2>
        </div>

        <div className="mt-5 bg-light">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>ID</th>
                <th>নাম</th>
                <th>ঠিকানা</th>
                <th>মোবাইল</th>
                <th>ম্যানেজার</th>
                <th>কেন্দ্র সংখ্যা</th>
                <th>পদক্ষেপ</th>
              </tr>
            </thead>
            <tbody>
              {branchData.map((branch) => (
                <tr key={branch.BranchID}>
                  <td>{branch.BranchID}</td>
                  <td>{branch.BranchName}</td>
                  <td>{branch.BranchAddress}</td>
                  <td>{branch.BranchMobile}</td>
                  <td>{branch.selectedManager}</td>
                  <td>{branch.BranchMobile}</td>

                  <td>
                    <button
                      type="button"
                      className="ms-3 btn btn-primary btn-sm"
                      onClick={() => handleEditClick(branch)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BranchList;
