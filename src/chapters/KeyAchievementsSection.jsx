import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    icon: '/2.png',
    stat: '4,000+',
    label: 'Network endpoints Protected',
  },
  {
    icon: '/1.png',
    stat: '6 SAP',
    label: 'Strategic implementations',
    subtitle: 'Go Lives',
  },
  {
    icon: '/4.png',
    stat: '2 AI Marketing',
    label: 'campaigns launched',
  },
  {
    icon: '/5.png',
    stat: '11 RPA Bots',
    label: 'Live across business',
  },
  {
    icon: '/3.png',
    stat: '1,500+',
    label: 'Users trained',
  },
  {
    icon: '/2.png',
    stat: '22,000+',
    label: 'Assets protected',
  },
];

export default function KeyAchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsMouseInSection(true);
    const handleMouseLeave = () => setIsMouseInSection(false);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const calculateIconTransform = (index) => {
    if (!isMouseInSection) return { x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 };

    const cardRefs = document.querySelectorAll('.achievement-card');
    if (!cardRefs[index]) return { x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 };

    const cardRect = cardRefs[index].getBoundingClientRect();
    const sectionRect = sectionRef.current?.getBoundingClientRect();

    if (!sectionRect) return { x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 };

    const cardCenterX = cardRect.left - sectionRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top - sectionRect.top + cardRect.height / 2;

    const deltaX = mousePosition.x - cardCenterX;
    const deltaY = mousePosition.y - cardCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 400;
    const movementFactor = Math.min(distance / maxDistance, 1);

    const moveX = Math.cos(angle) * movementFactor * 20;
    const moveY = Math.sin(angle) * movementFactor * 20;

    const rotateY = (deltaX / cardRect.width) * 25;
    const rotateX = -(deltaY / cardRect.height) * 25;

    const scale = 1 + movementFactor * 0.1;

    return { x: moveX, y: moveY, rotateX, rotateY, scale };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
      style={{ perspective: '2000px' }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-8">
            KEY ACHIEVEMENTS
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-6 border border-red-100 shadow-sm"
          >
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-6 h-6 text-red-600" />
              <p className="text-lg font-semibold text-gray-800">
                Nigeria's First Brand driven AI podcast
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {achievements.map((achievement, index) => {
            const transform = calculateIconTransform(index);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="achievement-card relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  animate={
                    isMouseInSection
                      ? {
                          rotateX: transform.rotateX * 0.3,
                          rotateY: transform.rotateY * 0.3,
                          z: transform.scale * 20,
                        }
                      : { rotateX: 0, rotateY: 0, z: 0 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 0.8,
                  }}
                  className="bg-white rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.div
                    animate={
                      isMouseInSection
                        ? {
                            x: transform.x,
                            y: transform.y,
                            scale: transform.scale,
                            rotateY: transform.rotateY,
                            rotateX: transform.rotateX,
                            z: 50,
                          }
                        : { x: 0, y: 0, scale: 1, rotateY: 0, rotateX: 0, z: 0 }
                    }
                    transition={{
                      type: 'spring',
                      stiffness: 120,
                      damping: 15,
                      mass: 0.5,
                    }}
                    className="mb-6 relative z-10"
                    style={{
                      transformStyle: 'preserve-3d',
                      filter: isMouseInSection
                        ? `drop-shadow(0 ${transform.y * 0.5}px ${transform.scale * 20}px rgba(239, 68, 68, 0.3))`
                        : 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                    }}
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 relative">
                      <motion.div
                        animate={
                          isMouseInSection
                            ? {
                                rotateZ: transform.rotateY * 0.2,
                              }
                            : { rotateZ: 0 }
                        }
                        transition={{
                          type: 'spring',
                          stiffness: 100,
                          damping: 12,
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-red-100 to-pink-100 opacity-30 blur-xl"
                        style={{ transform: 'translateZ(-20px)' }}
                      />
                      <img
                        src={achievement.icon}
                        alt={achievement.label}
                        className="w-full h-full object-contain relative z-10"
                        style={{
                          transform: 'translateZ(30px)',
                          transformStyle: 'preserve-3d',
                        }}
                      />
                    </div>
                  </motion.div>

                  <div
                    className="space-y-2"
                    style={{
                      transform: 'translateZ(20px)',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                      {achievement.stat}
                      {achievement.subtitle && (
                        <span className="block text-xl font-bold text-gray-700 mt-1">
                          {achievement.subtitle}
                        </span>
                      )}
                    </h3>
                    <p className="text-base text-gray-600 font-medium">
                      {achievement.label}
                    </p>
                  </div>

                  <motion.div
                    animate={
                      isMouseInSection
                        ? {
                            opacity: 0.1,
                            scale: 1.2,
                          }
                        : { opacity: 0, scale: 1 }
                    }
                    className="absolute inset-0 bg-gradient-to-br from-red-500 via-pink-500 to-transparent rounded-2xl"
                    style={{ transform: 'translateZ(-10px)' }}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-transparent group-hover:from-red-500/5 transition-all duration-500 rounded-2xl"
                    style={{ transform: 'translateZ(5px)' }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute top-10 left-10 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/10 rounded-full blur-3xl" />
    </section>
  );
}
