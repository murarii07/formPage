import mongoose from "mongoose";
const fields = new mongoose.Schema({
    departmentName: { type: String},
    designationDateOfJoining: { type: String},
    teacherName: { type: String},
    qualification: { type: String},
    specialization: { type: String },
    joinDate: { type: String },
    basicPay: { type: String },
    appointmentLetter: { type: String },
    approvalDate: { type: String },
    teacherType: { type: String },
    currentDesignation: { type: String },
    programme: { type: String },
    percentageMarks: { type: String },
    teachingExperience: { type: String },
    industryExperience: { type: String },
    birthDate: { type: String },
    scalePay: { type: String },
    totalEmoluments: { type: String },
    phoneNo: { type: String },
    photo: { fileName: String, data: Buffer, contentType: "string" },
    resume: { fileName: String, data: Buffer, contentType: "string" },
})
export const field = new mongoose.model("userData", fields);