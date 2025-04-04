'use client';

import { FaMusic, FaLanguage, FaPen, FaGuitar, FaHeadphones, FaFreeCodeCamp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaMusic size={24} />,
    title: '两种灵活创作模式',
    description: '选择简单模式快速生成或自定义模式获得详细控制。'
  },
  {
    icon: <FaLanguage size={24} />,
    title: '自然语言输入',
    description: '只需用普通话描述你想要的歌曲，我们的AI就会将你的愿景变为现实。'
  },
  {
    icon: <FaPen size={24} />,
    title: '自定义歌词支持',
    description: '在自定义模式中输入你自己的歌词，创作讲述你独特故事的歌曲。'
  },
  {
    icon: <FaGuitar size={24} />,
    title: '多种音乐风格',
    description: '生成各种类型和风格的歌曲，以匹配你的创意愿景。'
  },
  {
    icon: <FaHeadphones size={24} />,
    title: '高品质输出',
    description: '使用我们先进的AI技术和音乐生成算法创建专业级歌曲。'
  },
  {
    icon: <FaFreeCodeCamp size={24} />,
    title: '免费使用',
    description: '无需任何费用或订阅即可创建AI生成的歌曲。'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI歌曲制作：你的个人音乐创作工作室</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            体验人工智能在音乐创作中的力量，通过我们直观的AI歌曲制作器。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-[var(--primary-color)] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 
