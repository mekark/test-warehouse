import Image from "next/image";
import { manrope } from "@/lib/fonts";
import ScaledCanvas from "@/components/ScaledCanvas";

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1425;

const VIEW_ALL_HREF = "https://www.mekark.com/projects/completed-projects";

type Tile = {
  src: string;
  alt: string;
  /** Absolute position / size in the 1920px Figma frame */
  left: number;
  top: number;
  width: number;
  height: number;
  /** Tailwind classes for the <img> inside the tile */
  imageClass: string;
  /** Extra classes for the tile wrapper (mobile grid span, aspect ratio) */
  mobileClass: string;
};

const TILES: Tile[] = [
  {
    src: "/Images/gallery/g1.webp",
    alt: "Teal PEB warehouse with white roof",
    left: 80,
    top: 255,
    width: 569,
    height: 643,
    imageClass: "object-cover",
    mobileClass: "aspect-[569/643] row-span-2",
  },
  {
    src: "/Images/gallery/g5.webp",
    alt: "Aerial view of a PEB industrial warehouse",
    left: 673,
    top: 255,
    width: 424,
    height: 477,
    // Figma stretches this photo to the tile (no object-fit set)
    imageClass: "object-fill object-bottom",
    mobileClass: "aspect-[424/477]",
  },
  {
    src: "/Images/gallery/g4.webp",
    alt: "Warehouse with brown glazed entrance",
    left: 1121,
    top: 255,
    width: 719,
    height: 477,
    imageClass: "object-cover",
    mobileClass: "aspect-[719/477] sm:col-span-2",
  },
  {
    src: "/Images/gallery/g3.webp",
    alt: "White warehouse building with landscaped driveway",
    left: 80,
    top: 918,
    width: 569,
    height: 305,
    imageClass:
      "absolute top-[-6.13%] left-[-0.35%] h-[112.26%] w-[100.35%] max-w-none",
    mobileClass: "aspect-[569/305]",
  },
  {
    src: "/Images/gallery/g6.webp",
    alt: "Steel warehouse with grey cladding",
    left: 673,
    top: 752,
    width: 571,
    height: 471,
    imageClass: "object-fill object-bottom",
    mobileClass: "aspect-[571/471]",
  },
  {
    src: "/Images/gallery/g2.webp",
    alt: "Large industrial warehouse under construction",
    left: 1269,
    top: 752,
    width: 571,
    height: 471,
    imageClass: "object-cover",
    mobileClass: "aspect-[571/471]",
  },
];

function Heading() {
  return (
    <div className="flex flex-col items-start gap-[14px]">
      <div className="flex w-full flex-col gap-[13px] font-bold min-[1024px]:w-[509px]">
        <p className="text-[14px] leading-[21.304px] tracking-[1.5978px] text-[#ED1D23] uppercase min-[1024px]:text-[16px]">
          our work
        </p>
        <h2 className="text-[40px] leading-[1.05] text-[#0F172A] sm:text-[52px] min-[1024px]:text-[66px]! min-[1024px]:leading-[60px]!">
          Projects <span className="text-[#ED1D23]">Gallery</span>
        </h2>
      </div>
      <p className="text-[16px] leading-[26px] font-medium text-[#64748B] sm:text-[20px] min-[1024px]:text-[24px]! min-[1024px]:leading-[36px]! min-[1024px]:whitespace-nowrap">
        Completed Ware House structures across Tamil Nadu and beyond.
      </p>
    </div>
  );
}

function ViewAllButton({ className }: { className: string }) {
  return (
    <a
      href={VIEW_ALL_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center bg-[#C4161C] text-center font-extrabold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)] ${className}`}
    >
      View All →
    </a>
  );
}

export default function ProjectsGallerySection() {
  return (
    <section className={`${manrope.className} w-full bg-[#F9F6F7]`}>
      {/* DESKTOP: exact Figma frame, scaled to the viewport */}
      <div className="hidden min-[1024px]:block">
        <ScaledCanvas designWidth={DESIGN_WIDTH} minWidth={1024}>
          <div
            className="relative w-[1920px] bg-[#F9F6F7]"
            style={{ height: DESIGN_HEIGHT }}
          >
            <div className="absolute top-[60px] left-[80px]">
              <Heading />
            </div>

            {TILES.map((tile) => (
              <div
                key={tile.src}
                className="absolute overflow-hidden bg-[#D9D9D9]"
                style={{
                  left: tile.left,
                  top: tile.top,
                  width: tile.width,
                  height: tile.height,
                }}
              >
                {tile.imageClass.startsWith("absolute") ? (
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    width={587}
                    height={352}
                    sizes={`${Math.ceil((tile.width / DESIGN_WIDTH) * 100)}vw`}
                    className={tile.imageClass}
                  />
                ) : (
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes={`${Math.ceil((tile.width / DESIGN_WIDTH) * 100)}vw`}
                    className={tile.imageClass}
                  />
                )}
              </div>
            ))}

            <ViewAllButton className="absolute top-[1293px] left-1/2 -translate-x-1/2 rounded-[8.809px] px-[50px] py-[20px] text-[24px] leading-[normal]" />
          </div>
        </ScaledCanvas>
      </div>

      {/* MOBILE (below 640px) */}
      <div className="flex flex-col gap-[24px] px-[20px] py-[32px] sm:hidden">
        <div className="flex w-full flex-col gap-[12px]">
          <div className="flex w-full flex-col gap-[8px] font-bold">
            <p className="text-[12px] leading-[18px] tracking-[1.5978px] text-[#ED1D23] uppercase">
              our work
            </p>
            <h2 className="text-[28px] leading-[32px] whitespace-nowrap text-[#0F172A]">
              Projects <span className="text-[#ED1D23]">Gallery</span>
            </h2>
          </div>
          <p className="w-[307px] max-w-full text-[14px] leading-[20px] font-medium text-[#64748B]">
            Completed Ware House structures across Tamil Nadu and beyond.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[16px]">
          {/* wide tile */}
          <div className="relative h-[220px] w-full overflow-hidden">
            <Image
              src="/Images/gallery/g1.webp"
              alt={TILES[0].alt}
              width={1174}
              height={704}
              sizes="143vw"
              className="absolute top-[-10.6%] left-[-32.69%] h-[135.59%] w-[142.13%] max-w-none"
            />
          </div>

          {/* two 2-up rows */}
          {[
            [
              { tile: TILES[1], fit: "object-fill object-bottom" },
              { tile: TILES[2], fit: "object-cover" },
            ],
            [
              { tile: TILES[4], fit: "object-fill object-bottom" },
              { tile: TILES[5], fit: "object-cover" },
            ],
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="flex w-full gap-[12px]">
              {row.map(({ tile, fit }) => (
                <div
                  key={tile.src}
                  className="relative h-[174px] min-w-0 flex-1 overflow-hidden bg-[#D9D9D9]"
                >
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="50vw"
                    className={fit}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* last wide tile */}
          <div className="relative h-[196px] w-full overflow-hidden">
            <Image
              src="/Images/gallery/g3.webp"
              alt={TILES[3].alt}
              width={587}
              height={352}
              sizes="123vw"
              className="absolute top-[-19.59%] left-[-17.92%] h-[131.24%] w-[122.56%] max-w-none"
            />
          </div>
        </div>

        <a
          href={VIEW_ALL_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-[8px] bg-[#C4161C] px-[24px] py-[14px] text-center text-[14px] leading-[normal] font-semibold whitespace-nowrap text-[#F5F5F5] drop-shadow-[0px_8.809px_17.618px_rgba(196,22,28,0.3)]"
        >
          View All →
        </a>
      </div>

      {/* TABLET (640px - 1023px) */}
      <div className="hidden px-10 py-16 sm:max-[1023px]:block">
        <Heading />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TILES.map((tile) => (
            <div
              key={tile.src}
              className={`relative overflow-hidden bg-[#D9D9D9] ${tile.mobileClass}`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ViewAllButton className="rounded-[8.809px] px-10 py-4 text-[20px]" />
        </div>
      </div>
    </section>
  );
}
