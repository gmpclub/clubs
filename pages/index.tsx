import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className="w-full h-full flex flex-1">
        <div className="min-h-screen flex-1 bg-image-1">
          <div className="flex flex-1 h-full bg-black bg-opacity-50 justify-center items-center">
            <Image src="/grashaus_logo.png" alt="GrasHaus Logo" width={500} height={500} />
          </div>
        </div>
        <div className="min-h-screen flex-1 justify-center items-center">
          <div className="flex flex-1 h-full justify-center items-center flex-col p-8">
            <Image src="/grashaus_green_logo.png" alt="GrasHaus Logo" width={300} height={300} />
            <h1 className="text-3xl font-extrabold text-center -mt-4">
              Willkommen zur Registrierung im ersten Cannabis Club deiner Stadt.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col my-16">
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
        <div className="flex-1 bg-image-2">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="flex-1 bg-image-6">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col m-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">GMP Cannabis Club</h3>
              <p>
                Wir sind ein eingetragener Verein in Stuttgart mit dem Ziel, unsere Mitglieder nach
                der Legalisierung durch gemeinschaftlichen Selbstanbau mit Cannabis zu versorgen.
                Politik, Bildung und Verwaltung finden im GMP Cannabis Club kompetente
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
      <div className="w-full h-full flex flex-1">
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
        <div className="flex-1 bg-image-5">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="flex-1 bg-image-4">
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
      <div className="w-full h-full flex flex-1" id="registration">
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col m-16">
            <form className="w-full">
              <h3 className="text-3xl font-bold mb-6 mt-8">Hier registrieren!</h3>
              <div className="flex flex-1 gap-4">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Vorname"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Name"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                />
              </div>
              <div className="flex flex-1 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Mobil Nummer"
                  className="input input-bordered input-primary w-full my-2 bg-white"
                />
              </div>
              <input
                type="text"
                name="city"
                placeholder="Stadt"
                className="input input-bordered input-primary w-full my-2 bg-white"
              />
              <div className="flex flex-1 gap-4 mx-2">
                <div className="my-2 flex items-center gap-2">
                  <input type="radio" name="membershipType" className="radio radio-primary" />
                  <label htmlFor="membershipType">Aktives Mitglied</label>
                </div>
                <div className="my-2 flex items-center gap-2">
                  <input type="radio" name="membershipType" className="radio radio-primary" />
                  <label htmlFor="membershipType">Nicht aktives Mitglied</label>
                </div>
                <div className="my-2 flex items-center gap-2">
                  <input type="radio" name="membershipType" className="radio radio-primary" />
                  <label htmlFor="membershipType">Ich bin mir noch nicht sicher</label>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                Aktives Mitglied: Beteilige dich beim Anbau mit max. 10 Stunden je Woche.
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Nicht aktives Mitglied: Erwerbe Genussmittel ohne zeitlichen Aufwand, weil andere
                Clubmitglieder deine Pflanzen aufziehen und verarbeiten
              </p>
              <button className="btn btn-block btn-primary">Abschicken</button>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-image-3">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
      </div>
    </main>
  );
}
