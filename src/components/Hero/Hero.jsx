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

      {/* Main Content */}
      <div className="items-center text-center">
        {/* Logotype: Jungo AI */}
        <div className="text-6xl md:text-8xl font-bold tracking-wide">
          <img
            src="/public/assets/images/Hero/logotype.svg"
            alt="Logotype"
            className="w-auto h-146px object-contain"
          />
        </div>

        {/* Subtext: Public Federated AI & Big Data Protocol */}
        <div className="custom-border absolute mt-8 -bottom-4 left-0"></div>
        <div className="text-orange-400 text-24px pl-0 pt-8">
          Public Federated AI & Big Data protocol
        </div>
        <div className="custom-line"></div>
        {/* Icon Links */}
        <div className="flex space-x-6 mt-4">
          <img
            src="/public/assets/images/SocialMedia/Telegram.svg"
            alt="telegram"
            className="w-6 h-6"
          />
          <img
            src="/public/assets/images/SocialMedia/discord.svg"
            alt="discord"
            className="w-6 h-6"
          />
          <img
            src="/public/assets/images/SocialMedia/Medium.svg"
            alt="medium"
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
