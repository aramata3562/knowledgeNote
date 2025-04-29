import { useParams } from "react-router-dom";

export function ListPage() {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category} のリスト</h1>
      <ul className="space-y-2">
        <li className="p-2 bg-grayScale-3 dark:bg-grayScale-2 rounded">
          項目A
        </li>
        <li className="p-2 bg-grayScale-3 dark:bg-grayScale-2 rounded">
          項目B
        </li>
        <li className="p-2 bg-grayScale-3 dark:bg-grayScale-2 rounded">
          項目C
        </li>
      </ul>
    </div>
  );
}
