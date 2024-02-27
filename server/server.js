import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import User from "./models/user.model.js";
import OpenCenter from "./models/center.model.js";
import OpenBranch from "./models/branch.model.js";
import OpenLoan from "./models/openloan.model.js";
import AddWorker from "./models/worker.model.js";
import Member from "./models/member.model.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());

// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;
app.use(cors({ origin: "http://localhost:5173" }));

// database connection

(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/jkssb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
})();
app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading.
    console.error("Multer Error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  } else {
    next(err);
  }
});

// Sign up Start

app.post("/signup", async (req, res) => {
  try {
    const { phoneNumber, username, password, rank } = req.body;
    const newUser = new User({
      phoneNumber,
      username,
      password,
      rank,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// WorkerAdmission section Start

const generateWorkerID = (count) => {
  const paddedCount =
    count !== undefined ? count.toString().padStart(4, "0") : "";
  return `W${paddedCount}`;
};
app.post("/workeradmission", async (req, res) => {
  try {
    const {
      WorkerName,
      WorkerParent,
      WdateOfBirth,
      WorkerJob,
      WorkerHome,
      WorkerUnion,
      WorkerPost,
      WorkerSubDic,
      WorkerDic,
      WorkerMarital,
      WorkerStudy,
      WorkerNID,
      WorkerMobile,
      WorkerMail,
      Workerimage,
      WorkerCenterAdd,
      WorkerBranchAdd,
      agreementChecked,
    } = req.body;
    const count = await AddWorker.countDocuments();
    const workerID = generateWorkerID(count);
    const newWorker = new AddWorker({
      workerID,
      WorkerName,
      WorkerParent,
      WdateOfBirth,
      WorkerJob,
      WorkerHome,
      WorkerUnion,
      WorkerPost,
      WorkerSubDic,
      WorkerDic,
      WorkerMarital,
      WorkerStudy,
      WorkerNID,
      WorkerMobile,
      WorkerMail,
      Workerimage,
      WorkerCenterAdd,
      WorkerBranchAdd,
      agreementChecked,
    });
    await newWorker.save();
    res.status(201).json({ message: "Worker data saved successfully" });
  } catch (error) {
    console.error("Worker Admission Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Worker Callback
app.get("/worker-callback", async (req, res) => {
  try {
    const selectedBranch = req.query.selectedBranch;
    let query = {};
    if (selectedBranch) {
      query = { WorkerBranchAdd: selectedBranch };
    }
    const workers = await AddWorker.find(
      query,
      "workerID WorkerName WorkerParent WdateOfBirth WorkerJob WorkerHome WorkerUnion WorkerPost WorkerSubDic WorkerDic WorkerMarital WorkerStudy WorkerNID WorkerMobile WorkerMail Workerimage WorkerCenterAdd WorkerBranchAdd agreementChecked"
    );

    res.json(workers);
  } catch (error) {
    console.error("Worker Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// WorkerAdmission section End

// Open Branch Start

const generateBranchID = (count) => {
  const paddedCount =
    count !== undefined ? count.toString().padStart(4, "0") : "";
  return `B${paddedCount}`;
};
app.post("/openbranch", async (req, res) => {
  try {
    const { BranchName, BranchAddress, selectedManager, BranchMobile } =
      req.body;
    const count = await OpenBranch.countDocuments();
    const BranchID = generateBranchID(count);
    const newBranchApplication = new OpenBranch({
      BranchID,
      BranchName,
      BranchAddress,
      selectedManager,
      BranchMobile,
    });
    await newBranchApplication.save();
    res.status(201).json({ message: "Branch Create successfully" });
  } catch (error) {
    console.error("Branch Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
app.get("/branch-callback", async (req, res) => {
  try {
    // Fetch all centers and return only CenterName
    const branchs = await OpenBranch.find(
      {},
      "BranchID BranchName BranchAddress selectedManager BranchMobile"
    );
    res.json(branchs);
  } catch (error) {
    console.error("Branch Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Open Branch End

// Open Center Start

const generateCenterID = (count) => {
  const paddedCount =
    count !== undefined ? count.toString().padStart(4, "0") : "";
  return `C${paddedCount}`;
};

app.post("/opencenter", async (req, res) => {
  try {
    const {
      CenterName,
      AddressCenter,
      CenterMnumber,
      centerWorker,
      centerBranch,
    } = req.body;
    const count = await OpenCenter.countDocuments();
    const centerID = generateCenterID(count);
    const newCenterApplication = new OpenCenter({
      centerID,
      CenterName,
      AddressCenter,
      CenterMnumber,
      centerWorker,
      centerBranch,
    });
    await newCenterApplication.save();
    res.status(201).json({ message: "Center Create successfully" });
  } catch (error) {
    console.error("Center Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Center Callback
app.get("/center-callback", async (req, res) => {
  try {
    const selectedBranch = req.query.selectedBranch;

    let query = {}; // Default query (no filtering)

    if (selectedBranch) {
      query = { centerBranch: selectedBranch };
    }

    const centers = await OpenCenter.find(
      query,
      "centerID CenterName AddressCenter CenterMnumber centerWorker centerBranch"
    );

    res.json(centers);
  } catch (error) {
    console.error("Center Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Open Center End

// Open loan  Start

const generateLoanID = (count) => {
  const paddedCount =
    count !== undefined ? count.toString().padStart(4, "0") : "";
  return `L${paddedCount}`;
};
app.post("/openloan", async (req, res) => {
  try {
    const { nid, selectedMember, loanType, amount, total, mobileNumber } =
      req.body;
    const count = await OpenLoan.countDocuments();
    const loanID = generateLoanID(count);
    const newLoanApplication = new OpenLoan({
      nid,
      loanID,
      memberName: selectedMember.memberName,
      husbandName: selectedMember.husbandName,
      branchName: selectedMember.branchName,
      centerName: selectedMember.centerName,
      mobile: selectedMember.mobile,
      loanType,
      amount,
      total,
      mobileNumber,
    });
    await newLoanApplication.save();
    res
      .status(201)
      .json({ message: "Loan application data saved successfully" });
  } catch (error) {
    console.error("Loan Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
app.get("/loan-callback", async (req, res) => {
  try {
    const loans = await OpenLoan.find({}, "loanType");
    res.json(loans);
  } catch (error) {
    console.error("Center Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Open loan  End

// member admission Start

const generateMemberID = (count) => {
  const paddedCount =
    count !== undefined ? count.toString().padStart(4, "0") : "";
  return `M${paddedCount}`;
};

app.post("/memberdmission", async (req, res) => {
  try {
    const memberData = req.body;
    const count = await Member.countDocuments();
    const memberID = generateMemberID(count);
    memberData.agreementChecked = memberData.agreementChecked === "true";
    memberData.memberID = memberID;
    const newMember = new Member(memberData);
    await newMember.save();
    res.status(201).json({ message: "Member data saved successfully" });
  } catch (error) {
    console.error("Error saving member data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//member callback

app.get("/member-callback", async (req, res) => {
  try {
    const selectedCenter = req.query.selectedCenter;
    const selectedNID = req.query.selectedNID;
    let query = {};

    if (selectedCenter) {
      query = { CenterMember: selectedCenter };
    }
    if (selectedNID) {
      query.MemberNIDnumber = selectedNID;
    }
    const members = await Member.find(
      query,
      "BranchMember  CenterMember memberID memberName MfhName MdateOfBirth memberJob memberVillage memberUnion memberPost memberSubDic memberDic memberMarital memberStudy memberFhead memberfMM memberfMF memberfMTotal EarningMember FamilyMemberENO loanamount nonorganizaiotnloan YearlyIncome LandProperty TotalMoney MemberNIDnumber MemberMobile NominiName NominiFather MemberNominiRelation "
    );
    res.json(members);
  } catch (error) {
    console.error("Member Application Error:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// member admission End

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 404 Error handler
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Error handling
app
  .listen(port, () => {
    console.log(`server run at http://localhost:${port}`);
  })
  .on("error", (error) => {
    console.error(`Error starting server: ${error.message}`);
  });
