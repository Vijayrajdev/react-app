import { useState } from "react";

const Content = () => {
  const [Items, setItems] = useState([]);
  const [Value, setValue] = useState("");

  const handleSubmit = () => {
    setItems((prev) => [...prev, Value]);
  };

  const handleValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input onChange={handleValue} type="text"></input>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <ul>
        {Items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
