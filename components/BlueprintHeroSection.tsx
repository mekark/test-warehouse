import Image from "next/image";
import { inter, manrope } from "@/lib/fonts";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import HeroBlueprintForm from "@/components/HeroBlueprintForm";
import ScaledCanvas from "@/components/ScaledCanvas";
import BlueprintHeroMobile from "@/components/BlueprintHeroMobile";
import {
  HIGHLIGHTS,
  PHONE_NUMBER,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/components/heroData";

// Logo sizes / offsets taken from the Figma frame (each sits in a 90x40 chip)
const TRUSTED_LOGOS = [
  { src: "/Images/hero/vwu.webp", alt: "Client logo", size: 42 },
  { src: "/Images/hero/voltas.webp", alt: "Voltas", size: 75 },
  { src: "/Images/hero/tvs.webp", alt: "TVS", size: 75 },
  { src: "/Images/hero/tata.webp", alt: "Tata Electronics", size: 75 },
  { src: "/Images/hero/stetter.webp", alt: "Schwing Stetter", size: 75 },
  { src: "/Images/hero/srf.webp", alt: "SRF", size: 75 },
];

const STATS = [
  { value: "200", suffix: "+", label: "Projects", width: "w-[145.333px]" },
  {
    value: "18",
    suffix: "+",
    label: "years Experience",
    width: "w-[186.667px]",
  },
  { value: "40,000 ", suffix: "MT", label: "Annual Production", width: "" },
  {
    value: "175",
    suffix: "+",
    label: "Engineering Team",
    width: "w-[170.667px]",
  },
];

// Figma frame is 1920px wide; on desktop viewports the whole section is scaled to fit
const DESIGN_WIDTH = 1920;

export default function BlueprintHeroSection() {
  return (
    <>
      {/* PHONE (below 640px): Figma mobile frame */}
      <div className="sm:hidden">
        <BlueprintHeroMobile />
      </div>

      {/* TABLET + DESKTOP */}
      <div className="hidden sm:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <section
            className={`${manrope.className} relative w-full overflow-hidden bg-[#060606] min-[1024px]:h-[1018px]`}
          >
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0 min-[1024px]:inset-auto min-[1024px]:top-[-3px] min-[1024px]:right-[-8.3%] min-[1024px]:h-[1020px] min-[1024px]:w-[94.44%] overflow-hidden">
              <Image
                src="/Images/hero/hero-bg-sharp.webp"
                alt="Industrial warehouse interior"
                fill
                loading="lazy"
                fetchPriority="high"
                sizes="(min-width: 1024px) 95vw, 100vw"
                className="object-cover brightness-[1.6] contrast-[1.05]"
              />
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-[#060606]/80 min-[1024px]:bg-transparent min-[1024px]:bg-[linear-gradient(to_right,#060606_24.831%,rgba(6,6,6,0.8)_42.674%,rgba(6,6,6,0)_88.021%)]" />

            {/* NAVBAR */}
            <header className="relative z-20 flex w-full items-center justify-between px-5 py-[17px] sm:px-[80px] min-[1024px]:absolute min-[1024px]:top-0 min-[1024px]:left-0">
              <div className="relative h-[34px] w-[98px] shrink-0 sm:h-[46px] sm:w-[132px]">
                <Image
                  src="/Images/hero/logo-mekark.webp"
                  alt="Mekark"
                  fill
                  sizes="132px"
                  className="object-cover"
                />
              </div>

              <EnquiryFormButton className="flex items-center justify-center rounded-[8px] bg-[#C4161C] px-[16px] py-[8px] text-[14px] font-semibold leading-[normal] whitespace-pre text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] sm:px-[24px] sm:py-[10px] sm:text-[16px]">
                {"Get  Free Quote "}
              </EnquiryFormButton>
            </header>

            {/* CONTENT */}
            <div className="relative z-10 flex w-full flex-col gap-10 px-5 pt-6 pb-12 sm:px-[80px] min-[1024px]:h-full min-[1024px]:flex-row min-[1024px]:items-start min-[1024px]:justify-between min-[1024px]:gap-10 min-[1024px]:pt-0! min-[1024px]:pr-[130px]! min-[1024px]:pb-0">
              {/* LEFT COLUMN */}
              <div className="flex w-full min-w-0 flex-col items-start gap-[24px] min-[1024px]:mt-[118.5px] min-[1024px]:max-w-[891px] min-[1024px]:flex-1">
                {/* PILL */}
                <div className="flex max-w-full items-center gap-[10.667px] rounded-full border-[1.333px] border-solid border-white/20 px-[17.333px] py-[9.333px]">
                  <span className="size-[10.667px] shrink-0 rounded-full bg-[#E40015]" />
                  <p
                    className={`${inter.className} text-[11px] leading-[20px] font-medium text-white sm:text-[14px] sm:whitespace-nowrap`}
                  >
                    FROM DESIGN TO HANDOVER | ONE TEAM | 150 DAYS
                  </p>
                </div>

                {/* HEADING */}
                <div className="flex w-full flex-col items-start gap-[10px]">
                  <h2 className="w-full text-[32px] leading-[1.1] font-bold text-white sm:text-[48px] sm:leading-[48px] min-[1024px]:w-[891px] min-[1024px]:max-w-full">
                    Build Your PEB Industrial Warehouse in
                  </h2>
                  <div className="relative h-[56px] w-[178px] shrink-0 bg-[#ED1D23] sm:-mt-[3px] sm:h-[62px] sm:w-[239px]">
                    <p className="absolute top-[29px] left-[5px] -translate-y-1/2 font-bold whitespace-nowrap text-white sm:top-[27px]">
                      <span className="text-[40px] leading-[58px] sm:text-[54px]">
                        {"150 Days "}
                      </span>
                      <span className="text-[24px] leading-[58px] font-medium text-[#ED1D23] sm:text-[38px]">
                        not 9-12 months.
                      </span>
                    </p>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="w-full text-[16px] leading-[24px] font-semibold text-[#A9A9A9] sm:text-[20px] sm:leading-[26px]">
                  From planning to handover, Mekark is a leading warehouse
                  construction company specializing in PEB warehouse
                  construction, steel warehouse construction, industrial
                  warehouse construction, turnkey warehouse construction, and
                  pre-engineered warehouse buildings across South India.
                </p>

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-1 gap-x-[24px] gap-y-[20px] sm:inline-grid sm:grid-cols-[repeat(2,fit-content(100%))]">
                  {HIGHLIGHTS.map((item) => (
                    <div
                      key={item}
                      className="flex h-[19px] items-center gap-[8px]"
                    >
                      <Image
                        src="/Images/hero/chevron.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="size-[24px] shrink-0"
                      />
                      <p className="text-[14px] leading-[20px] font-normal whitespace-nowrap text-white/70 sm:text-[16px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* TRUSTED ACROSS INDIA */}
                <div className="relative h-[138px] w-full max-w-[847px] shrink-0 overflow-hidden rounded-[18px]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,#060606_0.179%,rgba(105,63,29,0.5)_99.821%)] backdrop-blur-[64px]" />

                  <p className="absolute top-[30.33px] left-[24px] -translate-y-1/2 text-[14px] leading-[20px] font-semibold whitespace-nowrap text-[#FA7783] uppercase sm:left-[122px] sm:-translate-x-1/2">
                    Trusted Across India
                  </p>

                  <div className="absolute top-[55px] right-[16px] left-[16px] h-[63px] overflow-hidden sm:right-auto sm:left-[32.17px] sm:w-[789px] sm:max-w-[calc(100%-64px)]">
                    <div className="absolute top-[calc(50%-0.5px)] left-0 flex -translate-y-1/2 items-center gap-[50px]">
                      {TRUSTED_LOGOS.map((logo) => (
                        <div
                          key={logo.src}
                          className="relative h-[40px] w-[90px] shrink-0 rounded-[8px] bg-[#F9F6F7]"
                        >
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ width: logo.size, height: logo.size }}
                          >
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              fill
                              sizes="75px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* STATS */}
                <div className="flex w-full flex-wrap items-center gap-x-[48px] gap-y-6 border-t-[0.667px] border-solid border-[#E2E2E2] pt-[16px] sm:h-[117.333px] sm:w-auto sm:flex-nowrap sm:pt-[0.667px]">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className={`flex shrink-0 flex-col items-start gap-[5.333px] whitespace-nowrap sm:h-[85.333px] ${stat.width}`}
                    >
                      <p className="text-[32px] leading-[normal] font-extrabold sm:text-[42px]">
                        <span className="text-white">{stat.value}</span>
                        <span className="text-[#C4161C]">{stat.suffix}</span>
                      </p>
                      <p className="text-[14px] leading-[normal] font-semibold text-[#9A9A9A] uppercase sm:text-[16px]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-[16px] sm:gap-[30px]">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[55.333px] shrink-0 items-center justify-center gap-[9.623px] rounded-full bg-white px-[24.058px] py-[14.435px]"
                  >
                    <span className="text-[16px] leading-[24.058px] font-bold whitespace-nowrap text-[#E5091F]">
                      WhatsApp
                    </span>
                    <Image
                      src="/Images/hero/wa.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px]"
                    />
                  </a>

                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex h-[55.333px] shrink-0 items-center justify-center gap-[9.623px] rounded-full border border-solid border-white px-[24.058px] py-[14.435px]"
                  >
                    <span className="text-[16px] leading-[24.058px] font-bold whitespace-nowrap text-white">
                      Call Now
                    </span>
                    <Image
                      src="/Images/hero/phone.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px]"
                    />
                  </a>
                </div>
              </div>

              {/* FORM CARD */}
              <HeroBlueprintForm />
            </div>
          </section>
        </ScaledCanvas>
      </div>
    </>
  );
}
