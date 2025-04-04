import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 音乐生成器 | 创建专属于你的AI歌曲",
  description: "使用AI技术创建专属于你的歌曲。无需音乐知识，只需描述你想要的风格。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
