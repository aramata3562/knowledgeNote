import { useParams } from "react-router-dom";
import { AddPage as AddWordPage } from "../AddPage";
import { AddArticlePage } from "../add/AddArticle";
import { AddMathPage } from "../add/AddMath";

export default function AddRouter() {
  const { category } = useParams<{ category: string }>();

  switch (category) {
    case "記事":
      return <AddArticlePage />;
    case "数学ノート":
      return <AddMathPage />;
    case "英単語":
    default:
      return <AddWordPage />;
  }
}
