# React 常用指令

## 安裝 React 與 TypeScript
npm install react react-dom
npm install --save-dev @types/react @types/react-dom

## JSX 設定（tsconfig.json）
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}

## React 18 建立 root
import { createRoot } from 'react-dom/client';
