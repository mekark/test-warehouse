import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;

// Three-up row, left to right, as laid out in the Figma frame
const PHOTOS = [
  {
    src: "/Images/manufacturing/fabrication-floor.webp",
    alt: "PEB fabrication floor with built-up steel members and overhead cranes",
    width: 617,
    height: 572,
  },
  {
    src: "/Images/manufacturing/welding-line.webp",
    alt: "Automated welding line for PEB steel sections",
    width: 616,
    height: 574,
  },
  {
    src: "/Images/manufacturing/assembly-bay.webp",
    alt: "Fabrication bay with overhead cranes and welders at work",
    width: 622,
    height: 578,
  },
];

const TITLE = "Our Manufacturing Capabilities";

export default function ManufacturingCapabilitiesSection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div className="flex w-[1920px] flex-col items-start gap-[50px] bg-[#F9F6F7] px-[80px] py-[52px]">
            <div className="flex flex-col items-start gap-[14px]">
              <h2 className="w-[1012px] text-[66px] leading-[60px] font-bold text-[#0F172A]">
                {TITLE}
              </h2>
            </div>

            <div className="grid w-full grid-cols-3 gap-[24px] overflow-hidden rounded-[24px]">
              {PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className="relative h-[489px] overflow-hidden bg-[#D9D9D9]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE + TABLET (below 1024px) */}
      <div className="flex flex-col gap-[24px] px-[20px] py-[32px] sm:px-10 sm:py-16 min-[1024px]:hidden">
        <div className="flex flex-col gap-[8px]">
          <h2 className="text-[28px] leading-[32px] font-bold text-[#0F172A] sm:text-[40px] sm:leading-[44px]">
            {TITLE}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-3">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[571/489] w-full overflow-hidden rounded-[16px] bg-[#D9D9D9]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
