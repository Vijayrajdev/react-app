import { useState } from "react";
import { useDispatch } from "react-redux";

const Two = () => {
  const [product, setProduct] = useState("");
  const Dispatch = useDispatch();

  const handleSubmit = () => {
    const action = {
      type: "ADD_PRODUCT",
      payload: product,
    };

    Dispatch(action);
    console.log(product);
  };

  return (
    <div>
      <input onChange={(e) => setProduct(e.target.value)} type="text" />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Two;
