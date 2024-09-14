function Philosophy() {
  return (
    <div
      className="w-full h-auto bg-black text-[#FFF8DC] font-ibmPlexSans"
      dir="ltr"
    >
      {/* Heading */}
      <div className="w-full flex items-start lg:pl-[113px] lg:pb-[96px] pb-[40px]">
        <h1 className="custom-h1">02 /// philosophy</h1>
      </div>

      {/* First Box with Custom Shape */}
      <div className="relative box w-[90%] lg:w-[1632px] h-[350px] lg:h-[438px] mx-auto mb-[100px] lg:mb-[150px] border-[2px] lg:border-[3px] border-[#FFF8DC] p-4 lg:p-0">
        {/* Central Aligned Text at the Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] lg:w-2/3 h-full flex items-center justify-center z-10 px-4 font-microExtendFLF font-bold lg:text-[32px]">
          <p className="text-left lg:text-center text-[18px] lg:text-[24px] leading-[1.5]">
            "It is the long history of humankind that those who learned to
            collaborate and improvise most effectively have prevailed."
            <br />- Charles Darwin
          </p>
        </div>

        {/* Background Pattern */}
        <div className="absolute w-[90%] lg:w-[1454px] lg:h-[330px] h-auto top-[45px] lg:top-[54px] left-[20px] lg:left-[73px] bg-transparent z-0">
          <div className="flex gap-x-[20px] lg:gap-x-[42.88px]">
            {Array.from({ length: 32 }, (_, colIndex) => (
              <div
                key={`col-${colIndex}`}
                className="flex flex-col gap-y-[20px] lg:gap-y-[42.88px]"
              >
                {Array.from({ length: 8 }, (_, rowIndex) => (
                  <div
                    key={`col-${colIndex}-row-${rowIndex}`}
                    className="w-[2px] lg:w-[3.9px] h-[2px] lg:h-[3.88px] bg-[#474747]"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Box with Text and Image */}
      <div className="relative w-[90%] lg:w-[1632px] lg:h-[787px] h-auto mx-auto flex flex-col-reverse lg:flex-row items-center rounded-lg border-[2px] border-[#FFF8DC] lg:p-[64px] ">
        {/* Text Section */}
        <div className="w-full lg:w-3/5 lg:text-left md:text-left text-center p-8">
          <p className="text-[16px] lg:text-[24px] mb-4">
            Public software and technologies like Linux, Bitcoin, and other
            public networks have demonstrated that open protocols and
            collaborative solutions lead to superior technologies that benefit
            everyone and address real-world problems more effectively. Jungo AI
            aims to provide a similar public solution for AI and Big Data.
          </p>
          <p className="text-[16px] lg:text-[24px] mb-4">
            Most of today&apos;s AI algorithms are designed to be centralized,
            requiring vast amounts of data and resources that only large
            entities can collect and process. Jungo AI&apos;s goal is to
            leverage Federated AI and Distributed Big Data to create a
            collaborative knowledge network, enabling public participation and
            democratizing access to AI and Big Data.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-2/5 flex justify-center lg:mb-0 p-8">
          <img
            src="/public/assets/images/Philosophy/img1.svg"
            alt="Philosophy Image"
            className="w-[335px] h-[304px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
