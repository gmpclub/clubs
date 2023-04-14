import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const DataProtection = () => {
  return (
    <main className="bg-white text-black">
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
            <h1 className="text-3xl font-extrabold text-center -mt-4">Datenschutzhinweise DSGVO</h1>
          </div>
        </div>
      </div>
      <div className="m-16">
        <h3 className="text-3xl font-bold mb-6">Kommentare</h3>
        <p>
          Wenn Besucher Kommentare auf der Website schreiben, sammeln wir die Daten, die im
          Kommentar-Formular angezeigt werden, außerdem die IP-Adresse des Besuchers und den
          User-Agent-String (damit wird der Browser identifiziert), um die Erkennung von Spam zu
          unterstützen.
        </p>
        <br />
        <p>
          Aus deiner E-Mail-Adresse kann eine anonymisierte Zeichenfolge erstellt (auch Hash
          genannt) und dem Gravatar-Dienst übergeben werden, um zu prüfen, ob du diesen benutzt. Die
          Datenschutzerklärung des Gravatar-Dienstes findest du hier:
          <a href="https://automattic.com/privacy">https://automattic.com/privacy.</a> Nachdem dein
          Kommentar freigegeben wurde, ist dein Profilbild öffentlich im Kontext deines Kommentars
          sichtbar.
        </p>
        <h3 className="text-3xl font-bold mb-6 mt-8">Medien</h3>
        <p>
          Wenn du ein registrierter Benutzer bist und Fotos auf diese Website lädst, solltest du
          vermeiden, Fotos mit einem EXIF-GPS-Standort hochzuladen. Besucher dieser Website könnten
          Fotos, die auf dieser Website gespeichert sind, herunterladen und deren
          Standort-Informationen extrahieren.
        </p>
        <br />
        <p>
          Die verwendeten Bilder stammen von Pixabay.com oder wurden selbst erstellt. Kopieren wird
          ohne ausdrückliche Erlaubnis untersagt.
        </p>
        <h3 className="text-3xl font-bold mb-6 mt-8">Cookies</h3>
        <p>
          Wenn du einen Kommentar auf unserer Website schreibst, kann das eine Einwilligung sein,
          deinen Namen, E-Mail-Adresse und Website in Cookies zu speichern. Dies ist eine
          Komfortfunktion, damit du nicht, wenn du einen weiteren Kommentar schreibst, all diese
          Daten erneut eingeben musst. Diese Cookies werden ein Jahr lang gespeichert. Falls du ein
          Konto hast und dich auf dieser Website anmeldest, werden wir ein temporäres Cookie setzen,
          um festzustellen, ob dein Browser Cookies akzeptiert. Dieses Cookie enthält keine
          personenbezogenen Daten und wird verworfen, wenn du deinen Browser schließt.
        </p>
        <br />
        <p>
          Wenn du dich anmeldest, werden wir einige Cookies einrichten, um deine
          Anmeldeinformationen und Anzeigeoptionen zu speichern. Anmelde-Cookies verfallen nach zwei
          Tagen und Cookies für die Anzeigeoptionen nach einem Jahr. Falls du bei der Anmeldung
          „Angemeldet bleiben“ auswählst, wird deine Anmeldung zwei Wochen lang aufrechterhalten.
          Mit der Abmeldung aus deinem Konto werden die Anmelde-Cookies gelöscht.
        </p>
        <br />
        <p>
          Wenn du einen Artikel bearbeitest oder veröffentlichst, wird ein zusätzlicher Cookie in
          deinem Browser gespeichert. Dieser Cookie enthält keine personenbezogenen Daten und
          verweist nur auf die Beitrags-ID des Artikels, den du gerade bearbeitet hast. Der Cookie
          verfällt nach einem Tag.
        </p>
        <h3 className="text-3xl font-bold mb-6 mt-8">Eingebettete Inhalte von anderen Websites </h3>
        <p>
          Beiträge auf dieser Website können eingebettete Inhalte beinhalten (z. B. Videos, Bilder,
          Beiträge etc.). Eingebettete Inhalte von anderen Websites verhalten sich exakt so, als ob
          der Besucher die andere Website besucht hätte.
        </p>
        <br />
        <p>
          Diese Websites können Daten über dich sammeln, Cookies benutzen, zusätzliche
          Tracking-Dienste von Dritten einbetten und deine Interaktion mit diesem eingebetteten
          Inhalt aufzeichnen, inklusive deiner Interaktion mit dem eingebetteten Inhalt, falls du
          ein Konto hast und auf dieser Website angemeldet bist.
        </p>
        <h3 className="text-3xl font-bold mb-6 mt-8">Mit wem wir deine Daten teilen </h3>
        <p>
          Wenn du eine Zurücksetzung des Passworts beantragst, wird deine IP-Adresse in der E-Mail
          zur Zurücksetzung enthalten sein.
        </p>
        <br />
        <p>Wie lange wir deine Daten speichern</p>
        <br />
        <p>
          Wenn du einen Kommentar schreibst, wird dieser inklusive Metadaten zeitlich unbegrenzt
          gespeichert. Auf diese Art können wir Folgekommentare automatisch erkennen und freigeben,
          anstatt sie in einer Moderations-Warteschlange festzuhalten.
        </p>
        <br />
        <p>
          Für Benutzer, die sich auf unserer Website registrieren, speichern wir zusätzlich die
          persönlichen Informationen, die sie in ihren Benutzerprofilen angeben. Alle Benutzer
          können jederzeit ihre persönlichen Informationen einsehen, verändern oder löschen (der
          Benutzername kann nicht verändert werden). Administratoren der Website können diese
          Informationen ebenfalls einsehen und verändern.
        </p>
        <h3 className="text-3xl font-bold mb-6 mt-8">Welche Rechte du an deinen Daten hast </h3>
        <p>
          Wenn du ein Konto auf dieser Website besitzt oder Kommentare geschrieben hast, kannst du
          einen Export deiner personenbezogenen Daten bei uns anfordern, inklusive aller Daten, die
          du uns mitgeteilt hast. Darüber hinaus kannst du die Löschung aller personenbezogenen
          Daten, die wir von dir gespeichert haben, anfordern. Dies umfasst nicht die Daten, die wir
          aufgrund administrativer, rechtlicher oder sicherheitsrelevanter Notwendigkeiten
          aufbewahren müssen.
        </p>
        <h3 className="text-3xl font-bold mb-6 mt-8">Wohin deine Daten gesendet werden </h3>
        <p>
          Besucher-Kommentare könnten von einem automatisierten Dienst zur Spam-Erkennung untersucht
          werden.
        </p>
      </div>
      <Footer />
    </main>
  );
};
export default DataProtection;
