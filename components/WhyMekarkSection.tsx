import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

const ITEMS = [
  {
    title: "End-to-End Turnkey Warehouse Construction",
    description:
      "Single-point accountability from architectural planning and soil investigation to RCC civil work, PEB erection, and fire safety approvals.",
  },
  {
    title: "In-House BIM & Structural Engineering",
    description:
      "Our 175+ engineering team uses Tekla and STAAD.Pro to optimize steel tonnage, reducing your warehouse building construction cost by up to 15% without compromising structural safety.",
  },
  {
    title: "Custom Foundation & Heavy-Load Flooring",
    // ~485px at 24px: just over the 474px column, tightened to fit.
    oneLine: true,
    description:
      "As an experienced industrial warehouse contractor, we engineer foundations, plinth beams, and crack-free VDF/laser-screed floors tailored to your racking and forklift point loads.",
  },
  {
    title: "In-House 40,000 MT PEB Manufacturing",
    description:
      "Zero outsourcing delays. All primary columns, rafters, purlins, and standing seam roofing sheets are fabricated in our automated factory.",
  },
  {
    title: "100% Transparent BOQ & Zero Cost Overruns",
    // ~511px at 24px: overflows the 474px column into its 56px right padding.
    oneLine: true,
    description:
      "Itemized bill of quantities and milestone-linked billing ensure your large warehouse construction stays strictly within budget.",
  },
  {
    title: "Rigorous Quality & Statutory Compliance",
    description:
      "Every structure undergoes ultrasonic weld testing, mill test verification, and pre-handover statutory clearance checks.",
  },
];

const SUBTEXT =
  "As a premier warehouse building contractor, we eliminate multi-vendor delays by handling engineering, manufacturing, and on-site civil construction in-house.";

const number = (index: number) => String(index + 1).padStart(2, "0");

export default function WhyMekarkSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="flex w-[1920px] flex-col items-center bg-white pb-[60px]">
            {/* HERO BAND */}
            <div className="relative h-[558px] w-full">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/Images/why/warehouse-steel.webp"
                  alt="Mekark pre-engineered steel warehouse with an open loading canopy"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-y-0 right-[673px] left-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.78),rgba(255,255,255,0.45)_26%,rgba(255,255,255,0)_44%)]" />
              <div className="absolute inset-x-0 bottom-0 h-[90px] bg-[linear-gradient(to_bottom,rgba(255,255,255,0),#fff_92%)]" />

              <div className="absolute top-[200px] left-[80px] flex w-[759px] -translate-y-1/2 flex-col gap-[20px]">
                <h2 className="text-[54px] leading-[60px] font-bold text-[#030303]">
                  Why Top Industries Choose Mekark as Their{" "}
                  <span className="block text-[40px] text-[#ED1D23]">
                    Warehouse Construction Contractor
                  </span>
                </h2>
                <p className="w-[640px] text-[20px] leading-[30px] font-normal text-[#424242]">
                  {/* Break before "on-site" so it doesn't run into the warehouse image */}
                  {SUBTEXT.split(" on-site ")[0]}
                  <br />
                  on-site {SUBTEXT.split(" on-site ")[1]}
                </p>
              </div>
            </div>

            {/* POINTS: 3 x 2 grid with hairline dividers */}
            <ol className="grid w-full grid-cols-3 px-[80px]">
              {ITEMS.map((item, index) => (
                <li
                  key={item.title}
                  className={`flex flex-col gap-[10px] py-[36px] ${
                    index % 3 === 0 ? "pr-[56px]" : "border-l border-[#E2E2E2] px-[56px]"
                  } ${index >= 3 ? "border-t border-t-[#E2E2E2]" : ""}`}
                >
                  <span
                    className="h-[41px] w-fit bg-clip-text text-[50px] leading-[41px] font-extrabold tracking-[-2.64px] text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(155.3deg, rgba(225,225,225,0.15) 1.24%, #D9D9D9 85.1%)",
                    }}
                  >
                    {number(index)}
                  </span>
                  <div className="flex flex-col gap-[20px]">
                    <h3
                      className={`text-[24px] leading-[26px] font-semibold text-black ${
                        item.oneLine ? "tracking-[-0.4px] whitespace-nowrap" : ""
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[18px] leading-[24px] font-normal text-[#6E6E6E]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE + TABLET (below 1024px): Figma mobile frame, scaled with the width */}
      <div className="flex flex-col items-center gap-[9px] pb-[33px] min-[1024px]:hidden">
        <div className="relative aspect-[390/177] w-full">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Images/why/warehouse-steel.webp"
              alt="Mekark pre-engineered steel warehouse with an open loading canopy"
              fill
              sizes="100vw"
              className="object-cover object-[75%_50%]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[33.33%] bg-[linear-gradient(to_bottom,rgba(255,255,255,0),#fff_92%)]" />
        </div>

        <div className="flex w-full flex-col gap-[40px] px-[20px] sm:px-10">
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-[28px] leading-[32px] font-extrabold text-[#030303]">
              Why Top Industries Choose Mekark as Their{" "}
              <span className="block text-[25px] text-[#ED1D23]">
                Warehouse Construction Contractor
              </span>
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#6E6E6E]">
              {SUBTEXT}
            </p>
          </div>

          <ol className="flex flex-col gap-[12px]">
            {ITEMS.map((item, index) => (
              <li
                key={item.title}
                className={`flex flex-col gap-[4px] ${
                  index > 0 ? "border-t border-[#E2E2E2] pt-[12px]" : ""
                }`}
              >
                <h3 className="flex text-[18px] leading-[22px] font-bold text-[#111]">
                  <span className="w-[32px] shrink-0 text-[#ED1D23]">
                    {number(index)}.
                  </span>
                  {item.title}
                </h3>
                <p className="pl-[32px] text-[14px] leading-[20px] font-normal text-[#6E6E6E]">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
