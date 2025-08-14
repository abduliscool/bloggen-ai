'use client';

export default function FloatingShapes() {
  return (
    <>
      <div className="absolute top-10 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-64 right-32 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-green-400 rounded-full opacity-15 animate-float animation-delay-4000"></div>
    </>
  );
}
