import Link from 'next/link';
import { FaMusic, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaMusic className="text-[var(--primary-color)] text-2xl" />
              <span className="font-bold text-xl">AI音乐生成器</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              使用AI技术创建专属于你的歌曲。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[var(--primary-color)]">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">首页</Link></li>
              <li><Link href="/create" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">创建</Link></li>
              <li><Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">价格</Link></li>
              <li><Link href="/my-songs" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">我的歌曲</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">资源</h3>
            <ul className="space-y-2">
              <li><Link href="/tutorials" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">教程</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">博客</Link></li>
              <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">常见问题</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">邮箱: contact@aimusicgen.com</li>
              <li><Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">隐私政策</Link></li>
              <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary-color)]">服务条款</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI音乐生成器. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 