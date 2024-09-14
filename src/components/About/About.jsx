function About() {
  return (
    <div className="relative w-full h-auto bg-black text-[#FFF8DC] font-ibmPlexSans">
      {/* Main Container with Border and Border-Radius */}
      <div className="relative max-w-[90%] md:max-w-[80%] h-auto mx-auto bg-[#FFF8DC] rounded-[45px] md:rounded-[64px] p-2 flex flex-col justify-between m-28 z-10">
        {/* Tab on the top-left side */}
        <div className="absolute top-[-50px] md:top-[-80px] left-0 bg-[#FFF8DC] w-[70%] md:w-[534px] h-[120px] md:h-[179px] rounded-[40px] tab-shape z-0">
          <span className="flex items-start justify-start h-full text-black font-microExtendFLF text-[16px] md:text-[32px] p-6">
            01 /// ABOUT
          </span>
        </div>

        {/* Star Image at Bottom-Right */}
        <img
          src="/public/assets/images/About/star.svg" // Replace with the correct path to star.svg
          alt="Star"
          className="absolute bottom-[-40px] right-[-35px] md:bottom-[-70px] md:right-[-80px] w-[100px] md:w-[198px] h-[100px] md:h-[195px] z-10"
        />

        {/* Main Content */}
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:space-x-2 z-10">
          {/* Row 1 Column 1: Text */}
          <div className="bg-black w-full md:w-[857px] h-[200px] md:h-[458px] rounded-[35px] md:rounded-[56px] p-2 md:p-4">
            <h2 className="text-[#FFF8DC] text-[16px] md:text-[32px] font-ibmPlexSans font-semibold flex items-center justify-center h-full text-left">
              Jungo AI is a public blockchain network that utilizes Federated AI
              and Big Data to forge a collaborative knowledge ecosystem.
            </h2>
          </div>

          {/* Row 1 Column 2: Shape Image */}
          <div className="bg-black w-full md:w-[649px] h-[200px] md:h-[458px] rounded-[35px] md:rounded-[56px] p-2 md:p-4 flex items-center justify-center">
            <img
              src="/public/assets/images/About/shape.svg" // Replace with the correct path to shape.svg
              alt="Shape"
              className="w-[60%] h-auto"
            />
          </div>
        </div>

        {/* Second Row: Another Text Block */}
        <div className="mt-6 bg-black w-full h-[200px] md:h-[359px] rounded-[35px] md:rounded-[56px] p-4 md:p-[72px] flex flex-col justify-center text-left">
          <p className="text-[16px] md:text-[28px] leading-relaxed font-ibmPlexSans text-[#FFF8DC]">
            Jungo AI is a collaborative and decentralized blockchain that
            utilizes Federated AI and distributed Big Data to create a public
            and collaborative knowledge ecosystem.
          </p>
          <p className="text-[16px] md:text-[28px] leading-relaxed font-ibmPlexSans text-[#FFF8DC] mt-2 md:mt-4 text-left">
            The network&apos;s nodes work in unison to deliver Big Data and AI
            solutions, and they mint a token reflective of their contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
