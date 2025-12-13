import { motion } from 'framer-motion';
import HighlightCard from '../components/HighlightCard';

const highlights = [
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '0% 0%',
    title: 'SAP Excellence',
    description: 'Successful SAP S/4HANA implementation driving operational efficiency across the enterprise.',
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-700',
    to: '/sap',
  },
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '33.33% 0%',
    title: 'IT Security',
    description: 'Advanced cybersecurity posture with zero-trust architecture and comprehensive threat protection.',
    gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    to: '/it',
  },
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '66.66% 0%',
    title: 'Marketing Innovation',
    description: 'AI-powered campaigns and digital transformation delivering measurable brand impact.',
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-700',
    to: '/marketing',
  },
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '100% 0%',
    title: 'Manufacturing 4.0',
    description: 'Smart factory initiatives with real-time KPI dashboards and process automation.',
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-700',
    to: '/manufacturing',
  },
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '0% 100%',
    title: 'Finance Automation',
    description: 'Streamlined financial operations with automated bank integrations and expense management.',
    gradient: 'bg-gradient-to-br from-green-500 to-green-700',
    to: '/finance',
  },
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '33.33% 100%',
    title: 'Supply Chain',
    description: 'Digital logistics transformation with AI-powered safety systems and real-time tracking.',
    gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    to: '/logistics',
  },
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '66.66% 100%',
    title: 'Sales Excellence',
    description: 'Innovative digital sales workflows and automated customer engagement systems.',
    gradient: 'bg-gradient-to-br from-rose-500 to-rose-700',
    to: '/sales',
  },
  {
    icon: '/key_achievements_icons.png',
    iconPosition: '100% 100%',
    title: 'Team Growth',
    description: 'Professional certifications and continuous learning programs fostering excellence.',
    gradient: 'bg-gradient-to-br from-amber-500 to-amber-700',
    to: '/achievements',
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            2024 Key Highlights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our achievements across departments with interactive 3D cards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HighlightCard {...highlight} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
