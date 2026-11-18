import Image from "next/image";
import type { ReactNode } from "react";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";
import {
  BlueprintForm,
  MobileBlueprintForm,
} from "@/components/LeadBlueprintForms";
import { assetUrl } from "@/lib/assetPrefix";
import ShowAt from "@/components/ShowAt";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 864;

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "+919790924754";
const PHONE_DISPLAY = "+91 97909 24754";

const INCLUDES = [
  "Layout recommendation for your industry",
  "Cost estimate range",
  "Project execution timeline",
  "PEB vs Conventional insights",
];

// Office locations (same copy as the PEB landing page CTA).
const OFFICES = [
  {
    city: "Chennai · HQ",
    address:
      "5th Floor, Polyhose Towers, Anna Salai, Little Mount, Guindy, Chennai, TN 600032",
  },
  {
    city: "Bangalore",
    address:
      "22nd Cross Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
  },
  {
    city: "Delhi",
    address:
      "Awfis, Mohan Cooperative, Ground Floor, 1st and 2nd Floor, A - 24/9, Mohan Co-operative Industrial Estate, Mathura Road, Saidabad Mohan C, Block B-1, Badarpur, New Delhi, Delhi",
  },
  {
    city: "Mumbai",
    address:
      "Parinee Crescenzo, 1st Floor, 1B-102, Kautilya Bhawan-2, BKC, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
  },
  {
    city: "Kolkata",
    address:
      "5th Floor, 83, Shyama Prasad Mukherjee Rd, Devi Market, Manoharpukur, Kalighat, Kolkata, West Bengal - 700026",
  },
];

// Desktop (3 columns): the tall Delhi entry spans two rows so Mumbai and
// Kolkata sit right under Chennai and Bangalore.
const OFFICE_SLOT = [
  "",
  "",
  "min-[1024px]:col-start-3 min-[1024px]:row-span-2 min-[1024px]:row-start-1",
  "min-[1024px]:col-start-1 min-[1024px]:row-start-2",
  "min-[1024px]:col-start-2 min-[1024px]:row-start-2",
];

function Title() {
  return (
    <h2 className="text-[40px] leading-[1.05] font-extrabold tracking-[-1.5px] text-white sm:text-[52px] min-[1024px]:w-[712px] min-[1024px]:text-[66px]! min-[1024px]:leading-[65px]! min-[1024px]:tracking-[-2.6667px]!">
      Get Your <span className="text-[#ED2024]">Warehouse Project</span>{" "}
      Blueprint
    </h2>
  );
}

function Includes() {
  return (
    <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {INCLUDES.map((item) => (
        <li
          key={item}
          className="flex w-full items-center gap-[14px] rounded-[20px] border border-solid border-white/10 bg-white/[0.06] px-[20px] py-[14px] min-[1024px]:gap-[12px] min-[1024px]:rounded-[17px] min-[1024px]:px-[17px] min-[1024px]:py-[12px]"
        >
          <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[#C4161C] text-[15px] min-[1024px]:size-[26px] min-[1024px]:text-[13px] leading-[normal] font-semibold text-[#F9F9F9]">
            ✓
          </span>
          <span className="text-[16px] leading-[normal] font-semibold text-white min-[1024px]:text-[15px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ContactCards() {
  const cardBase =
    "flex h-[103px] w-full items-center gap-[16px] rounded-[24px] border border-solid border-black/5 bg-[#212121] px-[24px] min-[1024px]:h-[90px] min-[1024px]:gap-[14px] min-[1024px]:rounded-[21px] min-[1024px]:px-[20px] transition-colors hover:border-[#C4161C]/60 hover:bg-[#2B2B2B]";
  const iconBox =
    "flex size-[60px] shrink-0 items-center justify-center rounded-[20px] bg-[#CC000A] min-[1024px]:size-[52px] min-[1024px]:rounded-[17px]";
  const arrow = (
    <Image
      src={assetUrl("/Images/lead/arrow.svg")}
      alt=""
      width={27}
      height={26}
      className="ml-auto h-[26px] w-[27px] shrink-0 min-[1024px]:h-[22px] min-[1024px]:w-[23px]"
    />
  );

  return (
    <div className="grid w-full grid-cols-1 gap-4 min-[1024px]:grid-cols-2">
      <a href={`tel:${PHONE_NUMBER}`} className={cardBase}>
        <span className={iconBox}>
          <Image
            src={assetUrl("/Images/lead/phone.svg")}
            alt=""
            width={26}
            height={26}
            className="size-[26px] min-[1024px]:size-[23px]"
          />
        </span>
        <span className="flex flex-col items-start">
          <span className="text-[14px] leading-[20px] font-bold text-[#A9A9A9] uppercase min-[1024px]:text-[12px] min-[1024px]:leading-[16px]">
            Call Now
          </span>
          <span className="text-[22px] leading-[30px] font-extrabold whitespace-nowrap text-white min-[1024px]:text-[19px] min-[1024px]:leading-[27px]">
            {PHONE_DISPLAY}
          </span>
        </span>
        {arrow}
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        className={cardBase}
      >
        <span className={iconBox}>
          <Image
            src="/Images/lead/wa.webp"
            alt=""
            width={39}
            height={39}
            className="size-[38.667px] object-cover min-[1024px]:size-[33px]"
          />
        </span>
        <span className="text-[24px] leading-[30px] font-bold whitespace-nowrap text-white min-[1024px]:text-[21px] min-[1024px]:leading-[27px]">
          WhatsApp Us Now
        </span>
        {arrow}
      </a>
    </div>
  );
}

/** "Offices across India / Our Locations" card. Sizes shrink below 640px. */
function Offices() {
  return (
    <address className="flex w-full flex-col rounded-[20px] border border-solid border-black/5 bg-[#212121] px-4 py-4 not-italic sm:rounded-[28px] sm:p-[28px]">
      <div className="flex items-center gap-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-[#CC000A] sm:size-[60px] sm:rounded-[20px]">
          <svg
            viewBox="0 0 24 24"
            className="size-5 text-white sm:size-6"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
          </svg>
        </span>
        <span className="flex flex-col">
          <span className="text-[10px] leading-[16px] font-bold text-[#A9A9A9] uppercase sm:text-[14px] sm:leading-[20px]">
            Offices across India
          </span>
          <span className="text-[14px] leading-[24px] font-extrabold text-white sm:text-[22px] sm:leading-[30px]">
            Our Locations
          </span>
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-x-[28px] gap-y-4 border-t border-solid border-white/10 pt-3 sm:mt-4 sm:max-[1023px]:grid-cols-2 sm:pt-[20px] min-[1024px]:grid-cols-3">
        {OFFICES.map((office, index) => (
          <div
            key={office.city}
            className={`flex flex-col gap-1 ${OFFICE_SLOT[index] ?? ""}`}
          >
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#FF4D55] uppercase sm:text-[14px]">
              {office.city}
            </span>
            <span className="text-[12px] leading-[1.55] text-white/70 sm:text-[15px]">
              {office.address}
            </span>
          </div>
        ))}
      </div>
    </address>
  );
}

function MobileContactCard({
  href,
  external,
  icon,
  children,
}: {
  href: string;
  external?: boolean;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex w-full items-center gap-[16px] rounded-[20px] border border-solid border-black/5 bg-[#212121] px-[16px] py-[10px] transition-colors hover:border-[#C4161C]/60 hover:bg-[#2B2B2B]"
    >
      <span className="flex size-[40px] shrink-0 flex-col items-center justify-center rounded-[8px] bg-[#CC000A]">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col items-start gap-[2px]">
        {children}
      </span>
      <span className="flex h-[28px] w-[24px] shrink-0 items-center justify-center">
        <Image
          src={assetUrl("/Images/lead/m-arrow.svg")}
          alt=""
          width={24}
          height={26}
          className="h-[26px] w-[24px]"
        />
      </span>
    </a>
  );
}

function Background() {
  return (
    <>
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/Images/lead/bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(158.4deg,rgba(10,10,10,0.8)_0%,rgba(10,10,10,0.3)_50%,rgba(237,32,36,0.4)_100%)]" />
    </>
  );
}

export default function LeadBlueprintSection() {
  return (
    <section id="enquiry-form" className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <ShowAt show="desktop" className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-[#0A0A0A]"
            style={{ height: DESIGN_HEIGHT }}
          >
            <Background />

            <div className="absolute top-1/2 left-[147px] flex w-[870px] -translate-y-1/2 flex-col items-start gap-[20px]">
              <div className="w-full pb-[4px]">
                <Title />
              </div>
              <Includes />
              <ContactCards />
              <Offices />
            </div>

            <div className="absolute top-[calc(50%-0.5px)] left-[1068px] -translate-y-1/2">
              <BlueprintForm />
            </div>
          </div>
        </ScaledCanvas>
      </ShowAt>

      {/* MOBILE (below 640px) */}
      <ShowAt show="phone" className="relative overflow-hidden bg-[#090909] sm:hidden">
        <div className="absolute top-0 left-0 h-[601px] w-full">
          <Image
            src="/Images/lead/m-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute top-0 left-0 h-[1108px] w-full bg-gradient-to-b from-transparent to-black to-[54.327%]" />
        <div className="absolute top-[-61px] left-[180px] size-[274px] rounded-full bg-[rgba(228,0,21,0.3)] opacity-[0.93] blur-[61.667px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[390px] flex-col items-center gap-[26px] px-[20px] pt-[86px] pb-[40px]">
          <div className="flex w-full flex-col gap-[12px] px-[20px]">
            <h2 className="text-[28px] leading-[34px] font-extrabold text-white">
              Get Your <span className="text-[#ED1D23]">Warehouse Project</span>{" "}
              Blueprint
            </h2>

            {INCLUDES.map((item) => (
              <div key={item} className="flex w-full items-center gap-[16px]">
                <span className="flex size-[20px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(196,22,28,0.5)] text-[9.286px] leading-[normal] font-semibold text-[#F9F9F9]">
                  ✓
                </span>
                <span className="text-[14px] leading-[normal] font-medium whitespace-nowrap text-[#F4F4F4]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <MobileContactCard
              href={`tel:${PHONE_NUMBER}`}
              icon={
                <Image
                  src={assetUrl("/Images/lead/m-phone.svg")}
                  alt=""
                  width={24}
                  height={24}
                  className="size-[24px]"
                />
              }
            >
              <span className="text-[10px] leading-[16px] font-bold whitespace-nowrap text-[#A9A9A9] uppercase">
                Call Now
              </span>
              <span className="w-full text-[14px] leading-[24px] font-extrabold text-white">
                {PHONE_DISPLAY}
              </span>
            </MobileContactCard>

            <MobileContactCard
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
              external
              icon={
                <Image
                  src="/Images/lead/wa.webp"
                  alt=""
                  width={30}
                  height={30}
                  className="size-[30px] object-cover"
                />
              }
            >
              <span className="w-full text-[14px] leading-[24px] font-bold text-white">
                WhatsApp Us Now
              </span>
            </MobileContactCard>

            <Offices />
          </div>

          <MobileBlueprintForm />
        </div>
      </ShowAt>

      {/* TABLET (640px - 1023px) */}
      <ShowAt show="tablet" className="hidden sm:max-[1023px]:block">
        <div className="relative overflow-hidden bg-[#0A0A0A]">
          <Background />

          <div className="relative z-10 mx-auto flex max-w-[640px] flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col gap-5">
              <Title />
              <Includes />
              <ContactCards />
              <Offices />
            </div>

            <BlueprintForm />
          </div>
        </div>
      </ShowAt>
    </section>
  );
}
