const App = () => {
  const chores = ["item1", "item2", "item3"];
  return (
    <div>
      <p>Vijay</p>
      <ul>
        {chores.map((chore) => (
          <li>{chore}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
