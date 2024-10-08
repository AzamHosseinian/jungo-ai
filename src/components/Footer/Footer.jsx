const Footer = () => {
  return (
    <footer className="bg-[#FFF8DC] w-full">
      <div className="w-full mx-auto max-w-screen-2xl p-6 flex flex-col items-center justify-center">
        {/* Logotype */}
        <img
          src="/assets/images/Footer/logotype.svg"
          alt="JungoAI Logo"
          className="h-[190px] mb-[95px] lt-827:h-[100px] lt-827:mb-[50px] bt-1440:w-[1120px] bt-1440:h-[140px]"
        />

        {/* Footer Links */}
        <ul className="flex bt-827:flex-row lt-827:flex-col items-left justify-center bt-827:space-x-[103px] lt-827:space-y-4 w-full bt-827:w-auto">
          <li>
            <a
              href="#contact"
              className="font-bold bt-1920:text-[24px] text-[20px] font-[MicroExtendFLF] text-black hover:text-black lt-827:text-[18px]"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="#about-section"
              className="font-bold bt-1920:text-[24px] text-[20px] font-[MicroExtendFLF] text-black hover:text-black lt-827:text-[18px]"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#social-medias"
              className="font-bold bt-1920:text-[24px] text-[20px] font-[MicroExtendFLF] text-black hover:text-black lt-827:text-[18px]"
            >
              SOCIAL MEDIAS
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
