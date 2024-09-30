import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container h-screen flex flex-col justify-center items-center relative pb-8">
      {/* Star on the bottom left side */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-8">
        {/* Star on the bottom left side */}
        <div className="flex-shrink-0 hidden md:block">
          <img
            src="/assets/images/Hero/star.svg"
            alt="Star"
            className="object-contain md:mb-8"
            style={{
              filter: "drop-shadow(0px 0px 90px #FF7538)",
            }}
          />
        </div>

        {/* Get In Touch Button on the bottom right side */}
        <div className="flex-shrink-0 md:flex md:justify-end w-full md:w-auto">
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
      <nav className="absolute top-10 w-full flex justify-between items-center px-8">
        {/* Logo */}
        <div>
          <img
            src="/assets/images/logo.svg"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        {/* Hamburger Menu for smaller screens */}
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#FFF8DC] bg-[#404040] rounded-lg bt-827:hidden hover:border-none"
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
        {/* Menu items */}
        <div
          className={`absolute right-0 top-full mt-2 w-2/3 bt-827:static bt-827:w-auto ${
            isOpen ? "block" : "hidden"
          } bt-827:flex bt-827:items-center bt-827:space-x-6 bg-transparent lt-827:rounded-lg lt-827:mr-8`}
          id="navbar-default"
        >
          <ul className="flex flex-col bt-827:flex-row bt-827:space-x-6 p-4 md:p-0 sm:bg-gray-50 lt-827:bg-gray-50 lt-827:text-[#404040] md:bg-transparent lg:bg-transparent w-full md:w-auto font-microExtendFLF  lt-827:rounded-lg">
            <li>
              <a
                href="#about-section"
                className=" bt-827:text-[#FFF8DC] text-[20px] lt-827:text-[#404040] sm:text-[#404040] lt-827:hover:text-[#404040] font-bold block py-2 px-3"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#tech"
                className="bt-827:text-[#FFF8DC] text-[20px] lt-827:text-[#404040] sm:text-[#404040] lt-827:hover:text-[#404040] font-bold block py-2 px-3"
              >
                Tech
              </a>
            </li>
            <li>
              <a
                href="#build"
                className="bt-827:text-[#FFF8DC] text-[20px] lt-827:text-[#404040] sm:text-[#404040] lt-827:hover:text-[#404040] font-bold block py-2 px-3"
              >
                Build
              </a>
            </li>
            {/* <li>
              <a
                href="#socials"
                className="bt-827:text-[#FFF8DC] text-[20px] lt-827:text-[#404040] sm:text-[#404040] lt-827:hover:text-[#404040] font-bold block py-2 px-3"
              >
                Socials
              </a>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="text-center mt-16 md:mt-24">
        {/* Logotype: Jungo AI */}
        <img
          src="/assets/images/Hero/logotype.svg"
          alt="Logotype"
          className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wide w-auto h-auto object-contain"
        />

        {/* Content Below the Logo */}
        <div className="relative mt-8 md:mt-12">
          {/* Row 1: Left border and text */}
          <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-left w-full">
            <img
              src="/assets/images/Hero/border-left.svg"
              alt="Left Border"
              className="h-9 md:h-12 w-64 md:w-96 object-contain hidden md:block"
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
          <div className="flex items-center justify-center md:justify-end mt-4 md:mt-6 space-x-6 md:space-y-0 md:space-x-6 w-full">
            <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-8">
              <img
                src="/assets/images/SocialMedia/Telegram.svg"
                alt="Telegram"
                className="w-6 h-6"
              />
              <img
                src="/assets/images/SocialMedia/discord.svg"
                alt="Discord"
                className="w-6 h-6"
              />
              <img
                src="/assets/images/SocialMedia/Medium.svg"
                alt="Medium"
                className="w-6 h-6"
              />
            </div>
            <img
              src="/assets/images/Hero/border-right.svg"
              alt="Right Border"
              className="h-6 md:h-8 w-40 object-contain hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
