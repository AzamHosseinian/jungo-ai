function FeaturesGrid() {
  const features = [
    {
      title: "Open Source",
      image: "/public/assets/images/Features/open-source.svg",
    },
    {
      title: "Decentralized <br /> Governance",
      image: "/public/assets/images/Features/decentralized-governance.svg",
    },
    {
      title: "Community <br /> Driven",
      image: "/public/assets/images/Features/community-driven.svg",
    },
    {
      title: "Scaleable",
      image: "/public/assets/images/Features/scalable.svg",
    },
    {
      title: "Flexible <br /> Development",
      image: "/public/assets/images/Features/flexible-dev.svg",
    },
    {
      title: "Ensuring <br /> Data Privacy",
      image: "/public/assets/images/Features/ensuring-data-privacy.svg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-start justify-center">
      {/* Heading */}
      <h1 className="custom-h1">03 /// FEATURES</h1>

      {/* Features Grid */}
      <div className="w-full flex justify-center">
        <div className="grid lt-827:grid-cols-1 bt-827:grid-cols-2  bt-1280:grid-cols-3 lt-1280:gap-4 bt-1280:gap-16 p-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-[394px] h-[271px] bg-black flex items-center justify-center"
            >
              {/* Custom Box Shape */}
              <img
                src="/public/assets/images/Features/feature1.svg"
                alt="Custom Box Shape"
                className="absolute top-0 left-0 w-full h-full"
              />

              {/* Content inside the box */}
              <div className="relative flex flex-col items-center text-center text-[#FFF8DC] font-microExtendFLF">
                <div className="flex items-start justify-center w-[280px] h-[68px]">
                  {/* Star */}
                  <img
                    src="/public/assets/images/Features/star.svg"
                    alt="Star"
                    className="w-[19px] h-[19px] mr-2"
                  />
                  <div
                    className="font-bold text-[30px]"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                </div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[57px] h-[57px] mt-[72px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesGrid;
