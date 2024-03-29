import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MemberAdmission from "./component/page/member/MemberAdmission";
import Home from "./component/page/home/Home";
import WorkerAdmission from "./component/page/office/OfficeWorkerAdd.jsx";
import WorkerDetails from "./component/page/office/WorkerDetails.jsx";
import OpenCenter from "./component/page/center/OpendCenter.jsx";
import CenterList from "./component/page/center/CenterList.jsx";
import MemberListCenter from "./component/page/center/MemberListCenter.jsx";
import OpenBranch from "./component/page/branch/OpenBranch.jsx";
import BranchList from "./component/page/branch/BranchList.jsx";
import MemberListBranch from "./component/page/branch/MemberListBranch.jsx";
import OfficeCollection from "./component/page/branch/OfficeCollection.jsx";
import OpenLoan from "./component/page/loan/OpenLoan.jsx";
import LoanDetails from "./component/page/loan/LoanDetails.jsx";
import OpenSavings from "./component/page/saving/OpenSavings.jsx";
import SavingsCollection from "./component/page/saving/SavingsCollection.jsx";
import SavingsDetails from "./component/page/saving/SavingsDetails.jsx";
import SavingsWithdraw from "./component/page/saving/SavingsWithdraw.jsx";
import WorkerTransfer from "./component/page/office/WorkerTransfer.jsx";
import InstallmentDetails from "./component/page/loan/InstallmentDetails.jsx";
import InstallmentCollection from "./component/page/loan/InstallmentCollection.jsx";
import CollectionList from "./component/page/saving/CollectionList.jsx";
import Login from "./component/page/LoginSignup/Login.jsx";
import Signup from "./component/page/LoginSignup/Signup.jsx";
import ForgotPassword from "./component/page/LoginSignup/ForgetPassword.jsx";
import MemberEdit from "./component/page/member/MemberEdit.jsx";
import BranchEditModal from "./component/page/branch/BranchEditModal.jsx";
import WorkerEdit from "./component/page/office/WorkerEdit.jsx";
import CenterEdit from "./component/page/center/CenterEdit.jsx";
// import OfficeWorkerAdd from "./component/page/office/OfficeWorkerAdd.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "MemberAdmission", element: <MemberAdmission /> },
      { path: "MemberEdit", element: <MemberEdit /> },
      { path: "Home", element: <Home /> },
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <Signup /> },
      { path: "ForgotPassword", element: <ForgotPassword /> },

      // Worker Section

      // { path: "WorkerAdmission", element: <WorkerAdmission /> },

      // Center Section

      { path: "OpenCenter", element: <OpenCenter /> },
      { path: "CenterList", element: <CenterList /> },
      {
        path: "MemberListCenter",
        element: <MemberListCenter />,
      },
      {
        path: "CenterEdit",
        element: <CenterEdit />,
      },

      // Branch Section

      { path: "OpenBranch", element: <OpenBranch /> },
      { path: "BranchList", element: <BranchList /> },
      { path: "BranchMemberList", element: <MemberListBranch /> },
      { path: "OfficeCollection", element: <OfficeCollection /> },
      { path: "BranchEditModal", element: <BranchEditModal /> },

      // Loan Section

      { path: "OpenLoan", element: <OpenLoan /> },
      { path: "LoanDetails", element: <LoanDetails /> },
      { path: "InstallmentDetails", element: <InstallmentDetails /> },
      { path: "InstallmentCollection", element: <InstallmentCollection /> },

      // Savings Section

      { path: "OpenSavings", element: <OpenSavings /> },
      { path: "SavingsDetails", element: <SavingsDetails /> },
      { path: "SavingsCollection", element: <SavingsCollection /> },
      { path: "SavingsWithdraw", element: <SavingsWithdraw /> },
      { path: "CollectionList", element: <CollectionList /> },

      //Office Section
      { path: "WorkerAdmission", element: <WorkerAdmission /> },
      { path: "WorkerDetails", element: <WorkerDetails /> },
      { path: "WorkerTransfer", element: <WorkerTransfer /> },
      { path: "WorkerEdit", element: <WorkerEdit /> },
      // Account Section

      // Auth
      { path: "Auth-register", element: <Signup /> },
    ],
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
