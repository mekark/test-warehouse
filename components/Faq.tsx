"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";

const FAQS = [
  {
    question:
      "What makes Mekark a trusted warehouse construction company?",
    answer:
      "Mekark is a leading warehouse construction company offering end-to-end warehouse design and build services, advanced in-house manufacturing, strict quality control, and on-time project delivery in as little as 120 days.",
  },

  {
    question:
      "Do you provide turnkey warehouse construction solutions?",
    answer:
      "Yes. We provide complete turnkey warehouse construction and industrial warehouse turnkey solutions, covering design, engineering, manufacturing, civil works, erection, roofing, and project handover.",
  },

  {
    question:
      "What industries do you serve for industrial warehouse construction?",
    answer:
      "We deliver industrial warehouse construction for logistics, e-commerce, manufacturing, FMCG, cold storage, automotive, engineering, pharmaceuticals, and other industrial sectors.",
  },

  {
    question:
      "What is included in your warehouse design and build solutions?",
    answer:
      "Our warehouse design and build company provides structural design, PEB manufacturing, civil construction, roofing, flooring, MEP coordination, and complete project execution under one contract.",
  },

  {
    question:
      "Why choose PEB warehouse construction for industrial projects?",
    answer:
      "PEB warehouse construction offers faster execution, cost efficiency, superior structural strength, and flexibility for future expansion, making it ideal for modern industrial warehouses.",
  },

  {
    question:
      "Do you provide steel warehouse construction services?",
    answer:
      "Yes. We specialize in steel warehouse construction, industrial steel warehouse buildings, and pre-engineered warehouse buildings designed for durability, speed, and long-term performance.",
  },

  {
    question:
      "Are you PEB warehouse builders and contractors?",
    answer:
      "Yes. Mekark is one of India's experienced PEB warehouse builders and PEB warehouse contractors, delivering customized warehouse solutions from concept to commissioning.",
  },

  {
    question:
      "Do you build prefabricated warehouses?",
    answer:
      "Yes. We offer prefabricated warehouse construction using high-quality PEB systems, helping businesses reduce construction time while maintaining superior quality and structural reliability.",
  },

  {
    question:
      "Do you provide warehouse construction services across India?",
    answer:
      "Yes. Our warehouse construction services are available across India, delivering customized warehouses for manufacturing, logistics, retail, e-commerce, and industrial businesses.",
  },

  {
    question:
      "Can you build warehouses for manufacturing and factory operations?",
    answer:
      "Absolutely. We specialize in manufacturing warehouse construction, factory warehouse construction, and warehouse shed construction tailored to production, storage, and distribution requirements.",
  },
];

const VISIBLE_FAQS = FAQS.slice(0, 6);

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
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          </motion.div>

          <div
            className="
              relative
              z-10
              max-w-[980px]
            "
          >
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
            </motion.div>

            <section className="relative overflow-hidden py-16 sm:py-24">
              <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.7 }}
                  >
                    {/* QUOTE */}
                    <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
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
                    </motion.h2>

                    {/* AUTHOR */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="
                mt-10
                flex
                items-center
                gap-4
              "
                    >
                      {/* INITIALS */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: -3,
                        }}
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
                      </motion.div>

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
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* DOTS */}
                <div className="mt-12 flex items-center gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`
                transition-all duration-300

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
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative

              hidden

              overflow-visible

              lg:block
            "
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              className="
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
                src="/Images/FAQ 1.png"
                alt="FAQ Illustration"
                className="
                  h-full
                  w-full
                  object-contain
                  object-left-top
                "
              />
            </motion.div>
          </motion.div>

          {/* RIGHT FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
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
            </motion.div>

            {/* FAQ ITEMS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="space-y-1"
            >
              {VISIBLE_FAQS.map((faq, index) => {
                const isActive = openFaqIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      border-b
                      border-[#E8E8E8]
                    "
                  >
                    {/* BUTTON */}
                    <button
                      onClick={() => setOpenFaqIndex(index)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-5

                        py-7
                        text-left
                      "
                    >
                      <span
                        className={`
                          font-manrope
                          text-[18px]
                          leading-[30px]

                          ${
                            isActive
                              ? "font-bold text-[#ED2024]"
                              : "font-semibold text-black"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{
                          rotate: isActive ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`
                          flex
                          h-[34px]
                          w-[34px]
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-[#ED2024] text-white"
                              : "bg-[#EFEFEF] text-[#8F8F8F]"
                          }
                        `}
                      >
                        {isActive ? (
                          <X className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </motion.div>
                    </button>

                    {/* CONTENT */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8">
                        <p
                          className="
                            max-w-[720px]

                            font-manrope
                            text-[16px]
                            font-normal
                            leading-[30px]
                            text-[#707070]
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
