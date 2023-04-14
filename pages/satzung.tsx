import Image from "next/image";

const Satzung = () => {
  return (
    <main className="bg-white text-black">
      <div className="w-full h-full flex flex-1">
        <div className="min-h-screen flex-1 bg-image-satzung-1">
          <div className="flex flex-1 h-full bg-black bg-opacity-50 justify-center items-center">
            <Image src="/grashaus_logo.png" alt="GrasHaus Logo" width={500} height={500} />
          </div>
        </div>
        <div className="min-h-screen flex-1 justify-center items-center">
          <div className="flex flex-1 h-full justify-center items-center flex-col p-8">
            <Image src="/grashaus_green_logo.png" alt="GrasHaus Logo" width={300} height={300} />
            <h1 className="text-3xl font-extrabold text-center -mt-4">
              Satzung des GMP Cannabis Social Club
            </h1>
            <a
              href="/20230401_Vereinssatzung_GMPC_V1.pdf"
              className="btn btn-active btn-primary mt-8"
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-1">
        <div className="flex-1 justify-center items-center">
          <div className="flex flex-1 h-full items-center flex-col my-16">
            <div className="m-16">
              <h3 className="text-3xl font-bold mb-4">Präambel:</h3>
              <p>
                Cannabis Social Clubs (CSC) sind Anbaugemeinschaften von Cannabisnutzern, die ihren
                Eigenbedarfsanbau gemeinschaftlich organisieren oder, dort wo Anbau von Cannabis
                noch nicht erlaubt ist, die Legalisierung des Konsums und des Anbaus von Cannabis
                zum Eigenbedarf anstreben.
              </p>
              <br />
              <p>
                Da der Anbau von THC-haltigem Hanf, auch für den Eigenbedarf in der Bundesrepublik
                Deutschland immer noch verboten ist, und auch aktiv verfolgt wird, werden die
                Aufgaben des GMP Cannabis Social Club Vereins zunächst darin bestehen, sich als
                Interessengemeinschaften von Cannabis-Konsumenten einzusetzen für:
              </p>
              <br />
              <ul className="list-disc pl-6">
                <li>Die Änderung der Drogengesetzgebung in Deutschland</li>
                <li>Eine akzeptierende und regulierende Drogenpolitik in Stuttgart</li>
                <li>Jugend- und Verbraucherschutz</li>
                <li>Aufklärung und Prävention</li>
                <li>
                  Nach der Legalisierung und Schaffung der gesetzeskonformen Möglichkeit, strebt der
                  Cannabis Social Club den Betrieb einer, dann legalen, Anbaugemeinschaft der
                  Mitglieder an.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-image-satzung-2">
          <div className="flex flex-1 h-full bg-black bg-opacity-20 justify-center items-center"></div>
        </div>
      </div>
    </main>
  );
};
export default Satzung;
