import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { Contact } from "./Contact";

function FooterInfo() {
  return (
    <footer className="flex flex-col lg:flex-row p-5">
      <Contact />
      <div className="lg:w-1/2 bg-cream text-wine p-5">
        <div className="py-5 text-2xl">
          <p className="text-2xl">Направете резервација</p>
          <p className="text-5xl">Посетете не</p>
        </div>

        <div className="py-5 text-xl md:text-2xl">
          <p>
            Open Daily from 10 AM – 4:30 PM with advanced reservation No minors,
            pets or picnics permitted
          </p>
        </div>
        <a
          href="/contact"
          className="py-5 border px-8 py-5 border-wine text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out"
        >
          Резервирај Дегустација
        </a>
      </div>
    </footer>
  );
}

export default FooterInfo;
