'use client';

import React, { useState } from 'react';
// 其余代码保持不变...
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: '什么是AI歌曲生成器？',
    answer: 'AI歌曲生成器是一种免费的在线工具，它使用人工智能根据您的输入创建自定义歌曲。无论您需要快速曲调还是想创建详细的作品，我们的AI歌曲制作器都能提供帮助。'
  },
  {
    question: 'AI歌曲创作器是如何工作的？',
    answer: '我们的工具使用先进的AI算法分析您的输入（描述或自定义规格）并生成与您要求相匹配的原创音乐。它结合旋律、和声和节奏来创建完整的歌曲。'
  },
  {
    question: '简单模式和自定义模式有什么区别？',
    answer: '简单模式允许您通过描述您想要的内容来生成歌曲，而自定义模式则让您指定歌词、音乐风格和标题，以便更详细地控制最终输出。'
  },
  {
    question: 'AI歌曲制作器真的免费吗？',
    answer: '是的！我们的AI歌曲制作器完全免费使用。您可以在没有任何费用或订阅要求的情况下使用AI创作歌曲。'
  },
  {
    question: '生成一首歌需要多长时间？',
    answer: '大多数歌曲会在几分钟内生成，虽然确切的时间可能会根据您的请求的复杂性和当前服务器负载而有所不同。'
  },
  {
    question: '我可以将生成的歌曲用于商业目的吗？',
    answer: '是的，用我们的AI歌曲生成器创建的所有歌曲都是免版税的，可以用于个人和商业目的。'
  }
];

interface FAQItemProps {
  faq: FAQ;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="border-b border-gray-200 dark:border-gray-700 py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{faq.question}</h3>
        <div className="text-[var(--primary-color)]">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 dark:text-gray-400 mt-4">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">关于AI歌曲生成器的常见问题</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            找到关于我们的AI音乐创作服务的常见问题的答案。
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/create" className="btn btn-primary px-8 py-3">
            免费生成AI歌曲
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 
