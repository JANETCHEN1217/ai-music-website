import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: '选择模式',
    description: '选择简单模式快速生成或自定义模式获得详细控制。'
  },
  {
    number: 2,
    title: '输入详情',
    description: '描述你想要的歌曲或在自定义模式中输入自定义歌词、风格偏好和标题。'
  },
  {
    number: 3,
    title: '生成歌曲',
    description: '点击生成并等待几分钟，我们的AI会为你创建自定义歌曲。'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">如何免费制作AI歌曲</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            使用我们的AI歌曲制作器创建自定义歌曲简单直接。
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* 连接线 */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-[calc(100%-120px)] bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
          
          {/* 步骤 */}
          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`md:w-1/2 text-center md:text-${index % 2 === 0 ? 'right' : 'left'} md:pr-${index % 2 === 0 ? '16' : '0'} md:pl-${index % 2 === 0 ? '0' : '16'} mb-8 md:mb-0 relative`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary-color)] text-white font-bold text-lg relative z-10">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mt-4 mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
                
                <div className={`md:w-1/2 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg order-${index % 2 === 0 ? 'last' : 'first'} md:order-${index % 2 === 0 ? 'last' : 'first'}`}>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-center h-full text-gray-400">
                      {/* 这里可以放实际截图 */}
                      <span className="text-4xl">📱</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Link href="/create" className="btn btn-primary px-8 py-3">
            免费生成AI歌曲
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 