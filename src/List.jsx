const List = ({ data }) => {
  console.log("List render");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((d) => (
        <div>{d.name}</div>
      ))}
    </div>
  );
};

export default List;
