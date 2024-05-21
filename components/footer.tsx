import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between flex-1 w-full bg-white border-t-2 lg:flex-row border-t-primary">
      <div className="flex items-center mx-16">
        <Link href="/">
          <Image src="/grashaus_green_logo.png" alt="GrasHaus Logo" width={200} height={200} />
        </Link>
        <span className="text-sm text-primary-focus">
          &copy; GRASHAUS Club e.V. {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex items-center gap-4 mx-16 mt-8 lg:mt-0 ">
        <Link href="/imprint" className="text-sm text-primary">
          Impressum
        </Link>
        <Link href="/data-protection" className="text-sm text-primary">
          Datenschutzhinweise DSGVO
        </Link>
        <a
          href="https://www.instagram.com/grashausworldwide.official?igsh=MTNmMjJ5cnNyMHdmbA=="
          target="_blank"
        >
          <div className="p-2 rounded-full bg-primary-focus">
            <AiOutlineInstagram className="text-white" size={30} />
          </div>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
