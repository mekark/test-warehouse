"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    number: "01",
    title: "Feasibility Analysis",
    description: "Requirement assessment & site evaluation",
  },
  {
    number: "02",
    title: "Custom Design",
    description: "Tailored warehouse layout for your operations",
  },
  {
    number: "03",
    title: "PEB Fabrication",
    description: "100% in-house manufacturing, controlled quality",
  },
  {
    number: "04",
    title: "Civil Execution",
    description: "Foundations, flooring & structural work",
  },
  {
    number: "05",
    title: "Quality Validation",
    description: "Inspection, installation & compliance checks",
  },
  {
    number: "06",
    title: "150-Day Delivery",
    description: "Operational handover, ready to run",
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const headingContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const headingItem = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

const stepsContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const stepItem = {
  hidden: { opacity: 0, y: 48, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 110, damping: 16 },
  },
};

const mobileContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const mobileItem = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export default function OperationTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const mobileTimelineRef = useRef<HTMLDivElement>(null);

  const isTimelineInView = useInView(timelineRef, {
    once: true,
    amount: 0.25,
  });

  const isMobileTimelineInView = useInView(mobileTimelineRef, {
    once: true,
    amount: 0.15,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundShift = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-4%", "4%"],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.75],
    prefersReducedMotion ? [1, 1, 1] : [0.4, 1, 0.6],
  );

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        border-y
        border-[#E8E8E8]
        bg-white
      "
    >
      <motion.div
        aria-hidden="true"
        style={{ y: backgroundShift }}
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(237,32,36,0.06),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(237,32,36,0.04),transparent_38%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]

          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-16
          lg:py-24
        "
      >
        <motion.div
          className="text-center"
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.h2
            variants={headingItem}
            className="
              font-manrope
              text-[42px]
              font-bold
              leading-[44px]
              tracking-[-2px]
              text-black

              sm:text-[58px]
              sm:leading-[58px]

              lg:text-[72px]
              lg:leading-[74px]
            "
          >
            From Idea to Operation
          </motion.h2>

          <motion.p
            variants={headingItem}
            className="
              mt-2

              font-manrope
              text-[28px]
              font-bold
              leading-none
              text-[#C4161C]

              sm:text-[40px]

              lg:text-[48px]
            "
          >
            Fully Managed
          </motion.p>
        </motion.div>

        <div
          ref={timelineRef}
          className="
            relative
            mt-24

            hidden

            lg:block
          "
        >
          <div
            className="
              absolute
              left-0
              right-0
              top-[52px]
              h-[2px]
              bg-[#E79A9C]
            "
          />

          <motion.div
            className="
              absolute
              left-0
              top-[52px]
              z-10
              h-[2px]
              origin-left
              bg-[#ED2024]
            "
            initial={{ scaleX: 0 }}
            animate={isTimelineInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 1.6,
              ease: EASE_OUT,
              delay: 0.2,
            }}
            style={{ width: "100%" }}
          />

          <motion.div
            className="
              absolute
              left-0
              right-0
              top-[44px]
              z-20
              overflow-hidden
            "
            style={{ opacity: glowOpacity }}
          >
            <div
              className={`
                h-[14px]
                w-[50px]
                rounded-full
                bg-[#ED2024]
                blur-[12px]
                ${prefersReducedMotion ? "" : "timeline-glow"}
              `}
            />
          </motion.div>

          <motion.div
            variants={stepsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              grid
              grid-cols-6
              gap-4
            "
          >
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepItem}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                <motion.div
                  whileHover={
                    prefersReducedMotion ? undefined : { scale: 1.07, y: -4 }
                  }
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  className="
                    relative
                    z-10

                    flex
                    h-[108px]
                    w-[108px]
                    items-center
                    justify-center

                    rounded-full
                    border-[3px]
                    border-[#D9D9D9]

                    bg-[#F5F5F5]

                    transition-colors
                    duration-300

                    group-hover:border-[#ED2024]
                    group-hover:bg-white
                    group-hover:shadow-[0_12px_40px_rgba(237,32,36,0.18)]
                  "
                >
                  {!prefersReducedMotion && (
                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border-2
                        border-[#ED2024]
                      "
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1.45, opacity: [0, 0.45, 0] }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.45 + index * 0.12,
                        duration: 1.1,
                        ease: "easeOut",
                      }}
                    />
                  )}

                  <motion.span
                    className="
                      text-center
                      font-manrope
                      text-[22px]
                      font-extrabold
                      leading-[100%]
                      tracking-[0px]
                      text-[#8F8F8F]
                      transition-colors
                      duration-300
                      group-hover:text-[#ED2024]
                    "
                    initial={
                      prefersReducedMotion
                        ? false
                        : { opacity: 0, scale: 0.6 }
                    }
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.25 + index * 0.1,
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                  >
                    {step.number}
                  </motion.span>
                </motion.div>

                <motion.h3
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + index * 0.1, duration: 0.5 }}
                  className="
                    mt-8

                    font-manrope
                    text-[18px]
                    font-bold
                    leading-[26px]
                    text-[#111111]
                  "
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, y: 10 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.42 + index * 0.1, duration: 0.5 }}
                  className="
                    mt-3
                    max-w-[220px]

                    font-manrope
                    text-[14px]
                    font-normal
                    leading-[24px]
                    text-[#8C8C8C]
                  "
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          ref={mobileTimelineRef}
          variants={mobileContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="
            mt-14

            flex
            flex-col
            gap-8

            lg:hidden
          "
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={mobileItem}
              className="
                relative
                flex
                gap-5
              "
            >
              <div
                className="
                  relative
                  flex
                  flex-col
                  items-center
                "
              >
                {index !== STEPS.length - 1 && (
                  <div
                    className="
                      absolute
                      top-[72px]
                      h-full
                      w-[2px]
                      overflow-hidden
                      bg-[#E79A9C]
                    "
                  >
                    <motion.div
                      className="
                        h-full
                        w-full
                        origin-top
                        bg-[#ED2024]
                      "
                      initial={{ scaleY: 0 }}
                      animate={
                        isMobileTimelineInView ? { scaleY: 1 } : { scaleY: 0 }
                      }
                      transition={{
                        duration: prefersReducedMotion ? 0.01 : 0.55,
                        delay: 0.2 + index * 0.12,
                        ease: EASE_OUT,
                      }}
                    />
                  </div>
                )}

                <motion.div
                  whileTap={
                    prefersReducedMotion ? undefined : { scale: 0.96 }
                  }
                  className="
                    relative
                    z-10

                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center

                    rounded-full
                    border-2
                    border-[#D9D9D9]

                    bg-white
                    shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                  "
                >
                  {!prefersReducedMotion && (
                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border
                        border-[#ED2024]
                      "
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ scale: 1.3, opacity: [0, 0.35, 0] }}
                      transition={{
                        delay: 0.15 + index * 0.12,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  )}

                  <span
                    className="
                      font-manrope
                      text-[24px]
                      font-bold
                      text-[#8F8F8F]
                    "
                  >
                    {step.number}
                  </span>
                </motion.div>
              </div>

              <div className="pt-3">
                <h3
                  className="
                    font-manrope
                    text-[20px]
                    font-bold
                    leading-[28px]
                    text-black
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[280px]

                    font-manrope
                    text-[15px]
                    font-normal
                    leading-[24px]
                    text-[#8C8C8C]
                  "
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 36, filter: "blur(6px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.15 }}
          className="
            mt-20
            text-center

            lg:mt-28
          "
        >
          <p
            className="
              font-manrope
              text-[28px]
              font-semibold
              leading-[40px]
              text-[#8F8F8F]

              sm:text-[36px]

              lg:text-[52px]
              lg:leading-[64px]
            "
          >
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No follow-ups. No uncertainty.{" "}
            </motion.span>
            <motion.span
              className="text-black"
              initial={
                prefersReducedMotion ? false : { opacity: 0, x: -12 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.45,
                ease: EASE_OUT,
              }}
            >
              Just results.
            </motion.span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
