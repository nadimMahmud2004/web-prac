import { useState } from "react";
import Posts from "./components/Posts";

const App = () => {
  const [showPosts, setShowPosts] = useState(true);

  const handleToggle = () => {
    setShowPosts(!showPosts);
  };

  return (
    <div className="w-screen h-full p-10 bg-gray-100 text-gray-900">
      <h1 className="text-center text-2xl">Understanding query !</h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <button
          className="bg-blue-500 text-white rounded py-2 px-3"
          onClick={handleToggle}
        >
          Toggle Post
        </button>
      </div>
      <div className="max-w-md mx-auto mt-10 space-y-10">
        {showPosts && <Posts />}
      </div>
    </div>
  );
};

export default App;
