import React from "react";

const List = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.map((d) => (
        <div>{d.name}</div>
      ))}
    </div>
  );
};

export default List;
