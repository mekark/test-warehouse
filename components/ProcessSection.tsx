import { Manrope, Space_Grotesk } from "next/font/google";
import {
  CalendarCheck,
  CircleCheck,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  HardHat,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import ScaledCanvas from "@/components/ScaledCanvas";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

// Figma frame is 1707px of content + 80px padding on each side
const DESIGN_WIDTH = 1867;

type Step = {
  number: string;
  title: string;
  description: string[];
  icon: LucideIcon;
  /** Absolute left offset / width of the column in the Figma frame */
  left: number;
  width: number;
  descriptionColor: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Feasibility Analysis",
    description: ["Requirement assessment & site", "evaluation"],
    icon: ClipboardCheck,
    left: -1,
    width: 270,
    descriptionColor: "text-[#64748B]",
  },
  {
    number: "02",
    title: "Custom Design",
    description: ["Tailored warehouse layout for", "your operations"],
    icon: DraftingCompass,
    left: 298,
    width: 272,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "03",
    title: "PEB Fabrication",
    description: ["100% in-house manufacturing,", "controlled quality"],
    icon: Factory,
    left: 598,
    width: 268,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "04",
    title: "Civil Execution",
    description: ["Foundations, flooring &", "structural work"],
    icon: HardHat,
    left: 894,
    width: 271,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "05",
    title: "Quality Validation",
    description: ["Inspection, installation &", "compliance checks"],
    icon: CircleCheck,
    left: 1193,
    width: 271,
    descriptionColor: "text-[#9A9A9A]",
  },
  {
    number: "06",
    title: "120-Day Delivery",
    description: ["Operational handover,", "ready to run"],
    icon: Truck,
    left: 1492,
    width: 209.333,
    descriptionColor: "text-[#9A9A9A]",
  },
];

// Mobile frame uses a different icon for steps 04 / 06 and softer number colours
const MOBILE_STEP_META: { icon: LucideIcon; numberColor: string }[] = [
  { icon: ClipboardCheck, numberColor: "text-[#FF8F92]" },
  { icon: DraftingCompass, numberColor: "text-[#FF8F92]" },
  { icon: Factory, numberColor: "text-[#FF8F92]" },
  { icon: Wrench, numberColor: "text-[#FF8F92]" },
  { icon: CircleCheck, numberColor: "text-[#FFA5A8]" },
  { icon: CalendarCheck, numberColor: "text-[#FF8F92]" },
];

function StepIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative z-10 flex h-[92px] w-[100px] shrink-0 items-center justify-center rounded-[18px] border-[0.917px] border-solid border-[#E4DFE0] bg-white">
      <Icon size={40} strokeWidth={2} className="text-[#ED1D23]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col gap-[10px]">
      <h2 className="text-[34px] leading-[1.15] font-bold text-[#0F172A] min-[1024px]:w-[1204px] min-[1024px]:text-[66px] min-[1024px]:leading-[73.333px]">
        From Idea to Operation{" "}
        <span className="text-[#ED1D23]">Fully Managed</span>
      </h2>
      <p className="text-[18px] leading-[20px] font-normal text-[#64748B] min-[1024px]:text-[24px]">
        Text
      </p>
    </div>
  );
}

function ClosingLine() {
  return (
    <p className="text-center text-[16px] font-bold text-[#9A9A9A] min-[1024px]:text-[20px]">
      No follow-ups. No uncertainty.{" "}
      <span className="font-extrabold text-[#080808]">Just results.</span>
    </p>
  );
}

export default function ProcessSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="flex flex-col items-start p-[80px]">
            <div className="flex w-[1707px] flex-col gap-[50px]">
              <Heading />

              <div className="flex w-full flex-col items-center justify-center gap-[50px]">
                <div className="relative h-[271px] w-full">
                  {/* connector line */}
                  <div className="absolute top-[47px] left-[72px] h-[1.333px] w-[1430px] bg-[#E4DFE0]" />

                  {STEPS.map((step) => (
                    <div
                      key={step.number}
                      className="absolute top-0 flex flex-col items-start gap-[53px]"
                      style={{ left: step.left, width: step.width }}
                    >
                      <StepIcon icon={step.icon} />

                      <div className="flex w-full flex-col items-start gap-[12px]">
                        <p
                          className={`${spaceGrotesk.className} text-[26px] leading-[21.333px] font-bold text-[#ED1D23]`}
                        >
                          {step.number}
                        </p>
                        <p className="w-full text-[21px] leading-[normal] font-bold text-[#080808]">
                          {step.title}
                        </p>
                        <p
                          className={`text-[18px] leading-[24px] font-normal ${step.descriptionColor}`}
                        >
                          {step.description.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex w-[1280px] items-center justify-center">
                  <ClosingLine />
                </div>
              </div>
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden px-10 py-16 sm:max-[1023px]:block">
        <Heading />

        <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {STEPS.map((step) => (
            <li key={step.number} className="flex flex-col items-start gap-6">
              <StepIcon icon={step.icon} />
              <div className="flex flex-col gap-3">
                <p
                  className={`${spaceGrotesk.className} text-[26px] leading-[21.333px] font-bold text-[#ED1D23]`}
                >
                  {step.number}
                </p>
                <p className="text-[21px] leading-[normal] font-bold text-[#080808]">
                  {step.title}
                </p>
                <p
                  className={`text-[18px] leading-[24px] font-normal ${step.descriptionColor}`}
                >
                  {step.description.join(" ")}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <ClosingLine />
        </div>
      </div>

      {/* MOBILE (below 640px): vertical timeline */}
      <div className="px-5 pt-8 pb-10 sm:hidden">
        <div className="flex w-full flex-col items-center gap-[24px]">
          <div className="flex w-[324px] max-w-full flex-col gap-[12px]">
            <h2 className="text-[28px] leading-[34px] font-bold text-[#0F172A]">
              From Idea to Operation{" "}
              <span className="text-[#ED1D23]">Fully Managed</span>
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#64748B]">
              Text
            </p>
          </div>

          <ol className="relative flex w-full flex-col gap-[20px]">
            {/* timeline rail, centred on the icon column */}
            <span
              aria-hidden
              className="absolute top-[25px] bottom-[25px] left-[25px] w-[1.333px] -translate-x-1/2 bg-[#E4DFE0]"
            />

            {STEPS.map((step, index) => {
              const meta = MOBILE_STEP_META[index];
              const Icon = meta.icon;

              return (
                <li
                  key={step.number}
                  className="relative flex items-start gap-[16px]"
                >
                  <span className="relative flex size-[50px] shrink-0 items-center justify-center rounded-[8px] border-[0.917px] border-solid border-[#E4DFE0] bg-white">
                    <Icon
                      size={24}
                      strokeWidth={2}
                      className="text-[#ED1D23]"
                    />
                  </span>

                  <div className="flex min-w-0 flex-col items-start justify-center gap-[8px]">
                    <p
                      className={`${spaceGrotesk.className} text-[18px] leading-[normal] font-bold ${meta.numberColor}`}
                    >
                      {step.number}
                    </p>
                    <div className="flex flex-col gap-[8px]">
                      <p className="text-[18px] leading-[22px] font-bold text-[#0F172A]">
                        {step.title}
                      </p>
                      <p className="text-[14px] leading-[18px] font-normal text-[#64748B]">
                        {step.description.join(" ")}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-col items-center gap-[12px]">
            <span className="h-[1.333px] w-[165px] bg-[#FFDCDD]" />
            <p className="text-center text-[16px] leading-[normal] font-semibold text-[#9A9A9A]">
              No follow-ups. No uncertainty.
              <br />
              <span className="font-bold text-[#080808]">Just results.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
