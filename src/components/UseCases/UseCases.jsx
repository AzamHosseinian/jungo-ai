import { useState, useRef, useEffect } from "react";

const UseCases = () => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionsRef = useRef(null);

  const sections = [
    {
      title: "Crypto-AI Integration",
      description:
        "AI and Big Data Layer for Blockchains\nNext Generation of deFi",
      image: "/assets/images/Usecase/image1.svg",
    },
    {
      title: "Decentralized and Collaborative AI",
      description: "Decentralized Computation\nAI in healthcare and Biotech",
      image: "/assets/images/Usecase/image1.svg",
    },
    {
      title: "Federated Big Data",
      description:
        "Federated Business Intelligence\nMachine Learning as a Service\nTrustless knowledge network and Data Marketplace",
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
    <div
      className="relative flex w-[1680px] h-[1040px] bg-cover items-center justify-center m-auto mb-[80px] mt-[80px]"
      style={{ backgroundImage: `url(/assets/images/Usecase/base.svg)` }} // Background SVG
    >
      {/* Top-left corner: 04, Icon, USE CASES */}
      <div className="absolute top-5 left-5 flex items-center space-x-4">
        <span className="text-white text-[32px] font-bold font-microExtendFLF pl-6">
          04
        </span>
        {/* Replace with actual icon */}
        <img
          src="/assets/images/Usecase/icon1.svg"
          alt="icon"
          className="w-14 h-14 "
        />
        <span className="text-white text-[32px] uppercase tracking-wide font-microExtendFLF font-bold ">
          Use Cases
        </span>
      </div>

      {/* Left Panel with Background Rectangle */}
      <div className="relative flex w-[606px] h-[800px] bg-[#FFFAE6]/30 border border-[#FFF8DC]/40 rounded-[56px] p-6 overflow-hidden mt-[40px] ml-[40px]">
        {/* Text Sections and Vertical Navigation Bar */}
        <div className="relative w-full h-full">
          {/* Vertical Navigation Bar */}
          <div className="absolute left-[30px] top-24 h-[601px] w-[15px] bg-transparent border border-[#FFFAE6] rounded-[16.5px] z-10">
            <div
              className="absolute w-[15px] h-[90px] bg-[#FFFAE6] rounded-[16.5px] transition-all duration-300"
              style={{
                top: `${
                  ((601 - 90) / (sections.length - 1)) * activeSection
                }px`, // Dynamic top position based on the number of sections
              }}
            ></div>
          </div>

          {/* Text Sections */}
          <div
            ref={sectionsRef}
            className="relative w-full h-full overflow-y-scroll pl-[68px] pt-20"
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="mb-12 cursor-pointer"
                style={{ scrollSnapAlign: "start" }}
                onClick={() => setActiveSection(index)}
              >
                <h2
                  className={`text-left text-[24px] transition-all duration-300 font-microExtendFLF font-bold text-[#FFF8DC] ${
                    activeSection === index ? "text-[40px]" : ""
                  }`}
                >
                  {section.title}
                </h2>
                <p
                  className={`text-left text-[18px] text-[#FFFAE6] whitespace-pre-line font-ibmPlexSans leading-[38px] ${
                    activeSection === index ? "text-[24px]" : ""
                  }`}
                >
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel: Dynamic Image Display */}
      {/* Adjusted margin between the left panel and the image panel to 270px */}
      <div className="w-1/2 flex items-center justify-center p-6 ml-[270px]">
        <img
          src={sections[activeSection].image}
          alt={sections[activeSection].title}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom-right corner: Read More and Triangle */}
      <div className="absolute bottom-5 right-5 flex flex-col-reverse items-end space-y-4 space-y-reverse">
        {/* Rotated triangle */}
        <div
          className="w-0 h-0 border-l-[25px] border-l-transparent border-t-[30px] border-t-[#FFF8DC] border-r-[25px] border-r-transparent"
          style={{ transform: "rotate(-45deg)" }}
        ></div>

        {/* Rotated text by -45 degrees */}
        <span
          className="text-white text-[24px] uppercase font-ibmPlexSans"
          style={{ transform: "rotate(-45deg)" }}
        >
          Read More
        </span>
      </div>
    </div>
  );
};

export default UseCases;
