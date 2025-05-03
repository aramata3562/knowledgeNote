import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "../components/MenuItem";

type MenuEntry = {
  key: string; // 表示名
  label: string; // 内部名
};

export function MenuPage() {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState<MenuEntry[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_GAS_API_URL + "?action=getMenuItems")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("メニュー取得失敗:", err));
  }, []);

  return (
    <div className="flex flex-col space-y-4 p-4">
      {menuItems.map(({ key, label }) => (
        <MenuItem
          key={label}
          title={key}
          onClickView={() => navigate(`/list/${key}`)}
          onClickAdd={() => navigate(`/add/${key}`)}
        />
      ))}
    </div>
  );
}
