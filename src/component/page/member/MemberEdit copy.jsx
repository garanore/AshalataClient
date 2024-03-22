// // MemberEdit.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Input } from "@mui/material";
// import { useNavigate, useLocation } from "react-router-dom";
// const MEMBER_LIST_CENTER_ROUTE = "/MemberDetails";

// const MemberEdit = () => {
//   const { state } = useLocation();
//   const location = useLocation();
//   const memberIDs = location.state ? location.state.memberID : null;

//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [allBrands, setAllBrands] = useState([]);
//   const [memberData, setMemberData] = useState({
//     BranchMember: "",
//     CenterMember: "",
//     memberID: "",
//     memberName: "",
//     MfhName: "",
//     memberJob: "",
//     memberVillage: "",
//     memberUnion: "",
//     memberPost: "",
//     MdateOfBirth: "",
//     memberSubDic: "",
//     memberDic: "",
//     memberMarital: "",
//     memberStudy: "",
//     memberFhead: "",
//     memberfMM: 0,
//     memberfMF: 0,
//     memberfMTotal: 0,
//     EarningMember: "",
//     FamilyMemberENO: "",
//     loanamount: 0,
//     nonorganizaiotnloan: 0,
//     YearlyIncome: 0,
//     LandProperty: "",
//     TotalMoney: "",
//     MemberNIDnumber: 0,
//     MemberMobile: 0,
//     NominiName: "",
//     NominiFather: "",
//     MemberNominiRelation: "",
//   });
//   const [editedMember, setEditedMember] = React.useState(memberData);

//   useEffect(() => {
//     const memberID = state?.memberData?.memberID || "";

//     if (memberID) {
//       setIsLoading(true);
//       axios
//         .get(`/member-callback?selectedMemberID=${memberID}`)
//         .then((response) => {
//           setMemberData(response.data[0]);
//           setEditedMember(response.data[0]); // Ensure this line is correctly updating the state
//         })
//         .catch((error) => {
//           console.error("Error fetching member data:", error.message);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     }
//   }, [state]);

//   // Separate useEffect for logging state changes
//   useEffect(() => {}, [memberData, editedMember]);

//   useEffect(() => {
//     fetch(`http://localhost:9000/member-callback/${memberIDs}`)
//       .then((res) => res.json())
//       .then((data) => setAllBrands(data));
//   }, [memberIDs]);

//   //---------

//   const handleUpdateMember = () => {
//     console.log("Update button clicked");
//     if (state?.memberData?.memberID) {
//       const memberID = state.memberData.memberID;
//       console.log("Data to be sent:", editedMember); // Add this line
//       axios
//         .put(`/update-member/${memberID}`, editedMember) // Updated this line
//         .then((response) => {
//           console.log(
//             "Member updated successfully:",
//             response.data.updatedMember
//           );
//           navigate("/MemberListCenter");
//         })
//         .catch((error) => {
//           console.error("Error updating member data:", error.message);
//         });
//     }
//   };

//   const handleCancel = () => {
//     navigate(MEMBER_LIST_CENTER_ROUTE);
//   };

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <form onSubmit={handleUpdateMember} className="container-fluid p-2 ">
//           <div className="row  g-4 bg-light mt-5">
//             <div className="col-md-4">
//               <label htmlFor="memberID" className="form-label">
//                 ID
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberID || ""}
//                 readOnly
//               />
//             </div>
//             <div className="col-md-4">
//               <label htmlFor="memberName" className="form-label">
//                 নাম
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberName || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, memberName: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-4">
//               <label htmlFor="MfhName" className="form-label">
//                 পিতা/স্বামীর নাম
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.MfhName || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, MfhName: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-2">
//               <label htmlFor="memberJob" className="form-label">
//                 পেশা
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberJob || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, memberJob: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-6">
//               <label htmlFor="memberVillage" className="form-label">
//                 গ্রাম/পাড়া
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberVillage || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, memberVillage: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-3">
//               <label htmlFor="memberUnion" className="form-label">
//                 ইউনিয়ন
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberUnion || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, memberUnion: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-3">
//               <label htmlFor="memberPost" className="form-label">
//                 ডাকঘর
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberPost || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, memberPost: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-3">
//               <label htmlFor="memberSubDic" className="form-label">
//                 থানা
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberSubDic || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, memberSubDic: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-3">
//               <label htmlFor="memberDic" className="form-label">
//                 জেলা
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.memberDic || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, memberDic: e.target.value })
//                 }
//               />
//             </div>

//             <div className="row mt-4">
//               <div className="col-md-3 ">
//                 <label htmlFor="memberFhead" className="form-label">
//                   পরিবারের প্রধানের নাম
//                 </label>
//                 <Input
//                   className="form-control"
//                   value={allBrands.memberFhead || ""}
//                   onChange={(e) =>
//                     setAllBrands({ ...allBrands, memberFhead: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="col-9">
//                 <div className="row mt-3">
//                   <div className="col-3">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <div className="col-form-label">
//                           পরিবারের সদস্য সংখ্যা
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-3">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <label htmlFor="memberfMM" className="col-form-label">
//                           পুরুষ
//                         </label>
//                       </div>
//                       <div className="col-md-6">
//                         <Input
//                           className="form-control"
//                           value={allBrands.memberfMM || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               memberfMM: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-3">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <label htmlFor="memberfMF" className="col-form-label">
//                           মহিলা
//                         </label>
//                       </div>
//                       <div className="col-md-6">
//                         <Input
//                           className="form-control"
//                           value={allBrands.memberfMF || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               memberfMF: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-3">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <label
//                           htmlFor="memberfMTotal"
//                           className="col-form-label"
//                         >
//                           পরিবারের মোট সদস্য সংখ্যা
//                         </label>
//                       </div>
//                       <div className="col-md-6">
//                         <Input
//                           className="form-control"
//                           value={allBrands.memberfMTotal || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               memberfMTotal: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="col">
//                 <div className="row mt-3">
//                   <div className="col-4">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <label
//                           htmlFor="EarningMember"
//                           className="col-form-label"
//                         >
//                           পরিবারের উপার্জনকারী সদস্য সংখ্যা
//                         </label>
//                       </div>
//                       <div className="col-md-4">
//                         <Input
//                           className="form-control"
//                           value={allBrands.EarningMember || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               EarningMember: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-4">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-4">
//                         <label
//                           htmlFor="YearlyIncome"
//                           className="col-form-label"
//                         >
//                           পরিবারের মোট বার্ষিক আয়
//                         </label>
//                       </div>
//                       <div className="col-md-4">
//                         <Input
//                           className="form-control"
//                           value={allBrands.YearlyIncome || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               YearlyIncome: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-4">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-4">
//                         <label
//                           htmlFor="LandProperty"
//                           className="col-form-label"
//                         >
//                           মোট জমির পরিমাণ
//                         </label>
//                       </div>
//                       <div className="col-md-4">
//                         <Input
//                           className="form-control"
//                           value={allBrands.LandProperty || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               LandProperty: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="col">
//                 <div className="row mt-3">
//                   <div className="col-3">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <label htmlFor="TotalMoney" className="col-form-label">
//                           মোট সম্পদের পরিমাণ
//                         </label>
//                       </div>
//                       <div className="col-md-4">
//                         <Input
//                           className="form-control"
//                           value={allBrands.TotalMoney || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               TotalMoney: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-3">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <label
//                           htmlFor="MemberNIDnumber"
//                           className="col-form-label"
//                         >
//                           NID নাম্বার
//                         </label>
//                       </div>
//                       <div className="col-md-6">
//                         <Input
//                           className="form-control"
//                           value={allBrands.MemberNIDnumber || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               MemberNIDnumber: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-4 mt-5">
//                     <div className="row g-3 align-items-center ">
//                       <div className="col-auto">
//                         <label
//                           htmlFor="MemberMobile"
//                           className="col-form-label"
//                         >
//                           মোবাইল নাম্বার
//                         </label>
//                       </div>
//                       <div className="col-md-6">
//                         <Input
//                           className="form-control"
//                           value={allBrands.MemberMobile || ""}
//                           onChange={(e) =>
//                             setAllBrands({
//                               ...allBrands,
//                               MemberMobile: e.target.value,
//                             })
//                           }
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-5 mt-5">
//               <h2 className="text-center mb-4 ">নমনী তথ্য </h2>
//             </div>
//             <div className="col-md-4">
//               <label htmlFor="NominiName" className="form-label">
//                 নমনীর নাম
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.NominiName || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, NominiName: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-4">
//               <label htmlFor="NominiFather" className="form-label">
//                 পিতা/স্বামীর নাম
//               </label>
//               <Input
//                 className="form-control"
//                 value={allBrands.NominiFather || ""}
//                 onChange={(e) =>
//                   setAllBrands({ ...allBrands, NominiFather: e.target.value })
//                 }
//               />
//             </div>

//             <div className="col-md-4">
//               <label htmlFor="MemberNominiRelation" className="form-label">
//                 সম্পর্ক
//               </label>
//               <Input
//                 className="form-control"
//                 type="text"
//                 value={allBrands.MemberNominiRelation || ""}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter email"
//               ></input>
//               <small id="emailHelp" className="form-text text-muted"></small>
//             </div>
//             <div className=" d-flex justify-content-between mt-5">
//               <button type="button" className=" btn btn-primary btn-md">
//                 Update
//               </button>
//               <button
//                 type="button"
//                 className=" btn btn-primary btn-md"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default MemberEdit;
