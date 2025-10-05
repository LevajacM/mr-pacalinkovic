'use client';

const CallBtn = () => {
  return (
    <button
      onClick={() => (window.location.href = 'tel:+381645574037')}
      className='bg-background text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg'
    >
      Pozovi: 064 / 557 4037
    </button>
  );
};

export default CallBtn;
