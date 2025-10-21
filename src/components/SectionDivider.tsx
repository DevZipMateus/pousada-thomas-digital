import dividerImage from "@/assets/decorative-divider.png";

interface SectionDividerProps {
  position: "top" | "bottom";
}

const SectionDivider = ({ position }: SectionDividerProps) => {
  return (
    <div className="w-full flex justify-between items-center py-4 px-4">
      <img
        src={dividerImage}
        alt=""
        className={`h-8 md:h-12 ${position === "bottom" ? "rotate-180 scale-x-[-1]" : ""}`}
        aria-hidden="true"
      />
      <img
        src={dividerImage}
        alt=""
        className={`h-8 md:h-12 ${position === "bottom" ? "rotate-180" : "scale-x-[-1]"}`}
        aria-hidden="true"
      />
    </div>
  );
};

export default SectionDivider;
