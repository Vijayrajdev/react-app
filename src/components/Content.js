import { useState } from "react";

const Content = () => {
  const [Items, setItems] = useState([]);
  const [Value, setValue] = useState("");

  const handleSubmit = () => {
    setItems((prev) => [...prev, Value]);
    setValue(" ");
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (e) => {
    setItems((prev) => prev.filter((i) => i !== e));
  };

  return (
    <div>
      <input value={Value} onChange={handleValue} type="text"></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <ul>
        {Items.map((item) => (
          <li>
            {item} <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
