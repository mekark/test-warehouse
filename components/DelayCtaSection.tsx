import EnquiryFormButton from "@/components/EnquiryFormButton";

export default function DelayCtaSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#ED2024]
        py-6

        md:py-8
        lg:py-10
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          items-start
          justify-between
          gap-5

          px-5

          sm:px-8

          lg:flex-row
          lg:items-center
          lg:px-16
        "
      >
        <div className="max-w-[820px]">
          <h2
            className="
              font-manrope
              text-[30px]
              font-bold
              leading-[1.08]
              tracking-[0px]
              text-white

              md:text-[40px]
              md:leading-[44px]
            "
          >
            Every month of delay ={" "}
            <span className="text-white/85">lost revenue</span>
            <br />
            <span className="text-white/85">& higher costs.</span>
          </h2>

          <p
            className="
              mt-3
              max-w-[760px]

              font-manrope
              text-[16px]
              font-light
              leading-[26px]
              tracking-[0%]
              text-white/80
            "
          >
            Lock your execution timeline with a trusted warehouse building
            contractor in Chennai.
          </p>
        </div>

        <div>
          <EnquiryFormButton
            showArrow
            className="
              flex
              h-[58px]
              items-center
              justify-center

              rounded-[12px]
              bg-white

              px-6

              font-manrope
              text-[17px]
              font-bold
              text-[#ED2024]

              
              

              hover:bg-black
              hover:text-white

              disabled:cursor-wait

              md:min-w-[380px]
            "
          >
            Get Cost & Timeline Blueprint
          </EnquiryFormButton>
        </div>
      </div>
    </section>
  );
}
