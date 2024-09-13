function About() {
  return (
    <div
      className="relative bg-black text-[#FFF8DC] pl-8"
      style={{
        backgroundImage: `url('/public/assets/images/About/about.svg')`,
        backgroundSize: "contain", // Ensures the whole image is visible
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center top", // Align the image at the top center
        minHeight: "100vh", // Ensures the container is full screen height
      }}
    >
      {/* Top-Left Label */}
      <div className="absolute top-0 left-[220px] p-4 text-[32px] sm:text-[16px] md:text-[24px] font-microExtendFLF tracking-wider text-[#020101]">
        01 /// ABOUT
      </div>

      {/* Main Grid Layout */}
      <div className="w-3/4 mx-auto flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 md:mt-24">
          {/* Row 1 Column 1: Text */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-[#FFF8DC] text-[32px] md:text-4xl font-ibmPlexSans font-semibold">
              Jungo AI is a public blockchain network that utilizes Federated AI
              and Big Data to forge a collaborative knowledge ecosystem.
            </h2>
          </div>

          {/* Row 1 Column 2: Shape Image */}
          <div className="flex justify-center">
            <img
              src="/public/assets/images/About/shape.svg" // Replace with correct path to shape1.svg
              alt="Shape"
              className="w-[390px] h-auto"
            />
          </div>
        </div>

        {/* Row 2: Paragraph Below the Grid */}
        <div className="mt-8 text-left space-y-6 mt-24">
          <p className="text-[28px] md:text-xl leading-relaxed font-ibmPlexSans">
            Jungo AI is a collaborative and decentralized blockchain that
            utilizes Federated AI and distributed Big Data to create a public
            and collaborative knowledge ecosystem.
          </p>
          <p className="text-[28px] md:text-xl leading-relaxed font-ibmPlexSans">
            The network&apos;s nodes work in unison to deliver Big Data and AI
            solutions, and they mint a token reflective of their contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
