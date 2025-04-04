import Link from 'next/link';
import { FaMusic, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FaMusic className="text-[var(--primary-color)] text-2xl" />
          <span className="font-bold text-xl">AI音乐生成器</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-[var(--primary-color)]">首页</Link>
          <Link href="/create" className="font-medium hover:text-[var(--primary-color)]">创建</Link>
          <Link href="/pricing" className="font-medium hover:text-[var(--primary-color)]">价格</Link>
          <Link href="/my-songs" className="font-medium hover:text-[var(--primary-color)]">我的歌曲</Link>
          <Link href="/tutorials" className="font-medium hover:text-[var(--primary-color)]">教程</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="btn btn-primary">登录</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 