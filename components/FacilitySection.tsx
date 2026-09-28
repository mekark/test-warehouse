"use client";

export default function FacilitySection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <img
          src="/Images/bgq (1).webp"
          alt="Warehouse Facility"
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/60
          "
        />

        {/* Blur */}
        <div
          className="
            absolute
            inset-0
            backdrop-blur-[2px]
          "
        />
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          mx-auto

          flex
          min-h-[500px]
          max-w-[1440px]
          flex-col
          justify-center

          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:min-h-[620px]
          lg:px-16
        "
      >
        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <div className="max-w-[700px]">
            {/* Heading */}
            <div>
              <h2
                className="
                  max-w-[760px]

                  font-manrope
                  text-[32px]
                  font-bold
                  leading-[36px]
                  tracking-[-1.5px]
                  text-white

                  sm:text-[44px]
                  sm:leading-[46px]

                  lg:text-[57px]
                  lg:leading-[55.2px]
                  lg:tracking-[-3px]
                "
              >
                Where speed and quality
              </h2>

              <div
                className="
                  flex
                  flex-col
                  items-start
                "
              >
                {/* Heading + Line */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-end
                    gap-3

                    lg:gap-6
                  "
                >
                  <h3
                    className="
                      font-manrope
                      text-[32px]
                      font-extralight
                      leading-[36px]
                      tracking-[-1.5px]
                      text-[#BFBFBF]

                      sm:text-[44px]
                      sm:leading-[46px]

                      lg:text-[60px]
                      lg:leading-[55.2px]
                      lg:tracking-[-3px]
                    "
                  >
                    are engineered.
                  </h3>

                  {/* Red Line */}
                  <div
                    className="
                      mb-[8px]
                      h-[2px]
                      w-[120px]
                      bg-[#ED2024]

                      sm:w-[180px]

                      lg:mb-[14px]
                      lg:h-[3px]
                      lg:w-[230px]
                    "
                  />
                </div>

                {/* Description */}
                <div
                  className="
                    mt-5
                    max-w-[340px]

                    lg:max-w-[380px]
                  "
                >
                  <p
                    className="
                      font-manrope
                      text-[14px]
                      font-light
                      leading-[22px]
                      tracking-[0px]
                      text-[#BFBFBF]

                      sm:text-[15px]
                      sm:leading-[24px]
                    "
                  >
                    Our 6 lakh sq.ft facility ensures faster
                    delivery of{" "}
                    <span className="font-semibold text-white">
                      pre-engineered warehouse buildings
                    </span>{" "}
                    with uncompromised quality — 40,000 tons
                    of annual production capacity, entirely
                    under one roof.
                  </p>
                </div>

                {/* 6L BELOW LINE */}
                <div
                  className="
                    mt-8

                    sm:mt-10

                    lg:mt-[-105px]
                    lg:ml-[405px]
                  "
                >
                  <h4
                    className="
                      font-manrope
                      text-[72px]
                      font-bold
                      leading-none
                      tracking-[-2px]
                      text-white

                      sm:text-[90px]

                      lg:text-[120px]
                    "
                  >
                    6L
                  </h4>

                  <p
                    className="
                      mt-2

                      whitespace-nowrap

                      font-manrope
                      text-[12px]
                      font-light
                      uppercase
                      tracking-[5px]
                      text-[#C8C8C8]

                      sm:text-[14px]
                      sm:tracking-[7px]

                      lg:text-[18px]
                      lg:tracking-[8px]
                    "
                  >
                    SQ.FT FACILITY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PNG */}
          <div
            className="
              absolute
              bottom-0
              right-0
              z-20

              hidden

              lg:block
            "
          >
            <img
              src="/Images/Men.webp"
              alt="Worker"
              className="
                h-auto
                w-auto

                max-w-[430px]
                xl:max-w-[500px]

                object-contain
                object-bottom
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}