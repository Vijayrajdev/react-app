import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Additem = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    const action = {
      type: "ADD_ITEM",
      payload: {
        text: todo,
        id: uuidv4(),
      },
    };
    dispatch(action);
    
  };
  return (
    <div>
      <h1>Redux TODO</h1>
      <input
        type="text"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default Additem;
