"use client";

import { useState } from "react";
import { Plus, Settings, Trophy, Wrench, X } from "lucide-react";

const FAQ_GROUPS = [
  {
    title: "Technical Questions",
    icon: Wrench,
    items: [
      {
        question:
          "What is PEB warehouse construction and how is it different from conventional construction?",
        answer:
          "PEB warehouse construction (pre-engineered warehouse building) uses factory-fabricated steel components assembled on-site, unlike conventional construction that builds structure piece-by-piece on location. This is why a pre engineered warehouse building can be delivered in a fraction of the time of RCC construction.",
      },
      {
        question: "What is the warehouse construction cost per sq ft in India?",
        answer:
          "Warehouse construction cost per sq ft varies based on span width, load-bearing requirements, flooring specification, and site conditions — typically ranging across a wide band depending on whether it's a basic storage shed or a high-spec manufacturing facility. We provide a detailed, itemized quote after a technical site assessment rather than a flat number that changes later.",
      },
      {
        question:
          "Can PEB structures support heavy machinery and multi-level operations?",
        answer:
          "Yes. Our steel warehouse construction and industrial steel warehouse structures are engineered for heavy load-bearing use, including cranes, mezzanine floors, and continuous manufacturing operations — not just static storage.",
      },
      {
        question:
          "Do you handle both warehouse and shed construction under PEB technology?",
        answer:
          "Yes. As an industrial shed construction company and factory shed construction company, we deliver both warehouse shed construction and full-scale warehouse facilities using the same PEB manufacturing process — one technology, multiple building types.",
      },
      {
        question:
          "How long does a typical PEB warehouse project take from planning to handover?",
        answer:
          "With fast track warehouse construction, most projects are delivered in 150 days — compared to the industry-standard 9–12 months for conventional builds — because manufacturing happens in-house in parallel with site preparation.",
      },
    ],
  },
  {
    title: "Advantage Questions",
    icon: Settings,
    items: [
      {
        question:
          "What's the advantage of choosing PEB over RCC for industrial warehouses?",
        answer:
          "PEB structures offer faster execution, lower long-term maintenance, better resale/relocation flexibility, and greater design flexibility for manufacturing warehouse construction and factory warehouse construction compared to traditional RCC buildings.",
      },
      {
        question:
          "Why does in-house manufacturing matter when selecting a contractor?",
        answer:
          "Working with PEB warehouse contractors who manufacture in-house — rather than outsourcing fabrication — removes the biggest bottleneck in industrial warehouse construction, giving you tighter quality control and a firm delivery date instead of a shifting one.",
      },
      {
        question:
          "Is turnkey warehouse construction more cost-effective than hiring multiple vendors?",
        answer:
          "Yes. Turnkey warehouse construction consolidates design, fabrication, civil work, and project management under one contract — eliminating the coordination delays and cost overruns common when multiple vendors handle different phases separately.",
      },
    ],
  },
  {
    title: "Why Choose Mekark",
    icon: Trophy,
    items: [
      {
        question:
          "Why should we choose Mekark over other warehouse construction contractors?",
        answer:
          "Mekark is a warehouse construction company offering integrated design, in-house manufacturing, and dedicated project management — not just construction, but single-point accountability from planning to handover.",
      },
      {
        question:
          "What makes Mekark a trusted industrial warehouse construction company?",
        answer:
          "As an industrial warehouse construction company and established PEB warehouse construction company, Mekark has delivered projects for manufacturing, logistics, FMCG, and automotive clients across India, backed by consistent quality control at every stage.",
      },
      {
        question: "Do you serve businesses outside Chennai?",
        answer:
          "Yes. While we're recognized as a leading warehouse construction company in Chennai, we operate as warehouse construction contractors on projects across India, not limited to one region.",
      },
      {
        question:
          "What warehouse construction services does Mekark provide end-to-end?",
        answer:
          "Our warehouse construction services cover site assessment, PEB design, in-house steel manufacturing, civil and structural execution, and final handover — with one team accountable for the entire project, not fragmented subcontractors.",
      },
    ],
  },
];

const testimonials = [
  {
    quote: (
      <>
        “Mekark delivered our{" "}
        <span className="text-[#ED2024]">
          industrial warehouse construction
        </span>{" "}
        project ahead of schedule with complete control over quality, execution,
        and coordination.
        <br />
      </>
    ),
    initials: "OH",
    role: "Operations Head",
    company: "Logistics & Supply Chain Company",
  },

  {
    quote: (
      <>
        “We were looking for a{" "}
        <span className="text-[#ED2024]">
          warehouse design and build company
        </span>{" "}
        that could handle everything under one roof.
        <br />
        Mekark’s{" "}
        <span className="font-light text-[#A8A8A8]">
          turnkey warehouse construction services
        </span>{" "}
        and in-house manufacturing capabilities were exactly what we needed.”
      </>
    ),
    initials: "DR",
    role: "Director",
    company: "Manufacturing Company",
  },

  {
    quote: (
      <>
        “Mekark’s{" "}
        <span className="text-[#ED2024]">
          PEB warehouse construction expertise
        </span>{" "}
        and industrial warehouse turnkey solutions helped us scale our storage
        infrastructure without delays.
        <br />
      </>
    ),
    initials: "FM",
    role: "Facility Manager",
    company: "E-Commerce & Retail Company",
  },

  {
    quote: (
      <>
        “Their{" "}
        <span className="text-[#ED2024]">
          end-to-end warehouse construction services
        </span>
        , fast execution, and strong coordination made the entire project
        seamless.
        <br />
      </>
    ),
    initials: "PH",
    role: "Project Head",
    company: "FMCG Distribution Company",
  },
];

export default function FAQSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeGroup = FAQ_GROUPS[activeGroupIndex];

  const handleGroupChange = (index: number) => {
    if (index === activeGroupIndex) return;
    setActiveGroupIndex(index);
    setOpenFaqIndex(0);
  };

  return (
    <section
      className="
        overflow-hidden
        border-y
        border-[#E8E8E8]
        bg-[#FAFAFA]
      "
    >
      {/* TESTIMONIAL */}
      <div
        className="
          relative
          border-b
          border-white/10
          bg-black
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]

            px-5
            py-16

            sm:px-8

            lg:px-16
            lg:py-24
          "
        >
          {/* QUOTE MARK */}
          <div
            className="
              absolute
              left-0
              top-0

              font-manrope
              text-[180px]
              font-extrabold
              leading-none
              text-[#ED2024]/15

              lg:text-[240px]
            "
          >
            “
          </div>

          <div
            className="
              relative
              z-10
              max-w-[980px]
            "
          >
            {/* LABEL */}
            <div
              className="
                mb-5
                flex
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-[2px]
                  w-[26px]
                  bg-[#ED2024]
                "
              />

              <span
                className="
                  font-manrope
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#ED2024]
                "
              >
                What Business Leaders Say
              </span>
            </div>

            <section className="relative overflow-hidden py-16 sm:py-24">
              <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div key={activeTestimonial}>
                  {/* QUOTE */}
                  <h2
                    className="
                max-w-[950px]

                font-manrope
                text-[28px]
                font-bold
                leading-[40px]
                tracking-[-1px]
                text-white

                sm:text-[42px]
                sm:leading-[54px]

                lg:text-[46px]
                lg:leading-[50px]
                lg:tracking-[-2px]
              "
                  >
                    {testimonials[activeTestimonial].quote}
                  </h2>

                  {/* AUTHOR */}
                  <div
                    className="
                mt-10
                flex
                items-center
                gap-4
              "
                  >
                    {/* INITIALS */}
                    <div
                      className="
                  flex
                  h-[56px]
                  w-[56px]
                  items-center
                  justify-center

                  rounded-xl
                  bg-[#ED2024]

                  font-manrope
                  text-[18px]
                  font-bold
                  text-white
                "
                    >
                      {testimonials[activeTestimonial].initials}
                    </div>

                    {/* DETAILS */}
                    <div>
                      <p
                        className="
                    font-manrope
                    text-[16px]
                    font-bold
                    text-white
                  "
                      >
                        {testimonials[activeTestimonial].role}
                      </p>

                      <p
                        className="
                    mt-1

                    font-manrope
                    text-[14px]
                    font-normal
                    text-[#A8A8A8]
                  "
                      >
                        {testimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DOTS */}
                <div className="mt-12 flex items-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`
                ${
                  activeTestimonial === index
                    ? "h-[10px] w-[42px] bg-[#ED2024]"
                    : "h-[10px] w-[10px] bg-white/25"
                }

                rounded-full
              `}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT QUOTE */}
          <div
            className="
              absolute
              bottom-0
              right-10

              hidden

              font-manrope
              text-[180px]
              font-extrabold
              leading-none
              text-[#ED2024]/15

              lg:block
            "
          >
            ”
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div
        className="
          relative
          mx-auto
          max-w-[1440px]

          px-5
          py-16

          sm:px-8

          lg:px-16
          lg:py-24
        "
      >
        <div
          className="
            grid
            gap-14

            lg:grid-cols-[520px_1fr]
            lg:gap-20
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              relative
              z-0

              hidden

              overflow-visible

              lg:block
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-[-520px]
                top-[-140px]

                h-[980px]
                w-[1180px]

                xl:left-[-460px]
                xl:w-[1240px]
              "
            >
              <img
                src="/Images/FAQ 1.webp"
                alt="FAQ Illustration"
                className="
                  h-full
                  w-full
                  object-contain
                  object-left-top
                "
              />
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div className="relative z-10">
            {/* LABEL */}
            <div className="mb-10">
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-2
                "
              >
                <div
                  className="
                    h-[2px]
                    w-[26px]
                    bg-[#ED2024]
                  "
                />

                <span
                  className="
                    font-manrope
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-[#ED2024]
                  "
                >
                  FAQ
                </span>
              </div>

              <h2
                className="
                  font-manrope
                  text-[32px]
                  font-bold
                  leading-[1.1]
                  tracking-[-1px]
                  text-black

                  sm:text-[40px]

                  lg:text-[48px]
                  lg:tracking-[-2px]
                "
              >
                Frequently Asked Questions
              </h2>
            </div>

            {/* FAQ TABS + ITEMS */}
            <div className="space-y-8">
              <div
                className="
                  -mx-1
                  flex
                  gap-2
                  overflow-x-auto
                  overscroll-x-contain
                  px-1
                  pb-1
                  [-ms-overflow-style:none]
                  [scrollbar-width:none]

                  sm:flex-wrap
                  sm:overflow-visible
                  sm:gap-3
                  sm:pb-0

                  [&::-webkit-scrollbar]:hidden
                "
              >
                {FAQ_GROUPS.map((group, index) => {
                  const GroupIcon = group.icon;
                  const isActive = activeGroupIndex === index;
                  const shortTitle =
                    group.title === "Why Choose Mekark"
                      ? "Why Mekark"
                      : group.title.replace(" Questions", "");

                  return (
                    <button
                      key={group.title}
                      type="button"
                      onClick={() => handleGroupChange(index)}
                      className={`
                        flex
                        shrink-0
                        items-center
                        gap-2
                        rounded-full
                        px-3.5
                        py-2.5

                        font-manrope
                        text-[12px]
                        font-semibold
                        
                        

                        sm:px-5
                        sm:text-[14px]

                        ${
                          isActive
                            ? "bg-[#ED2024] text-white shadow-[0_8px_24px_rgba(237,32,36,0.25)]"
                            : "bg-[#EFEFEF] text-[#5F5F5F] hover:bg-[#E5E5E5]"
                        }
                      `}
                    >
                      <GroupIcon
                        className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                        strokeWidth={2.4}
                      />
                      <span className="whitespace-nowrap sm:hidden">
                        {shortTitle}
                      </span>
                      <span className="hidden whitespace-nowrap sm:inline">
                        {group.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div key={activeGroup.title} className="space-y-1">
                {activeGroup.items.map((faq, faqIndex) => {
                  const isActive = openFaqIndex === faqIndex;

                  return (
                    <div
                      key={`${activeGroup.title}-${faq.question}`}
                      className="
                          border-b
                          border-[#E8E8E8]
                        "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaqIndex(isActive ? null : faqIndex)
                        }
                        className="
                            flex
                            w-full
                            items-start
                            justify-between
                            gap-4

                            py-6
                            text-left

                            sm:items-center
                            sm:gap-5
                            sm:py-7
                          "
                      >
                        <span
                          className={`
                              min-w-0
                              flex-1

                              font-manrope
                              text-[15px]
                              leading-[24px]
                              
                              

                              sm:text-[18px]
                              sm:leading-[30px]

                              ${
                                isActive
                                  ? "font-bold text-[#ED2024]"
                                  : "font-semibold text-black"
                              }
                            `}
                        >
                          {faq.question}
                        </span>

                        <div
                          className={`
                              mt-0.5
                              flex
                              h-[34px]
                              w-[34px]
                              shrink-0
                              items-center
                              justify-center

                              rounded-full

                              sm:mt-0

                              ${
                                isActive
                                  ? "rotate-180 bg-[#ED2024] text-white"
                                  : "rotate-0 bg-[#EFEFEF] text-[#8F8F8F]"
                              }
                            `}
                        >
                          {isActive ? (
                            <X className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`
                            grid

                            ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                          `}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-8">
                            <p
                              className="
                                  max-w-[720px]

                                  font-manrope
                                  text-[15px]
                                  font-normal
                                  leading-[26px]
                                  text-[#707070]

                                  sm:text-[16px]
                                  sm:leading-[30px]
                                "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
