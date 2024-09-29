import { useState, useRef, useEffect } from "react";

const UseCases = () => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionsRef = useRef(null);

  const sections = [
    {
      title: "Crypto-AI Integration",
      description:
        "[ AI and Big Data Layer for Blockchains ]\n[ Next Generation of deFi ]",
      image: "/assets/images/Usecase/image1.svg",
    },
    {
      title: "Decentralized and Collaborative AI",
      description:
        "[ Decentralized Computation ]\n[ AI in healthcare and Biotech ]",
      image: "/assets/images/Usecase/image1.svg",
    },
    {
      title: "Federated Big Data",
      description:
        "[ Federated Business Intelligence ]\n[ Machine Learning as a Service ]\n[ Trustless knowledge network and Data Marketplace ]",
      image: "/assets/images/Usecase/image1.svg",
    },
  ];

  const handleScroll = () => {
    const sectionHeight = 150; // Adjust this value based on the actual height of each section
    const scrollTop = sectionsRef.current.scrollTop;
    const newActiveSection = Math.floor(scrollTop / sectionHeight);
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    const sectionContainer = sectionsRef.current;
    sectionContainer.addEventListener("scroll", handleScroll);
    return () => sectionContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex w-[1680px] h-[1040px] justify-center items-center pl-[183px] pr-[205px]">
      {/* Top-left corner: 04, Icon, USE CASES */}
      <div className="absolute top-0 left-0 flex items-center space-x-4">
        <span className="custom-h1 ">04 /// USE CASES</span>
      </div>

      {/* Left Panel with Background Rectangle */}
      <div className="relative flex w-2/3 h-[800px] overflow-hidden mt-[80px]">
        {/* Text Sections and Vertical Navigation Bar */}
        <div className="relative w-full h-full">
          {/* Vertical Navigation Bar */}
          <div className="absolute left-[30px] top-20 h-[590px] w-[8px] bg-transparent border border-[#FFFAE6] rounded-[16.5px] z-10">
            <div
              className="absolute w-[8px] h-[80px] bg-[#FFFAE6] rounded-[16.5px] transition-all"
              style={{
                top: `${
                  ((590 - 80) / (sections.length - 1)) * activeSection
                }px`, // Dynamic top position based on the number of sections
              }}
            ></div>
          </div>

          {/* Text Sections */}
          <div
            ref={sectionsRef}
            className="relative w-full h-full overflow-y-scroll pt-20 pl-20"
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="mb-12 cursor-pointer"
                style={{ scrollSnapAlign: "start" }}
                onClick={() => setActiveSection(index)}
              >
                {/* Title */}
                <h2
                  className={`text-left transition-all duration-300 font-electrolize font-bold ${
                    activeSection === index
                      ? "text-[40px] tracking-[3.2px] mb-[75px]" // 40px size with 8% letter spacing, 75px space when active
                      : "text-[24px] tracking-normal mb-[26px]" // 20px size without letter spacing, 26px space when not active
                  }`}
                  style={{
                    color:
                      activeSection === index
                        ? "#FFF8DC"
                        : "rgba(255, 248, 220, 0.4)", // 100% color if active, 40% opacity if not active
                    WebkitTextStroke:
                      activeSection === index ? "2px #FFF8DC" : "#FFF8DC", // Stroke if active
                  }}
                >
                  {section.title}
                </h2>

                {/* Description */}
                <p
                  className={`text-left transition-all duration-300 whitespace-pre-line font-roboto ${
                    activeSection === index
                      ? "text-[24px] tracking-[0.96px] leading-[36px]" // 24px with 4% letter spacing and 26px line height if active
                      : "text-[12px] tracking-normal font-light leading-[20px]" // 12px font size, no letter spacing, light font, and 13px line height if not active
                  }`}
                  style={{
                    color:
                      activeSection === index
                        ? "#FFFAE6"
                        : "rgba(255, 250, 230, 0.4)", // 100% color if active, 40% opacity if not active
                  }}
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel: Dynamic Image Display */}
      <div className="w-1/3 flex items-center justify-center">
        <img
          src={sections[activeSection].image}
          alt={sections[activeSection].title}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom-right corner: Read More and Triangle */}
      <div className="absolute bottom-40 right-[-60px] flex flex-row-reverse items-center space-x-4 space-x-reverse">
        {/* Rotated triangle */}
        <img
          src="/public/assets/images/News/chevron-right.svg"
          alt="Right Chevron"
          className="w-[28px] h-[20px] cursor-pointer"
        />

        {/* Rotated text by -45 degrees */}
        <span
          className="text-white text-[20px] uppercase font-roboto"
          // style={{ transform: "rotate(-45deg)" }}
        >
          Read&nbsp;&nbsp;&nbsp;More
        </span>
      </div>
    </div>
  );
};

export default UseCases;
