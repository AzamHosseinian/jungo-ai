import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Set the flag to true after the component is mounted
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="container h-screen flex flex-col justify-center items-center relative pb-8">
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center">
        <div className="flex-shrink-0 hidden md:block relative xl:px-16">
          {isMounted && (
            <img
              src="/assets/images/Hero/star.svg"
              alt="Star Background"
              className="absolute top-0 left-0 w-full h-full object-contain"
              style={{
                filter: "blur(30px)",
                transform: "scale(1.5)",
                zIndex: -1,
              }}
            />
          )}
          <img
            src="/assets/images/Hero/star.svg"
            alt="Star"
            className="object-contain md:mb-8"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        {/* Get In Touch Button on the bottom right side */}
        <div className="flex-shrink-0 md:flex md:justify-end w-full md:w-auto xl:px-16">
          <button className="flex items-center space-x-2 px-4 py-2 border-[1.5px] bg-transparent border-[#FFFFFF] rounded-[8px] text-[#FFF8DC] text-[18px] font-roboto mx-auto md:mx-0">
            <span>Get In Touch</span>
            <img
              src="/assets/images/Hero/btnImage.svg"
              alt="Button Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Navigation and Logo */}
      <nav
        className={`absolute w-full flex justify-between items-center transition-all ease-in-out duration-750 xl:px-16 ${
          isMounted ? "top-20" : "top-0"
        }`}
      >
        {/* Logo */}
        <div className="lt-827:ml-[20px]">
          <img
            src="/assets/images/logo.svg"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        <button
          ref={buttonRef}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#FFF8DC] bg-[rgba(255,248,220,0.5)] border-[#FFF8DC] rounded-lg bt-827:hidden hover:border-none lt-827:mr-[20px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu (Visible on Mobile Devices Only) */}
        <div
          ref={menuRef}
          className={`absolute right-0 top-full mt-2 ${
            isOpen ? "block" : "hidden"
          } bt-827:hidden bg-transparent lt-827:rounded-lg lt-827:mr-8`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-8 lt-827:bg-[rgba(92,90,82,.7)] lt-827:text-[#FFF8DC] lt-827:border-[#FFF8DC] font-microExtendFLF lt-827:rounded-lg border-[#FFF8DC] border-[0.25px] shadow-[inset_0px_2px_8px_5px_rgba(255,248,220,0.26)] backdrop-blur-[8.9px] z-50 lt-827:w-[220px] h-[217px] items-center">
            <li>
              <a
                href="#about-section"
                className="text-[20px] font-bold block py-2 px-3 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="text-[20px] font-bold block py-2 px-3 "
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#build"
                className="text-[20px] font-bold block py-2 px-3 "
              >
                Build
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation Links (Visible on Larger Screens Only) */}
        <div className="hidden bt-827:flex bt-827:items-center bt-827:space-x-6 font-microExtendFLF ">
          <a
            href="#about-section"
            className="text-[#FFF8DC] text-[16px] bt-1920:text-[20px] font-bold py-2 px-3 "
          >
            About
          </a>
          <a
            href="#tech"
            className="text-[#FFF8DC] text-[16px] bt-1920:text-[20px] font-bold py-2 px-3 "
          >
            Tech
          </a>
          <a
            href="#build"
            className="text-[#FFF8DC] text-[16px] bt-1920:text-[20px] font-bold py-2 px-3 "
          >
            Build
          </a>
        </div>
      </nav>
      {/* Main Content */}
      <div className="text-center mt-16 md:mt-24">
        {/* Logotype: Jungo AI */}
        <div
          className={`text-center transition-all ease-in-out duration-833 ${
            isMounted ? "mt-[40px] md:mt-[57px]" : "-mt-5 md:-mt-32"
          }`}
        >
          <picture>
            {/* Mobile specific image */}
            <source
              media="(max-width: 767px)"
              srcSet="/assets/images/Hero/logotypeMobile.svg"
            />
            {/* Default image based on isMounted state */}
            <img
              src={
                isMounted
                  ? "/assets/images/Hero/logotype.svg"
                  : "/assets/images/Hero/logo_type.svg"
              }
              alt="Logotype"
              className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide w-[1032px] h-[130px] bt-1920:w-auto bt-1920:h-auto object-contain"
            />
          </picture>
        </div>

        {/* Content Below the Logo */}
        <div className="relative mt-8 md:mt-12">
          {/* Row 1: Left border and text */}
          <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-left w-full">
            <img
              src="/assets/images/Hero/border-left.svg"
              alt="Left Border"
              className={`${
                isMounted ? "w-64 md:w-96" : "w-32 md:w-48"
              } h-9 md:h-12 object-contain hidden md:block transition-all duration-350`}
            />

            <div className="text-[#FF7538] lg:text-[24px] md:text-[18px] sm:text-[16px] pt-4 md:pt-6 font-microExtendFLF font-bold w-full sm:text-center">
              {/* Mobile Version: Break into separate lines */}
              <div className="block md:hidden">
                <p>Public Federated AI</p>
                <p>&</p>
                <p>Big Data Protocol</p>
              </div>

              {/* Larger screens: Single line */}
              <div className="hidden md:block">
                Public Federated AI & Big Data Protocol
              </div>
            </div>
          </div>

          {/* Row 2: Social media icons and right border */}
          <div
            id="social-medias"
            className="flex items-center justify-center md:justify-end mt-4 md:mt-6 mx-auto"
          >
            <div
              className={`flex transition-all ease-in-out duration-700 ${
                isMounted ? "space-x-[40px]" : "space-x-[16px]"
              } mt-4 md:mt-8`}
            >
              <img
                src={
                  isMounted
                    ? "/assets/images/SocialMedia/Telegram.svg"
                    : "/assets/images/SocialMedia/Telegram-hover.svg"
                }
                alt="Telegram"
                className={`transition-all ease-in-out duration-700 ${
                  isMounted ? "w-6 h-6" : "w-[11px] h-[10px]"
                }`}
              />
              <img
                src={
                  isMounted
                    ? "/assets/images/SocialMedia/discord.svg"
                    : "/assets/images/SocialMedia/discord-hover.svg"
                }
                alt="Discord"
                className={`transition-all ease-in-out duration-700 ${
                  isMounted ? "w-6 h-6" : "w-[11px] h-[10px]"
                }`}
              />
              <img
                src={
                  isMounted
                    ? "/assets/images/SocialMedia/Medium.svg"
                    : "/assets/images/SocialMedia/Medium-hover.svg"
                }
                alt="Medium"
                className={`transition-all ease-in-out duration-700 ${
                  isMounted ? "w-6 h-6" : "w-[11px] h-[10px]"
                }`}
              />
            </div>
            <img
              src="/assets/images/Hero/border-right.svg"
              alt="Right Border"
              className={`${
                isMounted ? "h-4 md:h-6" : "h-2 md:h-4"
              } w-40 object-contain hidden md:block ml-20 transition-all duration-500`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
