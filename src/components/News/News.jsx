import { useState, useEffect } from "react";

function News() {
  const newsItems = [
    {
      image: "/public/assets/images/News/news1.svg",
      date: "AUG 18",
      title: "Lorem ipsum dolor sit amet, consectetur adipisci elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      image: "/public/assets/images/News/news2.svg",
      date: "SEP 10",
      title: "Consectetur adipisci elit, lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      image: "/public/assets/images/News/news3.svg",
      date: "OCT 05",
      title: "Lorem ipsum dolor sit amet, elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
    {
      image: "/public/assets/images/News/news3.svg",
      date: "OCT 10",
      title: "Lorem ipsum dolor sit amet, elit",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit Lorem ipsum dolor sit amet, consectetur adipisci elit.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1920) {
      setItemsPerPage(3);
    } else if (width >= 1440) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(1);
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalItems = newsItems.length;

  useEffect(() => {
    if (currentIndex > totalItems - itemsPerPage) {
      setCurrentIndex(Math.max(totalItems - itemsPerPage, 0));
    }
  }, [itemsPerPage, currentIndex, totalItems]);

  const handleNextSlide = () => {
    if (currentIndex < totalItems - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleItems = newsItems.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const containerWidthClass =
    itemsPerPage === 3
      ? "w-full max-w-[1700px] mx-auto"
      : itemsPerPage === 2
      ? "w-full max-w-[1108px] mx-auto"
      : "w-full max-w-[556px] mx-auto";

  const cardSpacingClass = itemsPerPage >= 2 ? "space-x-[40px]" : "";
  useEffect(() => {
    if (currentIndex > totalItems - itemsPerPage) {
      setCurrentIndex(Math.max(totalItems - itemsPerPage, 0));
    }
  }, [itemsPerPage, currentIndex, totalItems]);

  const chevronLeftPosition =
    itemsPerPage === 1 ? "left-[-5px]" : "left-[90px]";
  const chevronRightPosition =
    itemsPerPage === 1 ? "right-[-5px]" : "right-[90px]";

  const cardWidth = itemsPerPage === 1 ? "w-[320px]" : "w-[426px]";
  const cardHeight = itemsPerPage === 1 ? "h-auto" : "h-[678px]";
  const imageHeight = itemsPerPage === 1 ? "h-[176px]" : "h-[240px]";

  return (
    <div className="w-full h-auto bg-transparent flex flex-col items-start pt-8">
      {/* Heading */}
      <h1 className="custom-h1">05 /// NEWS</h1>

      {/* News Items Slider */}
      <div
        className={`relative ${containerWidthClass} flex justify-center items-center`}
      >
        {/* Left Chevron */}
        <div
          className={`absolute ${chevronLeftPosition} top-[20%] transform -translate-y-1/2 z-10 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrevSlide}
          style={{ pointerEvents: currentIndex === 0 ? "none" : "auto" }}
        >
          <img
            src="/public/assets/images/News/chevron-left.svg"
            alt="Left Chevron"
            className="w-[28px] h-[20px] cursor-pointer"
          />
        </div>

        {/* Visible News Items */}
        <div className={`flex justify-center ${cardSpacingClass}`}>
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className={`relative ${cardWidth} max-w-full ${cardHeight} overflow-hidden rounded-[32px] bg-black pb-8`}
            >
              {/* News Image */}
              <img
                src={item.image}
                alt={`News Image ${index + 1}`}
                className={`w-full ${imageHeight} object-center rounded-[28px]  `}
              />

              {/* News Text */}
              <div className="p-4 text-[#FFF8DC] text-left">
                <p className="text-[20px] mb-[32px] font-normal font-ibmPlexSans">
                  {item.date}
                </p>
                <h1 className="text-[24px] mb-[32px] h-[66px] font-bold">
                  {item.title}
                </h1>
                <h4 className="text-[18px] font-normal font-ibmPlexSans">
                  {item.description}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Right Chevron */}
        <div
          className={`absolute ${chevronRightPosition} top-[20%] transform -translate-y-1/2 z-10 ${
            currentIndex >= totalItems - itemsPerPage
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNextSlide}
          style={{
            pointerEvents:
              currentIndex >= totalItems - itemsPerPage ? "none" : "auto",
          }}
        >
          <img
            src="/public/assets/images/News/chevron-right.svg"
            alt="Right Chevron"
            className="w-[28px] h-[20px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default News;
