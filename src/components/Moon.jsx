import moonImg from './whatsapp-moon.jpeg'

export default function Moon({ isAbsolute = false }) {
  return (
    <div className={`${isAbsolute ? 'absolute' : 'fixed'} inset-y-0 right-0 w-full h-full overflow-hidden pointer-events-none select-none z-0`}>
      
      {/* 1. Outer Soft Lunar Atmospheric Glow (Pure Silver/White) */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -right-[260px] sm:-right-[330px] md:-right-[400px] lg:-right-[480px] xl:-right-[540px] w-[650px] h-[650px] sm:w-[800px] sm:h-[800px] md:w-[950px] md:h-[950px] lg:w-[1100px] lg:h-[1100px] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none" 
      />

      {/* 2. Secondary Crisp Space Corona (Cool Silver) */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 -right-[250px] sm:-right-[320px] md:-right-[390px] lg:-right-[470px] xl:-right-[530px] w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] md:w-[900px] md:h-[900px] lg:w-[1050px] lg:h-[1050px] rounded-full bg-slate-200/[0.02] blur-[80px] pointer-events-none" 
      />

      {/* 3. Main Moon Sphere Container (Vertically centered on the right side, matching Ferrari wheel layout) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -right-[260px] sm:-right-[330px] md:-right-[400px] lg:-right-[480px] xl:-right-[540px] w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] md:w-[900px] md:h-[900px] lg:w-[1000px] lg:h-[1000px] xl:w-[1080px] xl:h-[1080px]"
      >
        {/* A. Ultra-Realistic 4K Moon Texture Image (Bright, vivid, and clearly visible) */}
        <div
          style={{
            backgroundImage: `url(${moonImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.25) brightness(0.6)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 56%, transparent 65%)',
            maskImage: 'radial-gradient(circle at center, black 56%, transparent 65%)',
          }}
          className="absolute inset-0 w-full h-full scale-110"
        />

        {/* B. 3D Spherical Shadow / Terminator Line (Shades dark side seamlessly into pitch black space) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 28% 28%, transparent 0%, rgba(0,0,0,0.2) 38%, rgba(0,0,0,0.75) 68%, rgba(0,0,0,0.98) 88%, #000000 98%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 56%, transparent 65%)',
            maskImage: 'radial-gradient(circle at center, black 56%, transparent 65%)',
          }}
        />

        {/* C. Subtle Sunlit Rim Highlight */}
        <div
          className="absolute inset-0 w-full h-full mix-blend-screen pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 45%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 56%, transparent 65%)',
            maskImage: 'radial-gradient(circle at center, black 56%, transparent 65%)',
          }}
        />
      </div>
    </div>
  )
}
