"use client";

import Image from "next/image";
import { manrope } from "@/lib/fonts";
import { useState } from "react";
import { FAQ_ITEMS } from "@/components/faqData";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
// Rebar question mark with workers (transparent background)
const FAQ_IMAGE = "/Images/faq/faq-question.webp";

function Items({
  openIndex,
  onToggle,
  fixedLayout,
}: {
  openIndex: number | null;
  onToggle: (index: number) => void;
  /** Desktop: replicate the fixed Figma widths. Otherwise flow naturally. */
  fixedLayout: boolean;
}) {
  return (
    <div className={`flex flex-col items-start ${fixedLayout ? "" : "w-full"}`}>
      {FAQ_ITEMS.map((item, index) => {
        const open = index === openIndex;

        return (
          <div
            key={item.question}
            className={`flex flex-col items-start border-b-[1.333px] border-solid border-[#E2E2E2] ${
              fixedLayout ? "w-[911.556px]" : "w-full"
            } ${fixedLayout ? "pt-[32px]" : index === 0 ? "pt-0" : "pt-5"} pb-[33.333px]`}
          >
            <button
              type="button"
              onClick={() => onToggle(index)}
              aria-expanded={open}
              className={`group flex w-full cursor-pointer justify-between text-left ${
                open ? "items-center" : "items-start"
              } ${fixedLayout ? "gap-[13px]" : "gap-4"}`}
            >
              <span
                className={`min-w-0 flex-1 ${
                  fixedLayout
                    ? `flex text-[24px] leading-[32px] font-medium ${
                        open
                          ? "text-[#C4161C]"
                          : "text-[#080808] transition-colors group-hover:text-[#C4161C]"
                      }`
                    : `text-[17px] leading-[26px] sm:text-[19px] ${
                        open
                          ? "font-bold text-[#C4161C]"
                          : "font-semibold text-[#080808] transition-colors group-hover:text-[#C4161C]"
                      }`
                }`}
              >
                <span
                  className={`inline-block shrink-0 ${fixedLayout ? "w-[36px]" : "w-[26px]"}`}
                >
                  {index + 1}.
                </span>
                {item.question}
              </span>

              <span
                aria-hidden
                className={`flex size-[37.333px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal ${
                  open
                    ? "rotate-45 bg-[#C4161C] text-[#F5F5F5]"
                    : "bg-[#F0F0F0] text-[#9A9A9A] transition-colors group-hover:bg-[#FDEBEB] group-hover:text-[#C4161C]"
                }`}
              >
                +
              </span>
            </button>

            {open && (
              <p
                className={`font-medium text-[#5A5A5A] ${
                  fixedLayout
                    ? "mt-[18px] w-[846px] pl-[36px] text-[20px] leading-[30px]"
                    : "mt-4 text-[15px] leading-[26px] sm:text-[17px]"
                }`}
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

/** Red-dot "FAQ" pill (Figma). */
function FaqPill({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`flex items-center rounded-full border-[1.061px] border-solid border-[rgba(237,32,36,0.2)] bg-[rgba(237,32,36,0.1)] ${
        compact ? "gap-[6px] px-[12px] py-[5px]" : "gap-[8.485px] px-[13.788px] py-[7.425px]"
      }`}
    >
      <span
        className={`shrink-0 rounded-full bg-[#E40015] ${compact ? "size-[6px]" : "size-[8.485px]"}`}
      />
      <span
        className={`font-bold whitespace-nowrap text-[#5A5656] uppercase ${
          compact
            ? "text-[12px] leading-[18px] tracking-[2.5px]"
            : "text-[15.333px] leading-[23.04px] tracking-[3.3787px]"
        }`}
      >
        FAQ
      </span>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col items-start gap-[16px] min-[1024px]:gap-[26.4px]">
      <FaqPill />
      <h2 className="text-[40px] leading-[1] font-extrabold tracking-[-1.5px] text-[#101116] min-[1024px]:text-[64px]! min-[1024px]:leading-[60.8px]! min-[1024px]:tracking-[-2.56px]!">
        Frequently Asked
        <br />
        <span className="text-[#E60F1A]">Questions</span>
      </h2>
    </div>
  );
}

export default function FaqAccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className={`${manrope.className} w-full bg-white`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          {/* Height follows the content; the left column is top-aligned with the first question */}
          <div className="flex w-[1920px] items-start justify-center gap-[88px] bg-white px-[112px] py-[50px]">
            {/* LEFT: pill, heading and question-mark artwork */}
            <div className="flex w-[531px] shrink-0 flex-col items-start gap-[26.4px] pt-[24px]">
              <Heading />
              <div className="relative h-[464px] w-[463px] shrink-0">
                <Image
                  src={FAQ_IMAGE}
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT: faq list, in normal flow so the frame grows to fit */}
            <div className="w-[912px] shrink-0">
              <Items
                openIndex={openIndex}
                onToggle={toggleItem}
                fixedLayout
              />
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="flex flex-col gap-[24px] bg-[#F9F6F7] px-[20px] py-[32px] sm:hidden">
        <div className="flex w-full flex-col">
          <div className="flex flex-col items-start gap-[12px] py-[6px]">
            <FaqPill compact />

            <h2 className="w-[309px] max-w-full text-[28px] leading-[32px] font-extrabold tracking-[-0.5px] text-[#101116]">
              Frequently Asked
              <br />
              <span className="text-[#E60F1A]">Questions</span>
            </h2>
          </div>

          <div className="relative mx-auto mt-[12px] aspect-[463/464] w-full max-w-[300px]">
            <Image
              src={FAQ_IMAGE}
              alt=""
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-end gap-[12px]">
          {FAQ_ITEMS.map((item, index) => {
            const open = index === openIndex;

            return (
              <div
                key={item.question}
                className="flex w-full flex-col gap-[12px]"
              >
                <div className="flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={open}
                    className="group flex w-full cursor-pointer items-center gap-[12px] text-left"
                  >
                    <span
                      className={`min-w-0 flex-1 text-[16px] leading-[24px] ${
                        open
                          ? "font-semibold text-[#C4161C]"
                          : "font-medium text-[#080808] transition-colors group-hover:text-[#C4161C]"
                      }`}
                    >
                      {index + 1}. {item.question}
                    </span>

                    <span
                      aria-hidden
                      className={`flex size-[24px] shrink-0 items-center justify-center rounded-[18.667px] text-[21.333px] leading-[normal] font-normal transition-transform duration-300 ${
                        open
                          ? "rotate-45 bg-[#C4161C] text-[#F5F5F5]"
                          : "bg-[#F0F0F0] text-[#9A9A9A] transition-colors group-hover:bg-[#FDEBEB] group-hover:text-[#C4161C]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    aria-hidden={!open}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full pt-[10px] text-[14px] leading-[20px] font-medium text-[#5A5A5A]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-[#E2E2E2]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden sm:max-[1023px]:block">
        <div className="relative mx-auto mt-10 aspect-[463/464] w-full max-w-[320px]">
          <Image
            src={FAQ_IMAGE}
            alt=""
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-8 px-5 pt-8 pb-12 sm:px-10 sm:pb-16">
          <Heading />

          <Items
            openIndex={openIndex}
            onToggle={toggleItem}
            fixedLayout={false}
          />
        </div>
      </div>
    </section>
  );
}
