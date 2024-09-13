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
  ];

  return (
    <div className="w-full h-auto bg-transparent flex flex-col items-start">
      {/* Heading */}
      <h1 className="custom-h1">05 /// NEWS</h1>

      {/* News Items Grid */}
      <div className="w-full flex flex-wrap justify-center">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="relative w-[480px] h-[678px] m-4 overflow-hidden rounded-[32px]"
          >
            <img
              src={item.image}
              alt={`News Image ${index + 1}`}
              className="w-[480px] h-[272px] object-cover border-[3px] border-solid border-[#FFF8DC] !important rounded-[32px]"
            />
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
    </div>
  );
}

export default News;
