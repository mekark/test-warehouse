"use client";

import { Check, Phone, Mail, MapPin } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import MotionSubmitButton from "@/components/MotionSubmitButton";
import { getPageSourceUrl } from "@/lib/sourceUrl";

const FEATURES = [
  "Layout recommendation for your industry",
  "Cost estimate range",
  "Project execution timeline",
  "PEB vs Conventional insights",
];

const FORM_ENDPOINT = "/api/enquiry-form";
const THANK_YOU_URL = "https://warehouse.mekark.com/thank-you";

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

export default function BlueprintSection() {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [statusMessage, setStatusMessage] = useState<{
    tone: "success" | "error";
    text: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
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
    h-[48px]
    w-full
    rounded-[10px]
    border
    ${error ? "border-[#C4161C] bg-[#FFF5F5]" : "border-[#E3E3E3] bg-[#F3F3F3]"}
    px-4
    font-manrope
    text-[15px]
    text-black
    outline-none
    
    
    focus:border-[#ED2024]
    focus:bg-white
  `;

  const labelClass =
    "mb-1.5 block font-manrope text-[14px] font-semibold text-[#555555]";

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0C0E14]
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/blueprint-section-bg.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-60"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/40 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14]/80 via-transparent to-[#ED2024]/5" />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto

          flex
          max-w-[1440px]
          flex-col
          gap-14

          px-5
          py-14

          sm:px-8
          sm:py-20

          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-16
          lg:py-24
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            max-w-[440px]
            scale-[0.88]
            origin-top-left
          "
        >
          <div className="mb-6">
            <img
              src="/Images/icon.webp"
              alt="Mekark Logo"
              className="
                h-[32px]
                w-auto

                sm:h-[40px]
              "
            />
          </div>

          <h2
            className="
              font-manrope
              text-[34px]
              font-extrabold
              leading-[36px]
              tracking-[-2px]
              text-white

              sm:text-[48px]
              sm:leading-[50px]

              lg:text-[42px]
              lg:leading-[60px]
            "
          >
            Get Your
            <span className="text-[#ED2024]"> Warehouse</span>
            <br />
            <span className="text-[#ED2024]">Project</span> Blueprint
          </h2>

          <div className="mt-8 space-y-4">
            {FEATURES.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    flex
                    h-[32px]
                    w-[32px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                    bg-[#A4282D]
                  "
                >
                  <Check
                    className="
                      h-4
                      w-4
                      text-white
                    "
                    strokeWidth={3}
                  />
                </div>

                <p
                  className="
                    font-manrope
                    text-[16px]
                    font-medium
                    leading-[24px]
                    text-white

                    sm:text-[18px]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <p
              className="
                mb-5

                font-manrope
                text-[11px]
                font-bold
                uppercase
                tracking-[5px]

                text-[#ED2024]
              "
            >
              Contact Information
            </p>

            <div className="space-y-4">
              {/* PHONE */}
              <div
                className="
                  rounded-[16px]
                  border
                  border-white/10

                  bg-[rgba(10,10,10,0.72)]

                  px-5
                  py-4

                  backdrop-blur-sm
                "
              >
                <div className="flex items-start gap-3">
                  <Phone
                    className="
                      mt-1
                      h-4
                      w-4
                      text-[#ED2024]
                    "
                    strokeWidth={2.2}
                  />

                  <div>
                    <p
                      className="
                        font-manrope
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[3px]

                        text-[#7A7A7A]
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        mt-1

                        font-manrope
                        text-[20px]
                        font-semibold
                        leading-[28px]

                        text-white
                      "
                    >
                      +91 97909 24754
                    </p>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div
                className="
                  rounded-[16px]
                  border
                  border-white/10

                  bg-[rgba(10,10,10,0.72)]

                  px-5
                  py-4

                  backdrop-blur-sm
                "
              >
                <div className="flex items-start gap-3">
                  <Mail
                    className="
                      mt-1
                      h-4
                      w-4
                      text-[#ED2024]
                    "
                    strokeWidth={2.2}
                  />

                  <div>
                    <p
                      className="
                        font-manrope
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[3px]

                        text-[#7A7A7A]
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        mt-1

                        font-manrope
                        text-[20px]
                        font-semibold
                        leading-[28px]

                        text-white
                      "
                    >
                      admin@mekark.com
                    </p>
                  </div>
                </div>
              </div>

              {/* OFFICE */}
              <div
                className="
                  rounded-[16px]
                  border
                  border-white/10

                  bg-[rgba(10,10,10,0.72)]

                  px-5
                  py-4

                  backdrop-blur-sm
                "
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    className="
                      mt-1
                      h-4
                      w-4
                      text-[#ED2024]
                    "
                    strokeWidth={2.2}
                  />

                  <div>
                    <p
                      className="
                        font-manrope
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[3px]

                        text-[#7A7A7A]
                      "
                    >
                      Office
                    </p>

                    <p
                      className="
                        mt-1

                        font-manrope
                        text-[16px]
                        font-medium
                        leading-[28px]

                        text-white
                      "
                    >
                      Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div
          id="enquiry-form"
          className="
    w-full
    max-w-[600px]
    rounded-[24px]
    bg-white
    p-5
    shadow-[0_20px_60px_rgba(0,0,0,0.35)]

    sm:p-7
    lg:p-8
  "
        >
          <h3
            className="
              font-manrope
              text-[24px]
              font-extrabold
              leading-[30px]
              text-[#111111]

              sm:text-[26px]
            "
          >
            Request Your Project Blueprint
          </h3>

          <form className="mt-5 space-y-3.5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
              {/* NAME */}
              <div>
                <label className={labelClass}>Name*</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className={inputClass(formErrors.name)}
                />

                {formErrors.name && (
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className={labelClass}>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={inputClass(formErrors.email)}
                />

                {formErrors.email && (
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
              {/* PHONE */}
              <div>
                <label className={labelClass}>Phone Number*</label>

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
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.phoneNumber}
                  </p>
                )}
              </div>

              {/* COMPANY */}
              <div>
                <label className={labelClass}>Company Name</label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="Enter Your company"
                  value={formValues.companyName}
                  onChange={handleInputChange}
                  className={inputClass(formErrors.companyName)}
                />

                {formErrors.companyName && (
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.companyName}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
              {/* LOCATION */}
              <div>
                <label className={labelClass}>Location</label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter Your location"
                  value={formValues.location}
                  onChange={handleInputChange}
                  className={inputClass(formErrors.location)}
                />

                {formErrors.location && (
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.location}
                  </p>
                )}
              </div>

              {/* SQFT */}
              <div>
                <label className={labelClass}>Square Feet*</label>

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
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.sqft}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
              {/* START TIMELINE */}
              <div>
                <label className={labelClass}>Project Start Timeline *</label>

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
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.startTimeline}
                  </p>
                )}
              </div>

              {/* BUDGET */}
              <div>
                <label className={labelClass}>Project Budget *</label>

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
                  <p className="mt-1 text-[12px] text-[#C4161C]">
                    {formErrors.budget}
                  </p>
                )}
              </div>
            </div>

            {/* PROJECT DETAILS */}
            <div>
              <label className={labelClass}>Project Details</label>

              <textarea
                name="projectDetails"
                rows={3}
                placeholder="Enter Project Details"
                value={formValues.projectDetails}
                onChange={handleInputChange}
                className="
                  min-h-[88px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#E3E3E3]
                  bg-[#F3F3F3]
                  px-4
                  py-3
                  font-manrope
                  text-[15px]
                  text-black
                  outline-none
                  
                  
                  focus:border-[#ED2024]
                  focus:bg-white
                "
              />
            </div>

            {/* STATUS */}
            {statusMessage && (
              <div
                className={`
                  rounded-[12px]
                  border
                  px-4
                  py-3
                  text-[14px]
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
                mt-2
                flex
                h-[52px]
                w-full
                items-center
                justify-center
                gap-3
                rounded-[10px]
                bg-[#D7141A]
                font-manrope
                text-[18px]
                font-bold
                text-white
                shadow-[0_10px_30px_rgba(215,20,26,0.35)]
                
                
                hover:bg-[#ED2024]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {isSubmitting ? "Submitting..." : "Submit →"}
            </MotionSubmitButton>
          </form>
        </div>
      </div>
    </section>
  );
}
