'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaDownload, FaTrash, FaShare } from 'react-icons/fa';

interface Song {
  id: string;
  title: string;
  url: string;
  createdAt: string;
  duration: string;
  isPlaying?: boolean;
}

export default function MySongsPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // 模拟从API加载歌曲
    setTimeout(() => {
      // 模拟歌曲数据
      const mockSongs: Song[] = [
        {
          id: 'song_1',
          title: 'AI生成的流行歌曲',
          url: '/api/songs/demo-song.mp3',
          createdAt: '2023-04-01T10:23:45Z',
          duration: '3:45'
        },
        {
          id: 'song_2',
          title: '摇滚风格的快乐歌曲',
          url: '/api/songs/demo-song.mp3',
          createdAt: '2023-04-02T14:30:12Z',
          duration: '2:58'
        },
        {
          id: 'song_3',
          title: '浪漫爵士风格的夜曲',
          url: '/api/songs/demo-song.mp3',
          createdAt: '2023-04-03T20:15:33Z',
          duration: '4:12'
        }
      ];
      
      setSongs(mockSongs);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  const handlePlay = (id: string) => {
    setSongs(songs.map(song => 
      song.id === id 
        ? { ...song, isPlaying: !song.isPlaying } 
        : { ...song, isPlaying: false }
    ));
  };
  
  const handleDelete = (id: string) => {
    if (confirm('确定要删除这首歌曲吗？')) {
      setSongs(songs.filter(song => song.id !== id));
    }
  };

  return (
    <main>
      <Navbar />
      
      <div className="py-16 bg-gray-50 dark:bg-gray-800 min-h-screen">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">我的歌曲</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              管理你用AI生成的所有歌曲。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
              </div>
            ) : songs.length > 0 ? (
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          歌曲
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          创建时间
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          时长
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {songs.map((song, index) => (
                        <motion.tr 
                          key={song.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <button 
                                onClick={() => handlePlay(song.id)}
                                className="mr-3 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--primary-color)] text-white"
                              >
                                {song.isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
                              </button>
                              <div>
                                <div className="text-sm font-medium">{song.title}</div>
                                {song.isPlaying && (
                                  <div className="mt-1">
                                    <audio 
                                      controls 
                                      autoPlay
                                      className="w-full h-8"
                                      onEnded={() => handlePlay(song.id)}
                                    >
                                      <source src={song.url} type="audio/mpeg" />
                                    </audio>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {new Date(song.createdAt).toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {song.duration}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <a
                                href={song.url}
                                download
                                className="text-gray-500 hover:text-[var(--primary-color)]"
                                title="下载"
                              >
                                <FaDownload />
                              </a>
                              <button
                                onClick={() => handleDelete(song.id)}
                                className="text-gray-500 hover:text-red-500"
                                title="删除"
                              >
                                <FaTrash />
                              </button>
                              <button
                                className="text-gray-500 hover:text-[var(--primary-color)]"
                                title="分享"
                              >
                                <FaShare />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-12 text-center">
                <div className="text-5xl mb-6 text-gray-300 dark:text-gray-700">🎵</div>
                <h3 className="text-xl font-bold mb-2">还没有歌曲</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  你还没有创建任何AI生成的歌曲。立即开始创建你的第一首歌曲！
                </p>
                <a href="/create" className="btn btn-primary">
                  创建歌曲
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 