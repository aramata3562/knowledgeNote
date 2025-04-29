/** @type {import('tailwindcss').Config} */
export const blue = {
  1: "#07121b",
  2: "#0c1b25",
  3: "#072940",
  4: "#013656",
  5: "#064468",
  6: "#11537c",
  7: "#1b6594",
  8: "#207ab2",
  9: "#82cfff",
  10: "#7dc4f9",
  11: "#7bc2f7",
  12: "#caedff",
  contrast: "#0e2433",
  surface: "#08253980",
  indicator: "#82cfff",
  track: "#82cfff",
};

export const grayScale = {
  1: "#111113",
  2: "#19191b",
  3: "#222325",
  4: "#292a2e",
  5: "#303136",
  6: "#393a40",
  7: "#46484f",
  8: "#5f606a",
  9: "#6c6e79",
  10: "#797b86",
  11: "#b2b3bd",
  12: "#eeeef0",
  contrast: "#FFFFFF",
  surface: "rgba(0, 0, 0, 0.05)",
  indicator: "#6c6e79",
  track: "#6c6e79",
};

export const background = {
  light: "#F8FAFC",
  dark: "#111111",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        grayScale,
        blue,
        background,
        primary: {
          DEFAULT: blue[7], // メインカラー（ブルーの明るめ）
          hover: blue[8], // ホバー時ブルー
          active: blue[7], // 押し込んだ時ブルー
          disabled: blue[4], // 無効時はブルーかなり暗め
          light: blue[12], // 明るい背景用ブルー
          dark: blue[3], // ダークモードブルー
        },
        secondary: {
          DEFAULT: grayScale[8], // 標準グレー
          hover: grayScale[7], // 少し濃いグレー
          disabled: grayScale[6], // 無効グレー
        },
        card: {
          DEFAULT: grayScale[2], // カード通常（暗め）
          hover: grayScale[3], // カードホバー時
          dark: grayScale[1], // ダークモード時
        },
        accent: {
          DEFAULT: "#10B981", // ワンポイントアクセント（緑系）
        },
      },
      borderRadius: {
        DEFAULT: "0.5rem",
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
        DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
        none: "none",
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)", // shadow-sm
        md: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
        lg: "0 10px 15px rgba(0, 0, 0, 0.15)", // shadow-lg
        xl: "0 20px 25px rgba(0, 0, 0, 0.2)", // shadow-xl
        "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)", // shadow-2xl
        "3xl": "0 50px 75px rgba(0, 0, 0, 0.3)", // shadow-3xl
      },
    },
  },
  plugins: [],
};
