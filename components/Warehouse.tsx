"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Layers3,
  Ruler,
  ShieldCheck,
  Factory,
  Hammer,
  Boxes,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Turnkey Warehouse Construction",
    description:
      "Single-point responsibility for turnkey warehouse construction — from design to final delivery, under one accountable contractor.",
  },
  {
    icon: Layers3,
    title: "PEB Warehouse Construction",
    description:
      "Fast, durable pre engineered warehouse buildings for modern industrial warehouse construction operations.",
  },
  {
    icon: Ruler,
    title: "Custom Design & Build",
    description:
      "Warehouse construction services tailored for logistics, manufacturing, and industrial operations.",
  },
  {
    icon: ShieldCheck,
    title: "Steel Warehouse Construction",
    description:
      "Heavy-duty steel warehouse construction for demanding industrial environments.",
  },
  {
    icon: Factory,
    title: "PEB Warehouse Manufacturing",
    description:
      "Complete control over PEB warehouse construction manufacturing with consistent quality delivery — as PEB warehouse contractors who own the full production process.",
  },
  {
    icon: Hammer,
    title: "Factory Warehouse Construction",
    description:
      "End-to-end factory warehouse construction services including foundations, flooring, and structural execution.",
  },
  {
    icon: Boxes,
    title: "Manufacturing Warehouse Construction",
    description:
      "Scalable manufacturing warehouse construction infrastructure designed to maximize industrial storage capacity.",
  },
  {
    icon: Truck,
    title: "Industrial Warehouse Construction Company",
    description:
      "Smart racking and storage solutions from an industrial warehouse construction company built for high-density operations and inventory efficiency.",
  },
];

export default function Warehouse() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="
        relative
        overflow-hidden
        bg-white
        py-[70px]

        md:py-[90px]
        lg:py-[110px]
      "
    >
      {/* Background Text */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          hidden
          -translate-x-1/2
          -translate-y-1/2

          font-manrope
          text-[180px]
          font-extrabold
          uppercase
          leading-none
          tracking-[-10px]
          text-black/[0.03]

          lg:block
        "
      >
        SERVICES
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-5

          sm:px-8
          lg:px-16
        "
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2
            className="
              font-manrope
              text-[38px]
              font-bold
              leading-[1.1]
              tracking-[-2px]
              text-black

              md:text-[54px]
              lg:text-[72px]
            "
          >
            Complete Warehouse Solutions.
          </h2>

          <h3
            className="
              mt-2

              font-manrope
              text-[24px]
              font-bold
              leading-[1.1]
              text-[#C51414]

              md:text-[34px]
              lg:text-[48px]
            "
          >
            One Partner. Total Control.
          </h3>

          <p
            className="
              mx-auto
              mt-8
              max-w-[1080px]

              font-manrope
              text-[15px]
              font-normal
              leading-[28px]
              text-[#6B6B6B]

              md:text-[18px]
              lg:text-[20px]
            "
          >
            As a leading warehouse construction company in South India, Mekark
            delivers warehouse construction services as a full-scope warehouse
            construction contractor — from design to handover..
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="
            mt-[60px]
            grid

            grid-cols-1

            border-[#D8D8D8]

            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative

                  border-[#D8D8D8]
                  p-6

                  transition-all
                  duration-500

                  hover:z-10
                  hover:bg-white
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]

                  md:min-h-[300px]

                  lg:border-b
                  lg:border-r
                  lg:p-10

                  [&:nth-child(4n)]:border-r-0
                  [&:nth-last-child(-n+4)]:border-b-0
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-[0px]
                    bg-gradient-to-br
                    from-[#C51414]/5
                    via-transparent
                    to-transparent

                    opacity-0
                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -4,
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    relative
                    z-10
                    mb-7

                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center

                    rounded-[18px]
                    bg-[#F6D5D5]

                    shadow-[0_12px_30px_rgba(197,20,20,0.12)]

                    transition-all
                    duration-500

                    group-hover:bg-[#C51414]
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-black
                      transition-colors
                      duration-500

                      group-hover:text-white
                    "
                    strokeWidth={2.2}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="
                    relative
                    z-10
                    mb-4

                    font-manrope
                    text-[28px]
                    font-bold
                    leading-[1.15]
                    tracking-[-1px]
                    text-black

                    transition-colors
                    duration-500

                    group-hover:text-[#C51414]

                    md:text-[22px]
                    lg:text-[20px]
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative
                    z-10

                    font-manrope
                    text-[15px]
                    font-normal
                    leading-[26px]
                    text-[#666666]

                    transition-colors
                    duration-500

                    group-hover:text-[#444]

                    lg:text-[16px]
                  "
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
