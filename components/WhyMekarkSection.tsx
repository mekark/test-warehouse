import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 866;

type Point = {
  value: string;
  text: string;
  /** Position / size of the row inside the 540x407 "Points" box in Figma */
  left: number;
  top: number;
  width: number;
  /** Gap between arrow and value */
  arrowGap: number;
  /** Fixed value column width (undefined = hug content) */
  valueWidth?: number;
  textSize: number;
  /** Fixed text width (undefined = fill remaining space) */
  textWidth?: number;
  alignEnd?: boolean;
  centered?: boolean;
};

const POINTS: Point[] = [
  {
    value: "5X",
    text: "Faster Project Planning & Execution Speed",
    left: 0,
    top: 0,
    width: 580,
    arrowGap: 10,
    valueWidth: 40,
    textSize: 24,
    alignEnd: true,
    centered: true,
  },
  {
    value: "100%",
    text: "Turnkey EPC Project Responsibility",
    left: 20.33,
    top: 77,
    width: 571,
    arrowGap: 13,
    valueWidth: 81.333,
    textSize: 26,
    centered: true,
  },
  {
    value: "200+",
    text: "Industrial & Warehouse Projects Delivered",
    left: 40.33,
    top: 145,
    width: 659,
    arrowGap: 13,
    valueWidth: 81.333,
    textSize: 26,
    centered: true,
  },
  {
    value: "90%",
    text: "Quality & Safety Compliance Standards",
    left: 40.33,
    top: 214,
    width: 609,
    arrowGap: 10,
    textSize: 26,
    centered: true,
  },
  {
    value: "40k +",
    text: "PEB & Structural Steel Expertise",
    left: 20.33,
    top: 283,
    width: 531,
    arrowGap: 10,
    valueWidth: 81.333,
    textSize: 26,
    centered: true,
  },
  {
    value: "18+ ",
    text: "Years Industrial Construction Excellence",
    left: 0.33,
    top: 351,
    width: 608,
    arrowGap: 10,
    textSize: 26,
    textWidth: 432,
  },
];

function Arrow() {
  return (
    <Image
      src="/Images/why/arrow.svg"
      alt=""
      width={17}
      height={27}
      className="h-[27px] w-[17px] shrink-0"
    />
  );
}

type MobilePoint = {
  value: string;
  text: string;
  /** Gap between the value group and the description */
  gap: number;
  /** Gap between arrow and value */
  arrowGap: number;
  /** Fixed width of the value group (first row only) */
  valueGroupWidth?: number;
  textWidth: number;
};

// Mobile frame (390px): spacing and text widths come from the Figma frame
const MOBILE_POINTS: MobilePoint[] = [
  {
    value: "5X",
    text: "Faster Project Planning & Execution Speed",
    gap: 14,
    arrowGap: 10,
    valueGroupWidth: 112,
    textWidth: 220,
  },
  {
    value: "100%",
    text: "Turnkey EPC Project Responsibility",
    gap: 14,
    arrowGap: 13,
    textWidth: 183,
  },
  {
    value: "200+",
    text: "Industrial & Warehouse Projects Delivered",
    gap: 18,
    arrowGap: 13,
    textWidth: 203,
  },
  {
    value: "90%",
    text: "Quality & Safety Compliance Standards",
    gap: 30,
    arrowGap: 10,
    textWidth: 197,
  },
  {
    value: "40k +",
    text: "PEB & Structural Steel Expertise",
    gap: 20,
    arrowGap: 10,
    textWidth: 189,
  },
  {
    value: "18+ ",
    text: "Years Industrial Construction Excellence",
    gap: 45,
    arrowGap: 10,
    textWidth: 214,
  },
];

function Heading() {
  return (
    <div className="flex flex-col gap-[22px]">
      <h2 className="text-[34px] leading-[1.1] font-bold text-[#030303] sm:text-[48px] min-[1024px]:text-[66px]! min-[1024px]:leading-[69.333px]!">
        Why Top Industries
        <br />
        Choose Mekark
      </h2>
      <p className="text-[16px] leading-[28px] font-normal text-[#424242] min-[1024px]:text-[21.333px]">
        Text
      </p>
    </div>
  );
}

export default function WhyMekarkSection() {
  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-white"
            style={{ height: DESIGN_HEIGHT }}
          >
            {/* scene */}
            <div className="absolute top-[-84px] left-0 h-[950.667px] w-[2101.333px] overflow-hidden">
              <Image
                src="/Images/why/scene.webp"
                alt="Mekark billboard on an industrial construction site"
                width={1868}
                height={842}
                sizes="106vw"
                className="absolute top-[3.7%] left-[-0.07%] h-[96.3%] w-[96.72%] max-w-none"
              />
            </div>

            {/* red panel */}
            <div className="absolute top-0 left-[1004px] h-[701.333px] w-[916px] bg-[#E60F1A]" />
            <div className="absolute top-[554.67px] left-[984px] h-[146.667px] w-[936px] bg-[#E60F1A]" />

            {/* white fade over the top of the red panel */}
            <div className="absolute top-[-2.67px] left-[1004px] h-[398.667px] w-[916px]">
              <Image
                src="/Images/why/overlay.webp"
                alt=""
                fill
                sizes="48vw"
                className="object-cover"
              />
            </div>

            {/* person cut-out */}
            <div className="absolute top-[-14.67px] left-[156px] h-[866.667px] w-[1757.333px] overflow-hidden">
              <Image
                src="/Images/why/man.webp"
                alt=""
                width={1867}
                height={842}
                sizes="100vw"
                className="absolute top-0 left-[-9.3%] h-full w-[109.35%] max-w-none"
              />
            </div>

            {/* heading */}
            <div className="absolute top-[49.33px] left-[1089.33px] w-[706.667px]">
              <Heading />
            </div>

            {/* points */}
            <div className="absolute top-[256px] left-[1130.67px] h-[406.667px] w-[540.444px]">
              {POINTS.map((point) => (
                <div
                  key={point.value}
                  className={`absolute flex gap-[20px] border-b-[1.333px] border-solid border-[#E2E2E2] pt-[12px] pb-[13.333px] ${
                    point.centered
                      ? "items-center justify-center"
                      : "items-center"
                  }`}
                  style={{
                    left: point.left,
                    top: point.top,
                    width: point.width,
                  }}
                >
                  <div
                    className={`flex shrink-0 py-[5px] ${
                      point.alignEnd ? "items-end" : "items-center"
                    }`}
                    style={{ gap: point.arrowGap }}
                  >
                    <Arrow />
                    <p
                      className="shrink-0 text-[32px] leading-[28px] font-semibold whitespace-nowrap text-[#080808]"
                      style={
                        point.valueWidth
                          ? { width: point.valueWidth }
                          : undefined
                      }
                    >
                      {point.value}
                    </p>
                  </div>
                  <p
                    className={`leading-[29.867px] font-bold whitespace-nowrap text-white ${
                      point.textWidth ? "shrink-0" : "min-w-px flex-1"
                    }`}
                    style={{
                      fontSize: point.textSize,
                      width: point.textWidth,
                    }}
                  >
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="bg-[#F9F6F7] sm:hidden">
        <div className="relative h-[249px] w-full overflow-hidden">
          <div className="absolute top-[-13px] left-0 h-[262px] w-[638px] overflow-hidden">
            <Image
              src="/Images/why/scene.webp"
              alt="Mekark billboard on an industrial construction site"
              width={1868}
              height={842}
              sizes="617px"
              className="absolute top-[-0.11%] left-[-0.07%] h-[106.22%] w-[96.72%] max-w-none"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[10px] bg-gradient-to-b from-[#FFFDFD] from-[6.034%] to-[#E60F1A] to-[47.028%] px-[20px] pt-[20px] pb-[30px]">
          <div className="flex w-full flex-col gap-[12px]">
            <h2 className="text-[28px] leading-[34px] font-bold text-[#030303]">
              Why Top Industries
              <br />
              Choose Mekark
            </h2>
            <p className="text-[14px] leading-[28px] font-normal text-[#424242]">
              Text
            </p>
          </div>

          <ul className="flex w-full flex-col gap-px">
            {MOBILE_POINTS.map((point, index) => (
              <li
                key={point.value}
                className={`flex w-full items-center ${
                  index < MOBILE_POINTS.length - 1
                    ? "border-b border-solid border-[#E58282] pt-[10px] pb-[11px]"
                    : "py-[10px]"
                }`}
                style={{ gap: point.gap }}
              >
                <div
                  className="flex shrink-0 items-center py-[5px]"
                  style={{
                    gap: point.arrowGap,
                    width: point.valueGroupWidth,
                  }}
                >
                  <Image
                    src="/Images/why/arrow-up.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-[18px] shrink-0"
                  />
                  <span className="text-[32px] leading-[28px] font-extrabold whitespace-nowrap text-[#F0E4E4]">
                    {point.value}
                  </span>
                </div>
                <p
                  className="shrink-0 text-[16px] leading-[18px] font-medium text-white"
                  style={{ width: point.textWidth }}
                >
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden sm:max-[1023px]:block">
        <div className="relative h-[260px] w-full sm:h-[380px]">
          <Image
            src="/Images/why/scene.webp"
            alt="Mekark billboard on an industrial construction site"
            fill
            sizes="100vw"
            className="object-cover object-left"
          />
        </div>

        <div className="bg-[#E60F1A] px-5 py-10 sm:px-10 sm:py-14">
          <h2 className="text-[34px] leading-[1.1] font-bold text-white sm:text-[48px]">
            Why Top Industries Choose Mekark
          </h2>
          <p className="mt-3 text-[16px] leading-[28px] font-normal text-white/80">
            Text
          </p>

          <ul className="mt-8 flex flex-col">
            {POINTS.map((point) => (
              <li
                key={point.value}
                className="flex items-center gap-4 border-b-[1.333px] border-solid border-white/30 py-4"
              >
                <Arrow />
                <span className="min-w-[72px] text-[24px] leading-[28px] font-semibold whitespace-nowrap text-[#080808] sm:text-[32px]">
                  {point.value}
                </span>
                <span className="text-[16px] leading-[24px] font-bold text-white sm:text-[22px]">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
