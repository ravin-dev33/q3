import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HighlightCard({ icon, iconPosition, title, description, gradient, to }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    if (to) {
      window.location.href = to;
    }
  };

  return (
    <motion.div
      className="relative perspective-1000 group cursor-pointer"
      style={{
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`relative h-64 rounded-2xl p-8 shadow-xl transition-all duration-300 ${gradient} overflow-hidden`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: 'translateZ(20px)',
          }}
        />

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div
            className="w-20 h-20 mb-4 transform transition-transform duration-300 group-hover:scale-110"
            style={{
              transform: `translateZ(50px)`,
              backgroundImage: `url(${icon})`,
              backgroundSize: '400% 200%',
              backgroundPosition: iconPosition,
              backgroundRepeat: 'no-repeat',
              filter: 'drop-shadow(0 20px 25px rgb(0 0 0 / 0.5))',
            }}
          />

          <div
            style={{
              transform: 'translateZ(30px)',
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
              {title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed drop-shadow">
              {description}
            </p>
          </div>
        </div>

        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </motion.div>
    </motion.div>
  );
}
