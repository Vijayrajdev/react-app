import Two from "./Two";

const One = ({data}) => {
  return (
    <div>
      <h1>I'm Component One</h1>
      <Two data={data} />
    </div>
  );
};

export default One;
