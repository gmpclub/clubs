import Footer from "@/components/footer";
import { RegistrationFormZ } from "@/schema/registrationFormSchema";
import axiosInstance from "@/utils/axios";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC, FormEvent, useEffect, useMemo, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { z } from "zod";

const inter = Inter({ subsets: ["latin"] });

const initialFormData: z.infer<typeof RegistrationFormZ> = {
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
  city: "",
  membershipType: "Not-Sure",
};

type ToastInfoType = {
  message: string;
  type: "success" | "error" | "";
};

const initialToastInfo: ToastInfoType = { message: "", type: "" };

export default function Home() {
  const [formData, setFormData] = useState<z.infer<typeof RegistrationFormZ>>(initialFormData);
  const [formError, setFormError] = useState("");
  const [toastInfo, setToastInfo] = useState<ToastInfoType>(initialToastInfo);
  const [toastTimeout, setToastTimeout] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);

  const createToastTimeout = () =>
    setToastTimeout(setTimeout(() => setToastInfo(initialToastInfo), 5000));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (toastTimeout) {
      clearTimeout(toastTimeout);
      setToastInfo(initialToastInfo);
      setToastTimeout(null);
    }
    setFormError("");
    RegistrationFormZ.parseAsync(formData)
      .then((data) => {
        axiosInstance
          .post("/registrationForm", { registrationFormData: data })
          .then(() => {
            setFormError("");
            setFormData(initialFormData);
            setToastInfo({ message: "Registration successful", type: "success" });
            setLoading(false);
          })
          .catch((error) => {
            console.log();
            setToastInfo({
              message:
                error?.response?.data?.message || "Something went wrong please try again later",
              type: "error",
            });
            setLoading(false);
          });
      })
      .catch((error) => {
        setFormError(error.issues[0].message);
        setToastInfo({ message: error.issues[0].message, type: "error" });
        setLoading(false);
      });
  };

  useEffect(() => {
    if (toastInfo.message !== "" || toastInfo.type !== "") createToastTimeout();
  }, [toastInfo]);

  return (
    <main className="bg-white text-black">
      {toastInfo.type !== "" ? <Toast message={toastInfo.message} type={toastInfo.type} /> : null}
      <div className="w-full h-full lg:flex flex-1">
        <div className="min-h-screen flex-1 bg-image-1">
          <div className="flex flex-1 min-h-screen bg-black bg-opacity-50 justify-center items-center">
            <Link href="/">
              <Image src="/grashaus_logo.png" alt="GrasHaus Logo" width={500} height={500} />
            </Link>
          </div>
        </div>
        <div className="min-h-screen flex-1 justify-center items-center">
          <div className="flex flex-1 min-h-screen justify-center items-center flex-col p-8">
            <Image src="/grashaus_green_logo.png" alt="GrasHaus Logo" width={300} height={300} />
            <h1 className="text-3xl font-extrabold text-center -mt-4">
              Willkommen zur Registrierung im ersten Cannabis Club deiner Stadt.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-1 flex-col-reverse lg:flex-row">
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col m-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Unsere Ziele:</h3>
              <ul className="list-disc mb-4 text-xl">
                <h6 className="font-bold">Mitgestaltung der Legalisierung:</h6>
                <li className="ml-6">Demokratisch, einfach, mit wenig eigenem Aufwand </li>
              </ul>
              <ul className="list-disc text-xl">
                <h6 className="font-bold">Nach Erfolg der Legalisierung:</h6>
                <li className="ml-6">
                  <span className="font-bold">Anbau</span> im Verein, aktiv oder nicht-aktiv
                </li>
                <li className="ml-6">Selbstversorgung mit Cannabis und Erzeugnisse daraus</li>
                <li className="ml-6">Anbauwissen, Qualitätssicherung und Jugendschutz</li>
              </ul>
              <div className="flex flex-1 mt-8 justify-center">
                <a href="#registration" className="btn btn-active btn-primary">
                  Kostenlos Mitglied werden!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-image-2 min-h-[500px]">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
      </div>
      <div className="w-full h-full lg:flex flex-1">
        <div className="flex-1 bg-image-6 min-h-[500px]">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col m-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">GRASHAUS Cannabis Club</h3>
              <p>
                Wir sind ein eingetragener Verein in Stuttgart mit dem Ziel, unsere Mitglieder nach
                der Legalisierung durch gemeinschaftlichen Selbstanbau mit Cannabis zu versorgen.
                Politik, Bildung und Verwaltung finden im GRASHAUS Cannabis Club kompetente
                Ansprechpartner für die Herausforderungen der fortschreitenden Legalisierung von
                Cannabis.
              </p>
              <br />
              <p>
                Unser Handeln orientiert sich an der ENCOD-Kampagne für freie Cannabis Clubs. Dabei
                profitieren wir von den Erfahrungen, unserer Erfahrung in Amerika, Uruguay, Spanien,
                Belgien und den Niederlanden und Thailand die wir seit 2009 gesammelt haben - und
                wir hier beste Kontakte pflegen. Wir streben eine demokratische Zusammenarbeit aller
                CSCs in Deutschland an.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-1 flex-col-reverse lg:flex-row">
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col m-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 mt-8">Was machen wir?</h3>
              <p>
                Was machen wir? Wir erforschen, produzieren, und konsumieren bereits seit mehreren
                Jahren Cannabis und Medizinal Cannabis. Diese Erfahrung geben wir an Clubmitgleider
                weiter, um Sie zu befähigen, bei Bedarf Ihren eigenen Club mit Freunden zu gründen.
                Satzung des Clubs:
              </p>
              <div className="flex flex-1 mt-8 justify-center">
                <Link href="/satzung" className="btn btn-active btn-primary">
                  Satzung
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-image-5 min-h-[500px]">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
      </div>
      <div className="w-full h-full lg:flex flex-1">
        <div className="flex-1 bg-image-4 min-h-[500px]">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col m-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Mitgliederschutz</h3>
              <p>
                Mitgliederdaten werden nur anonymisiert nach außen gegeben. Die Mitglieder können
                nach Erfolg der Legalisierung von Cannabis in geschützten, sicheren Räumen
                Hanfprodukte erwerben. Beratung und Begleitung sind, wenn gewünscht, möglich.
                Eventuell problematisches Konsumverhalten von Mitgliedern wird frühzeitig bemerkt.
                Die Qualität der Produkte ist sauber und hoch. Bekömmlichere Konsumformen als
                Rauchen werden gefördert und gelehrt. Soziales Miteinander wird geschützt und
                gefördert.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-1 flex-col-reverse lg:flex-row" id="registration">
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col m-16">
            <form className="w-full" onSubmit={onSubmit}>
              <h3 className="text-3xl font-bold mb-6 mt-8">Hier registrieren!</h3>
              <div className="sm:flex flex-1 sm:gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Vorname"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                  value={formData.firstname}
                  onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Name"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                  value={formData.lastname}
                  onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                />
              </div>
              <div className="sm:flex flex-1 sm:gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Mobil Nummer"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const split = e.target.value.split("");
                    if (split.length === 0) return setFormData({ ...formData, phoneNumber: "" });
                    if (split.length === 1)
                      if (split[0] === "+")
                        return setFormData({ ...formData, phoneNumber: e.target.value });
                    const lastChar = split[split.length - 1];
                    if (Number.isNaN(+lastChar)) return;
                    setFormData({ ...formData, phoneNumber: e.target.value });
                  }}
                />
              </div>
              <input
                type="text"
                name="city"
                placeholder="Stadt"
                className="input input-bordered input-primary w-full my-2 bg-white"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
              <div className="sm:flex flex-1 sm:gap-4 mx-2">
                <label className="my-2 flex items-center gap-2">
                  <input
                    type="radio"
                    name="membershipType"
                    className="radio radio-primary"
                    checked={formData.membershipType === "Active"}
                    onChange={() => setFormData({ ...formData, membershipType: "Active" })}
                  />
                  Aktives Mitglied
                </label>
                <label className="my-2 flex items-center gap-2">
                  <input
                    type="radio"
                    name="membershipType"
                    className="radio radio-primary"
                    checked={formData.membershipType === "Non-Active"}
                    onChange={() => setFormData({ ...formData, membershipType: "Non-Active" })}
                  />
                  Nicht aktives Mitglied
                </label>
                <label className="my-2 flex items-center gap-2">
                  <input
                    type="radio"
                    name="membershipType"
                    className="radio radio-primary"
                    checked={formData.membershipType === "Not-Sure"}
                    onChange={() => setFormData({ ...formData, membershipType: "Not-Sure" })}
                  />
                  Ich bin mir noch nicht sicher
                </label>
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-bold">Aktives Mitglied:</span> Beteilige dich beim Anbau mit
                flexiblen Stunden je Woche.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-bold">Nicht aktives Mitglied:</span> Erwerbe Genussmittel ohne
                zeitlichen Aufwand, weil andere Clubmitglieder deine Pflanzen aufziehen und
                verarbeiten
              </p>
              <p className="text-sm text-red-500 font-bold mt-2">{formError}</p>
              <button className="btn btn-block btn-primary" disabled={loading}>
                {loading ? <AiOutlineLoading className="animate-spin" size={20} /> : "Abschicken"}
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-image-3 min-h-[500px]">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

type ToastProps = {
  message: string;
  type: "success" | "error";
};

const Toast: FC<ToastProps> = ({ message, type }) => {
  const toastType = useMemo(() => {
    switch (type) {
      case "error":
        return "alert-error";
      case "success":
        return "alert-success";
      default:
        return "";
    }
  }, [type]);
  return (
    <div className="toast toast-top toast-start min-w-max">
      <div className={`alert ${toastType} min-h-max`}>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};
