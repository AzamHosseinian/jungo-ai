function Philosophy() {
  return (
    <div
      className="w-full h-auto bg-black text-[#FFF8DC] font-ibmPlexSans"
      dir="ltr"
    >
      {/* Heading */}
      <div className="w-full flex items-start pl-[113px] pb-[96px]">
        <h1 className="custom-h1">02 /// philosophy</h1>
      </div>

      {/* First Box with Custom Shape */}
      <div className="relative box mx-auto mb-[150px] border-[3px] border-[#FFF8DC]">
        {/* Central Aligned Text at the Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/3 h-full flex items-center justify-center z-10 px-4 font-microExtendFLF font-bold text-[32px]">
          <p className="text-center text-[24px] leading-[1.5]">
            "It is the long history of humankind that those who learned to
            collaborate and improvise most effectively have prevailed."
            <br />- Charles Darwin
          </p>
        </div>

        {/* Background Pattern */}
        <div className="absolute w-[1454px] h-[330px] top-[54px] left-[73px] bg-transparent z-0">
          <div className="flex gap-x-[42.88px]">
            {Array.from({ length: 32 }, (_, colIndex) => (
              <div
                key={`col-${colIndex}`}
                className="flex flex-col gap-y-[42.88px]"
              >
                {Array.from({ length: 8 }, (_, rowIndex) => (
                  <div
                    key={`col-${colIndex}-row-${rowIndex}`}
                    style={{
                      width: "3.9px",
                      height: "3.88px",
                      backgroundColor: "#474747",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Box with Text and Image */}
      <div className="relative w-[1632px] h-[787px] mx-auto flex items-center rounded-lg border-[2px] border-[#FFF8DC] p-[64px]">
        {/* Text Section */}
        <div className="w-3/5 text-left">
          <p className="text-[24px] mb-4">
            Public software and technologies like Linux, Bitcoin, and other
            public networks have demonstrated that open protocols and
            collaborative solutions lead to superior technologies that benefit
            everyone and address real-world problems more effectively. Jungo AI
            aims to provide a similar public solution for AI and Big Data.
          </p>
          <p className="text-[24px] mb-4">
            Most of today's AI algorithms are designed to be centralized,
            requiring vast amounts of data and resources that only large
            entities can collect and process. Jungo AI's goal is to leverage
            Federated AI and Distributed Big Data to create a collaborative
            knowledge network, enabling public participation and democratizing
            access to AI and Big Data.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-2/5 flex justify-center">
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
