import { useEffect, useState } from "react";

type MdTextAreaProps = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  format?: string; // markdownテンプレート（初期値として利用）
  rows?: number; // テキストエリアの行数（高さ）を制御可能
};

export function MdTextArea({
  label,
  value,
  onChange,
  placeholder = "",
  format,
  rows = 8, // ✅ デフォルトは8行
}: MdTextAreaProps) {
  const [internalValue, setInternalValue] = useState(value ?? format ?? "");

  useEffect(() => {
    if (!value && format) {
      setInternalValue(format);
      onChange(format);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [format]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-1">
      <label className="font-semibold">{label}</label>
      <textarea
        className="w-full p-2 border rounded bg-grayScale-0 dark:bg-grayScale-2 text-grayScale-12"
        rows={rows}
        placeholder={placeholder}
        value={internalValue}
        onChange={handleChange}
      />
    </div>
  );
}
