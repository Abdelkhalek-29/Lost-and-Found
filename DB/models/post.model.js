import mongoose, { Types, model, Schema } from "mongoose";

export const postSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    age: {
      type: Number,
      required: true,
    },
    recentLocation: {
      type: String,
      required: true,
      enum: [
        "New Valley",
        "Matruh",
        "Red Sea",
        "Giza",
        "South Sinai",
        "North Sinai",
        "Suez",
        "Beheira",
        "Helwan",
        "Sharqia",
        "Dakahlia",
        "Kafr el-Sheikh",
        "Alexandria",
        "Monufia",
        "Minya",
        "Gharbia",
        "Faiyum",
        "Qena",
        "Asyut",
        "Sohag",
        "Ismailia",
        "Beni Suef",
        "Qalyubia",
        "Aswan",
        "Damietta",
        "Cairo",
        "Port Said",
        "Luxor",
      ],
    },
    type: {
      type: String,
      required: true,
      enum: ["Lost", "Found"],
    },
    hair_type: {
      type: String,
      required: true,
      enum: ["straight", "wavy", "curly", "coily"],
    },
    hair_color: {
      type: String,
      required: true,
      enum: ["black", "brown", "blond", "white/gray", "red"],
    },
    skin_color: {
      type: String,
      required: true,
      enum: ["very fair", "fair", "medium", "olive", "brown", "black"],
    },
    height_relative_to_his_peers: {
      type: String,
      required: true,
      enum: ["above", "identical", "below"],
    },
    eye_color:{
      type:String,
      required:true,
      enum:["black","brown","blue","hazel","amber","green","gray"],
    },
    notes: {
      type: String,
    },
    isClosed: {
      type: String,
      enum: ["false", "true"],
      default: "false",
    },
    createdBy: { type: Types.ObjectId, ref: "User", required: true },
    cloudFolder: { type: String, unique: true, required: true },

  //  featureVector: { type: String, default: [] ,required:true },

    // featureVector: { type: [Number], default: [] },

    images: [
      {
        id: { type: String, required: true },
        url: { type: String, required: true },
        featureVector: { type: [Number], default: [] },
            // featureVector: { type: String, default: [] ,required:true },


      },
    ],
  },
  { timestamps: true }
);

export const postModel = mongoose.model.Post || model("Post", postSchema);
