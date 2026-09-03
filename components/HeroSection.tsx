"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import EnquiryFormButton from "@/components/EnquiryFormButton";
import MotionLinkButton from "@/components/MotionLinkButton";
import MotionSubmitButton from "@/components/MotionSubmitButton";
import { getPageSourceUrl } from "@/lib/sourceUrl";

const stats = [
  {
    value: "2M+",
    label: "SQ.FT DELIVERED",
  },
  {
    value: "6,00,000",
    label: "SQ.FT IN-HOUSE\nMANUFACTURING\nFACILITY",
  },
  {
    value: "40,000 t",
    label: "ANNUAL PRODUCTION",
  },
  {
    value: "120 d",
    label: "FAST-TRACK MODEL",
  },
];
const FORM_ENDPOINT = "/api/enquiry-form";

const START_TIMELINES = [
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
];

const BUDGETS = [
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
];

const THANK_YOU_URL = "https://warehouse.mekark.com/thank-you";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  location: string;
  sqft: string;
  startTimeline: string;
  budget: string;
  projectDetails: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_FORM_VALUES: FormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  location: "",
  sqft: "",
  startTimeline: "",
  budget: "",
  projectDetails: "",
};

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";

export default function HeroSection() {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [statusMessage, setStatusMessage] = useState<{
    tone: "success" | "error";
    text: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    const phoneDigits = formValues.phoneNumber.replace(/\D/g, "");

    // NAME (Mandatory)
    if (!formValues.name.trim()) {
      errors.name = "This field is required.";
    }

    // PHONE (Mandatory)
    if (!formValues.phoneNumber.trim()) {
      errors.phoneNumber = "This field is required.";
    } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      errors.phoneNumber = "Enter valid phone number.";
    }

    // SQFT (Mandatory)
    if (!formValues.sqft.trim()) {
      errors.sqft = "This field is required.";
    }

    if (!formValues.startTimeline.trim()) {
      errors.startTimeline = "Please select a project start timeline";
    }

    if (!formValues.budget.trim()) {
      errors.budget = "Please select a project budget";
    }

    // EMAIL (Optional but validate if entered)
    if (formValues.email.trim() && !EMAIL_REGEX.test(formValues.email)) {
      errors.email = "Enter valid email.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setStatusMessage({
        tone: "error",
        text: "Please correct the highlighted fields.",
      });

      return;
    }

    try {
      setIsSubmitting(true);

      setStatusMessage(null);
      const sourceDomain =
        typeof window !== "undefined" ? window.location.hostname : "";

      const sourceName = "Warehouse Division";

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          phone: formValues.phoneNumber.trim(),
          company: formValues.companyName.trim(),
          location: formValues.location.trim(),
          sqf: formValues.sqft.trim(),
          startTimeline: formValues.startTimeline.trim(),
          budget: formValues.budget.trim(),
          message: formValues.projectDetails.trim(),
          sourceName,
          sourceDomain,
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
      setStatusMessage({
        tone: "error",
        text: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (error?: string) => `
    h-[42px]
    w-full
    rounded-[8px]
    border
    ${error ? "border-[#C4161C] bg-[#FFF5F5]" : "border-[#DADADA] bg-white"}
    px-3
    text-[12px]
    text-black
    outline-none
    transition-all
    focus:border-[#ED2024]
  `;
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5]">
      {" "}
      {/* NAVBAR */}
      <header
        className="
    fixed
    top-0
    left-0
    z-50

    flex
    h-[64px]
    w-full
    items-center
    justify-between

    bg-[#F5F5F5]/95
    backdrop-blur-md

    px-4

    sm:h-[68px]
    sm:px-6

    lg:px-[140px]
  "
      >
        {/* LOGO */}
        <div
          className="
      flex
      items-center
      justify-center

      h-[38px]
      w-[88px]

      bg-[#ED2024]

      sm:h-[44px]
      sm:w-[98px]
    "
        >
          <img
            src="/Images/icon.png"
            alt="Mekark Logo"
            className="
        h-[18px]
        w-auto
        object-contain

        sm:h-[22px]
      "
          />
        </div>

        {/* BUTTON */}
        <EnquiryFormButton
          className="
      inline-flex
      items-center
      justify-center
      gap-1.5

      rounded-[8px]
      bg-[#ED2024]

      px-4
      py-2.5

      text-[12px]
      font-semibold
      text-white

      shadow-[0px_10px_24px_rgba(237,32,36,0.22)]

      transition-all
      duration-300

      hover:bg-[#cf1a20]

      sm:gap-2
      sm:rounded-[10px]
      sm:px-6
      sm:py-3
      sm:text-[15px]
    "
        >
          <span className="whitespace-nowrap">Get Free Quote</span>
        </EnquiryFormButton>
      </header>
      <div className="w-full">
        <div
          className="
            relative
            overflow-hidden

            grid
            grid-cols-1

lg:grid-cols-[58%_42%]
lg:min-h-[850px]
          "
        >
          {/* RIGHT IMAGE */}
          <div
            className="
              absolute
              top-0
              right-0

              hidden

              h-full
              w-[43%]

              overflow-hidden

              lg:block
            "
          >
            <Image
              src="/Images/Warehouse Interior.png"
              alt="Warehouse Interior"
              fill
              priority
              className="object-cover object-[center_top]"
            />

            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* LEFT SECTION */}
          <div
            className="
              relative
              z-20

              flex
              justify-end

    bg-[#F5F5F5]

    px-5
    pt-[110px]
    pb-12

    sm:px-8
    sm:pt-[120px]

    lg:pl-[120px]
    lg:pr-[70px]
    lg:py-[72px]
  "
          >
            {/* ANGLED SHAPE */}
            <div
              className="
    absolute
    top-0
    -right-[24px]
    z-10

    hidden
    h-full
    w-[52px]

    bg-[#F5F5F5]

    lg:block
  "
              style={{
                clipPath: "polygon(0 0, 100% 0, 52% 100%, 0% 100%)",
              }}
            />

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
    relative
    z-20

    w-full
    max-w-[760px]

    flex
    flex-col
    justify-start
    pt-[0px]
  "
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div
                  className="
      inline-flex
      max-w-full
      items-center
      gap-2

      rounded-full
      border
      border-[#EDB8B8]

      bg-[#FFF5F5]

      px-3
      py-2

      sm:px-4
      sm:py-2.5
    "
                >
                  {/* ICON */}
                  <div
                    className="
        flex
        h-[12px]
        w-[12px]
        shrink-0
        items-center
        justify-center

        rounded-full
        bg-[#ED2024]

        sm:h-[14px]
        sm:w-[14px]
      "
                  >
                    <span
                      className="
          text-[7px]
          font-bold
          text-white

          sm:text-[8px]
        "
                    ></span>
                  </div>

                  {/* TEXT */}
                  <span
                    className="
        font-manrope
        text-[8px]
        font-bold
        uppercase
        leading-[140%]
        tracking-[1px]
        text-[#D91F26]

        sm:whitespace-nowrap
        sm:text-[11px]
        sm:tracking-[2px]
      "
                  >
                    FROM DESIGN TO HANDOVER | ONE TEAM | 120 DAYS
                  </span>
                </div>
              </motion.div>
              {/* HEADING */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h1
                  className="
      text-[44px]
      font-bold
      leading-[105%]
      tracking-[-2px]
      text-black

      sm:text-[52px]

      lg:text-[65px]
    "
                >
                  Build Your PEB Industrial Warehouse in
                </h1>

                <div className="mt-3 flex flex-wrap items-end gap-4">
                  <span
                    className="
        relative

        text-[58px]
        font-bold
        leading-[90%]
        tracking-[-2px]
        text-[#ED2024]

        sm:text-[72px]

        lg:text-[86px]
      "
                  >
                    120 Days
                  </span>

                  <span
                    className="
        mb-3
        text-[32px]
        font-light
        leading-[100%]
        text-[#5E5E5E]

        sm:text-[34px]

        lg:text-[42px]
      "
                  >
                    not 9-12 months.
                  </span>
                </div>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="
      mt-8
      max-w-[720px]

      text-[18px]
      font-normal
      leading-[1.7]
      text-[#5F5F5F]
    "
              >
                From planning to handover, Mekark is a leading warehouse
                construction company specializing in PEB warehouse construction,
                steel warehouse construction, industrial warehouse construction,
                turnkey warehouse construction, and pre-engineered warehouse
                buildings across South India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="
    mt-6
    space-y-3
  "
              >
                {[
                  "On-Time Delivery Rate: 98%",
                  "8+ States served across India",
                  "In-House PEB Manufacturing",
                  "Single-Point Contract Accountability",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
        flex
        items-center
        gap-3
      "
                  >
                    <Check
                      className="
          h-4
          w-4
          shrink-0
          text-[#ED2024]
        "
                      strokeWidth={3}
                    />

                    <p
                      className="
          font-manrope
          text-[14px]
          font-medium
          leading-[100%]
          text-[#2A2A2A]
        "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* SMALL TEXT */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="
      mt-7

      text-[11px]
      font-bold
      uppercase
      tracking-[5px]
      text-[#1F1F1F]
    "
              >
                BUILT FOR DECISION-MAKERS WHO CAN’T AFFORD SLOW EXECUTION.
              </motion.p>
              {/* REVIEW */}
              <div
                className="
    mt-5

    inline-flex
    max-w-full
    flex-wrap
    items-center
    gap-3

    rounded-[20px]
    border
    border-[#E8E8E8]

    bg-white

    px-3
    py-2.5

    shadow-[0_10px_30px_rgba(0,0,0,0.08)]

    sm:w-fit
    sm:flex-nowrap
    sm:gap-4
    sm:rounded-full
    sm:px-4
    sm:py-3
  "
              >
                {/* LOGOS */}
                <div className="flex items-center">
                  {[
                    "/Images/bosch.png",
                    "/Images/reliance.webp",
                    "/Images/tata.png",
                    "/Images/tvs.webp",
                  ].map((logo, index) => (
                    <div
                      key={index}
                      className="
          -ml-1.5
          first:ml-0

          h-[34px]
          w-[34px]

          overflow-hidden
          rounded-full

          border-2
          border-white

          bg-white

          shadow-[0_4px_12px_rgba(0,0,0,0.08)]

          sm:-ml-2
          sm:h-[42px]
          sm:w-[42px]
        "
                    >
                      <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="
            h-full
            w-full
            object-cover
          "
                      />
                    </div>
                  ))}
                </div>

                {/* RIGHT CONTENT */}
                <div>
                  {/* STARS */}
                  <div
                    className="
        flex
        items-center
        gap-1
      "
                  >
                    <span className="text-[15px] text-[#FFB800] sm:text-[18px]">
                      ★
                    </span>
                    <span className="text-[15px] text-[#FFB800] sm:text-[18px]">
                      ★
                    </span>
                    <span className="text-[15px] text-[#FFB800] sm:text-[18px]">
                      ★
                    </span>
                    <span className="text-[15px] text-[#FFB800] sm:text-[18px]">
                      ★
                    </span>
                    <span className="text-[15px] text-[#FFB800] sm:text-[18px]">
                      ★
                    </span>

                    <span
                      className="
          ml-1

          font-manrope
          text-[15px]
          font-extrabold
          leading-none
          text-black

          sm:ml-2
          sm:text-[18px]
        "
                    >
                      4.7/5
                    </span>
                  </div>

                  {/* TEXT */}
                  <p
                    className="
        mt-[2px]

        font-manrope
        text-[11px]
        font-semibold
        leading-[120%]
        text-[#5F5F5F]

        sm:mt-[3px]
        sm:text-[13px]
      "
                  >
                    Trusted by Industrial Clients
                  </p>
                </div>
              </div>
              {/* MOBILE FORM */}
              <div className="mt-8 block lg:hidden">
                <div
                  className="
      relative
      z-20

      w-full

      rounded-[22px]

      border
      border-[#E2E2E2]

      bg-[rgba(255,255,255,0.92)]

      px-5
      pt-6
      pb-6

      shadow-[0px_18px_60px_rgba(0,0,0,0.08)]

      backdrop-blur-md
    "
                >
                  {/* TITLE */}
                  <h2 className="text-[16px] font-bold text-[#111111]">
                    Connect with a Warehouse Expert
                  </h2>

                  <p className="mt-2 text-[11px] text-[#7A7A7A]">
                    Plan your warehouse project with expert support for design,
                    execution, and delivery.
                  </p>

                  {/* FORM */}
                  <form
                    className="mt-4 space-y-[10px]"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* NAME */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Name*
                      </label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.name)}
                      />

                      {formErrors.name && (
                        <p className="mt-1 text-[11px] text-[#C4161C]">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.email)}
                      />

                      {formErrors.email && (
                        <p className="mt-1 text-[11px] text-[#C4161C]">
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Phone Number*
                      </label>

                      <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Enter Your Number"
                        maxLength={10}
                        value={formValues.phoneNumber}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.phoneNumber)}
                      />

                      {formErrors.phoneNumber && (
                        <p className="mt-1 text-[11px] text-[#C4161C]">
                          {formErrors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* COMPANY */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Company Name
                      </label>

                      <input
                        type="text"
                        name="companyName"
                        placeholder="Enter Your Company"
                        value={formValues.companyName}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.companyName)}
                      />
                    </div>

                    {/* LOCATION */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Location
                      </label>

                      <input
                        type="text"
                        name="location"
                        placeholder="Enter Your Location"
                        value={formValues.location}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.location)}
                      />
                    </div>

                    {/* SQFT */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Square Feet*
                      </label>

                      <select
                        name="sqft"
                        value={formValues.sqft}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.sqft)}
                      >
                        <option value="">Choose Your (Sq.Ft.)</option>
                        <option value="10,000-20,000">10,000 - 20,000</option>
                        <option value="20,000-30,000">20,000 - 30,000</option>
                        <option value="30,000-50,000">30,000 - 50,000</option>
                        <option value="50,000+">50,000+</option>
                      </select>

                      {formErrors.sqft && (
                        <p className="mt-1 text-[11px] text-[#C4161C]">
                          {formErrors.sqft}
                        </p>
                      )}
                    </div>

                    {/* START TIMELINE */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Project Start Timeline *
                      </label>

                      <select
                        name="startTimeline"
                        value={formValues.startTimeline}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.startTimeline)}
                      >
                        <option value="">Select timeline</option>
                        {START_TIMELINES.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>

                      {formErrors.startTimeline && (
                        <p className="mt-1 text-[11px] text-[#C4161C]">
                          {formErrors.startTimeline}
                        </p>
                      )}
                    </div>

                    {/* BUDGET */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Project Budget *
                      </label>

                      <select
                        name="budget"
                        value={formValues.budget}
                        onChange={handleInputChange}
                        className={inputClass(formErrors.budget)}
                      >
                        <option value="">Select budget range</option>
                        {BUDGETS.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>

                      {formErrors.budget && (
                        <p className="mt-1 text-[11px] text-[#C4161C]">
                          {formErrors.budget}
                        </p>
                      )}
                    </div>

                    {/* PROJECT DETAILS */}
                    <div>
                      <label className="mb-1 block text-[10px] font-medium text-[#444]">
                        Project Details
                      </label>

                      <textarea
                        name="projectDetails"
                        rows={4}
                        placeholder="Enter Project Details"
                        value={formValues.projectDetails}
                        onChange={handleInputChange}
                        className="
            w-full
            rounded-[8px]
            border
            border-[#DADADA]
            bg-white
            px-3
            py-3
            text-[12px]
            text-black
            outline-none
            transition-all
            focus:border-[#ED2024]
          "
                      />
                    </div>

                    {/* STATUS */}
                    {statusMessage && (
                      <div
                        className={`
            rounded-[8px]
            border
            px-3
            py-2
            text-[11px]
            font-medium
            ${
              statusMessage.tone === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }
          `}
                      >
                        {statusMessage.text}
                      </div>
                    )}

                    {/* BUTTON */}
                    <MotionSubmitButton
                      type="submit"
                      isSubmitting={isSubmitting}
                      className="
          mt-3
          h-[48px]
          w-full
          rounded-[8px]
          bg-[#ED2024]
          text-[12px]
          font-semibold
          text-white
          shadow-[0px_12px_30px_rgba(237,32,36,0.18)]
          transition-all
          duration-300
          hover:bg-[#cf1a20]
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Discuss Your Warehouse Project →"}
                    </MotionSubmitButton>

                    <p
                      className="
          mt-2
          text-center

          font-manrope
          text-[12px]
          font-medium
          leading-[140%]
          text-[#6B6B6B]
        "
                    >
                      100% transparent consultation with single-point project
                      support.
                    </p>
                  </form>
                </div>
              </div>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="
    mt-10

    flex
    flex-col
    gap-4

    sm:flex-row
  "
              >
                {/* CALL US */}
                <MotionLinkButton
                  href={`tel:${PHONE_NUMBER}`}
                  className="
        w-full
        sm:w-auto

        inline-flex
        h-[58px]
        w-full

        items-center
        justify-center

        rounded-[10px]
        border
        border-[#1F1F1F]

        bg-white

        px-8

        text-[15px]
        font-semibold
        text-[#1F1F1F]

        shadow-[0px_12px_30px_rgba(0,0,0,0.08)]

        transition-all
        duration-300

        hover:scale-[1.02]
        hover:bg-[#1F1F1F]
        hover:text-white

        sm:w-[260px]
      "
                >
                  Call Us →
                </MotionLinkButton>

                {/* WHATSAPP */}
                <MotionLinkButton
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    WHATSAPP_MESSAGE,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
        w-full
        sm:w-auto

        inline-flex
        h-[58px]
        w-full

        items-center
        justify-center

        rounded-[10px]
        bg-[#ED2024]

        px-8

        text-[15px]
        font-semibold
        text-white

        shadow-[0px_12px_30px_rgba(237,32,36,0.28)]

        transition-all
        duration-300

        hover:scale-[1.02]
        hover:bg-[#cf1a20]

        sm:w-[260px]
      "
                >
                  WhatsApp Us →
                </MotionLinkButton>
              </motion.div>

              {/* DIVIDER */}
              <div
                className="
      mt-14

      h-[1px]

      w-full
      max-w-[620px]

      bg-[#DADADA]
    "
              />

              {/* STATS */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
                className="
      mt-6

      grid
      grid-cols-2

      gap-x-3
      gap-y-8

      sm:grid-cols-4

      lg:max-w-[720px]
    "
              >
                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 40,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                  >
                    {/* VALUE */}
                    <h3
                      className="
            flex
            items-start

            font-[700]
            font-manrope

            leading-[100%]
            tracking-[-1px]
            text-black

            text-[28px]

            lg:text-[34px]
          "
                    >
                      {item.value.includes("+") ? (
                        <>
                          {item.value.replace("+", "")}
                          <span className="text-[#ED2024]">+</span>
                        </>
                      ) : item.value.includes("t") ? (
                        <>
                          {item.value.replace("t", "")}
                          <span className="text-[#ED2024]">t</span>
                        </>
                      ) : item.value.includes("d") ? (
                        <>
                          {item.value.replace("d", "")}
                          <span className="text-[#ED2024]">d</span>
                        </>
                      ) : (
                        item.value
                      )}
                    </h3>

                    {/* LABEL */}
                    <p
                      className="
            mt-3
            whitespace-pre-line

            text-[10px]
            font-semibold
            uppercase

            leading-[120%]
            tracking-[0.8px]

            text-[#8A8A8A]

            lg:text-[11px]
          "
                    >
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div
            className="
    hidden
    lg:flex

    relative
    z-20

    items-start
    justify-center

    min-h-[850px]

    lg:pt-[175px]

    px-5
    py-12

    lg:justify-start
    lg:pl-[70px]
    lg:pr-[80px]
    lg:px-0
    lg:py-0
  "
          >
            {/* MOBILE IMAGE */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src="/Images/Warehouse Interior.png"
                alt="Warehouse Interior"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* FORM CARD */}
            <div
              className="
                relative
                z-20

                w-full

lg:w-[500px]
lg:min-h-[680px]

                rounded-[22px]

                border
                border-[#E2E2E2]

                bg-[rgba(226,226,226,0.9)]

                px-[34px]
                pt-[31px]
                pb-[31px]

                shadow-[0px_18px_60px_rgba(0,0,0,0.06)]

                backdrop-blur-md
              "
            >
              {/* TITLE */}
              <h2
                className="
                  text-[16px]
                  font-bold
                  text-[#111111]
                "
              >
                Connect with a Warehouse Expert{" "}
              </h2>

              <p
                className="
                  mt-2
                  text-[11px]
                  text-[#7A7A7A]
                "
              >
                Plan your warehouse project with expert support for design,
                execution, and delivery.
              </p>

              {/* FORM */}
              <form
                className="mt-3 space-y-[10px]"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Name*
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.name)}
                    />

                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.email)}
                    />

                    {formErrors.email && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* PHONE */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Phone Number*
                    </label>

                    <input
                      type="tel"
                      name="phoneNumber"
                      maxLength={10}
                      placeholder="Enter Your Number"
                      value={formValues.phoneNumber}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.phoneNumber)}
                    />

                    {formErrors.phoneNumber && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter Your company"
                      value={formValues.companyName}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.companyName)}
                    />

                    {formErrors.companyName && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* LOCATION */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      placeholder="Enter Your location"
                      value={formValues.location}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.location)}
                    />

                    {formErrors.location && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.location}
                      </p>
                    )}
                  </div>

                  {/* SQFT */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Square Feet*
                    </label>

                    <select
                      name="sqft"
                      value={formValues.sqft}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.sqft)}
                    >
                      <option value="">Choose Your (Sq.Ft.)</option>
                      <option value="10,000-20,000">10,000 - 20,000</option>
                      <option value="20,000-30,000">20,000 - 30,000</option>
                      <option value="30,000-50,000">30,000 - 50,000</option>
                      <option value="50,000+">50,000+</option>
                    </select>

                    {formErrors.sqft && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.sqft}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* START TIMELINE */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Project Start Timeline *
                    </label>

                    <select
                      name="startTimeline"
                      value={formValues.startTimeline}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.startTimeline)}
                    >
                      <option value="">Select timeline</option>
                      {START_TIMELINES.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>

                    {formErrors.startTimeline && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.startTimeline}
                      </p>
                    )}
                  </div>

                  {/* BUDGET */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Project Budget *
                    </label>

                    <select
                      name="budget"
                      value={formValues.budget}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.budget)}
                    >
                      <option value="">Select budget range</option>
                      {BUDGETS.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>

                    {formErrors.budget && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.budget}
                      </p>
                    )}
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div>
                  <label className="mb-1 block text-[10px] font-medium text-[#444]">
                    Project Details
                  </label>

                  <textarea
                    name="projectDetails"
                    rows={4}
                    placeholder="Enter Project Details"
                    value={formValues.projectDetails}
                    onChange={handleInputChange}
                    className="
        w-full
        rounded-[8px]
        border
        border-[#DADADA]
        bg-white
        px-3
        py-3
        text-[12px]
        text-black
        outline-none
        transition-all
        focus:border-[#ED2024]
      "
                  />
                </div>

                {/* STATUS */}
                {statusMessage && (
                  <div
                    className={`
        rounded-[8px]
        border
        px-3
        py-2
        text-[11px]
        font-medium
        ${
          statusMessage.tone === "success"
            ? "border-green-200 bg-green-50 text-green-700"
            : "border-red-200 bg-red-50 text-red-700"
        }
      `}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* BUTTON */}
                <MotionSubmitButton
                  type="submit"
                  isSubmitting={isSubmitting}
                  className="
      mt-3
      h-[48px]
      w-full
      rounded-[8px]
      bg-[#ED2024]
      text-[12px]
      font-semibold
      text-white
      shadow-[0px_12px_30px_rgba(237,32,36,0.18)]
      transition-all
      duration-300
      hover:bg-[#cf1a20]
      disabled:cursor-not-allowed
      disabled:opacity-70
    "
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Discuss Your Warehouse Project →"}
                </MotionSubmitButton>
                <p
                  className="
    mt-2
        text-center


    font-manrope
    text-[13px]
    font-medium
    leading-[100%]
    text-[#6B6B6B]
  "
                >
                  100% transparent consultation with single-point project
                  support.
                </p>
              </form>
            </div>
          </div>
        </div>
        {/* DECISION MAKER TRIGGERS */}
        <div
          className="
    relative
    overflow-hidden

    flex
    flex-col
    justify-center

    h-[124px]
    w-full

    bg-[#ED2024]
  "
        >
          {/* TOP SMALL LABEL */}
          <div
            className="
      absolute
      top-[18px]
      left-1/2
      z-20
      -translate-x-1/2
    "
          >
            <p
              className="
        whitespace-nowrap

        font-manrope
        text-[14px]
        font-bold

        leading-[20px]
        tracking-[1px]

        text-[#9F0F14]
      "
            >
              If Your Warehouse Is Delayed, Your Revenue Is Too
            </p>
          </div>

          {/* MOVING CAROUSEL */}
          <div
            className="
      relative
      mt-[6px]

      overflow-hidden
      whitespace-nowrap
    "
          >
            <div
              className="
        flex
        w-max
        items-center

        animate-[marquee_28s_linear_infinite]
      "
            >
              {[
                "DELAYED OPERATIONS = LOST REVENUE",
                "INEFFICIENT LAYOUTS = HIGHER LOGISTICS COST",
                "VENDOR DEPENDENCY = EXECUTION RISK",
                "POOR PLANNING = FUTURE EXPANSION LIMITS",

                "DELAYED OPERATIONS = LOST REVENUE",
                "INEFFICIENT LAYOUTS = HIGHER LOGISTICS COST",
                "VENDOR DEPENDENCY = EXECUTION RISK",
                "POOR PLANNING = FUTURE EXPANSION LIMITS",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
            flex
            items-center
          "
                >
                  {/* TEXT */}
                  <span
                    className="
              px-10

              whitespace-nowrap

              font-manrope
              text-[24px]
              font-[800]
              uppercase

              leading-[32px]
              tracking-[4px]

              text-white
            "
                  >
                    {item}
                  </span>

                  {/* SLASH */}
                  <span
                    className="
              px-6

              text-[48px]
              font-light
              leading-none

              text-white/80
            "
                  >
                    /
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM LABEL */}
          <div
            className="
      absolute
      bottom-[16px]
      left-1/2
      z-20
      -translate-x-1/2
    "
          >
            <p
              className="
        whitespace-nowrap

        font-manrope
        text-[14px]
        font-bold

        leading-[20px]
        tracking-[1px]

        text-[#9F0F14]
      "
            >
              Mekark eliminates all four — with a single turnkey execution model
            </p>
          </div>
        </div>
        {/* TRUSTED BRANDS SECTION */}
        <section
          className="
    w-full
    bg-[#F5F5F5]

    px-5
    py-[28px]

    sm:px-8
    sm:py-[36px]

    lg:px-[120px]
    lg:py-[44px]
  "
        >
          <div
            className="
      mx-auto
      flex
      w-full
      max-w-[1440px]
      flex-col
      items-center
      gap-8

      lg:flex-row
      lg:items-center
      lg:justify-between
      lg:gap-12
    "
          >
            {/* LEFT CONTENT */}
            <div
              className="
        w-full
        max-w-[420px]
        shrink-0

        text-center

        lg:w-[420px]
        lg:text-left
      "
            >
              <h2
                className="
          font-manrope
          text-[28px]
          font-semibold
          leading-[38px]
          tracking-[0.01em]
          text-black

          sm:text-[34px]
          sm:leading-[46px]

          lg:text-[38px]
          lg:leading-[52px]
        "
              >
                Trusted by businesses
                <br />
                that run on timelines,
                <br />
                <span className="font-normal text-[#5E5E66]">
                  not promises.
                </span>
              </h2>
            </div>

            {/* RIGHT: LOGOS + CAPTION */}
            <div
              className="
        flex
        w-full
        flex-col
        items-center
        gap-5

        lg:w-auto
        lg:min-w-0
        lg:flex-1
        lg:items-end
      "
            >
              <div
                className="
          grid
          w-full
          grid-cols-2
          items-center
          justify-items-center
          gap-x-6
          gap-y-6

          sm:grid-cols-3

          lg:flex
          lg:w-auto
          lg:flex-nowrap
          lg:items-center
          lg:justify-end
          lg:gap-8
          xl:gap-10
        "
              >
                <img
                  src="Images/agile.webp"
                  alt="Agile"
                  className="h-[44px] w-auto object-contain sm:h-[52px] lg:h-[64px]"
                />
                <img
                  src="Images/bosch.png"
                  alt="Bosch"
                  className="h-[40px] w-auto object-contain sm:h-[48px] lg:h-[60px]"
                />
                <img
                  src="Images/tata.png"
                  alt="Tata"
                  className="h-[44px] w-auto object-contain sm:h-[52px] lg:h-[64px]"
                />
                <img
                  src="Images/reliance.webp"
                  alt="Reliance"
                  className="h-[44px] w-auto object-contain sm:h-[52px] lg:h-[64px]"
                />
                <img
                  src="Images/tvs.webp"
                  alt="TVS"
                  className="h-[44px] w-auto object-contain sm:h-[52px] lg:h-[64px]"
                />
                <img
                  src="Images/blue-star.png"
                  alt="Blue Star"
                  className="h-[24px] w-auto object-contain sm:h-[30px] lg:h-[36px]"
                />
              </div>

              <p
                className="
          max-w-[320px]
          text-center
          font-manrope
          text-[14px]
          font-normal
          leading-[22px]
          text-[#5E5E66]

          sm:max-w-[520px]
          sm:text-[16px]
          sm:leading-[26px]

          lg:max-w-none
          lg:whitespace-nowrap
          lg:text-right
          lg:text-[22px]
          lg:leading-[32px]
        "
              >
                Chosen by companies that need reliable warehouse construction in
                Chennai and across India.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
