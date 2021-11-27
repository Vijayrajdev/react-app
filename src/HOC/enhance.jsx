const enhance = (Component) => {
  return () => (
    <div>
      <h3>Enhanced Component</h3>
      <Component />
    </div>
  );
};

export default enhance;
