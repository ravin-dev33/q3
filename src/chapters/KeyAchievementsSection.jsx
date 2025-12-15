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

function AchievementCard({ achievement, index, mousePosition, isMouseInSection, sectionRef }) {
  const iconRef = useRef(null);
  const [transform, setTransform] = useState('perspective(100px) rotateY(0deg) rotateX(0deg)');

  useEffect(() => {
    if (!isMouseInSection || !iconRef.current) {
      setTransform('perspective(100px) rotateY(0deg) rotateX(0deg)');
      return;
    }

    const iconRect = iconRef.current.getBoundingClientRect();
    const sectionRect = sectionRef.current?.getBoundingClientRect();

    if (!sectionRect) {
      setTransform('perspective(100px) rotateY(0deg) rotateX(0deg)');
      return;
    }

    const iconCenterX = iconRect.left - sectionRect.left + iconRect.width / 2;
    const iconCenterY = iconRect.top - sectionRect.top + iconRect.height / 2;

    const deltaX = mousePosition.x - iconCenterX;
    const deltaY = mousePosition.y - iconCenterY;

    const rotateY = (deltaX / iconRect.width) * 5;
    const rotateX = -(deltaY / iconRect.height) * 5;

    setTransform(`perspective(100px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`);
  }, [mousePosition, isMouseInSection, sectionRef]);

  return (
    <motion.div
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      }}
      className="achievement-card flex flex-col items-center text-center"
    >
      <motion.div
        ref={iconRef}
        className="mb-6 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: transform,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
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
}

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"
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
          className="grid grid-cols-2 sm:grid-cols-2 gap-8 sm:gap-12"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
              mousePosition={mousePosition}
              isMouseInSection={isMouseInSection}
              sectionRef={sectionRef}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-10 left-10 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/10 rounded-full blur-3xl" />
    </section>
  );
}
