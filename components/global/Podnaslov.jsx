import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Podnaslov = ({ tekst, trajanje, klase }) => {
  return (
    <TextGenerateEffect words={tekst} textSize={klase} duration={trajanje} />
  );
};

export default Podnaslov;
