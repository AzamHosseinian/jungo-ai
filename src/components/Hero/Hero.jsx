const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* Star on the bottom left side */}
      <div style={{ left: "10px" }} className="absolute bottom-0">
        <img
          src="/public/assets/images/Hero/star.svg"
          alt="Star"
          className="w-72px h-185px object-contain"
        />
      </div>

      {/* Logo on the left and Navigation Links on the right */}
      <div
        style={{ left: "104px" }}
        className="absolute top-20 flex items-center "
      >
        {/* Logo */}
        <div>
          <img
            src="/public/assets/images/logo.svg"
            alt="Logo"
            className="w-48px h-53px object-contain"
          />
        </div>
      </div>

      <div
        style={{
          right: "120px",
          fontFamily: "MicroExtendFLF",
          fontWeight: "bold",
        }}
        className="absolute top-20 flex space-x-6 text-lg"
      >
        {/* Navigation Links */}
        <a href="#about" className="hover:underline text-[#FFF8DC]">
          About
        </a>
        <a href="#tech" className="hover:underline text-[#FFF8DC]">
          Tech
        </a>
        <a href="#build" className="hover:underline text-[#FFF8DC]">
          Build
        </a>
        <a href="#socials" className="hover:underline text-[#FFF8DC]">
          Socials
        </a>
      </div>

      {/* Subtext: Public Federated AI & Big Data Protocol */}

      {/* <div className="custom-border absolute mt-8 -bottom-2"></div> */}

      {/* <div className="text-[#FF7538] text-[24px] pl-96 mt-8 font-microExtendFLF font-bold">
          Public Federated AI & Big Data Protocol
        </div>
        <div className="custom-border-right -bottom-4"></div> */}
      {/* Main Content */}
      <div className="items-center text-center">
        {/* Logotype: Jungo AI */}
        <div className="text-6xl md:text-8xl font-bold tracking-wide">
          <img
            src="/public/assets/images/Hero/logotype.svg"
            alt="Logotype"
            // style={{ width: "1162px", height: "146px" }}
            className="w-auto h-auto object-contain"
          />
        </div>

        {/* Content Below the Logo */}
        <div className="relative mt-8">
          {/* Row 1: Left border and text */}
          <div className="flex items-center justify-left">
            {/* Left border image */}
            <img
              src="/public/assets/images/Hero/border-left.svg"
              alt="Left Border"
              style={{ height: "36px", width: "492px" }}
            />

            {/* Text */}
            <div className="text-[#FF7538] text-[26px] pt-8 font-microExtendFLF font-bold">
              Public Federated AI & Big Data Protocol
            </div>
          </div>

          {/* Row 2: Social media icons and right border */}
          <div className="flex items-center justify-end mt-4 space-x-6">
            {/* Social Media Icons */}
            <div className="flex space-x-6 mt-4">
              <img
                src="/public/assets/images/SocialMedia/Telegram.svg"
                alt="Telegram"
                className="w-6 h-6"
              />
              <img
                src="/public/assets/images/SocialMedia/discord.svg"
                alt="Discord"
                className="w-6 h-6"
              />
              <img
                src="/public/assets/images/SocialMedia/Medium.svg"
                alt="Medium"
                className="w-6 h-6"
              />
            </div>

            {/* Right border image */}
            <img
              src="/public/assets/images/Hero/border-right.svg"
              alt="Right Border"
              style={{ height: "24px", width: "197px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
