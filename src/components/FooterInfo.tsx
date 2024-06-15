import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
function FooterInfo() {
  return (
    // <div className="grid grid-cols-4 gap-4  items-center bg-cream text-wine p-10">
    //   <ul>
    //     <Image src="/logo_dark.jpg" width={150} height={150} alt="img" />
    //   </ul>
    //   <ul>
    //     <p className="text-2xl font-bold">За Нас</p>
    //     <li>Историја</li>
    //     <li>Мисија</li>
    //     <li>Награди</li>
    //     <li>Галерија</li>
    //   </ul>
    //   <ul>
    //     <p className="text-2xl font-bold">Производи</p>
    //     <li>Вина</li>
    //     <li>Ракии</li>
    //     <li>Дегустација</li>
    //     <li>Дегустација</li>
    //   </ul>
    //   <ul>
    //     <p className="text-2xl font-bold">Контакт</p>

    //     <li className="my-1">
    //       <a
    //         href="https://www.facebook.com/profile.php?id=100064194423358"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="flex items-center"
    //       >
    //         <FaFacebook />
    //         <span className="ml-2">Maksimilijan Wine Room</span>
    //       </a>
    //     </li>
    //     <li className="my-1">
    //       <a
    //         href="https://www.instagram.com/maksimilijan.family.winery/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className="flex items-center"
    //       >
    //         <FaInstagram />
    //         <span className="ml-2">Maksimilijan Wine Room</span>
    //       </a>
    //     </li>
    //     <li className="my-1 flex items-center">
    //       <IoMail />
    //       <p>ivizlc@yahoo.com</p>
    //     </li>
    //     <li className="flex items-center">
    //       <IoCall />
    //       <p>+389 71 261 335</p>
    //     </li>
    //   </ul>
    // </div>
    <footer className="flex p-5 ">
      <div className="w-1/2 bg-wine text-cream p-10 m-2">
        <p className="text-5xl">Контакт</p>
        <div className="py-5 text-2xl">
          <p>Maksimilihan Famili Winery</p>
          <p>с. Пепелиште</p>
          <p>Неготино 1440</p>
        </div>

        <div className="py-5 text-2xl">
          <span className="my-1 flex items-center">
            <IoMail />
            <p>ivizlc@yahoo.com</p>
          </span>
          <span className="my-1 flex items-center">
            <IoCall />
            <p>+389 71 261 335</p>
          </span>
        </div>

        <div className="py-5  flex">
          <span className="text-5xl">
            <a
              href="https://www.facebook.com/profile.php?id=100064194423358"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaFacebook />
            </a>
          </span>
          <span className="mx-2 text-5xl">
            <a
              href="https:www.instagram.com/maksimilijan.family.winery/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
      <div className="w-1/2 bg-cream text-wine p-10 m-2">
        <div className="py-5 text-2xl">
          <p className="text-2xl">Направете резервација</p>
          <p className="text-5xl">Посетете не</p>
        </div>

        <div className="py-5 text-2xl">
          <p>
            Open Daily from 10 AM – 4:30 PM with advanced reservation No minors,
            pets or picnics permitted
          </p>
        </div>
        <a
          href="/contact"
          className="py-5 border px-8 py-5 border-wine text-xl hover:bg-wine hover:text-white transition duration-300 ease-in-out"
        >
          Резервирај
        </a>
      </div>
    </footer>
  );
}

export default FooterInfo;
