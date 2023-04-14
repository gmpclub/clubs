import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Imprint = () => {
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
            <h1 className="text-3xl font-extrabold text-center -mt-4">Impressum</h1>
            <div className="mt-6">
              <p className="mb-2 text-md font-semibold">
                Unsere Angaben gemäß § 5 TMG § 55 Abs. 2 RStV:
              </p>
              <p className="mb-2 text-md font-semibold">
                GRASHAUS Cannabis Club e.V. wird vertreten durch den Vorstand, Name, Vorname{" "}
              </p>
              <p className="flex items-center mb-2 text-md font-semibold">
                <div className="bg-primary-focus p-2 rounded-full mr-2">
                  <GoLocation className="text-white max-w-min" size={20} />
                </div>{" "}
                c/o GRASHAUS Cannabis Club Stuttgart Breite Straße 2,
                <br /> 70173 Stuttgart
              </p>
              <p className="flex items-center text-md font-semibold">
                <div className="bg-primary-focus p-2 rounded-full mr-2">
                  <AiOutlineMail className="text-white" size={20} />
                </div>{" "}
                gmpclub@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default Imprint;
