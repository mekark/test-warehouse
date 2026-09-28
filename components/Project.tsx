import { Clock3 } from "lucide-react";
import EnquiryFormButton from "@/components/EnquiryFormButton";

const projects = [
  {
    category: "FMCG",
    title: "FMCG Warehouse – 200,000 Sq.Ft",
    subtitle: "Delivered in 110 Days • Tamil Nadu",
    description:
      "Faster distribution and reduced turnaround time for a major FMCG distributor across South India.",
    image: "/Project/FMCG (1).webp",
  },
  {
    category: "Cold Storage",
    title: "Cold Storage Facility",
    subtitle: "Precision Engineered • Chennai",
    description:
      "Controlled environments with precision-engineered PEB warehouse systems for temperature-sensitive goods.",
    image: "/Project/COLD.webp",
  },
  {
    category: "Logistics",
    title: "Industrial Logistics Hub",
    subtitle: "Turnkey EPC • South India",
    description:
      "End-to-end turnkey warehouse construction with optimized operational flow for cross-docking logistics.",
    image: "/Project/LOGI.webp",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        w-full

        bg-[#FAFAFA]

        px-6
        py-[90px]

        lg:px-[120px]
        lg:py-[72px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <img
          src="/Project/BG.webp"
          alt="Warehouse Background"
          className="
            h-full
            w-full
            object-cover
            opacity-[0.92]
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0

            bg-white/10
            backdrop-blur-[0.5px]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1440px]
        "
      >
        {/* TOP LABEL */}
        <div
          className="
            mb-5
            flex
            items-center
            gap-3
          "
        >
          <div className="h-[2px] w-[28px] bg-[#D71920]" />

          <span
            className="
              font-manrope
              text-[18px]
              font-bold
              uppercase

              tracking-[3px]

              text-[#D71920]
            "
          >
            Real Projects
          </span>
        </div>

        {/* TITLE */}
        <h2
          className="
            max-w-[1200px]

            font-manrope
            text-[50px]
            font-bold
            leading-[48px]
            tracking-[0px]
            text-black

            md:text-[50px]
            md:leading-[48px]

            lg:text-[45px]
            lg:leading-[48px]
          "
        >
          Execution That Directly Impacts{" "}
          <span className="text-[#D71920]">Business</span>
          <br />
          <span className="text-[#D71920]">Performance</span>
        </h2>

        {/* PROJECT CARDS */}
        <div
          className="
            mt-[70px]

            grid
            grid-cols-1
            gap-8

            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden

                rounded-[24px]

                border
                border-transparent

                bg-white

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                
                

                hover:border-[#D71920]
                hover:shadow-[0_20px_50px_rgba(215,25,32,0.18)]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-[280px]
                    w-full
                    object-cover
                  "
                />

                {/* CATEGORY */}
                <div
                  className="
                    absolute
                    left-6
                    top-6

                    rounded-full

                    bg-[#BB0011]

                    px-5
                    py-2
                  "
                >
                  <span
                    className="
                      font-manrope
                      text-[15px]
                      font-bold

                      text-white
                    "
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3
                  className="
                    mb-[12px]
                    max-w-[240px]

                    font-manrope
                    text-[14px]
                    font-extrabold
                    leading-[14px]
                    tracking-[-0.4px]
                    text-black

                    sm:text-[16px]
                    sm:leading-[18px]

                    lg:text-[20px]
                    lg:leading-[39px]
                    lg:tracking-[-1px]
                  "
                >
                  {project.title}
                </h3>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-1.5

                    font-manrope
                    text-[11px]
                    font-medium
                    leading-[17px]
                    text-[#C4161C]
                  "
                >
                  <Clock3 size={12} strokeWidth={2.2} />

                  <span>{project.subtitle}</span>
                </div>

                <p
                  className="
                    mt-[18px]

                    font-manrope
                    text-[11px]
                    font-medium
                    leading-[17px]
                    tracking-[0%]

                    text-[#5E5E66]

                    sm:text-[12px]
                    sm:leading-[18px]

                    lg:text-[16px]
                    lg:leading-[34px]
                  "
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div
          className="
      mt-[60px]
      flex
      justify-center
    "
        >
          <EnquiryFormButton
            showArrow
            className="
        flex
        items-center
        justify-center

        rounded-[14px]
        border
        border-black

        bg-white/70

        px-10
        py-5

        font-manrope
        text-[18px]
        font-bold

        text-black

        
        

        hover:bg-black
        hover:text-white
      "
          >
            Start Your Warehouse Project
          </EnquiryFormButton>
        </div>
      </div>
    </section>
  );
}
