import { useState, useEffect } from "react";

const Content = () => {
  const [Counter, setCounter] = useState(0);
  const [Content, setContent] = useState([]);

  const ApiCall = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setContent(data);
  };

  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <div>
      <h1>{Counter}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus quas
        unde corrupti fuga. Temporibus rerum quis nobis dicta assumenda
        necessitatibus aut! Accusamus quibusdam accusantium nisi repellendus
        nulla, autem nemo impedit.
      </p>
      <button type="submit" onClick={() => setCounter((prev) => prev + 1)}>
        Click
      </button>
      <ul>
        {Content.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
