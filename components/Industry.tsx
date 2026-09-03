"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShoppingCart,
  Factory,
  Snowflake,
  Car,
  Package,
} from "lucide-react";

const industries = [
  {
    icon: Truck,
    title: "Logistics & 3PL",
    description:
      "Fast track warehouse construction built for high-throughput logistics and supply chain operations.",
    glow: true,
  },
  {
    icon: Package,
    title: "E-Commerce & Retail",
    description:
      "Turnkey warehouse construction solutions for rapid fulfillment, sorting, and dispatch operations.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description:
      "Manufacturing warehouse construction and industrial shed construction for production and machinery-heavy facilities.",
  },
  {
    icon: ShoppingCart,
    title: "FMCG & Consumer Goods",
    description:
      "PEB warehouse construction for high-volume storage and distribution operations.",
  },
  {
    icon: Snowflake,
    title: "Cold Storage & Food",
    description:
      "Steel warehouse construction with insulation-ready PEB structures for temperature-controlled storage.",
  },
  {
    icon: Car,
    title: "Automotive & Engineering",
    description:
      "Steel warehouse construction and factory warehouse construction for heavy equipment and industrial operations.",
  },
];

export default function Industry() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        bg-black
        py-[110px]
      "
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.18),transparent_45%)]
          opacity-80
        "
      />

      {/* Top Blur Strip */}
      <div
        className="
          absolute
          top-0
          left-0
          h-[180px]
          w-full
          bg-gradient-to-b
          from-white/10
          to-transparent
          blur-2xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-6

          lg:px-16
        "
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mb-[70px]
            text-center
          "
        >
          <h2
            className="
              font-manrope
              text-[52px]
              font-bold
              leading-[1.05]
              tracking-[-2px]
              text-white

              lg:text-[72px]
            "
          >
            Industry <span className="text-[#FF1E1E]">We Expertise</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1100px]

              font-manrope
              text-[18px]
              font-normal
              leading-[32px]
              text-white/80

              lg:text-[20px]
            "
          >
            Mekark delivers turnkey warehouse construction, PEB warehouse
            construction, and industrial warehouse construction solutions for
            diverse industries across India.
          </p>
        </motion.div>

        {/* Cards */}
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
            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border-b-2
                  border-black
                  bg-[#1A1A1A]
                  p-8
                  transition-all
                  duration-500
                  hover:border-[#FF1E1E]

                  ${industry.glow ? "shadow-[0_0_80px_rgba(255,0,0,0.18)]" : ""}
                `}
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#FF1E1E]/10
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    hover:opacity-100
                  "
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -3,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    mb-7
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-[#FF1E1E]
                    shadow-[0_0_40px_rgba(255,0,0,0.35)]
                  "
                >
                  <Icon size={34} className="text-white" strokeWidth={2.3} />
                </motion.div>

                {/* Title */}
                <h3
                  className="
                    mb-4

                    font-manrope
                    text-[17px]
                    font-bold
                    leading-[22.1px]
                    tracking-[0%]
                    text-white
                  "
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-manrope
                    text-[13.5px]
                    font-normal
                    leading-[20px]
                    tracking-[0%]
                    text-white/65
                  "
                >
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
