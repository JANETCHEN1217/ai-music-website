import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: '简单模式对于快速创作歌曲很完美。我在几分钟内为女儿制作了一首美丽的生日歌曲！',
    name: '约翰·戴维森',
    title: '业余音乐家'
  },
  {
    content: '作为内容创作者，这款AI歌曲制作器彻底改变了我为视频创建背景音乐的方式。',
    name: '艾米丽·罗伯茨',
    title: 'YouTube创作者'
  },
  {
    content: '自定义模式让我完全控制我的歌曲。就像在我的指尖拥有一个专业工作室。',
    name: '马克·汤普森',
    title: '独立艺术家'
  },
  {
    content: '我喜欢用AI创作歌曲的简单方式。自然语言输入使每个人都能使用它。',
    name: '索菲亚·罗德里格斯',
    title: '音乐教师'
  },
  {
    content: '这个免费的AI歌曲生成器帮助我为我的播客创建原创音乐，而不会破费。',
    name: '克里斯·安德森',
    title: '播客主持人'
  },
  {
    content: '可用的音乐风格种类令人印象深刻。我可以创作任何我想象的歌曲类型。',
    name: '琳达·陈',
    title: '数字内容创作者'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">用户对AI歌曲制作器的评价</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            听听那些使用我们的AI歌曲制作器将他们的音乐想法变为现实的创作者的声音。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl text-[var(--primary-color)] mb-4">"</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 mr-4"></div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
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

export default Testimonials; 