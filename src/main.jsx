import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MemberAdmission from "./component/page/member/MemberAdmission";
import Home from "./component/page/home/Home";
import WorkerAdmission from "./component/page/worker/WorkerAdmission";
import WorkerDetails from "./component/page/worker/WorkerDetails.jsx";
import OpenCenter from "./component/page/center/OpendCenter.jsx";
import CenterList from "./component/page/center/CenterList.jsx";
import MemberListCenter from "./component/page/center/MemberListCenter.jsx";
import OpenBranch from "./component/page/branch/OpenBranch.jsx";
import BranchList from "./component/page/branch/BranchList.jsx";
// import MemberListBranch from "./component/page/branch/MemberListBranch.jsx";
import OfficeCollection from "./component/page/branch/OfficeCollection.jsx";
import OpenLoan from "./component/page/loan/OpenLoan.jsx";
import LoanDetails from "./component/page/loan/LoanDetails.jsx";
import OpenSavings from "./component/page/saving/OpenSavings.jsx";
import SavingsCollection from "./component/page/saving/SavingsCollection.jsx";
import SavingsDetails from "./component/page/saving/SavingsDetails.jsx";
import SavingsWithdraw from "./component/page/saving/SavingsWithdraw.jsx";
import WorkerTransfer from "./component/page/worker/WorkerTransfer.jsx";
import InstallmentDetails from "./component/page/loan/InstallmentDetails.jsx";
import InstallmentCollection from "./component/page/loan/InstallmentCollection.jsx";
import CollectionList from "./component/page/saving/CollectionList.jsx";
import Login from "./component/page/LoginSignup/Login.jsx";
import Signup from "./component/page/LoginSignup/Signup.jsx";
import ForgotPassword from "./component/page/LoginSignup/ForgetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "MemberAdmission", element: <MemberAdmission /> },
      { path: "Dashboard", element: <Home /> },
      { path: "Login", element: <Login /> },
      { path: "Signup", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword /> },

      // Worker Section

      { path: "WorkerDetails", element: <WorkerDetails /> },
      { path: "WorkerAdd", element: <WorkerAdmission /> },
      { path: "WorkerTransfer", element: <WorkerTransfer /> },

      // Center Section

      { path: "CenterAdd", element: <OpenCenter /> },
      { path: "CenterDetails", element: <CenterList /> },
      { path: "MemberDetails", element: <MemberListCenter /> },

      // Branch Section

      { path: "BranchAdd", element: <OpenBranch /> },
      { path: "BranchList", element: <BranchList /> },
      // { path: "BranchMemberList", element: <MemberListBranch /> },
      { path: "OfficeCollection", element: <OfficeCollection /> },

      // Loan Section

      { path: "LoanOpen", element: <OpenLoan /> },
      { path: "LoanDetails", element: <LoanDetails /> },
      { path: "InstallmentDetails", element: <InstallmentDetails /> },
      { path: "InstallmentCollection", element: <InstallmentCollection /> },

      // Savings Section

      { path: "SavingsOpen", element: <OpenSavings /> },
      { path: "SavingsList", element: <SavingsDetails /> },
      { path: "SavingsCollection", element: <SavingsCollection /> },
      { path: "SavingsWithdraw", element: <SavingsWithdraw /> },
      { path: "CollectionList", element: <CollectionList /> },

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
