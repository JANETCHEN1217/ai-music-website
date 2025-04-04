'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface FormData {
  description: string;
  style: string;
  lyrics: string;
  instrumental: boolean;
  isPublic: boolean;
}

interface GeneratedSong {
  success: boolean;
  songId: string;
  songUrl: string;
  title: string;
  message: string;
  generatedAt: string;
}

export default function CreatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    description: '',
    style: '',
    lyrics: '',
    instrumental: false,
    isPublic: false
  });
  const [generatedSong, setGeneratedSong] = useState<GeneratedSong | null>(null);
  const [error, setError] = useState('');
  const [mode, setMode] = useState('custom'); // custom or simple

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleToggleInstrumental = () => {
    setFormData({
      ...formData,
      instrumental: !formData.instrumental
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate-song', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || '生成歌曲时出错');
      }
      
      setGeneratedSong(data);
    } catch (error: any) {
      console.error('提交表单时出错:', error);
      setError(error.message || '提交表单时出错');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <Navbar />
      
      <div className="py-16 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">创建你的AI音乐</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              选择模式，描述你想要的音乐，让AI为你创作。
            </p>
          </div>
          
          {generatedSong ? (
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-5xl mb-6 text-[var(--primary-color)]">🎵</div>
                <h2 className="text-2xl font-bold mb-4">{generatedSong.title}</h2>
                <p className="text-green-500 mb-6">{generatedSong.message}</p>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-8">
                  <audio controls className="w-full mb-4">
                    <source src={generatedSong.songUrl} type="audio/mpeg" />
                    你的浏览器不支持音频播放元素。
                  </audio>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                      href={generatedSong.songUrl} 
                      download
                      className="btn btn-primary"
                    >
                      下载歌曲
                    </a>
                    <button 
                      onClick={() => setGeneratedSong(null)}
                      className="btn btn-secondary"
                    >
                      创建新歌曲
                    </button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500">
                  生成于 {new Date(generatedSong.generatedAt).toLocaleString()}
                </p>
              </motion.div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                  <button 
                    type="button"
                    className={`py-3 px-6 font-medium ${mode === 'custom' ? 'border-b-2 border-[var(--primary-color)] text-[var(--primary-color)]' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setMode('custom')}
                  >
                    自定义模式
                  </button>
                  <button 
                    type="button"
                    className={`py-3 px-6 font-medium ${mode === 'simple' ? 'border-b-2 border-[var(--primary-color)] text-[var(--primary-color)]' : 'text-gray-500 dark:text-gray-400'}`}
                    onClick={() => setMode('simple')}
                  >
                    简单模式
                  </button>
                </div>
              </div>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-lg">
                  {error}
                </div>
              )}
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-medium">器乐模式</label>
                  <div 
                    className={`relative inline-block w-12 h-6 rounded-full ${formData.instrumental ? 'bg-[var(--primary-color)]' : 'bg-gray-200 dark:bg-gray-700'} cursor-pointer`}
                    onClick={handleToggleInstrumental}
                  >
                    <div className={`absolute w-4 h-4 rounded-full bg-white transition-transform ${formData.instrumental ? 'translate-x-6' : 'left-1'} top-1`}></div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">启用后，将创建没有人声的器乐音乐</span>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-lg font-medium mb-2">
                    歌曲描述 ({formData.description.length}/30)
                  </label>
                  <input
                    type="text"
                    id="description"
                    placeholder="例如：摇滚风格的快乐歌曲"
                    maxLength={30}
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    required
                  />
                </div>
                
                {mode === 'custom' && (
                  <>
                    <div>
                      <label htmlFor="style" className="block text-lg font-medium mb-2">
                        风格和流派列表 ({formData.style.length}/120)
                      </label>
                      <input
                        type="text"
                        id="style"
                        placeholder="例如：流行, 爵士, 浪漫"
                        maxLength={120}
                        value={formData.style}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                      />
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="tabs-container">
                          <button type="button" className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                            #流派
                          </button>
                          <button type="button" className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                            #心情
                          </button>
                          <button type="button" className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                            #声音
                          </button>
                          <button type="button" className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                            #节奏
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="lyrics" className="block text-lg font-medium mb-2">
                        歌词 ({formData.lyrics.length}/2000)
                      </label>
                      <textarea
                        id="lyrics"
                        rows={6}
                        placeholder="在这里输入你的歌词..."
                        maxLength={2000}
                        value={formData.lyrics}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                      ></textarea>
                    </div>
                  </>
                )}
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isPublic"
                    checked={formData.isPublic}
                    onChange={handleInputChange}
                    className="w-5 h-5 rounded border-gray-300 dark:border-gray-700 text-[var(--primary-color)]"
                  />
                  <label htmlFor="isPublic" className="ml-2 text-gray-700 dark:text-gray-300">
                    公开显示
                  </label>
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    启用后，您的歌曲将对社区中的其他用户可见
                  </span>
                </div>
                
                <div className="text-center mt-8">
                  <button 
                    type="submit" 
                    className="btn btn-primary px-8 py-3 text-lg w-full md:w-auto" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        生成中...
                      </span>
                    ) : '用AI生成'}
                  </button>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    登录以领取您的免费每日积分！✨ ✨
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 