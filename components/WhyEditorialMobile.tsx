import { manrope } from "@/lib/fonts";

const ITEMS = [
  {
    title: "Turnkey PEB constructor & contractor",
    description:
      "Procurement to PEB building manufacturer - pre engineered building contractor, pre-fabricated building constructor in erection of engineered steel buildings",
  },
  {
    title: "In-House PEB Manufacturing",
    description:
      "Own manufacturing facility  Steel is pre engineered, pre-fabricated - peb building manufacturer, Turnkey PEB contractors & PEB steel structure building constructors",
  },
  {
    title: "Transparent Pricing. Guaranteed Timelines",
    description:
      "High quality cost efficient PEB industrial and commercial building construction company delivering PEB pre manufactured steel buildings",
  },
  {
    title: "ISO Certified & Quality Assured",
    description:
      "Strict quality systems for reliable, safe, compliant constructor of engineered commercial steel buildings & prefabrication construction",
  },
  {
    title: "Large Scale Infrastructure",
    description:
      "6,00,000 sq. ft. manufacturing facility designed for pre-fabricated building constructor.",
  },
  {
    title: "Strong Engineering Backbone",
    description:
      "Skilled professionals delivering accurate design and efficient execution for pre engineered building contractor.",
  },
  {
    title: "Faster Project Delivery",
    description:
      "Optimized PEB systems enable 30- 40% faster peb construction company of custom steel buildings",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Smart engineering reduces material waste, overall project cost of steel fabricated building for peb contractors",
  },
  {
    title: "End-to-End Execution",
    description:
      "Single-point responsibility - design to erection- zero coordination gaps - Turnkey peb constructor",
  },
  {
    title: "Sustainable & Green Certified",
    description:
      "Eco-conscious processes delivering future-ready PEB industrial and commercial building",
  },
];

/** Mobile-only editorial list (Figma "why-choose-mekark-editorial", 390px frame). */
export default function WhyEditorialMobile() {
  return (
    <section
      className={`${manrope.className} flex w-full flex-col gap-[6px] bg-[#0A0A0A] p-[20px] sm:hidden`}
    >
      <div className="flex w-full max-w-[342px] flex-col gap-[12px]">
        <h2 className="text-[28px] leading-[34px] font-extrabold text-white">
          Why Top Industries
          <br />
          <span className="text-[#ED1D23]">Choose MEKARK</span>
        </h2>
        <p className="text-[14px] leading-[20px] font-normal text-[#888]">
          India’s Leading PEB manufacturer &amp; Constructor.
        </p>
      </div>

      <ol className="flex w-full max-w-[342px] flex-col">
        {ITEMS.map((item, index) => (
          <li
            key={item.title}
            className="flex items-start gap-[10px] border-b border-solid border-white/10 py-[16px]"
          >
            <span
              className={`w-[50px] shrink-0 text-[26px] leading-[25px] font-extrabold ${
                index % 2 === 0 ? "text-[#E53935]" : "text-[#CCC]"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex w-[282px] min-w-0 flex-col justify-center gap-[10px]">
              <p className="text-[18px] leading-[22px] font-bold text-[#F5F5F5]">
                {item.title}
              </p>
              <p className="text-[14px] leading-[18px] font-normal whitespace-pre-wrap text-[#64748B]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
