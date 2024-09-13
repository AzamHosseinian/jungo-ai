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
      <div className="relative w-[1600px] h-[438px] mx-auto mb-[150px] border-[3px] border-[#FFF8DC]">
        {/* Background pattern or image */}
        <div className="absolute inset-0 bg-[url('/public/assets/images/Philosophy/pattern.svg')] rounded-lg"></div>
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
            Most of today&apos;s AI algorithms are designed to be centralized,
            requiring vast amounts of data and resources that only large
            entities can collect and process. Jungo AI&apos;s goal is to
            leverage Federated AI and Distributed Big Data to create a
            collaborative knowledge network, enabling public participation and
            democratizing access to AI and Big Data.
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
