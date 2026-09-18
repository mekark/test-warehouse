"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import EnquiryFormButton from "@/components/EnquiryFormButton";

const REASONS = [
  {
    value: "5X",
    text: "Faster Project Planning & Execution Speed",
  },
  {
    value: "100%",
    text: "Turnkey EPC Project Responsibility",
  },
  {
    value: "200+",
    text: "Industrial & Warehouse Projects Delivered",
  },
  {
    value: "90%",
    text: "Quality & Safety Compliance Standards",
  },
  {
    value: "40k+",
    text: "Production Capacity",
  },
  {
    value: "18+",
    text: "Years Industrial Construction Excellence",
  },
];

const STATS = [
  {
    value: "4.7/5",
    text: "Client Satisfaction & Trust Score",
    dark: false,
    wide: false,
  },
  {
    value: "95%",
    text: "Repeat Client Partnerships",
    dark: true,
    wide: false,
  },
  {
    value: "100%",
    text: "Transparent Project Planning & Execution",
    dark: false,
    wide: true,
  },
  {
    value: "200+",
    text: "Industrial & Warehouse Facilities Delivered",
    dark: true,
    wide: false,
  },
  {
    value: "99%",
    text: "Quality & Safety Compliance Standards",
    dark: false,
    wide: false,
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        w-full
        bg-[#ED2024]
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1440px]
          grid-cols-1

          lg:grid-cols-2
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            bg-[#F3F3F3]
            px-6
            py-14

            sm:px-10

            lg:px-16
            lg:py-20
          "
        >
          {/* Heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                font-manrope
                text-[40px]
                font-light
                leading-[90%]
                text-[#7D7D7D]

                sm:text-[56px]
              "
            >
              Top 6 Reasons
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="
                mt-2

                font-manrope
                text-[42px]
font-semibold                leading-[92%]
                text-black

                sm:text-[70px]
              "
            >
              Why Industries
              <br />
              Choose <span className="text-[#ED2024]">Mekark</span>
            </motion.h2>
          </div>

          {/* List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="
              mt-10
              space-y-0
            "
          >
            {REASONS.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -40,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                transition={{
                  duration: 0.6,
                }}
                whileHover={{
                  x: 6,
                }}
                className="
                  flex
                  items-center
                  gap-4

                  border-b
                  border-[#D7D7D7]

                  py-5
                "
              >
                {/* Icon + Number */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUp
                      className="
                        h-8
                        w-8
                        text-[#19B600]
                      "
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  <span
                    className="
                      min-w-[70px]

                      font-manrope
                      text-[28px]
                      font-bold
                      leading-none
                      text-black
                    "
                  >
                    {item.value}
                  </span>
                </div>

                {/* Text */}
                <p
                  className="
                    font-manrope
                    text-[15px]
                    font-medium
                    leading-[160%]
                    text-[#1A1A1A]

                    sm:text-[18px]
                  "
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <EnquiryFormButton
            className="
              mt-8
              inline-flex
              items-center
              gap-2

              font-manrope
              text-[16px]
              font-bold
              text-[#FF2B2B]

              transition-all
              duration-300

              hover:gap-3
            "
          >
            Engineering Industrial Growth
            <ArrowRight className="h-4 w-4" />
          </EnquiryFormButton>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            bg-[#ED2024]
            px-6
            py-14

            sm:px-10

            lg:px-12
            lg:py-20
          "
        >
          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              max-w-[520px]

              font-manrope
              text-[34.9px]
              font-bold
              leading-[38.39px]
              tracking-[0px]
              text-black
            "
          >
            Our Client Success
            <br />
            Drives Our Growth
          </motion.h3>

          {/* Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="
              mt-10
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2
            "
          >
            {STATS.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.96,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.6,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className={`
                  rounded-[24px]
                  p-6

                  transition-all
                  duration-300

                  ${
                    item.dark
                      ? "bg-[#2A0500] text-white"
                      : "bg-[#F5F5F5] text-black"
                  }

                  ${item.wide ? "sm:col-span-2" : ""}
                `}
              >
                {/* Number */}
                <h4
                  className="
    font-manrope
    text-[52px]
    font-semibold
    leading-[73.17px]
    tracking-[0%]

    sm:text-[70px]
  "
                >
                  {item.value.includes("%") ? (
                    <>
                      <CountUp
                        end={Number(item.value.replace("%", ""))}
                        duration={2.2}
                        enableScrollSpy
                        scrollSpyOnce
                      />

                      <span
                        className={
                          item.dark ? "text-[#ED2024]" : "text-[#2A0500]"
                        }
                      >
                        %
                      </span>
                    </>
                  ) : item.value.includes("+") ? (
                    <>
                      <CountUp
                        end={Number(item.value.replace("+", ""))}
                        duration={2.2}
                        enableScrollSpy
                        scrollSpyOnce
                      />

                      <span
                        className={
                          item.dark ? "text-[#ED2024]" : "text-[#2A0500]"
                        }
                      >
                        +
                      </span>
                    </>
                  ) : item.value.includes("/") ? (
                    item.value
                  ) : (
                    <CountUp
                      end={Number(item.value)}
                      duration={2.2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </h4>

                {/* Content */}
                <p
                  className="
                    mt-3
                    max-w-[340px]

                    font-manrope
                    text-[16px]
                    font-normal
                    leading-[22.4px]
                    tracking-[0%]
                  "
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
