import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Naslov = ({ tekst, trajanje, klase, textColor }) => {
  return (
    <div className='text-center pb-4 pt-20 capitalize '>
      <TextGenerateEffect
        words={tekst}
        textSize={klase}
        duration={trajanje}
        textColor={textColor}
      />
    </div>
  );
};

export default Naslov;
