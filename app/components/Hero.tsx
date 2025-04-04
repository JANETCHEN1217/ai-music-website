'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              专业级 <span className="text-[var(--primary-color)]">AI音乐生成器</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              使用AI技术轻松创建高质量音乐。只需描述你想要的风格，让AI为你打造专属曲目。
            </p>
            <div className="space-x-4">
              <Link href="/create" className="btn btn-primary px-8 py-3">
                立即创建
              </Link>
              <Link href="/tutorials" className="btn btn-secondary px-8 py-3">
                了解更多
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg mb-6">
                {/* 这里可以放一个音乐播放器或者音频可视化组件 */}
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl text-gray-400 dark:text-gray-500">🎵</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 mb-4">由全球25,000+音乐人、内容创作者和音乐爱好者信赖</p>
                <div className="flex justify-center space-x-6">
                  {['John Doe', 'Robert Johnson', 'Jane Smith', 'Emily Davis', 'Tyler Durden'].map((name, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 
