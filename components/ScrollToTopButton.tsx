"use client";

import { useEffect, useState } from "react";

const SHOW_ARROW_AFTER_PX = 400;

function ArrowUpIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path
        d="M8 3L8 13M8 3L4 7M8 3L12 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_ARROW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-4 z-[70] sm:right-5 sm:bottom-5 lg:right-6 lg:bottom-6">
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0 })}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#C4161C] text-white sm:h-14 sm:w-14 shadow-[0_20px_42px_-20px_rgba(196,22,28,0.72)]"
      >
        <ArrowUpIcon />
      </button>
    </div>
  );
}
