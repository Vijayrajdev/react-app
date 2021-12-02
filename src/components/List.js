import { useSelector, useDispatch } from "react-redux";
import Additem from "./Additem";

const List = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    const action = {
      type: "DELETE_ITEM",
      payload: id,
    };
    dispatch(action);
    console.log(id);
  };

  const state = useSelector((state) => state);
  return (
    <div>
      <Additem />
      <ul>
        {state.map((items) => (
          <li key={items.id}>
            {items.text}&nbsp;&nbsp;
            <button onClick={() => handleDelete(items.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
