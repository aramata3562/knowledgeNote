/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // 通常
          hover: "#2563EB", // ホバー
          active: "#1D4ED8", // アクティブ
          disabled: "#93C5FD", // ディスエイブル
          light: "#DBEAFE", // 明るい背景用
          dark: "#1E40AF", // ダークモード用
        },
        secondary: {
          DEFAULT: "#64748B",
          hover: "#475569",
          disabled: "#CBD5E1",
        },
        background: {
          DEFAULT: "#F8FAFC",
        },
        accent: {
          DEFAULT: "#10B981",
        },
      },
    },
    borderRadius: {
      DEFAULT: "0.5rem", // ここがポイント！
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
    },
    boxShadow: {
      DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md相当
      none: "none",
      sm: "0 1px 2px rgba(0, 0, 0, 0.05)", // shadow-sm相当
      md: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md相当
      lg: "0 10px 15px rgba(0, 0, 0, 0.15)", // shadow-lg相当
      xl: "0 20px 25px rgba(0, 0, 0, 0.2)", // shadow-xl相当
      "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)", // shadow-2xl相当
      "3xl": "0 50px 75px rgba(0, 0, 0, 0.3)", // shadow-3xl相当
    },
  },
  plugins: [],
};
