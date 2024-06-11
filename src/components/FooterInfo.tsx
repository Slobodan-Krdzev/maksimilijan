import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
function FooterInfo() {
  return (
    <div className="grid grid-cols-4 gap-4  items-center bg-cream text-wine p-10">
      <ul>
        <Image src="/logo_dark.jpg" width={150} height={150} alt="img" />
      </ul>
      <ul>
        <p className="text-2xl font-bold">За Нас</p>
        <li>Историја</li>
        <li>Мисија</li>
        <li>Награди</li>
        <li>Галерија</li>
      </ul>
      <ul>
        <p className="text-2xl font-bold">Производи</p>
        <li>Вина</li>
        <li>Ракии</li>
        <li>Дегустација</li>
        <li>Дегустација</li>
      </ul>
      <ul>
        <p className="text-2xl font-bold">Контакт</p>

        <li className="my-1">
          <a
            href="https://www.facebook.com/profile.php?id=100064194423358"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaFacebook />
            <span className="ml-2">Maksimilijan Wine Room</span>
          </a>
        </li>
        <li className="my-1">
          <a
            href="https://www.instagram.com/maksimilijan.family.winery/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaInstagram />
            <span className="ml-2">Maksimilijan Wine Room</span>
          </a>
        </li>
        <li className="my-1 flex items-center">
          <IoMail />
          <p>ivizlc@yahoo.com</p>
        </li>
        <li className="flex items-center">
          <IoCall />
          <p>+389 71 261 335</p>
        </li>
      </ul>
    </div>
  );
}

export default FooterInfo;
