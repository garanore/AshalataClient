// eslint-disable-next-line no-unused-vars
import React from "react";

// Sample data (replace it with your actual data from the database)
const branchData = [
  {
    id: "B0001",
    name: "Branch A",
    address: "123 Main St",
    mobile: "1234567890",
    manager: "Manager A",
    totalCenter: 3,
  },
  {
    id: "B0002",
    name: "Branch B",
    address: "456 Oak St",
    mobile: "9876543210",
    manager: "Manager B",
    totalCenter: 2,
  },
  {
    id: "B0003",
    name: "Branch C",
    address: "789 Elm St",
    mobile: "5556667777",
    manager: "Manager C",
    totalCenter: 4,
  },
  {
    id: "B0004",
    name: "Branch C",
    address: "789 Elm St",
    mobile: "5556667777",
    manager: "Manager D",
    totalCenter: 10,
  },
];

// Main Component
function BranchList() {
  return (
    <div>
      <div className="bg-light container-fluid">
        <div className="mt-2 ">
          <h2 className="text-center  mb-4 pt-3">শাঁখার তালিকা </h2>
        </div>

        <div className=" mt-5 bg-light">
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
                <tr key={branch.id}>
                  <td>{branch.id}</td>
                  <td>{branch.name}</td>
                  <td>{branch.address}</td>
                  <td>{branch.mobile}</td>
                  <td>{branch.manager}</td>
                  <td>{branch.totalCenter}</td>
                  <td>
                    {/* Action Buttons (View, Edit, Delete) */}
                    <button className="btn btn-info btn-sm me-2">View</button>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
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
