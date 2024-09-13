const Footer = () => {
  return (
    <footer className="bg-[#FFF8DC] w-full">
      <div className="w-full mx-auto max-w-screen-2xl p-4 flex flex-col items-center justify-center">
        {/* Logotype */}
        <img
          src="/public/assets/images/Footer/logotype.svg"
          alt="JungoAI Logo"
          className="h-[190px] mb-[95px]"
        />

        {/* Footer Links */}
        <ul className="flex space-x-[121px] sm:flex-row">
          <li>
            <a
              href="#contact"
              className="font-bold text-[24px] font-[MicroExtendFLF] text-black hover:text-black"
            >
              CONTACT
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-bold text-[24px] font-[MicroExtendFLF] text-black hover:text-black"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#social-medias"
              className="font-bold text-[24px] font-[MicroExtendFLF] text-black hover:text-black"
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
