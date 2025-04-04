import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCheck } from 'react-icons/fa';

const pricingPlans = [
  {
    name: '免费',
    price: '0',
    description: '适合初次尝试AI音乐创作的用户',
    features: [
      '每天3次免费生成',
      '基础音乐风格选择',
      '下载MP3音频',
      '支持自定义歌词',
      '社区分享功能'
    ],
    buttonText: '免费开始',
    buttonLink: '/create',
    featured: false
  },
  {
    name: '专业版',
    price: '49',
    period: '月',
    description: '适合内容创作者和音乐爱好者',
    features: [
      '无限次数生成',
      '所有音乐风格和声音',
      '高质量音频输出',
      '批量生成功能',
      '优先生成队列',
      '无水印下载',
      '高级编辑工具'
    ],
    buttonText: '升级至专业版',
    buttonLink: '/upgrade',
    featured: true
  },
  {
    name: '企业版',
    price: '199',
    period: '月',
    description: '适合专业音乐人和企业团队',
    features: [
      '所有专业版功能',
      '商业使用授权',
      '专属客户支持',
      '多用户账号',
      'API访问权限',
      '白标解决方案',
      '自定义功能开发'
    ],
    buttonText: '联系我们',
    buttonLink: '/contact',
    featured: false
  }
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      
      <div className="py-16 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">选择适合你的计划</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              无论你是初学者还是专业音乐人，我们都有适合你需求的计划。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`
                  rounded-xl overflow-hidden shadow-lg
                  ${plan.featured 
                    ? 'bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 transform scale-105 z-10 border border-[var(--primary-color)]' 
                    : 'bg-white dark:bg-gray-900'
                  }
                `}
              >
                {plan.featured && (
                  <div className="bg-[var(--primary-color)] text-white text-center py-2 text-sm font-medium">
                    推荐方案
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <div className="text-4xl font-bold">¥{plan.price}</div>
                    {plan.period && <div className="text-gray-500 dark:text-gray-400 ml-1">/{plan.period}</div>}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FaCheck className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={plan.buttonLink}
                    className={`
                      block text-center py-3 rounded-full transition-colors w-full
                      ${plan.featured
                        ? 'bg-[var(--primary-color)] text-white hover:opacity-90'
                        : 'bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">有疑问？</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">如果您有任何问题或需要特定功能，请随时联系我们</p>
            <a href="/contact" className="btn btn-primary">联系我们</a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 