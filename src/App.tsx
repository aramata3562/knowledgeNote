import "./App.css";
import { Button } from "./components/Button";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Hello knowledgeNote ✨
        </h1>
        <Button variant="primary">Primary</Button>
      </div>
    </>
  );
}

export default App;
