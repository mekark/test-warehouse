"use client";

const comparisonData = [
  {
    label: "Project Management",
    contractor: "Multiple vendors",
    mekark: "Single turnkey EPC partner",
  },
  {
    label: "Timeline Reliability",
    contractor: "Delays & excuses",
    mekark: "150-day commitment",
  },
  {
    label: "Manufacturing",
    contractor: "Outsourced fabrication",
    mekark: "100% in-house",
  },
  {
    label: "Design Capability",
    contractor: "Design gaps",
    mekark: "Integrated design & build",
  },
  {
    label: "Budget Control",
    contractor: "Cost overruns",
    mekark: "Controlled planning & execution",
  },
  {
    label: "Output Quality",
    contractor: "Generic builds",
    mekark: "Performance-driven engineering",
  },
];

export default function ComparisonSection() {
  return (
    <section
      className="
        bg-[#F7F7F7]
        py-[70px]

        md:py-[90px]
        lg:py-[110px]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-5

          sm:px-8
          lg:px-16
        "
      >
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
              font-manrope
              text-[38px]
              font-bold
              leading-[1.08]
              tracking-[-2px]
              text-black

              md:text-[60px]
              lg:text-[74px]
            "
          >
            You Don’t Need Another Contractor.
          </h2>

          <h3
            className="
              mt-2

              font-manrope
              text-[28px]
              font-bold
              leading-[1.08]
              text-[#C51414]

              md:text-[42px]
              lg:text-[54px]
            "
          >
            You Need Control.
          </h3>
        </div>

        {/* Desktop Table */}
        <div
          className="
            mt-[60px]
            hidden
            overflow-hidden
            rounded-[26px]
            border
            border-[#DDDDDD]
            bg-white

            lg:block
          "
        >
          {/* Header */}
          <div
            className="
              grid
              grid-cols-3
            "
          >
            <div
              className="
                border-r
                border-[#E5E5E5]
                bg-[#FAFAFA]
                px-8
                py-8
              "
            >
              <p
                className="
                  font-manrope
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#8A8A8A]
                "
              >
                WHAT YOU'RE EVALUATING
              </p>
            </div>

            <div
              className="
                border-r
                border-[#E5E5E5]
                bg-[#F2F2F2]
                px-8
                py-8
                text-center
              "
            >
              <p
                className="
                  font-manrope
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#5E5E5E]
                "
              >
                TYPICAL CONTRACTORS
              </p>
            </div>

            <div
              className="
                bg-[#18A85D]
                px-8
                py-8
                text-center
              "
            >
              <p
                className="
                  font-manrope
                  text-[18px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-white
                "
              >
                ◇ MEKARK
              </p>
            </div>
          </div>

          {/* Rows */}
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-3

                border-t
                border-[#E5E5E5]
              "
            >
              {/* Left */}
              <div
                className="
                  border-r
                  border-[#E5E5E5]
                  px-8
                  py-8
                "
              >
                <p
                  className="
                    font-manrope
                    text-[18px]
                    font-bold
                    text-black
                  "
                >
                  {item.label}
                </p>
              </div>

              {/* Middle */}
              <div
                className="
                  border-r
                  border-[#E5E5E5]
                  px-8
                  py-8
                  text-center
                "
              >
                <p
                  className="
                    font-manrope
                    text-[18px]
                    font-normal
                    text-[#8C8C8C]
                  "
                >
                  {item.contractor}
                </p>
              </div>

              {/* Right */}
              <div
                className="
                  px-8
                  py-8
                  text-center
                "
              >
                <p
                  className="
                    font-manrope
                    text-[18px]
                    font-bold
                    text-[#18A85D]
                  "
                >
                  {item.mekark}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div
          className="
            mt-12
            space-y-5

            lg:hidden
          "
        >
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-[22px]
                border
                border-[#E5E5E5]
                bg-white
              "
            >
              {/* Top */}
              <div
                className="
                  border-b
                  border-[#EAEAEA]
                  bg-[#FAFAFA]
                  px-5
                  py-4
                "
              >
                <h3
                  className="
                    font-manrope
                    text-[18px]
                    font-bold
                    text-black
                  "
                >
                  {item.label}
                </h3>
              </div>

              {/* Middle */}
              <div
                className="
                  border-b
                  border-[#EEEEEE]
                  px-5
                  py-5
                "
              >
                <p
                  className="
                    mb-2

                    font-manrope
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#8A8A8A]
                  "
                >
                  Typical Contractors
                </p>

                <p
                  className="
                    font-manrope
                    text-[16px]
                    text-[#7B7B7B]
                  "
                >
                  {item.contractor}
                </p>
              </div>

              {/* Bottom */}
              <div
                className="
                  bg-[#18A85D]
                  px-5
                  py-5
                "
              >
                <p
                  className="
                    mb-2

                    font-manrope
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-white/80
                  "
                >
                  Mekark
                </p>

                <p
                  className="
                    font-manrope
                    text-[17px]
                    font-bold
                    text-white
                  "
                >
                  {item.mekark}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div
          className="
            mt-[55px]
            text-center
          "
        >
          <p
            className="
              font-manrope
              text-[20px]
              font-normal
              leading-[1.6]
              text-[#8B8B8B]

              md:text-[28px]
            "
          >
            This is why Mekark is among the{" "}
            <span
              className="
                font-bold
                text-black
              "
            >
              best warehouse builders in Chennai.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}