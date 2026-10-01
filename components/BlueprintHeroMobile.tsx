import Image from "next/image";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import HeroMobileForm from "@/components/HeroMobileForm";
import {
  HIGHLIGHTS,
  PHONE_NUMBER,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "@/components/heroData";
import { manrope } from "@/lib/fonts";

// Client logos from the Figma mobile frame: each sits in a 40px-high chip
const LOGOS = [
  {
    src: "/Images/hero/vwu.webp",
    alt: "Client logo",
    w: 39,
    h: 39,
    chip: "w-[64px]",
  },
  {
    src: "/Images/hero/voltas.webp",
    alt: "Voltas",
    w: 50,
    h: 50,
    chip: "w-[64px]",
  },
  { src: "/Images/hero/tvs.webp", alt: "TVS", w: 52, h: 53, chip: "px-[6px]" },
  {
    src: "/Images/hero/tata.webp",
    alt: "Tata Electronics",
    w: 54,
    h: 54,
    chip: "w-[64px]",
  },
];

const STATS = [
  {
    value: "200",
    suffix: "+",
    label: "Projects",
    suffixClass: "text-[#C4161C]",
  },
  {
    value: "18",
    suffix: "+",
    label: "years Experience",
    suffixClass: "text-[#CC000A]",
  },
  {
    value: "40,000 ",
    suffix: "MT",
    label: "Annual Production",
    suffixClass: "text-[#C4161C]",
  },
  {
    value: "175",
    suffix: "+",
    label: "Engineering Team",
    suffixClass: "text-[#C4161C]",
  },
];

/** Phone-only hero, built from the 390px Figma mobile frame. */
export default function BlueprintHeroMobile() {
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden bg-[#060606] text-white`}
    >
      {/* BACKGROUND: sunset steel frame, dark overlay, fade-to-black, radial vignette */}
      <div className="pointer-events-none absolute top-[419px] bottom-0 left-1/2 w-[505px] -translate-x-1/2">
        <Image
          src="/Images/hero/m-bg.webp"
          alt=""
          fill
          sizes="505px"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[284px] bottom-0 bg-[rgba(15,15,15,0.4)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-[1690px] w-[1028px] -translate-x-1/2">
        <Image
          src="/Images/hero/m-fade.webp"
          alt=""
          fill
          sizes="1028px"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute top-0 -bottom-[43px] left-1/2 w-[1017px] -translate-x-1/2">
        <Image
          src="/Images/hero/m-radial.svg"
          alt=""
          fill
          className="object-fill"
        />
      </div>

      <div className="relative z-10 flex w-full flex-col pb-[24px]">
        {/* NAVBAR (sits in the 44px strip above the Figma content) */}
        <header className="flex h-[44px] items-center justify-between px-5">
          <div className="relative h-[28px] w-[80px] shrink-0">
            <Image
              src="/Images/hero/logo-mekark.webp"
              alt="Mekark"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <EnquiryFormButton className="flex items-center justify-center rounded-[8px] bg-[#C4161C] px-[12px] py-[6px] text-[12px] leading-[normal] font-semibold whitespace-nowrap text-[#F5F5F5]">
            Get Free Quote
          </EnquiryFormButton>
        </header>

        {/* HEADLINE + IMAGE */}
        <div className="relative h-[299px] w-full">
          <div className="absolute top-[15px] left-5 flex max-w-[calc(100%-40px)] items-center gap-[8px] rounded-full border border-solid border-white/20 px-[12px] py-[6px]">
            <span className="size-[8px] shrink-0 rounded-full bg-[#E40015]" />
            <p className="text-[10px] leading-[16px] font-medium">
              FROM DESIGN TO HANDOVER | ONE TEAM | 150 DAYS
            </p>
          </div>

          <div className="absolute bottom-0 left-0 h-[240px] w-full overflow-hidden bg-[#060606]">
            <div className="absolute inset-x-0 bottom-0 h-[220px]">
              <Image
                src="/Images/hero/m-hero.webp"
                alt="Industrial warehouse interior"
                fill
                fetchPriority="high"
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 -top-px h-[91px] bg-[linear-gradient(180deg,#060606_0%,#202020_45.616%,rgba(6,6,6,0)_76.212%)]" />
            <div className="absolute inset-x-0 bottom-0 h-[61px] bg-[linear-gradient(181.565deg,rgba(30,30,30,0)_1.0095%,#1E1E1E_99.312%)]" />

            <h2 className="absolute top-[10px] left-5 w-[350px] max-w-[calc(100%-40px)] text-[22px] leading-[24px] font-semibold">
              Build Your PEB Industrial Warehouse
            </h2>

            <div className="absolute top-[206px] left-[-1px] flex h-[23px] w-[112px] items-center bg-[#C4161C] pl-5">
              <p className="text-[16px] leading-[normal] font-semibold whitespace-nowrap">
                in 150 Days
              </p>
            </div>
            <p className="absolute top-[206px] left-[122px] flex h-[23px] items-center text-[16px] leading-[normal] font-semibold whitespace-nowrap">
              not 9-12 months.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[13px] px-5 pt-[12px]">
          {/* DESCRIPTION */}
          <p className="w-full text-[14px] leading-[normal] font-normal text-[#F3F3F3]">
            From planning to handover, Mekark is a leading warehouse
            construction company specializing in PEB warehouse construction,
            steel warehouse construction, industrial warehouse construction,
            turnkey warehouse construction, and pre-engineered warehouse
            buildings across South India.
          </p>

          {/* HIGHLIGHTS */}
          <ul className="flex w-full flex-col gap-[6px]">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-[8px] px-[12px]">
                <Image
                  src="/Images/hero/m-chevron.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="size-[15px] shrink-0"
                />
                <span className="text-[12px] leading-[20px] text-white/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* TRUSTED ACROSS INDIA */}
          <div
            className="flex w-full flex-col items-start gap-[16px] rounded-[10px] px-[16px] py-[24px]"
            style={{
              backgroundImage:
                "linear-gradient(175.658deg, #08090A 1.2889%, #654528 91.175%)",
            }}
          >
            <p className="text-[14px] leading-[20px] font-semibold text-[#ED1D23] uppercase">
              Trusted Across India
            </p>
            <div className="flex w-full flex-wrap gap-x-[18px] gap-y-[8px]">
              {LOGOS.map((logo) => (
                <div
                  key={logo.src}
                  className={`flex h-[40px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-[#F9F6F7] ${logo.chip}`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                    sizes="54px"
                    className="shrink-0 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="grid w-full grid-cols-2 gap-[12px]">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start justify-center gap-[4px] rounded-[10px] border border-solid border-white/[0.08] bg-[#1A1A1A] px-[20px] py-[12px] whitespace-nowrap"
              >
                <p className="text-[24px] leading-[normal] font-extrabold">
                  <span className="text-white">{stat.value}</span>
                  <span className={stat.suffixClass}>{stat.suffix}</span>
                </p>
                <p className="text-[10px] leading-[normal] font-semibold text-[#9A9A9A] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FORM + CTAs */}
        <div className="flex w-full flex-col items-center gap-[16px] px-[36px] py-[24px]">
          <HeroMobileForm />

          <div className="flex w-full max-w-[311px] items-start justify-center gap-[14px]">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-[140px] items-center justify-center gap-[8px] rounded-full bg-white px-[20px] py-[14px]"
            >
              <span className="text-[14px] leading-[20px] font-bold whitespace-nowrap text-[#E5091F]">
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
              className="flex w-[140px] items-center justify-center gap-[8px] rounded-full border border-solid border-white px-[20px] py-[14px]"
            >
              <span className="text-[14px] leading-[20px] font-bold whitespace-nowrap">
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
      </div>
    </section>
  );
}
