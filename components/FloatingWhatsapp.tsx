"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import MotionLinkButton from "@/components/MotionLinkButton";

const WHATSAPP_NUMBER = "919790924754";
const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss about my warehouse construction project.";
const PHONE_NUMBER = "9790924754";

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <div
      className="
    fixed
    z-[70]

    flex
    flex-col
    gap-3

    bottom-[100px]
    right-4

    sm:bottom-[120px]
    sm:right-5

    lg:bottom-[100px]
    lg:right-6
  "
    >
      {/* CALL BUTTON */}
      <MotionLinkButton
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Mekark"
        className="
          group
          relative

          inline-flex
          items-center
          justify-center
        "
      >
        {/* TEXT BOX */}
        <div
          className="
            absolute
            right-[72px]

            whitespace-nowrap

            rounded-full
            bg-white

            px-4
            py-2

            font-manrope
            text-[13px]
            font-semibold
            text-[#1F1F1F]

            opacity-0
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]

            transition-all
            duration-300

            group-hover:opacity-100
          "
        >
          Call Expert
        </div>

        {/* ICON */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full
            bg-[#C4161C]
            text-white

            shadow-[0_20px_42px_-20px_rgba(196,22,28,0.72)]
          "
        >
          <Phone className="h-6 w-6" />
        </motion.div>
      </MotionLinkButton>

      {/* WHATSAPP BUTTON */}
      <MotionLinkButton
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          group
          relative

          inline-flex
          items-center
          justify-center
        "
      >
        {/* TEXT BOX */}
        <div
          className="
            absolute
            right-[72px]

            whitespace-nowrap

            rounded-full
            bg-white

            px-4
            py-2

            font-manrope
            text-[13px]
            font-semibold
            text-[#1F1F1F]

            opacity-0
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]

            transition-all
            duration-300

            group-hover:opacity-100
          "
        >
          WhatsApp Chat
        </div>

        {/* ICON */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full
            bg-[#25D366]
            text-white

            shadow-[0_20px_42px_-20px_rgba(37,211,102,0.72)]
          "
        >
          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 fill-current"
            aria-hidden="true"
          >
            <path d="M19.11 17.21c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.16-1.34-.8-.71-1.34-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01s-.47.07-.71.34c-.24.27-.93.91-.93 2.22s.96 2.58 1.09 2.76c.14.18 1.89 2.88 4.57 4.03.64.27 1.14.43 1.53.55.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.63.22-1.16.16-1.27-.07-.11-.24-.18-.51-.32Z" />
            <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.57-1.68a12.75 12.75 0 0 0 6.24 1.61h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.64-3.75-9.05A12.7 12.7 0 0 0 16.01 3.2Zm0 23.37h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1 1.04-3.8-.25-.39a10.63 10.63 0 1 1 8.91 4.9Z" />
          </svg>
        </motion.div>
      </MotionLinkButton>
    </div>
  );
}
