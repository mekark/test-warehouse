"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Manufacturing Hub",
    location: "Chennai • Heavy-Duty PEB",
    image: "/Images/1.png",
  },
  {
    id: "02",
    title: "Auto Components Storage",
    location: "Sriperumbudur • Wide-Span",
    image: "/Images/2.png",
  },
  {
    id: "03",
    title: "E-commerce Fulfilment",
    location: "Coimbatore • 150,000 Sq.Ft",
    image: "/Images/3.png",
  },
  {
    id: "04",
    title: "Industrial Warehouse",
    location: "Hosur • Logistics Zone",
    image: "/Images/4.png",
  },
];

export default function CompletedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = window.innerWidth < 768 ? 320 : 420;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        overflow-hidden
        bg-black
        py-12

        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]
          px-5

          sm:px-8
          lg:px-16
        "
      >
        {/* Top Section */}
        <div
          className="
            mb-8

            flex
            flex-col
            gap-6

            lg:mb-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Left */}
          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-[2px]
                  w-[22px]
                  bg-white
                "
              />

              <span
                className="
                  font-manrope
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-white
                "
              >
                Completed Projects
              </span>
            </div>

            <h2
              className="
                font-manrope
                text-[34px]
                font-bold
                leading-[1.05]
                tracking-[-2px]
                text-white

                md:text-[48px]
                lg:text-[56px]
              "
            >
              Built for performance.
            </h2>

            <h3
              className="
                mt-1

                font-manrope
                text-[30px]
                font-light
                leading-[1.05]
                tracking-[-2px]
                text-white/90

                md:text-[42px]
                lg:text-[52px]
              "
            >
              Proven on ground.
            </h3>
          </div>

          {/* Arrows */}
          <div
            className="
              hidden
              items-center
              gap-3

              lg:flex
            "
          >
            <motion.button
              onClick={() => scroll("left")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                group
                flex
                h-[52px]
                w-[52px]
                items-center
                justify-center

                border
                border-white/40

                transition-all
                duration-300

                hover:border-white
                hover:bg-white
              "
            >
              <ArrowLeft
                size={20}
                className="text-white transition-colors group-hover:text-[#ED2024]"
              />
            </motion.button>

            <motion.button
              onClick={() => scroll("right")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                group
                flex
                h-[52px]
                w-[52px]
                items-center
                justify-center

                border
                border-white/40

                transition-all
                duration-300

                hover:border-white
                hover:bg-white
              "
            >
              <ArrowRight
                size={20}
                className="text-white transition-colors group-hover:text-[#ED2024]"
              />
            </motion.button>
          </div>
        </div>

        {/* Projects Slider */}

        <div
          ref={scrollRef}
          className="
  flex
  gap-5
  overflow-x-auto
  scroll-smooth

  scrollbar-hide
  [-ms-overflow-style:none]
  [scrollbar-width:none]

  [&::-webkit-scrollbar]:hidden
"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-w-[300px]
                flex-shrink-0

                md:min-w-[380px]
                lg:min-w-[420px]
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#111]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-[320px]
                    w-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105

                    md:h-[400px]
                    lg:h-[460px]
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                  "
                />

                {/* Live Project */}

                {/* <div
                  className="
                    absolute
                    left-5
                    top-5

                    flex
                    items-center
                    gap-2

                    bg-white
                    px-4
                    py-2
                  "
                >
                  <div
                    className="
                      h-[6px]
                      w-[6px]
                      rounded-full
                      bg-[#FF1E1E]
                    "
                  />

                  <span
                    className="
                      font-manrope
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-black
                    "
                  >
                    Live Project
                  </span>
                </div> */}

                {/* Bottom Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-6

                    md:p-8
                  "
                >
                  <p
                    className="
                      mb-3

                      font-manrope
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[3px]
                      text-[#FF1E1E]
                    "
                  >
                    / {project.id}
                  </p>

                  <h3
                    className="
                      font-manrope
                      text-[28px]
                      font-bold
                      leading-[1.1]
                      text-white

                      md:text-[34px]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      font-manrope
                      text-[14px]
                      font-normal
                      text-white/60

                      md:text-[16px]
                    "
                  >
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-3

            lg:hidden
          "
        >
          <motion.button
            onClick={() => scroll("left")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              group
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center

              border
              border-white/40

              transition-all
              duration-300

              hover:border-white
              hover:bg-white
            "
          >
            <ArrowLeft
              size={18}
              className="text-white transition-colors group-hover:text-[#ED2024]"
            />
          </motion.button>

          <motion.button
            onClick={() => scroll("right")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              group
              flex
              h-[48px]
              w-[48px]
              items-center
              justify-center

              border
              border-white/40

              transition-all
              duration-300

              hover:border-white
              hover:bg-white
            "
          >
            <ArrowRight
              size={18}
              className="text-white transition-colors group-hover:text-[#ED2024]"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
