import { useState, useEffect } from "react";

function Philosophy() {
  // Detect if the screen is md or larger
  const isMdScreen =
    typeof window !== "undefined" ? window.innerWidth >= 768 : false;

  const [isVisible, setIsVisible] = useState(isMdScreen ? false : true);
  const [isBlurred, setIsBlurred] = useState(isMdScreen ? true : false);

  useEffect(() => {
    if (!isMdScreen) {
      // For screens smaller than 'md', no need to add scroll listener
      return;
    }

    const handleScroll = () => {
      const scrollPercentage =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercentage >= 30) {
        if (!isVisible) {
          setIsVisible(true);
          setIsBlurred(true);
          // Remove blur effect after 750ms
          setTimeout(() => {
            setIsBlurred(false);
          }, 750);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isMdScreen]);

  return (
    <div className="w-full h-auto text-[#FFF8DC] font-roboto" dir="ltr">
      {/* Heading */}
      <div className="w-full flex items-start ">
        <h1 className="custom-h1 pt-[237px]">02 /// philosophy</h1>
      </div>

      {/* First Box with Custom Shape */}
      <div className="relative w-[100%] md:w-[60%] bt-1440:w-[1360px] h-[350px] bt-1440:h-[438px] mx-auto mb-[100px] bt-1440:mb-[150px] p-4 bt-1440:p-0">
        {/* Desktop Shape */}
        <img
          src="/assets/images/Philosophy/shape1.svg"
          alt="Background Shape 1"
          className="hidden sm:hidden bt-1440:block absolute top-0 left-1/2 transform -translate-x-1/2 bt-1440:w-[1360px] bt-1440:h-[438px]"
        />

        {/* Central Aligned Text with scroll-triggered visibility */}
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] bt-1440:w-[95%] h-full flex items-center justify-center z-10 font-microExtendFLF font-bold text-[14px] transition-opacity duration-750 ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${isBlurred ? "blur-[3px]" : "blur-none"}`}
        >
          <p className="text-center bt-1440:text-center text-[14px] bt-1440:text-[32px] leading-[1.5]">
            "It is the long history of humankind that those who learned to
            collaborate and improvise most effectively have prevailed."
            <br />- Charles Darwin
          </p>
        </div>

        {/* Background Pattern */}
        <div className="absolute w-[70%] bt-1440:w-[1360px] bt-1440:h-[330px] h-auto top-[45px] bt-1440:top-[54px] left-1/2 transform -translate-x-1/2 bg-transparent z-0 hidden bt-1440:block">
          <div className="flex justify-center gap-x-[20px] lg:gap-x-[36.88px]">
            {Array.from({ length: 32 }, (_, colIndex) => (
              <div
                key={`col-${colIndex}`}
                className="flex flex-col gap-y-[20px] lg:gap-y-[42.88px]"
              >
                {Array.from({ length: 8 }, (_, rowIndex) => (
                  <div
                    key={`col-${colIndex}-row-${rowIndex}`}
                    className="w-[2px] lg:w-[3.9px] h-[2px] lg:h-[3.88px] bg-[#686666]"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Box with Text and Image */}
      <div className="relative w-[90%] bt-1440:w-[1358px] bt-1440:h-[787px] h-auto mx-auto flex flex-col-reverse lg:flex-row items-center rounded-lg bt-1440:p-[64px]">
        {/* Shape 2 for desktop only */}
        <img
          src="/assets/images/Philosophy/shape2.svg"
          alt="Background Shape 2"
          className="hidden sm:hidden bt-1440:block absolute bottom-0 left-1/2 transform -translate-x-1/2 bt-1440:w-[1358px] bt-1440:h-[712px]"
        />

        {/* Text Section */}
        <div
          className="w-full lg:w-3/5 lg:text-left md:text-left text-center p-8 font-roboto relative z-10"
          style={{
            backgroundImage: "url('/assets/images/Philosophy/shadow.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
          }}
        >
          <p className="text-[14px] lg:text-[20px] pb-12">
            Public software and technologies like Linux, Bitcoin, and other
            public networks have demonstrated that open protocols and
            collaborative solutions lead to superior technologies that benefit
            everyone and address real-world problems more effectively. Jungo AI
            aims to provide a similar public solution for AI and Big Data.
          </p>
          <p className="text-[14px] lg:text-[20px]">
            Most of today&apos;s AI algorithms are designed to be centralized,
            requiring vast amounts of data and resources that only large
            entities can collect and process. Jungo AI&apos;s goal is to
            leverage Federated AI and Distributed Big Data to create a
            collaborative knowledge network, enabling public participation and
            democratizing access to AI and Big Data.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center lg:mb-0 p-8 relative z-10">
          <img
            src="/assets/images/Philosophy/img1.svg"
            alt="Philosophy Image"
            className="w-[335px] h-[304px] object-cover z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
