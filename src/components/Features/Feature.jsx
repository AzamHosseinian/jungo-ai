function FeaturesGrid() {
  const features = [
    {
      title: "Open Source",
      image: "/assets/images/Features/open-source.svg",
    },
    {
      title: "Decentralized <br /> Governance",
      image: "/assets/images/Features/Decentralized-governance.svg",
    },
    {
      title: "Community <br /> Driven",
      image: "/assets/images/Features/Community-driven.svg",
    },
    {
      title: "Scaleable",
      image: "/assets/images/Features/scalable.svg",
    },
    {
      title: "Flexible <br /> Development",
      image: "/assets/images/Features/flexible-dev.svg",
    },
    {
      title: "Ensuring <br /> Data Privacy",
      image: "/assets/images/Features/Ensuring-data-privacy.svg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-start justify-center">
      {/* Heading */}
      <h1 className="custom-h1">03 /// FEATURES</h1>

      {/* Features Grid */}
      <div className="w-full flex justify-center">
        <div className="grid lt-827:grid-cols-1 bt-827:grid-cols-2 bt-1280:grid-cols-3 lt-1280:gap-4 bt-1280:gap-16 p-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative w-[318px] h-[230px] bg-black flex items-center justify-center"
            >
              {/* Custom Box Shape */}
              <img
                src="/public/assets/images/Features/feature1.svg"
                alt="Custom Box Shape"
                className="absolute top-0 left-0 w-full h-full"
              />

              {/* Content inside the box */}
              <div className="relative flex flex-col items-center text-center text-[#FFF8DC] font-microExtendFLF mt-8">
                <div className="flex items-start justify-center w-[280px]">
                  {/* Star */}
                  <img
                    src="/public/assets/images/Features/star.svg"
                    alt="Star"
                    className="w-[19px] h-[19px] mr-2"
                  />
                  <div
                    className="font-bold text-[22px]"
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                </div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[57px] h-[57px] mt-[32px]"
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
