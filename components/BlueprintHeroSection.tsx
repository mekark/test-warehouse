"use client";

import Image from "next/image";
import { Inter, Manrope } from "next/font/google";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import { getPageSourceUrl } from "@/lib/sourceUrl";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

const FORM_ENDPOINT = "/api/enquiry-form";
const THANK_YOU_URL = "https://warehouse.mekark.com/thank-you";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";

const HIGHLIGHTS = [
  "On-Time Delivery Rate: 98%",
  "8+ States served across India",
  "In-House PEB Manufacturing",
  "Single-Point Contract Accountability",
];

// Logo sizes / offsets taken from the Figma frame (each sits in a 90x40 chip)
const TRUSTED_LOGOS = [
  { src: "/Images/hero/vwu.png", alt: "Client logo", size: 42 },
  { src: "/Images/hero/voltas.png", alt: "Voltas", size: 75 },
  { src: "/Images/hero/tvs.png", alt: "TVS", size: 75 },
  { src: "/Images/hero/tata.png", alt: "Tata Electronics", size: 75 },
  { src: "/Images/hero/stetter.png", alt: "Schwing Stetter", size: 75 },
  { src: "/Images/hero/srf.png", alt: "SRF", size: 75 },
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

const INDUSTRIES = [
  "Manufacturing",
  "Logistics & Warehousing",
  "FMCG",
  "Pharmaceutical",
  "Automotive",
  "E-commerce",
  "Cold Storage",
  "Other",
];

const SQFT_OPTIONS = [
  "10,000 - 20,000",
  "20,000 - 30,000",
  "30,000 - 50,000",
  "50,000+",
];

type FormValues = {
  name: string;
  location: string;
  phoneNumber: string;
  email: string;
  industry: string;
  sqft: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_FORM_VALUES: FormValues = {
  name: "",
  location: "",
  phoneNumber: "",
  email: "",
  industry: "",
  sqft: "",
  details: "",
};

// Figma frame is 1920px wide; on desktop viewports the whole section is scaled to fit
const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1018;
const DESKTOP_MIN_WIDTH = 1024;

const fieldBase =
  "w-full rounded-[8px] border-[1.101px] border-solid bg-[#F0F0F0] text-[12px] leading-[normal] text-black outline-none placeholder:text-[#757575] focus:border-[#C4161C]";

export default function BlueprintHeroSection() {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const width = document.documentElement.clientWidth;
      setScale(width >= DESKTOP_MIN_WIDTH ? width / DESIGN_WIDTH : null);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const errors: FormErrors = {};
    const phoneDigits = formValues.phoneNumber.replace(/\D/g, "");

    if (!formValues.name.trim()) errors.name = "This field is required.";

    if (!formValues.phoneNumber.trim()) {
      errors.phoneNumber = "This field is required.";
    } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      errors.phoneNumber = "Enter valid phone number.";
    }

    if (formValues.email.trim() && !EMAIL_REGEX.test(formValues.email)) {
      errors.email = "Enter valid email.";
    }

    if (!formValues.industry) errors.industry = "This field is required.";
    if (!formValues.sqft) errors.sqft = "This field is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatusMessage(null);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          phone: formValues.phoneNumber.trim(),
          location: formValues.location.trim(),
          industry: formValues.industry,
          sqf: formValues.sqft,
          message: formValues.details.trim(),
          sourceName: "Warehouse Division",
          sourceDomain:
            typeof window !== "undefined" ? window.location.hostname : "",
          sourceUrl: getPageSourceUrl(),
          pageUrl: getPageSourceUrl(),
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to submit form.");
      }

      setFormValues(INITIAL_FORM_VALUES);
      window.location.assign(THANK_YOU_URL);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const borderColor = (error?: string) =>
    error ? "border-[#C4161C]" : "border-[#E2E2E2]";

  const inputClass = (error?: string) =>
    `${fieldBase} ${borderColor(error)} px-[19.101px] py-[15.101px]`;

  const selectClass = (error?: string, hasValue?: boolean) =>
    `${fieldBase} ${borderColor(error)} appearance-none cursor-pointer pl-[23.101px] pr-[36.101px] py-[15.101px] tracking-[0.3303px] ${
      hasValue ? "text-black" : "text-[#757575]"
    }`;

  const errorText = (error?: string) =>
    error ? (
      <p className="mt-1 text-[11px] leading-[normal] text-[#FF8A8F]">
        {error}
      </p>
    ) : null;

  const labelClass = "text-[14px] font-bold leading-[normal] text-white";

  return (
    <div
      style={
        scale
          ? { height: DESIGN_HEIGHT * scale, overflow: "hidden" }
          : undefined
      }
    >
      <div
        style={
          scale
            ? {
                width: DESIGN_WIDTH,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }
            : undefined
        }
      >
        <section
          className={`${manrope.className} relative w-full overflow-hidden bg-[#060606] min-[1024px]:h-[1018px]`}
        >
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 min-[1024px]:inset-auto min-[1024px]:top-[-3px] min-[1024px]:right-[-8.3%] min-[1024px]:h-[1020px] min-[1024px]:w-[94.44%] overflow-hidden">
            <Image
              src="/Images/hero/hero-bg-sharp.webp"
              alt="Industrial warehouse interior"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover brightness-[1.6] contrast-[1.05]"
            />
          </div>

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-[#060606]/80 min-[1024px]:bg-transparent min-[1024px]:bg-[linear-gradient(to_right,#060606_24.831%,rgba(6,6,6,0.8)_42.674%,rgba(6,6,6,0)_88.021%)]" />

          {/* NAVBAR */}
          <header className="relative z-20 flex w-full items-center justify-between px-5 py-[17px] sm:px-[80px] min-[1024px]:absolute min-[1024px]:top-0 min-[1024px]:left-0">
            <div className="relative h-[34px] w-[98px] shrink-0 sm:h-[46px] sm:w-[132px]">
              <Image
                src="/Images/hero/logo-mekark.png"
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
                <div className="relative h-[45px] w-[178px] shrink-0 bg-[#ED1D23] sm:-mt-[3px] sm:h-[62px] sm:w-[239px]">
                  <p className="absolute top-[18px] left-[5px] -translate-y-1/2 font-bold whitespace-nowrap text-white sm:top-[27px]">
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
                construction company specializing in PEB warehouse construction,
                steel warehouse construction, industrial warehouse construction,
                turnkey warehouse construction, and pre-engineered warehouse
                buildings across South India.
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
            <div className="flex w-full max-w-[659px] shrink-0 flex-col items-center gap-[26px] self-center rounded-[31.931px] bg-white/10 px-5 py-[32px] shadow-[0px_26.428px_88.092px_0px_rgba(0,0,0,0.45)] backdrop-blur-[15px] sm:px-[50px] sm:py-[44px] min-[1024px]:mt-[1.08px] min-[1024px]:w-[659px]">
              <div className="flex w-full max-w-[364px] flex-col items-start gap-[6px]">
                <h3 className="w-full text-[22px] leading-[normal] font-extrabold text-white sm:text-[24px]">
                  Request Your Project Blueprint
                </h3>
                <div className="flex w-full max-w-[349.431px] flex-col items-center justify-center">
                  <p className="w-full max-w-[337px] text-[14px] leading-[normal] font-medium text-black">
                    Get a custom layout, cost range &amp; 150-day* timeline
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex w-full flex-col items-center gap-[26px]"
              >
                <div className="flex w-full flex-col items-start">
                  {/* ROW 1 */}
                  <div className="flex w-full flex-col gap-0 sm:flex-row sm:items-center sm:gap-[35px]">
                    <div className="flex w-full flex-col items-start gap-[7px] sm:w-[262.202px]">
                      <label htmlFor="bh-name" className={labelClass}>
                        Full Name*
                      </label>
                      <input
                        id="bh-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.name)}
                      />
                      {errorText(formErrors.name)}
                    </div>

                    <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
                      <label htmlFor="bh-location" className={labelClass}>
                        Project Location
                      </label>
                      <input
                        id="bh-location"
                        type="text"
                        name="location"
                        placeholder="Enter Project Location"
                        value={formValues.location}
                        onChange={handleInputChange}
                        className={`${inputClass(formErrors.location)} rounded-[8.809px] pl-[23.101px] pr-[36.101px] tracking-[0.3303px]`}
                      />
                    </div>
                  </div>

                  {/* ROW 2 */}
                  <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[35.237px]">
                    <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
                      <label htmlFor="bh-phone" className={labelClass}>
                        Mobile Number*
                      </label>
                      <input
                        id="bh-phone"
                        type="tel"
                        name="phoneNumber"
                        maxLength={15}
                        placeholder="+91 98765 43210"
                        value={formValues.phoneNumber}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.phoneNumber)}
                      />
                      {errorText(formErrors.phoneNumber)}
                    </div>

                    <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
                      <label htmlFor="bh-email" className={labelClass}>
                        Email Address
                      </label>
                      <input
                        id="bh-email"
                        type="email"
                        name="email"
                        placeholder="abcd@gmail.com"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.email)}
                      />
                      {errorText(formErrors.email)}
                    </div>
                  </div>

                  {/* ROW 3 */}
                  <div className="flex w-full flex-col sm:flex-row sm:items-center sm:gap-[37px]">
                    <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
                      <label htmlFor="bh-industry" className={labelClass}>
                        Industry Type*
                      </label>
                      <select
                        id="bh-industry"
                        name="industry"
                        value={formValues.industry}
                        onChange={handleInputChange}
                        className={`${selectClass(formErrors.industry, !!formValues.industry)} rounded-[8.809px] tracking-normal`}
                      >
                        <option value="">Select your Industry type</option>
                        {INDUSTRIES.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </select>
                      {errorText(formErrors.industry)}
                    </div>

                    <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px] sm:w-[261.339px]">
                      <label htmlFor="bh-sqft" className={labelClass}>
                        Project Sq. Ft*
                      </label>
                      <select
                        id="bh-sqft"
                        name="sqft"
                        value={formValues.sqft}
                        onChange={handleInputChange}
                        className={`${selectClass(formErrors.sqft, !!formValues.sqft)} rounded-[8.809px] tracking-normal`}
                      >
                        <option value="">Select Sq.ft Requirement</option>
                        {SQFT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errorText(formErrors.sqft)}
                    </div>
                  </div>

                  {/* ROW 4 */}
                  <div className="flex w-full flex-col items-start gap-[6.607px] pt-[14px]">
                    <label htmlFor="bh-details" className={labelClass}>
                      Requirement Details
                    </label>
                    <textarea
                      id="bh-details"
                      name="details"
                      placeholder="Enter Requirement Details"
                      value={formValues.details}
                      onChange={handleInputChange}
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

                  <p className="py-px text-center text-[12px] leading-[normal] font-medium tracking-[0.3303px] text-[#DCDCDC]">
                    100% Transparent Consultation with single point project
                    support
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
