import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    icon: '/1.png',
    title: 'Innovation Launch',
    description: 'Revolutionary digital solutions deployed across all departments',
    stat: '50+',
    statLabel: 'Projects',
  },
  {
    icon: '/2.png',
    title: 'Security & Compliance',
    description: 'Industry-leading certifications and zero-trust architecture',
    stat: '100%',
    statLabel: 'Secure',
  },
  {
    icon: '/3.png',
    title: 'Team Collaboration',
    description: 'Cross-functional teams driving digital transformation',
    stat: '500+',
    statLabel: 'Members',
  },
  {
    icon: '/4.png',
    title: 'Marketing Excellence',
    description: 'AI-powered campaigns reaching millions of customers',
    stat: '10M+',
    statLabel: 'Reach',
  },
  {
    icon: '/5.png',
    title: 'RPA Automation',
    description: 'Intelligent automation reducing manual tasks by 70%',
    stat: '70%',
    statLabel: 'Efficiency',
  },
];

export default function KeyAchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-red-900/10 to-gray-900" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-bold text-sm tracking-wider">
              Q3 2025 MILESTONES
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              KEY ACHIEVEMENTS
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming business operations through innovation, security, and collaboration
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="glass-card-premium p-6 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 mb-6 relative z-10"
                >
                  <img
                    src={achievement.icon}
                    alt={achievement.title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                  className="mb-4"
                >
                  <div className="text-4xl font-black text-red-400 mb-1">
                    {achievement.stat}
                  </div>
                  <div className="text-xs text-gray-400 font-semibold tracking-wider">
                    {achievement.statLabel}
                  </div>
                </motion.div>

                <h3 className="text-lg font-bold text-white mb-3 relative z-10">
                  {achievement.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed relative z-10">
                  {achievement.description}
                </p>

                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card-premium inline-block px-8 py-4 rounded-full">
            <p className="text-gray-300 font-semibold">
              Driving excellence through digital transformation
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
