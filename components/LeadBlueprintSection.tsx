"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import ScaledCanvas from "@/components/ScaledCanvas";
import {
  INDUSTRIES,
  SQFT_OPTIONS,
  useBlueprintForm,
} from "@/hooks/useBlueprintForm";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 760;

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";
const PHONE_DISPLAY = "+91 97909 24754";

const INCLUDES = [
  "Layout recommendation for your industry",
  "Cost estimate range",
  "Project execution timeline",
  "PEB vs Conventional insights",
];

const fieldBase =
  "w-full rounded-[8px] border-[1.101px] border-solid bg-[#F0F0F0] text-[12px] leading-[normal] text-black outline-none placeholder:text-[#757575] focus:border-[#C4161C]";

const labelClass = "text-[14px] font-bold leading-[normal] text-[#5A5A5A]";

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
    <ul className="flex w-full flex-col gap-[18.667px] pt-[12.147px]">
      {INCLUDES.map((item) => (
        <li key={item} className="flex w-full items-center gap-[16px]">
          <span className="flex size-[37.333px] shrink-0 items-center justify-center rounded-[18.667px] bg-[rgba(196,22,28,0.5)] text-[17.333px] leading-[normal] font-semibold text-[#F9F9F9]">
            ✓
          </span>
          <span className="text-[16px] leading-[normal] font-semibold text-white sm:text-[20px] min-[1024px]:whitespace-nowrap">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ContactCards() {
  const cardBase =
    "relative flex w-full items-center rounded-[29.333px] border-[1.333px] border-solid border-black/5 bg-[#212121]";

  return (
    <div className="flex w-full flex-col gap-[21.333px] min-[1024px]:w-[593px]">
      <a href={`tel:${PHONE_NUMBER}`} className={`${cardBase} h-[120px]`}>
        <span className="absolute top-1/2 left-[26.67px] flex size-[64px] -translate-y-1/2 items-center justify-center rounded-[24px] bg-[#CC000A]">
          <Image
            src="/Images/lead/phone.svg"
            alt=""
            width={26}
            height={26}
            className="size-[26px]"
          />
        </span>

        <span className="absolute top-1/2 left-[112px] flex -translate-y-1/2 flex-col items-start">
          <span className="text-[16px] leading-[21.333px] font-bold text-[#A9A9A9] uppercase">
            Phone
          </span>
          <span className="text-[21.333px] leading-[32px] font-extrabold whitespace-nowrap text-white">
            {PHONE_DISPLAY}
          </span>
        </span>

        <Image
          src="/Images/lead/arrow.svg"
          alt=""
          width={27}
          height={26}
          className="absolute top-[45.13px] right-[26.67px] h-[26px] w-[27px]"
        />
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noreferrer"
        className={`${cardBase} gap-[21.333px] p-[28px]`}
      >
        <span className="flex size-[64px] shrink-0 items-center justify-center rounded-[24px] bg-[#CC000A]">
          <Image
            src="/Images/lead/wa.webp"
            alt=""
            width={39}
            height={39}
            className="size-[38.667px] object-cover"
          />
        </span>

        <span className="text-[22px] leading-[27.46px] font-bold whitespace-nowrap text-white sm:text-[26px]">
          WhatsApp Us Now
        </span>

        <span className="flex flex-1 justify-end">
          <Image
            src="/Images/lead/arrow.svg"
            alt=""
            width={27}
            height={26}
            className="h-[26px] w-[27px]"
          />
        </span>
      </a>
    </div>
  );
}

function BlueprintForm() {
  const {
    values,
    errors,
    statusMessage,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useBlueprintForm();

  const borderColor = (error?: string) =>
    error ? "border-[#C4161C]" : "border-[#E2E2E2]";

  const inputClass = (error?: string) =>
    `${fieldBase} ${borderColor(error)} px-[19.101px] py-[15.101px]`;

  const selectClass = (error?: string, hasValue?: boolean) =>
    `${fieldBase} ${borderColor(error)} appearance-none cursor-pointer rounded-[8.809px] py-[15.101px] pr-[36.101px] pl-[23.101px] ${
      hasValue ? "text-black" : "text-[#757575]"
    }`;

  const errorText = (error?: string) =>
    error ? (
      <p className="mt-1 text-[11px] leading-[normal] text-[#C4161C]">
        {error}
      </p>
    ) : null;

  return (
    <div className="flex w-full flex-col items-center gap-[26px] rounded-[31.931px] bg-white px-5 py-[32px] sm:px-[50px] sm:py-[44px] min-[1024px]:w-[659px]">
      <div className="flex w-full max-w-[364px] flex-col items-start gap-[6px]">
        <h3 className="w-full text-[22px] leading-[normal] font-extrabold text-[#080808] sm:text-[24px]">
          Request Your Project Blueprint
        </h3>
        <p className="w-full max-w-[337px] text-[14px] leading-[normal] font-medium text-[#9A9A9A]">
          Get a custom layout, cost range &amp; 150-day* timeline
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col items-center gap-[26px]"
      >
        <div className="flex w-full flex-col items-start">
          {/* ROW 1 */}
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[35px]">
            <div className="flex w-full flex-col items-start gap-[7px] sm:w-[262.202px]">
              <label htmlFor="lb-name" className={labelClass}>
                Full Name*
              </label>
              <input
                id="lb-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
                className={inputClass(errors.name)}
              />
              {errorText(errors.name)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-location" className={labelClass}>
                Project Location
              </label>
              <input
                id="lb-location"
                type="text"
                name="location"
                placeholder="Enter Project Location"
                value={values.location}
                onChange={handleChange}
                className={`${inputClass(errors.location)} rounded-[8.809px] pr-[36.101px] pl-[23.101px] tracking-[0.3303px]`}
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[35.237px]">
            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-phone" className={labelClass}>
                Mobile Number*
              </label>
              <input
                id="lb-phone"
                type="tel"
                name="phoneNumber"
                maxLength={15}
                placeholder="+91 98765 43210"
                value={values.phoneNumber}
                onChange={handleChange}
                className={inputClass(errors.phoneNumber)}
              />
              {errorText(errors.phoneNumber)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-email" className={labelClass}>
                Email Address
              </label>
              <input
                id="lb-email"
                type="email"
                name="email"
                placeholder="abcd@gmail.com"
                value={values.email}
                onChange={handleChange}
                className={inputClass(errors.email)}
              />
              {errorText(errors.email)}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[37px]">
            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-industry" className={labelClass}>
                Industry Type*
              </label>
              <select
                id="lb-industry"
                name="industry"
                value={values.industry}
                onChange={handleChange}
                className={selectClass(errors.industry, !!values.industry)}
              >
                <option value="">Select your Industry type</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              {errorText(errors.industry)}
            </div>

            <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
              <label htmlFor="lb-sqft" className={labelClass}>
                Project Sq. Ft*
              </label>
              <select
                id="lb-sqft"
                name="sqft"
                value={values.sqft}
                onChange={handleChange}
                className={selectClass(errors.sqft, !!values.sqft)}
              >
                <option value="">Select Sq.ft Requirement</option>
                {SQFT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errorText(errors.sqft)}
            </div>
          </div>

          {/* ROW 4 */}
          <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px]">
            <label htmlFor="lb-details" className={labelClass}>
              Requirement Details
            </label>
            <textarea
              id="lb-details"
              name="details"
              placeholder="Enter Requirement Details"
              value={values.details}
              onChange={handleChange}
              className={`${fieldBase} ${borderColor()} h-[82.6px] resize-none rounded-[8.809px] pt-[15.101px] pr-[36.101px] pb-[15.101px] pl-[23.101px]`}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[14px]">
          {statusMessage && (
            <p className="w-full rounded-[8px] border border-red-200 bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[63.867px] w-full items-center justify-center rounded-[9px] bg-[#C4161C] px-[40px] py-[20px] text-center text-[18px] leading-[normal] font-bold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
          </button>

          <p className="py-px text-center text-[12px] leading-[normal] font-medium tracking-[0.3303px] text-[#5A5A5A]">
            100% Transparent Consultation with single point project support
          </p>
        </div>
      </form>
    </div>
  );
}

const mobileField =
  "w-full rounded-[8px] border border-solid border-[#E2E2E2] bg-[#F0F0F0] pt-[13px] pb-[12px] text-[12px] leading-[normal] text-black outline-none placeholder:text-[#757575] focus:border-[#C4161C]";

function MobileBlueprintForm() {
  const {
    values,
    errors,
    statusMessage,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useBlueprintForm();

  const borderColor = (error?: string) => (error ? "!border-[#C4161C]" : "");

  const errorText = (error?: string) =>
    error ? (
      <p className="mt-1 text-[11px] leading-[normal] text-[#C4161C]">
        {error}
      </p>
    ) : null;

  const selectClass = (error?: string, hasValue?: boolean) =>
    `${mobileField} ${borderColor(error)} cursor-pointer appearance-none pr-[32px] pl-[20px] ${
      hasValue ? "text-black" : "text-[#757575]"
    }`;

  const chevron = (
    <Image
      src="/Images/lead/m-chevron2.svg"
      alt=""
      width={15}
      height={15}
      className="pointer-events-none absolute top-1/2 right-[16px] size-[15px] -translate-y-1/2 rotate-90"
    />
  );

  return (
    <div className="flex w-full flex-col gap-[16px] rounded-[24px] border border-solid border-[#E2E2E2] bg-white p-[20px] drop-shadow-[0px_24px_40px_rgba(0,0,0,0.06)]">
      <div className="flex w-full flex-col items-center justify-center gap-[8px]">
        <h3 className="w-[275px] max-w-full text-[18px] leading-[normal] font-extrabold text-[#080808]">
          Request Your Project Blueprint
        </h3>
        <p className="w-[290px] max-w-full text-[12px] leading-[normal] font-medium text-[#9A9A9A]">
          Get a custom layout, cost range &amp; 150-day* timeline
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col gap-[16px]"
      >
        <div className="flex w-full flex-col gap-[16px]">
          <div>
            <input
              type="text"
              name="name"
              aria-label="Full name"
              placeholder="Enter Your name"
              value={values.name}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.name)} px-[16px]`}
            />
            {errorText(errors.name)}
          </div>

          <input
            type="text"
            name="location"
            aria-label="Project location"
            placeholder="Enter project location"
            value={values.location}
            onChange={handleChange}
            className={`${mobileField} pr-[32px] pl-[20px] tracking-[0.3px]`}
          />

          <div>
            <input
              type="tel"
              name="phoneNumber"
              maxLength={15}
              aria-label="Mobile number"
              placeholder="Mobile Number*"
              value={values.phoneNumber}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.phoneNumber)} px-[16px]`}
            />
            {errorText(errors.phoneNumber)}
          </div>

          <div>
            <input
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Enter Email Address"
              value={values.email}
              onChange={handleChange}
              className={`${mobileField} ${borderColor(errors.email)} px-[16px]`}
            />
            {errorText(errors.email)}
          </div>

          <div>
            <div className="relative">
              <select
                name="industry"
                aria-label="Industry"
                value={values.industry}
                onChange={handleChange}
                className={selectClass(errors.industry, !!values.industry)}
              >
                <option value="">Select your Industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              {chevron}
            </div>
            {errorText(errors.industry)}
          </div>

          <div>
            <div className="relative">
              <select
                name="sqft"
                aria-label="Project square feet"
                value={values.sqft}
                onChange={handleChange}
                className={selectClass(errors.sqft, !!values.sqft)}
              >
                <option value="">Select Sq. Ft Requirement</option>
                {SQFT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {chevron}
            </div>
            {errorText(errors.sqft)}
          </div>

          <textarea
            name="details"
            rows={1}
            aria-label="Requirement details"
            placeholder="Enter requirement details"
            value={values.details}
            onChange={handleChange}
            className={`${mobileField} block h-[46px] resize-none pr-[32px] pl-[20px]`}
          />
        </div>

        <div className="flex w-full flex-col gap-[16px]">
          {statusMessage && (
            <p className="w-full rounded-[8px] border border-red-200 bg-red-50 px-3 py-2 text-[12px] font-medium text-red-700">
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-[8px] bg-[#C4161C] px-[36px] py-[14px] text-center text-[14px] leading-[normal] font-semibold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8px_16px_rgba(196,22,28,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Submitting..." : "Get My Free Quote →"}
          </button>

          <p className="w-full text-center text-[12px] leading-[normal] font-medium text-[#5A5A5A]">
            100% Transparent Consultation with single point project support
          </p>
        </div>
      </form>
    </div>
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
      className="flex w-full items-center gap-[16px] rounded-[20px] border border-solid border-black/5 bg-[#212121] px-[16px] py-[10px]"
    >
      <span className="flex size-[40px] shrink-0 flex-col items-center justify-center rounded-[8px] bg-[#CC000A]">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col items-start gap-[2px]">
        {children}
      </span>
      <span className="flex h-[28px] w-[24px] shrink-0 items-center justify-center">
        <Image
          src="/Images/lead/m-arrow.svg"
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
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] overflow-hidden bg-[#0A0A0A]"
            style={{ height: DESIGN_HEIGHT }}
          >
            <Background />

            <div className="absolute top-[calc(50%-0.77px)] left-[calc(50%-415.33px)] flex w-[593.333px] -translate-x-1/2 -translate-y-1/2 flex-col items-start gap-[19.867px]">
              <div className="w-full pb-[0.92px]">
                <Title />
              </div>
              <Includes />
              <ContactCards />
            </div>

            <div className="absolute top-[calc(50%-0.5px)] left-[1068px] -translate-y-1/2">
              <BlueprintForm />
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="relative overflow-hidden bg-[#090909] sm:hidden">
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
                  src="/Images/lead/m-phone.svg"
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
          </div>

          <MobileBlueprintForm />
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden sm:max-[1023px]:block">
        <div className="relative overflow-hidden bg-[#0A0A0A]">
          <Background />

          <div className="relative z-10 mx-auto flex max-w-[640px] flex-col gap-8 px-5 py-12 sm:px-8 sm:py-16">
            <div className="flex flex-col gap-5">
              <Title />
              <Includes />
              <ContactCards />
            </div>

            <BlueprintForm />
          </div>
        </div>
      </div>
    </section>
  );
}
