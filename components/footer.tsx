import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-1 flex-col-reverse lg:flex-row justify-between items-center w-full bg-white border-t-primary border-t-2">
      <div className="mx-16 flex items-center">
        <Link href="/">
          <Image src="/grashaus_green_logo.png" alt="GrasHaus Logo" width={200} height={200} />
        </Link>
        <span className="text-primary-focus text-sm">
          &copy; GRASHAUS Club e.V. {new Date().getFullYear()}
        </span>
      </div>
      <div className="mx-16 flex items-center gap-4 mt-8 lg:mt-0 ">
        <Link href="/imprint" className="text-primary text-sm">
          Impressum
        </Link>
        <Link href="/data-protection" className="text-primary text-sm">
          Datenschutzhinweise DSGVO
        </Link>
        <a
          href="https://instagram.com/highend_smoking_thailand?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <div className="bg-primary-focus rounded-full p-2">
            <AiOutlineInstagram className="text-white" size={30} />
          </div>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
