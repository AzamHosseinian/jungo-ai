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
      <div className="relative w-[310px] h-[383px] md:w-[624px] md:h-[343px] bt-1440:w-[1129px] bt-1440:h-[345px] bt-1920:w-[1360px] bt-1920:h-[438px] mx-auto mb-[100px] bt-1920:mb-[150px] p-4 bt-1920:p-0">
        {/* Desktop Shape */}
        <picture>
          <source
            media="(min-width: 1920px)"
            srcSet="/assets/images/Philosophy/shape1-1920.svg"
          />
          <source
            media="(min-width: 1440px)"
            srcSet="/assets/images/Philosophy/shape1-1440.svg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/images/Philosophy/shape1-tablet.svg"
          />
          <img
            src="/assets/images/Philosophy/shape1-mobile.svg"
            alt="Background Shape"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover"
          />
        </picture>

        {/* Central Aligned Text with scroll-triggered visibility */}
        <div
          className={`absolute top-[80px] md:top-[60px] bt-1280:top-[105px] left-1/2 transform -translate-x-1/2 h-[198px] w-[278px] md:w-[550px] md:h-[246px] xl:h-[247px] bt-1440:w-[1059px] bt-1440:h-[143px] bt-1920:w-[1320px] flex items-center justify-center z-10 font-microExtendFLF font-bold text-[14px] transition-opacity duration-750 ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${isBlurred ? "blur-[3px]" : "blur-none"}`}
        >
          <p className="text-center bt-1920:text-center text-[14px] bt-1920:text-[32px] bt-1440:text-[24px] md:text-[18px] leading-[1.5]">
            "It is the long history of humankind that those who learned to
            collaborate and improvise most effectively have prevailed."
            <br />- Charles Darwin
          </p>
        </div>

        {/* Background Pattern */}
        {/* <div className="absolute w-[70%] bt-1440:w-[1360px] bt-1440:h-[330px] h-auto top-[45px] bt-1440:top-[54px] left-1/2 transform -translate-x-1/2 bg-transparent z-0 hidden bt-1440:block">
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
        </div> */}
      </div>

      <div className="relative w-[309px] h-[981px] md:w-[624px] md:h-[1189px] bt-1440:w-[1120px] bt-1440:h-[582px] bt-1920:w-[1358px] bt-1920:h-[715px] mx-auto flex flex-col-reverse lg:flex-row items-center rounded-lg ">
        {/* Shape 2 for all devices */}
        <picture>
          <source
            media="(min-width: 1920px)"
            srcSet="/assets/images/Philosophy/shape2-1920.svg"
          />
          <source
            media="(min-width: 1440px)"
            srcSet="/assets/images/Philosophy/shape2-1440.svg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/images/Philosophy/shape2-tablet.svg"
          />
          <img
            src="/assets/images/Philosophy/shape2-mobile.svg"
            alt="Background Shape 2"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 object-cover z-0"
          />
        </picture>

        {/* Text Section */}
        <div className="relative w-full h-auto mx-auto flex flex-col-reverse lg:flex-row items-center rounded-lg">
          <div className="flex justify-center w-[309px] h-[981px] md:w-[624px] md:h-[1189px] bt-1440:w-[1120px] bt-1440:h-[582px] bt-1920:w-[1358px] bt-1920:h-[715px] md:text-left text-center font-roboto relative z-10 p-5 md:pl-[55px]  bt-1440:pl-[72px] bt-1920:pl-[72px]">
            <div className="self-center">
              <p className="text-[14px] md:text-[18px] bt-1440:text-[16px] bt-1920:text-[20px] pb-12 ">
                Public software and technologies like Linux, Bitcoin, and other
                public networks have demonstrated that open protocols and
                collaborative solutions lead to superior technologies that
                benefit everyone and address real-world problems more
                effectively. Jungo AI aims to provide a similar public solution
                for AI and Big Data.
              </p>

              {/* Image for Tablet and Mobile */}
              <div className="block bt-1440:hidden py-8 flex justify-center ">
                <img
                  src="/assets/images/Philosophy/img1.svg"
                  alt="Philosophy Image"
                  className="w-[181px] h-[164px] my-12 md:w-[336px] md:h-[304px] object-cover z-10"
                />
              </div>

              <p className="text-[14px] md:text-[18px] bt-1440:text-[16px] bt-1920:text-[20px]">
                Most of today's AI algorithms are designed to be centralized,
                requiring vast amounts of data and resources that only large
                entities can collect and process. Jungo AI's goal is to leverage
                Federated AI and Distributed Big Data to create a collaborative
                knowledge network, enabling public participation and
                democratizing access to AI and Big Data.
              </p>
            </div>
          </div>

          {/* Image Section for Larger Screens */}
          <div className="w-3/5 h-full flex justify-center relative z-10 hidden bt-1440:flex">
            <img
              src="/assets/images/Philosophy/img1.svg"
              alt="Philosophy Image"
              className="w-[270px] h-[245px] object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Philosophy;
