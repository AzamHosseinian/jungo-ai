function About() {
  return (
    <div className="relative w-full h-auto bg-black text-[#FFF8DC] font-ibmPlexSans">
      {/* Main Container with Border and Border-Radius */}
      <div className="relative w-[1530px] h-[841px] mx-auto bg-[#FFF8DC] rounded-[64px] p-2 flex flex-col justify-between m-40 ">
        {/* Tab on the top-left side */}
        <div className="absolute top-[-80px] left-0 bg-[#FFF8DC] w-[534px] h-[179px] rounded-[40px] tab-shape z-0">
          {/* Text inside the tab */}
          <span className="flex items-start justify-start h-full text-black font-microExtendFLF text-[32px] p-6">
            01 /// ABOUT
          </span>
        </div>

        {/* First Row */}
        <div className="flex justify-between space-x-2 z-10">
          {/* Row 1 Column 1: Text */}
          <div className="bg-black w-[857px] h-[458px] rounded-[56px] p-4">
            <h2 className="text-[#FFF8DC] text-[32px] md:text-4xl font-ibmPlexSans font-semibold flex items-center justify-center h-full text-left pl-[72px]">
              Jungo AI is a public blockchain network that utilizes Federated AI
              and Big Data to forge a collaborative knowledge ecosystem.
            </h2>
          </div>

          {/* Row 1 Column 2: Shape Image */}
          <div className="bg-black w-[649px] h-[458px] rounded-[56px] p-4 flex items-center justify-center">
            <img
              src="/public/assets/images/About/shape.svg"
              alt="Shape"
              className="w-[390px] h-auto"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-2 bg-black w-[1514px] h-[359px] rounded-[56px] p-[72px] flex flex-col justify-center text-left">
          <p className="text-[28px] md:text-xl leading-relaxed font-ibmPlexSans text-[#FFF8DC]">
            Jungo AI is a collaborative and decentralized blockchain that
            utilizes Federated AI and distributed Big Data to create a public
            and collaborative knowledge ecosystem.
          </p>
          <p className="text-[28px] md:text-xl leading-relaxed font-ibmPlexSans text-[#FFF8DC] mt-4">
            The network&apos;s nodes work in unison to deliver Big Data and AI
            solutions, and they mint a token reflective of their contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
