import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItem";
const App = () => {
  return (
    <>
      <h1>Understanding Redux</h1>
      <div>
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </>
  );
};

export default App;
