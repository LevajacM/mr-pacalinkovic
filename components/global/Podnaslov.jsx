import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Podnaslov = ({ tekst, trajanje, klase, textColor }) => {
  return (
    <TextGenerateEffect
      words={tekst}
      textSize={klase}
      duration={trajanje}
      textColor={textColor}
    />
  );
};

export default Podnaslov;
