import { Button } from "./Button"; // さっき作ったButtonを使う
type MenuItemProps = {
  title: string; // カテゴリ名
  onClickView: () => void; // ビューボタン押したときのアクション
  onClickAdd: () => void; // 追加ボタン押したときのアクション
};

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  onClickView,
  onClickAdd,
}) => {
  return (
    <div className="p-4 bg-grayScale-2 dark:bg-grayScale-1 rounded shadow-card flex flex-col items-center space-y-4">
      <h2 className="text-heading">{title}</h2>
      <div className="flex space-x-4">
        <Button variant="secondary" onClick={onClickView}>
          リストを見る
        </Button>
        <Button variant="primary" onClick={onClickAdd}>
          追加する
        </Button>
      </div>
    </div>
  );
};
