/** @format */

import mongoose from "mongoose";

const validateEmail = (e) => {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(e);
};

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    imageUrl: { type: String, required: [true, "Image is required"] },
    description: { type: String, required: [true, "Description is required"] },
    status: { type: String, default: "pending" },
    createdBy: { type: String, required: [true, "Created By is required"] },
    createdAt: { type: Date, default: Date.now() },
    approvedBy: { type: String },
    reason: { type: String, default: "" },
    rejectedBy: { type: String },
    modifiedAt: { type: Date },
  },
  {
    collection: "blogs",
    versionKey: false,
  }
);

const blogModel = mongoose.model("blogs", blogSchema);
export default blogModel;
