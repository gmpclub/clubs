// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import RegistrationForm from "@/schema/registrationFormSchema";
import { connectDB } from "@/utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string } | { success: true; message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      connectDB();
      const { registrationFormData } = req.body;

      if (!registrationFormData) return res.status(400).json({ message: "Incomplete Data" });

      if (
        !(
          registrationFormData.firstname ||
          registrationFormData.lastname ||
          registrationFormData.city ||
          registrationFormData.membershipType ||
          registrationFormData.birthdate
        )
      )
        return res.status(400).json({ message: "Incomplete Data" });

      if (!registrationFormData.email || !registrationFormData.phoneNumber)
        return res.status(400).json({ message: "Incomplete Data" });

      let findData;
      if (registrationFormData.email) findData = { email: registrationFormData.email };
      else findData = { phoneNumber: registrationFormData.phoneNumber };

      return RegistrationForm.findOne(findData).then((registrationFormDB) => {
        if (registrationFormDB)
          return res.status(400).json({ message: "You have already registerd!" });

        return RegistrationForm.create(registrationFormData).then(() =>
          res.status(200).json({
            success: true,
            message: "Registration Succesful",
          })
        );
      });
    default:
      return res.status(400).json({ message: `No ${req.method} action exist.` });
  }
}
