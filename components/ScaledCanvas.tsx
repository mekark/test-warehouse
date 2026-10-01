"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScaledCanvasProps = {
  /** Width of the Figma frame the children are laid out for. */
  designWidth: number;
  /** Viewport width from which the frame is scaled to fit. */
  minWidth?: number;
  children: ReactNode;
};

/**
 * Lays children out at a fixed design width and scales the result to the
 * viewport, so desktop screens always show the Figma frame proportionally.
 * Below `minWidth` children render unscaled (they own their responsive layout).
 */
export default function ScaledCanvas({
  designWidth,
  minWidth = 1024,
  children,
}: ScaledCanvasProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => {
      const width = document.documentElement.clientWidth;
      setScale(width >= minWidth ? width / designWidth : null);
      setHeight(innerRef.current?.offsetHeight ?? 0);
    };

    update();
    window.addEventListener("resize", update);

    const observer = new ResizeObserver(update);
    if (innerRef.current) observer.observe(innerRef.current);

    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [designWidth, minWidth]);

  if (!scale) {
    return <div ref={innerRef}>{children}</div>;
  }

  return (
    <div style={{ height: height * scale, overflow: "hidden" }}>
      <div
        ref={innerRef}
        style={{
          width: designWidth,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
