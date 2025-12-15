import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect } from 'react';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    icon: '/6.png',
    stat: '4,000+',
    label: 'Network endpoints Protected',
  },
  {
    icon: '/1.png',
    stat: '6 SAP Go Lives',
    label: 'Strategic implementations',
    subtitle: '',
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
    if (!isMouseInSection) return { rotateX: 0, rotateY: 0 };

    const iconElement = document.querySelector(`.achievement-icon-${index}`);
    if (!iconElement) return { rotateX: 0, rotateY: 0 };

    const iconRect = iconElement.getBoundingClientRect();
    const sectionRect = sectionRef.current?.getBoundingClientRect();

    if (!sectionRect) return { rotateX: 0, rotateY: 0 };

    const iconCenterX = iconRect.left - sectionRect.left + iconRect.width / 2;
    const iconCenterY = iconRect.top - sectionRect.top + iconRect.height / 2;

    const deltaX = mousePosition.x - iconCenterX;
    const deltaY = mousePosition.y - iconCenterY;

    const rotateY = (deltaX / iconRect.width) * 15;
    const rotateX = -(deltaY / iconRect.height) * 15;

    return { rotateX, rotateY };
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
      style={{ perspective: '1000px' }}
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12"
        >
          {achievements.map((achievement, index) => {
            const transform = calculateIconTransform(index);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="achievement-card flex flex-col items-center text-center"
              >
                <motion.div
                  className={`achievement-icon-${index} mb-6 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  animate={
                    isMouseInSection
                      ? {
                          rotateX: transform.rotateX,
                          rotateY: transform.rotateY,
                        }
                      : { rotateX: 0, rotateY: 0 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    mass: 0.5,
                  }}
                >
                  <img
                    src={achievement.icon}
                    alt={achievement.label}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'drop-shadow(0 10px 20px rgba(239, 68, 68, 0.15))',
                    }}
                  />
                </motion.div>

                <div className="space-y-2">
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
