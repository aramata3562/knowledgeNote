import { useNavigate } from "react-router-dom";
import { MenuItem } from "../components/MenuItem";

export function MenuPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-4 p-4">
      <MenuItem
        title="英単語"
        onClickView={() => navigate("/list/英単語")}
        onClickAdd={() => navigate("/add/英単語")}
      />
      <MenuItem
        title="数学用語"
        onClickView={() => navigate("/list/数学用語")}
        onClickAdd={() => navigate("/add/数学用語")}
      />
      <MenuItem
        title="記事ストック"
        onClickView={() => navigate("/list/記事ストック")}
        onClickAdd={() => navigate("/add/記事ストック")}
      />
    </div>
  );
}
