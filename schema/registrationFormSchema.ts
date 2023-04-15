import { Schema, model, models } from "mongoose";
import { z } from "zod";

const membershipTypeEnum = ["Active", "Non-Active", "Not-Sure"] as const;

const schema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
  membershipType: {
    type: String,
    enum: membershipTypeEnum,
    default: "Active",
  },
});

const RegistrationForm = models?.RegistrationForm || model("RegistrationForm", schema);

export default RegistrationForm;

export const RegistrationFormZ = z.object({
  firstname: z.string().min(3, "Firstname must be atleast 3 charaters"),
  lastname: z.string().min(3, "Lastname must be atleast 3 charaters"),
  email: z.string().email("Please provide a valid email"),
  phoneNumber: z.string(),
  city: z.string().min(3),
  membershipType: z.enum(membershipTypeEnum),
});
