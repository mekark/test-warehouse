import Image from "next/image";
import { manrope } from "@/lib/fonts";
import { assetUrl } from "@/lib/assetPrefix";
import ScaledCanvas from "@/components/ScaledCanvas";
import type { ReactNode } from "react";

const DESIGN_WIDTH = 1920;
const IMG = "/Images/technical-specs";

const specAsset = (file: string) => assetUrl(`${IMG}/${file}`);

type SpecCard = {
  number: string;
  title: string;
  value: ReactNode;
  description: string;
  illustration: string;
  illustrationW: number;
  illustrationH: number;
  imageClassName: string;
  numberGradient: string;
  icon: "span" | "height" | "kg" | "compliance";
};

const SPECS: SpecCard[] = [
  {
    number: "01",
    title: "Clear Span Width",
    value: (
      <>
        <span className="text-[#161B2B]">Up to</span>
        <span className="text-[#ED1D23]"> 60m</span>
      </>
    ),
    description: "column-free internal spans",
    icon: "span",
    illustration: "card-01.webp",
    illustrationW: 255,
    illustrationH: 185,
    imageClassName:
      "absolute top-[-23.99%] left-[-0.09%] h-[147.37%] w-[119.69%] max-w-none",
    numberGradient:
      "linear-gradient(146.27deg, rgb(225, 225, 225) 16.647%, rgba(225, 225, 225, 0) 96.153%)",
  },
  {
    number: "02",
    title: "Eave Height",
    value: <span className="text-[#ED1D23]">9m to 16m+</span>,
    description: "clear vertical storage height",
    icon: "height",
    illustration: "card-02.webp",
    illustrationW: 255,
    illustrationH: 195,
    imageClassName:
      "absolute top-[-17.93%] left-[-0.09%] h-[121.95%] w-[104.4%] max-w-none",
    numberGradient:
      "linear-gradient(149.55deg, rgb(225, 225, 225) 16.647%, rgba(225, 225, 225, 0) 96.153%)",
  },
  {
    number: "03",
    title: "Floor Load Capacity",
    value: <span className="text-[#ED1D23]">5 MT/sq.m to 15 MT/sq.m</span>,
    description: "(VDFL / Laser Screed FM2)",
    icon: "kg",
    illustration: "card-03.webp",
    illustrationW: 255,
    illustrationH: 195,
    imageClassName:
      "absolute top-[-22.64%] left-[3.7%] h-[115.23%] w-[98.64%] max-w-none",
    numberGradient:
      "linear-gradient(149.29deg, rgb(225, 225, 225) 16.647%, rgba(225, 225, 225, 0) 96.153%)",
  },
  {
    number: "04",
    title: "Design Compliance",
    value: <span className="text-[#ED1D23]">{`IS 800, MBMA, AISC & NBC`}</span>,
    description: "Fire Safety Compliant",
    icon: "compliance",
    illustration: "card-04.webp",
    illustrationW: 272,
    illustrationH: 195,
    imageClassName:
      "absolute top-[-1.37%] left-[2.21%] h-[92.13%] w-full max-w-none",
    numberGradient:
      "linear-gradient(149.8deg, rgb(225, 225, 225) 16.647%, rgba(225, 225, 225, 0) 96.153%)",
  },
];

function DesktopSpecIcon({ type }: { type: SpecCard["icon"] }) {
  if (type === "span") {
    return (
      <div className="relative size-[48px] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={specAsset("icon-span.svg")}
          alt=""
          className="absolute inset-0 block max-w-none"
        />
      </div>
    );
  }

  if (type === "height") {
    return (
      <div className="relative size-[48px] shrink-0 [container-type:size]">
        <div className="flex size-full min-h-px items-center justify-center">
          <div className="relative h-[100cqw] w-[100cqh] rotate-90">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={specAsset("icon-height.svg")}
              alt=""
              className="absolute inset-0 block max-w-none"
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "kg") {
    return (
      <div className="relative size-[48px] shrink-0">
        <div className="relative size-full">
          <div className="absolute inset-[10.94%_40.63%_70.31%_40.63%]">
            <div className="absolute inset-[-20%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={specAsset("icon-kg-top.svg")}
                alt=""
                className="block max-w-none"
              />
            </div>
          </div>
          <div className="absolute inset-[32.81%_12.5%_12.5%_12.5%]">
            <div className="absolute inset-[-6.86%_-5%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={specAsset("icon-kg-bottom.svg")}
                alt=""
                className="block max-w-none"
              />
            </div>
          </div>
          <p className="absolute inset-[44.37%_30.73%_18.13%_29.69%] text-center text-[13.5px] leading-normal font-bold whitespace-nowrap text-[#ED2024]">
            KG
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative size-[48px] shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={specAsset("icon-compliance.svg")}
        alt=""
        className="absolute inset-0 block max-w-none"
      />
    </div>
  );
}

function SectionHeading({ compact }: { compact?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-[10px] text-center">
      <p className="text-[14px] leading-[21.304px] font-bold tracking-[1.5978px] text-[#ED1D23] uppercase min-[1024px]:text-[16px]">
        Technical Specifications
      </p>
      <h2
        className={`font-bold text-[#0F172A] ${
          compact
            ? "max-w-[324px] text-[27px] leading-[34px]"
            : "w-[1219px] max-w-full text-[66px] leading-[73.333px]"
        }`}
      >
        Engineered for Superior Performance
      </h2>
      <p
        className={`font-normal text-[#64748B] ${
          compact
            ? "max-w-[324px] text-[14px] leading-[20px]"
            : "w-[1219px] max-w-full text-[24px] leading-[20px]"
        }`}
      >
        Optimized design parameters to deliver strength, space and safety for
        industrial and logistics operations.
      </p>
    </div>
  );
}

function DesktopSpecCard({ card }: { card: SpecCard }) {
  return (
    <article className="relative flex w-[422px] shrink-0 flex-col items-start overflow-clip rounded-[20px] border border-solid border-[#D6D6D6] bg-white px-[20px] pb-[20px] shadow-[5px_5px_4.3px_-4px_rgba(0,0,0,0.2)]">
      <div className="relative mb-[-24px] flex h-[196px] w-[384px] shrink-0 items-start justify-between pt-[20px]">
        <div className="flex w-[87.183px] shrink-0 flex-col items-start justify-center gap-[11px]">
          <p
            className="bg-clip-text text-[80px] leading-[80px] font-extrabold tracking-[-3.6px] text-transparent whitespace-nowrap"
            style={{ backgroundImage: card.numberGradient }}
          >
            {card.number}
          </p>
          <DesktopSpecIcon type={card.icon} />
        </div>
        <div
          className="relative shrink-0"
          style={{ width: card.illustrationW, height: card.illustrationH }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={specAsset(card.illustration)}
              alt=""
              className={card.imageClassName}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-center leading-[0]">
        <p className="text-[18px] leading-[26px] font-semibold text-black">
          {card.title}
        </p>
        <p className="text-[30px] leading-[44.28px] font-extrabold tracking-[-1.025px]">
          {card.value}
        </p>
        <p className="text-[18px] leading-[24px] font-normal text-[#6E6E6E]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

function MobileSpecCard({ card }: { card: SpecCard }) {
  return (
    <article className="relative flex w-full flex-col items-start overflow-clip rounded-[20px] border border-solid border-[#D6D6D6] bg-white px-[20px] pb-[20px] shadow-[5px_5px_4.3px_-4px_rgba(0,0,0,0.2)]">
      <div className="relative mb-[-12px] flex min-h-[160px] w-full shrink-0 items-start justify-between pt-[20px]">
        <div className="flex w-[87px] shrink-0 flex-col items-start justify-center gap-[11px]">
          <p
            className="bg-clip-text text-[56px] leading-[56px] font-extrabold tracking-[-3.6px] text-transparent"
            style={{ backgroundImage: card.numberGradient }}
          >
            {card.number}
          </p>
          <DesktopSpecIcon type={card.icon} />
        </div>
        <div
          className="relative min-w-0 flex-1"
          style={{
            maxWidth: card.illustrationW,
            aspectRatio: `${card.illustrationW} / ${card.illustrationH}`,
          }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={specAsset(card.illustration)}
              alt=""
              className={card.imageClassName}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-center">
        <p className="text-[18px] leading-[26px] font-semibold text-black">
          {card.title}
        </p>
        <p className="text-[24px] leading-[36px] font-extrabold tracking-[-1.025px]">
          {card.value}
        </p>
        <p className="text-[16px] leading-[24px] font-normal text-[#6E6E6E]">
          {card.description}
        </p>
      </div>
    </article>
  );
}

function DesktopBackground() {
  const maskUrl = specAsset("bg-mask.svg");

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute bottom-[-40px] left-0 contents">
        <div
          className="absolute bottom-[-229.67px] left-0 h-[692px] w-[1920px] opacity-[0.72]"
          style={{
            WebkitMaskImage: `url("${maskUrl}")`,
            maskImage: `url("${maskUrl}")`,
            WebkitMaskSize: "1920px 299px",
            maskSize: "1920px 299px",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            maskMode: "luminance",
            WebkitMaskPosition: "0px 203.334px",
            maskPosition: "0px 203.334px",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={specAsset("bg-concrete.webp")}
              alt=""
              className="absolute top-[-130.12%] left-[0.02%] h-[208.04%] w-full max-w-none"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-[-6px] h-[773px] w-[1932px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={specAsset("warehouse-watermark.webp")}
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-20"
        />
      </div>
      <div className="absolute top-[calc(50%-85px)] left-[calc(16.67%+80px)] h-[499px] w-[1065px] -translate-y-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={specAsset("ellipse-glow.svg")}
          alt=""
          className="absolute top-[-300px] left-[-300px] block max-w-none"
        />
      </div>
      <div className="absolute top-[-279.16px] left-[calc(66.67%+69.33px)] flex h-[541.879px] w-[700.721px] items-center justify-center">
        <div
          className="h-[310.711px] w-[628.544px] rotate-[24.31deg] opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #C10300, rgba(242, 246, 249, 0))",
          }}
        />
      </div>
      <div className="absolute top-[181.93px] left-[-141.63px] flex h-[376.821px] w-[353.429px] items-center justify-center">
        <div className="rotate-[16.68deg] bg-gradient-to-b from-[rgba(193,3,0,0.82)] to-[rgba(242,246,249,0)] h-[310.711px] w-[275.84px]" />
      </div>
    </div>
  );
}

export default function TechnicalSpecificationsSection() {
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden bg-[#F2F6F9]`}
    >
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH}>
          <div className="relative flex min-h-[595px] w-[1920px] flex-col items-center gap-[13.333px] overflow-visible px-[80px] py-[60px]">
            <DesktopBackground />
            <div className="relative z-[1] flex w-full flex-col items-center gap-[50px]">
              <SectionHeading />
              <div className="flex w-full items-center gap-[24px]">
                {SPECS.map((card) => (
                  <DesktopSpecCard key={card.number} card={card} />
                ))}
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </div>

      <div className="relative hidden overflow-hidden px-10 py-16 sm:max-[1023px]:block">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <Image
            src={`${IMG}/warehouse-watermark.webp`}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10">
          <SectionHeading compact />
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
            {SPECS.map((card) => (
              <MobileSpecCard key={card.number} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden px-5 py-10 sm:hidden">
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <Image
            src={`${IMG}/warehouse-watermark.webp`}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-[350px] flex-col items-center gap-6">
          <SectionHeading compact />
          <div className="flex w-full flex-col gap-5">
            {SPECS.map((card) => (
              <MobileSpecCard key={card.number} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
