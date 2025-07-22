# Vite 快速起手

## 建立 Vite + React + TS 專案
npm create vite@latest my-app --template react-ts

## 安裝 Tailwind（含 PostCSS）
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## Vite 支援 JSX 模式（tsconfig.json）
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
