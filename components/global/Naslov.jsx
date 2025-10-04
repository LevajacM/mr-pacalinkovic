import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Naslov = ({ tekst, trajanje, klase, textColor }) => {
  return (
    <div className='container mx-auto items-center justify-center flex px-4 py-2'>
      <div className='text-center rounded-xl pb-3 capitalize bg-gradient-to-br from-orange-600 to-accent  w-full opacity-80'>
        <TextGenerateEffect
          words={tekst}
          textSize={klase}
          duration={trajanje}
          textColor={textColor}
        />
      </div>
    </div>
  );
};

export default Naslov;
