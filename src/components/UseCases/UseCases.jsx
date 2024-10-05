import { useState, useRef, useEffect } from "react";

const UseCases = () => {
  const [activeSection, setActiveSection] = useState(1);
  const sectionsRef = useRef(null);

  const sections = [
    {
      id: "crypto-ai",
      title: "Crypto-AI Integration",
      description:
        "[ AI and Big Data Layer for Blockchains ]\n[ Next Generation of deFi ]",
      image: "/assets/images/Usecase/image1.svg",
      desc2:
        "Blockchains store raw transactional data. Jungo AI subnets can...",
    },
    {
      id: "decentralized-ai",
      title: "Decentralized and Collaborative AI",
      description:
        "[ Decentralized Computation ]\n[ AI in healthcare and Biotech ]",
      image: "/assets/images/Usecase/image1.svg",
      desc2:
        "Blockchains store raw transactional data. Jungo AI subnets can...",
    },
    {
      id: "federated-big-data",
      title: "Federated Big Data",
      description:
        "[ Federated Business Intelligence ]\n[ Machine Learning as a Service ]\n[ Trustless knowledge network and Data Marketplace ]",
      image: "/assets/images/Usecase/image1.svg",
      desc2:
        "Blockchains store raw transactional data. Jungo AI subnets can...",
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
    <div className="relative flex flex-col bt-1280:flex-row w-full h-full bt-1280:h-[1040px] justify-center items-center bt-1280:pl-[183px] lg:pr-[205px] my-[80px]">
      {/* Top-left corner: 04, Icon, USE CASES */}
      <div className="absolute top-0 left-0 flex items-center space-x-4">
        <span className="custom-h1 ">04 /// USE CASES</span>
      </div>

      {/* Left Panel with Background Rectangle */}
      <div className="relative flex flex-col w-full lg:w-2/3 bt-1280:h-[800px] overflow-hidden mt-[80px] p-8">
        {/* Text Sections and Vertical Navigation Bar */}
        <div className="relative w-full h-full">
          {/* Vertical Navigation Bar */}
          <div className="absolute left-0 top-0 w-[6px] h-[569px] lg:h-[569px] lg:w-[8px] bg-transparent border border-[#FFFAE6] rounded-[16.5px] z-10">
            <div
              className="absolute w-[5px] h-[80px] lg:w-[8px] lg:h-[80px] bg-[#FFFAE6] rounded-[16.5px] transition-all"
              style={{
                top: `${
                  ((569 - 220) / (sections.length - 1)) * activeSection
                }px`, // Dynamic top position based on the number of sections
              }}
            ></div>
          </div>

          {/* Text Sections */}
          <div
            ref={sectionsRef}
            className="relative w-full h-full overflow-y-scroll md:pl-8 pl-4"
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
                  className={`text-left transition-all duration-300 font-electrolize font-bold 
                  ${
                    activeSection === index
                      ? "bt-1920:text-[40px] lg:text-[32px] sm:text-[24px] lg:tracking-[3.2px] sm:tracking-[2.4px] lg:mb-[60px] bt-1440:w-2/3"
                      : "bt-1920:text-[24px] lg:text-[20px] sm:text-[14px] lg:tracking-normal lg:mb-[33px]"
                  }
                  ${
                    activeSection === index
                      ? "text-[24px] mb-[26px]"
                      : "text-[24px] mb-[26px] opacity-40"
                  }`}
                  style={{
                    color:
                      activeSection === index
                        ? "#FFF8DC"
                        : "rgba(255, 248, 220, 0.6)",
                    WebkitTextStroke:
                      activeSection === index
                        ? window.innerWidth >= 1024
                          ? "2px #FFF8DC"
                          : "1px #FFF8DC" // 2px on large screens, 1px otherwise
                        : "0px transparent",
                  }}
                >
                  {section.title}
                </h2>

                {/* Description */}
                <p
                  className={`transition-opacity duration-300 ${
                    activeSection === index
                      ? "lg:text-[24px] opacity-100"
                      : "text-[14px] opacity-40"
                  }`}
                  style={{
                    color:
                      activeSection === index
                        ? "#FFF8DC"
                        : "rgba(255, 248, 220, 0.4)",
                  }}
                >
                  {section.description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel: Dynamic Image Display */}
      <div className="flex flex-col w-full md:w-[40%] lg:w-1/3 items-end justify-center lg:mt-0 mt-8">
        <img
          src={sections[activeSection].image}
          alt={sections[activeSection].title}
          className="w-full h-auto object-contain"
        />

        {/* Description Box for Image (desc2) */}
        <div className="mt-4 w-[375px] h-[77px] text-[#FFF8DC] text-center lg:text-left font-light text-[16px] leading-[20px] p-4 ">
          {sections[activeSection].desc2}
        </div>

        {/* Read More Section */}
        <div className="flex flex-row items-center mt-8 space-x-2 text-white uppercase font-roboto text-[16px] cursor-pointer px-8">
          <span>Read More</span>
          <img
            src="/assets/images/News/chevron-right.svg"
            alt="Right Chevron"
            className="w-[18px] h-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
