'use client';

const loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-orange-500' />
    </div>
  );
};

export default loading;
