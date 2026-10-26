"use client";

import {
  ChangeEvent,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const MIN_LIST = 200;
const MAX_LIST = 300;

type SqftSelectProps = {
  name: string;
  value: string;
  options: string[];
  placeholder: string;
  /** Same signature as the form's handleChange, so it plugs straight into useBlueprintForm */
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  /** Field styling (size, border, background, padding) for the trigger button */
  className: string;
  id?: string;
  ariaLabel?: string;
};

// Custom dropdown ported from Peb-new-mekark's IndustryTypeSelect: grey placeholder,
// scrollable list capped to the room below the trigger, red hover/selected rows.
export default function SqftSelect({
  name,
  value,
  options,
  placeholder,
  onChange,
  className,
  id,
  ariaLabel,
}: SqftSelectProps) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number>();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Always open downward. Cap the list to the room left above the nearest clipping
  // ancestor (scrolling inside, never under MIN_LIST), then scroll it into view.
  useLayoutEffect(() => {
    if (!open || !rootRef.current || !listRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    let bottom = Infinity;
    for (let el = rootRef.current.parentElement; el; el = el.parentElement) {
      const { overflowX, overflowY } = getComputedStyle(el);
      if (overflowX === "visible" && overflowY === "visible") continue;
      bottom = Math.min(bottom, el.getBoundingClientRect().bottom);
    }
    const room = Math.max(bottom - rect.bottom - 14, MIN_LIST);
    setMaxHeight(Math.min(room, MAX_LIST));
  }, [open]);

  useEffect(() => {
    if (open) {
      listRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [open, maxHeight]);

  const select = (option: string) => {
    onChange({
      target: { name, value: option },
    } as ChangeEvent<HTMLSelectElement>);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={`relative w-full min-w-0 ${open ? "z-30" : ""}`}>
      <button
        type="button"
        id={id}
        aria-label={ariaLabel ?? placeholder}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        className={`${className} flex cursor-pointer items-center justify-between gap-3 text-left ${
          value ? "text-black" : "text-[#757575]"
        }`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#757575"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          style={{ maxHeight }}
          className="absolute top-[calc(100%+6px)] right-0 left-0 z-50 w-full overflow-y-auto overscroll-contain rounded-[10px] border border-[#E5E5E5] bg-white py-1 shadow-[0_12px_40px_rgba(0,0,0,0.16)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {options.map((option) => {
            const selected = value === option;

            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => select(option)}
                  className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                    selected
                      ? "bg-[#D90916] text-white"
                      : "text-black hover:bg-[#D90916] hover:text-white"
                  }`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
